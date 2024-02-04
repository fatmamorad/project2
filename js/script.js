let number_of_counts=0
console.log(number_of_counts)
function define_position()
{
    var arr = [];
    while(arr.length < 9){
        var r = ((Math.floor(Math.random() * 3)+1).toString())+((Math.floor(Math.random() * 3)+1).toString());
        if(arr.indexOf(r) === -1) {
            arr.push(r);
        }
    }
    return arr

}
let vec1=define_position();
for(let i=0;i<document.getElementsByClassName("parts").length;i++)
{
    document.getElementsByClassName("parts")[i].style.gridArea=vec1[i][0]+"/"+vec1[i][1];
}
function Move(tile) {

   let EmptyCell = document.querySelector(".empty")
    let probs = [
        parseInt(vec1[tile][0]) +1== parseInt(vec1[8][0]) && parseInt(vec1[tile][1]) == parseInt(vec1[8][1]),
        parseInt(vec1[tile][0]) - 1 == parseInt(vec1[8][0]) && parseInt(vec1[tile][1]) == parseInt(vec1[8][1]),
        parseInt(vec1[tile][1]) + 1 == parseInt(vec1[8][1]) && parseInt(vec1[tile][0]) == parseInt(vec1[8][0]),
        parseInt(vec1[tile][1]) - 1 == parseInt(vec1[8][1]) && parseInt(vec1[tile][0]) == parseInt(vec1[8][0]),
    ]
    if(probs[0]||probs[1]||probs[2]||probs[3])
    {
        number_of_counts++;
        EmptyCell.style.gridArea=vec1[tile][0]+"/"+vec1[tile][1]
        document.getElementsByClassName("parts")[tile].style.gridArea=vec1[8][0]+"/"+vec1[8][1];
        let CurrentTile = vec1[tile]
        vec1[tile] = vec1[8]
        vec1[8] = CurrentTile;
        let positions=["11","12","13","21","22","23","31","32","33"];

        if(vec1.join(".")==positions.join(".")) {
            document.getElementById("container").style. opacity="0.2";
            console.log(number_of_counts)
            document.getElementById("Win").style.display="block";
            document.getElementById("stars").style.display="block";
            if(number_of_counts<=100)
            {
                document.getElementById("p1").style.fill="yellow";
                document.getElementById("p2").style.fill="yellow";
                document.getElementById("p3").style.fill="yellow";

            }
            if(number_of_counts<=150)
            {
                document.getElementById("p1").style.fill="yellow";
                document.getElementById("p2").style.fill="yellow";


            }
            if(number_of_counts>150)
            {
                document.getElementById("p1").style.fill="yellow";
            }


        }
        document.getElementById("lab-2").innerHTML=number_of_counts;
    }
}