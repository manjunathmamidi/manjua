function solve(p)
{
    let v=document.getElementById('c');
    v.value+=p;
}
function result()
{
    let v=document.getElementById('c');
    v.value=eval(v.value);
}
function Clear()
 {
    let inp = document.getElementById('c');
    alert(inp.value);
    inp.value = '';
    alert(inp.value);
 }
 function back(){
    let inp = document.getElementById('c');
    inp.value=inp.value.slice(0,-1);
 }
 document.addEventListener('keydown',function(f){
    let d=f.key;
    let a="1234*567890**+-/";
    if(a.includes(d))
    {
        solve(d);
    }
    else if(d==='Enter')
    {
        result();
    }
    else if(d==='Backspace')
    {
        back();
    }
    else if(d==='Shift')
    {
        
    }
    else{
        Clear();
    }
 })