function calculate tax (principle, rate, time) {
    return principle * rate * time;
}
function calculateTax(income) {
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
    var number = input.value;
    var output = document.getElementById("output");
    output.value = calculateTax(number);
}

function drawGraph() {

    // declare all variables (variables inside a function are created when the function is called)
    var trace, data, layout, time, interest;
    
    time = [];
    interest = []; 
    
//generate the values 
 for (var i = 0; i < 26; i++) {
     time[i] = i; 
     interest[i] = simpleInterest(100, 0.5, i); 
        
    }

    /* Trace is an object that stores the x and y values. The x, y and type variables are required mandatory. */
    trace = {
        x: time, // xvalues
        y: interest, // y values
        type: 'scatter', // the type of graph
        mode: 'lines+markers', // how the data should be displayed
        name: "trace" // a name for the data to appear on the legend (if present)
    };

    // Data is an array that stores the traces we wish to graph. Add further traces to the array for multiple data sets.
    data = [trace];

    /* To add a title and axis labels, we need to create a layout (another object). Setting a layout is optional, but they do improve the graph. */
    layout = {
        title: "A simple graph in Plotly",
        yaxis: {
            title: "y-axis", // give the axis a label
            zerolinewidth: 1.5 // makes the zero line thicker
        },
        xaxis: {
            title: "x-axis",
            zerolinewidth: 1.5,
           //range; [0,5] //sets a minimum and maximum value for the axis
        }
    };

    /* Finally we tell plotly to put the graph in the 'graph' div.*/
    Plotly.newPlot("graph", data, layout);
}

// Run the function to draw the graph.
drawGraph();
