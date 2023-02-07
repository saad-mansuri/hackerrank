$(document).ready(function(){
    let allProducts = []
    let initProd = []
    init()
    function init(){
        let getallProducts = JSON.parse(localStorage.getItem('cyberC'))
        initProd.push(getallProducts)
        console.log(getallProducts);
    }
    console.log(initProd);
    console.log(allProducts);
    $('#btnSave').on('click', AddProduct)

    // function formValidation(e){
    //     e.preventDefault()
    //     $('#prodForm').validate({
    //         rules : {
    //             prodTitle : "required",
    //             prodPrice : "required",
    //             productDescription : "required",
    //             productCategory : "required",
    //             prodImage : "required"
    //         },
    //         message: {
    //             prodTitle: "Please Enter Your First Name",
    //             prodPrice: "Please Enter Your Last Name",
    //             productDescription: "Please Enter Your Email",
    //             productCategory: "Please Enter Your Company",
    //             prodImage: "Please Enter Your Company",
    //         }
    //     })


    //     if($('#prodForm').valid()){
    //         AddProduct()
    //     }
    // }

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
        localStorage.setItem('cyberC', JSON.stringify(allProducts))
    }
})
