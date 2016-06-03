function incomeTax (income) {
    var tax;
    if (income < 16000) {
        tax = 0;
    } else if (income < 52500 ) {
        tax = (income - 16000) *0.1;
    } else if (income < 113000){
        tax = (income - 52500) *0.16 + 3650; 
    } else if (income < 184500){
        tax = (income - 113000) *0.24 +13330;
    } else {
        tax = (income - 184500) * 0.36 + 30490;
    }
       
    return tax;
}

function changeStuff() {
    var input = document.getElementById("box");
    var output = document.getElementById("output");
    output.value = incomeTax(input.value);
}

/**
 * This function draws a graph
 */
function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var trace, data, layout, income, tax;
    
    income = [];
    tax = []; 
    
//generate the values 
 for (var i = 0; i < (250000/500); i++) {
     income[i] = i*500;
     tax[i] = incomeTax(income[i]); 
        
    }

    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
    trace = {
        x: income, // xvalues
        y: tax, // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "Income amount and the given Tax",
        yaxis: {
            title: "Income", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "Tax",
            zerolinewidth: 1.5,
           //range; [0,5] //sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();