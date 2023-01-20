$(function(){
    let $container=$('.gallery'), //갤러리 ul
        $loadMore=$('.load-more'), //더보기 버튼
        $added=0, //처음 보여지는 리스트 항목애서 더보기 누를떼마다 누적되는 갯수 0+8=8 8+8=16...
        $addItemCount=4, //4개씩 화면에 추가
        $allData=[]; //배열 json애서 파일을 불러와서 push를 통해 데이터 가져올 공간

    //$.getJSON('파일경로', function(i, data){});
    /* $.getJSON('./data/gallery.json',function(data){
        initGallery(data){
        
        }
    }); */
    $container.masonry({
        itemSelector: '.gallery-item',
        columnWidth: 270,
    });
    $.getJSON('./data/gallery.json', initGallery);

    function initGallery(data){
        $allData=data;
        //console.log($allData);

        $loadMore.click(function(){
            addItem();
        });
        addItem();
    };

    function addItem(){
        let element=[]; //8개씩 배열에 넣기 위해
        let slicedData;
        

        slicedData=$allData.slice($added, $added += $addItemCount);
        console.log(slicedData);

        $.each(slicedData, function(idx, item){
            let itemHTML=
                `<li class="gallery-item">
                    <a href="#">
                        <figure>
                            <img src="${item.images.thumb}" alt="${item.title}">
                            <figcaption>
                                ${item.title}
                            </figcaption>
                        </figure>
                    </a>
                </li>`

                element.push($(itemHTML).get(0));
        });
        $container.append(element);

        $container.imagesLoaded(function(){
            $container.masonry('appended',element)
        });
        if($added<$allData.length){
            $loadMore.show()
        }else{
            $loadMore.hide()
        };
    };
});