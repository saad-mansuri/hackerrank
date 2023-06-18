$(document).ready(function(){
    var productData = "productData";
    let allProducts = []
    let initProd = []
    init()
    function init(){
        let getallProducts = JSON.parse(localStorage.getItem('cyberC'))
        console.log(getallProducts);
    }
    $('#btnSave').on('click', AddProduct)
    function AddProduct(e){
        e.preventDefault()

        let getProdTitleVal = $('#prodTitle').val()
        let getprodPriceVal = $('#prodPrice').val()
        let getprodDescriptionVal = $('#prodDescription').val()
        let getprodCategoryVal = $('#prodCategory').val()
        let getprodImageVal = $('#prodIamge').val()

        // console.log(getProdTitleVal, getprodPriceVal, getprodDescriptionVal, getprodCategoryVal, getprodImageVal);

        let setAllProducts = {
            prodTitle : getProdTitleVal,
            prodPrice : getprodPriceVal,
            prodDescription : getprodDescriptionVal,
            prodCategory : getprodCategoryVal,
            prodImage : getprodImageVal,
        }

        allProducts.push(setAllProducts)
        getProductDataObj(JSON.stringify(allProducts))
        console.log(initProd);
        console.log(allProducts);
    }
})

function getProductDataObj(getData){
    console.log(getData);
    // localStorage.setItem('cyberC', getData)
}