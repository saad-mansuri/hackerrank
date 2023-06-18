// let myArr = [ 5, 10, 15, 20, 10, 15, 25]
// console.log('Array :', myArr);

// // Can remove duplicate with Set Method
// let removeDuplicate = [...new Set(myArr)]
// console.log(removeDuplicate);

// // With forEach
// function rmDuplicate(arr){
//     let unique = []
//     arr.forEach(e => {
//         // console.log(!unique.includes(e));
//         if(!unique.includes(e)){
//             unique.push(e)
//         }
//     });
//     return unique
// }
// console.log(rmDuplicate(myArr));

// // With Filtering...
// let uniqueVal = myArr.filter((val, index) =>{
//     return myArr.indexOf(val) !== index
// })
// console.log(uniqueVal);



// const HeaderMenus = [{
//     Home : 'Home',
//     Explore : 'Explore', 
//     Categories : {
//         Categories1 : {
//             Cat1_SubCategories1 : 'Cat1_SubCategories1',
//             Cat1_SubCategories2 : 'Cat1_SubCategories2',
//             Cat1_SubCategories3 : 'Cat1_SubCategories3',
//         },
//         Categories2 : 'Categories2',
//         Categories3 :{
//             Cat3_SubCategories1 : 'Cat3_SubCategories1',
//             Cat3_SubCategories2 : 'Cat3_SubCategories2',
//             Cat3_SubCategories3 : 'Cat3_SubCategories3'
//         }
//     },
//     Shop : 'shop',
//     Team : 'team',
//     Contact : 'contact'
// }]

// const HeaderMenus = [{
//         Id : 1,
//         category : 'Props',
//         slug : 'props',
//         parent_id : 0,
//         status : 1
//     }, 
//     {
//         Id : 2,
//         category : 'Flowers',
//         slug : 'flowers',
//         parent_id : 1,
//         status : 1
//     },
//     {
//         Id : 3,
//         category : 'Wraps',
//         slug : 'wraps',
//         parent_id : 0,
//         status : 1  
//     },
//     {
//         Id : 4,
//         category : 'cat3',
//         slug : 'wraps',
//         parent_id : 1,
//         status : 1  
//     },
//     {
//         Id : 5,
//         category : 'xyz',
//         slug : 'wraps',
//         parent_id : 3,
//         status : 1  
//     }
// ]


// const parentMap = new Map();
// HeaderMenus.forEach(menu => {
//   if (menu.parent_id !== 0) {
//     const parent = HeaderMenus.find(item => item.Id === menu.parent_id);
//     if (parent) {
//       if (!parent.hasOwnProperty('children')) {
//         parent.children = [];
//       }
//       parent.children.push(menu);
//     }
//   }
// });

// const parentMenus = HeaderMenus.filter(menu => menu.parent_id === 0);

// console.log(parentMenus);

// let result = document.getElementById('result');
// // const ulElement = document.createElement('ul');
// parentMenus.forEach(menu => {
//     console.log(menu);
//     result.innerHTML += `
//         <ul>
//             <a>${menu.category}</a>
//             ${menu.children.map(item => `<li>${item.category}</li>`)}
//         </ul>
//     `;
// });

// const ulElement = document.createElement('ul');
// parentMenus.forEach(menu => {
//   const liElement = document.createElement('li');
//   liElement.textContent = menu.category;
//   if (menu.hasOwnProperty('children')) {
//     const childrenUlElement = document.createElement('ul');
//     menu.children.forEach(childMenu => {
//       const childLiElement = document.createElement('li');
//       childLiElement.textContent = childMenu.category;
//       childrenUlElement.appendChild(childLiElement);
//     });
//     liElement.appendChild(childrenUlElement);
//   }
//   ulElement.appendChild(liElement);
// });

// const containerElement = document.getElementById('result');
// containerElement.appendChild(ulElement);


// console.log(HeaderMenus);

// let display = document.getElementById('result')
// parentMenus.forEach((menus, index) =>{
//     console.log(menus);
//     display.innerHTML += `
//     <ul>
//         <li>
//             ${menus.Id}
//         </li>
//         <li>
//             ${menus.category}
//         </li>
//         <li>
//             ${menus.parent_id}
//         </li>
//         <li>
//             ${menus.slug}
//         </li>
//         <li>
//             ${menus.status}
//         </li>
//     </ul>`
// })


// let myArr = ["scale", "happy", "strength",
//     "peace", "happy", "happy"];

// function removeDuplicates(myArr) {
//     return myArr.filter((item,
//         index) => myArr.indexOf(item) === index);
// }
// console.log(removeDuplicates(myArr));



const getUniqueArray = (arr) =>  {
    var result = [];
    for (var i=0, l=arr.length; i<l; i++)
        if (result.indexOf(arr[i]) === -1 && arr[i] !== '')
            result.push(arr[i]);
    return result;
}

console.log(getUniqueArray([1, 2, 3, 3, 2, 2, 2, 1]))
console.log(getUniqueArray(['a', 'b', 'c', 'c', 'b', 'b', 'b', 'a']))