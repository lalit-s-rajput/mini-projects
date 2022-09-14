document.addEventListener('DOMContentLoaded',()=>{
    let containerRow = document.querySelector('.grid-block');
    let rows = 7;
    let columns = 7;
    for(let i=0;i<8;i++){
        for(let j=0;j<8;j++){
            let el = document.createElement('div');
            el.classList.add('single-grid-element');
            el.setAttribute('data-id',`${ i +','+ j}`);
            containerRow.append(el);
            el.onclick = function (arguments) {
                resetToOriginal();
                let arrayOfDataAttr = getAttributes(el.getAttribute('data-id'));
                Array.from(gridRow).forEach((ele)=>{
                    if(arrayOfDataAttr.includes(ele.getAttribute('data-id'))){
                        ele.style.backgroundColor = 'maroon';
                    }
                });
                el.style.backgroundColor = 'maroon';
            }
        }
        // let clonedNode = gridRow.cloneNode(true);
    }
    let gridRow = document.querySelectorAll('.single-grid-element');
    function resetToOriginal () {
        let even = document.querySelectorAll('.single-grid-element:nth-child(even)');
        Array.from(even).forEach((ele)=>{
            ele.style.backgroundColor = 'black';
        });
        let odd = document.querySelectorAll('.single-grid-element:nth-child(odd)');
        Array.from(odd).forEach((ele)=>{
            ele.style.backgroundColor = 'transparent';
        });
    }
    
    function getAttributes (str) {
        let strArr = str.split(',');
        let row = +strArr[0];
        let column = +strArr[1];
        let arr = [];
        let leftUp = function (r,c) {
            while(r!==0 && c!==0){
                arr.push(`${r-1},${c-1}`);
                r--;
                c--;
            }
            console.log('leftUp: ',arr);
        }
        let rightUp = function (r,c) {
            while(r && c<columns){
                arr.push(`${r-1},${c+1}`);
                r--;
                c++;
            }
            console.log('rightUp: ',arr);
        }
        let leftDown = function (r,c) {
            while(r<rows && c!==0){
                arr.push(`${r+1},${c-1}`);
                r++;
                c--;
            }
            console.log('leftDown: ',arr);
        }
        let rightDown = function (r,c) {
            while(r<rows && c<columns){
                arr.push(`${r+1},${c+1}`);
                r++;
                c++;
            }
            console.log('rightDown: ',arr);
        }
        leftUp(row,column);
        rightUp(row,column);
        leftDown(row,column);
        rightDown(row,column);
        return arr;
    }
});