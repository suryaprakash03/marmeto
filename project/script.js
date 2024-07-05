let obj = {};
let ar = [];
let cmar = [];
function show()
{
    document.getElementById("menimg").style.visibility="visible";
    document.getElementById("womenimg").style.visibility="visible";
    document.getElementById("kidimg").style.visibility="visible";
}
async function getdata(s) 
{
    let res = await fetch("https://cdn.shopify.com/s/files/1/0564/3685/0790/files/multiProduct.json");
    obj = await res.json();
    for (let i = 0; i < 3; i++) {
        await cmar.push(obj.categories[i].category_products);
    }
    console.log(cmar[0]);
    switch (s) {
        case 'm':
            {
                let j = 0;
                for (let ia of cmar[0]) 
                {
                    document.querySelectorAll(".bt")[j].innerText=ia.badge_text
                    document.querySelectorAll(".image")[j].src=ia.image;
                    document.querySelectorAll(".name")[j].innerText=ia.title;
                    document.querySelectorAll(".name")[j].title=ia.title;
                    document.querySelectorAll(".comp")[j].innerText=ia.vendor;
                    document.querySelectorAll(".price")[j].innerText="Rs "+ia.price+" ";
                    document.querySelectorAll(".strike")[j].innerText=ia.compare_at_price+" ";
                    j++;
                }
                break;
            }
        case 'w':
            {
                // document.getElementById("card").innerHTML="";    
                let j = 0;
                for (let ia of cmar[1]) 
                {
                    document.querySelectorAll(".bt")[j].innerText=ia.badge_text
                    document.querySelectorAll(".image")[j].src=ia.image;
                    document.querySelectorAll(".name")[j].innerText=ia.title;
                    document.querySelectorAll(".name")[j].title=ia.title;
                    document.querySelectorAll(".comp")[j].innerText=ia.vendor;
                    document.querySelectorAll(".price")[j].innerText="Rs "+ia.price+" ";
                    document.querySelectorAll(".strike")[j].innerText=ia.compare_at_price+" ";
                    j++;
                }
                break;
            }
        case 'k':
            {
                // document.getElementById("card").innerHTML="";
                let j = 0;
                for (let ia of cmar[2]) 
                {
                    document.querySelectorAll(".bt")[j].innerText=ia.badge_text
                    document.querySelectorAll(".image")[j].src=ia.image;
                    document.querySelectorAll(".name")[j].innerText=ia.title;
                    document.querySelectorAll(".name")[j].title=ia.title;
                    document.querySelectorAll(".comp")[j].innerText=ia.vendor;
                    document.querySelectorAll(".price")[j].innerText="Rs "+ia.price+" ";
                    document.querySelectorAll(".strike")[j].innerText=ia.compare_at_price+" ";
                    j++;
                }
                break;
            }
    }
}
getdata('m');
