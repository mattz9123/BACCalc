$(document).ready(function () {
    $("button").on("click", bac);
})


function bac(){
    let totalOfBeer = parseFloat( $("#totalBeers").val() );

    let totalOfWine = parseFloat( $("#totalWine").val() );

    let totalOfShot = parseFloat( $("#totalShots").val() );

    let totalOfHours = parseFloat( $("#hoursSinceStart").val() );

    let totalOfWeight = parseFloat( $("#totalWeight").val() );

    let beerAmount = totalOfBeer * 0.54;

    let wineAmount = totalOfWine * 0.6;

    let shotAmount = totalOfShot * 0.6;

    let result = (beerAmount + wineAmount + shotAmount) * 7.5;

    let baContent = result / totalOfWeight;

    let hoursDrink = totalOfHours * 0.015;

    let finalBac = baContent - hoursDrink;

    let roundedBac = finalBac.toFixed(3);

    $("span#bacOutput").text(roundedBac);

    $(".output").show();
}