/*
Jessica Krapfl
CS230 assignment 3
07/03/2022

"<td>"+average+"</td>";
*/
let avg;
let NumAssignments=5;
let numNotIn = 0;
let baseID=36592010
let state = 0;

//*********GET AVERAGE*************
function calc() 
{
    numNotIn=0;
    $('tr').each(function()//for each thing tr
    {
        let total = 0;
        $(this).find('.assignment').each(function()//for each item in the assignment class
        {
            var marks = $(this).text(); 
            {
                if ((/^[0-9][0-9]?$|^100$/.test(marks)) === false) //if the input is not accepted 2 digits or 100
                {
                    numNotIn++;
                    $(this).css({"background-color": "yellow"});//change background to yellow
                    $(this).html('-');//put the - back in
                }
                else 
                {
                    total += parseInt(marks);//add in the current grade into the total
                    $(this).css({"background-color": "initial"});//change the background color to what i originally set it to
                }
            }
        });
        if(total !== 0)//if its not NaN find the average
        {
            avg = Math.round(total / NumAssignments);
        }
        else // if it is NaN have it be 0 instead
        {
            avg = 0;
        }
        
        //how we choose what to output
        if(state===0)//if the state is 0 its the normal average
        {
            //change the heading
            $(this).find('#gradeHeading').html("Average \[%\]")
            $(this).find('.grade').html(avg+"%");//put the average into the grade column
        }
        else if(state===1)
        {
            $(this).find('#gradeHeading').html("Average \[Letter\]")//change heading
            $(this).find('.grade').html(letterGrade(avg)); //put what you get from letterGrade() into the grade column
        }
        else
        {
            $(this).find('#gradeHeading').html("Average \[4.0\]")//change heading
            $(this).find('.grade').html(ScaleGrade(avg));//put what you get from ScaleGrade() into the grade column
        }
        
        if(avg < 60) //if average is less than 60 change the background to red
        {
            $(this).find('.grade').css({"background-color": "red"});
        }
        else //else keep it to the original color
        {
            $(this).find('.grade').css({"background-color": "initial"});
        }
    });
    document.getElementById("notSubmitted").innerHTML = "Assignments not yet turned in: "+numNotIn;//add number that keeps track of unsumbitted assignments
}

//***********ADD COLUMN*********
function addColumn() 
{
    NumAssignments++;
    $('#table').find('tr').each(function(){ $(this).find('th').eq(-1 -1).after('<th>Assignment '+NumAssignments+'</th>');
        $(this).find('td').eq(-1 -1).after('<td contenteditable=true class=assignment oninput="calc()" onclick="this.textContent=\'\'">-</td>');
    });//adds in a new column for every row
    calc();//calls calc to update the table
}

//**********ADD ROW************

function addRow()
{
    baseID++;//increment baseID
    //rowNum++;
    let firstNames=["Liam", "Noah", "Oliver", "Elijah", "William", "James", "Benjamin", "Lucas", "Henry", "Alexander", "Lauren", "Maria", "Olivia", "Emma", "Ava", "Charlotte", "Sophia", "Amelia", "Isabella", "Mia"];
    let lastNames=["Smith", "Johnson", "Williams", "Brown", "Jones", "Garcia", "Miller", "Davis", "Rodriguez", "Martinez", "Hernandez", "Lopez", "Gonzalez", "Wilson", "Anderson", "Thomas", "Taylor", "Moore", "Jackson", "Martin"]
    
    //get random numbers 
    let rand1 = Math.floor(Math.random() * 19);
    let rand2 = Math.floor(Math.random() * 19);
    
    let nameString = firstNames[rand1] + " " + lastNames[rand2];//create name string using the random numbers
    
    let appendStr = '<tr class=body><td class=name>'+nameString+'</td><td class=name>'+baseID+'</td>';//add the start
    
    for(let i=0;i<NumAssignments;i++)//for every column of assignments add a td to the appendStr
    {
        appendStr += '<td contenteditable=true class=assignment oninput="calc()" onclick="this.textContent=\'\'">-</td>'
    }
    
    appendStr += '<td class=grade>0</td></tr>'//add the ending
    
    
    $('#table').append(appendStr);//add the string created to the table
    
    calc();//calls calc to update the table
}

//***********CONVERT************

function gradeClicked()
{
    state++;
    if(state>2)
    {
        state = 0;  
    }
    calc();
}

//*********LETTER GRADE*******
function letterGrade(a)
{
    if(a===100 || a>=93)//A
    {
        return "A"; 
    }
    else if(a===92 || a>=90)//A-
    {
        return "A-";
    }
    else if(a===89 || a>=87)//B+
    {
        return "B+";
    }
    else if(a===86 || a>=83)//B
    {
        return "B";
    }
    else if(a===82 || a>=80)//B-
    {
        return "B-";
    }
    else if(a===79 || a>=77)//C+
    {
        return "C+";
    }
    else if(a===76 || a>=73)//C
    {
        return "C";
    }
    else if(a===72 || a>=70)//C-
    {
        return "C-";
    }
    else if(a===69 || a>=67)//D+
    {
        return "D+";
    }
    else if(a===66 || a>=63)//D
    {
        return "D";
    }
    else if(a===62 || a>=60)//D-
    {
        return "D-";
    }
    else if(a<60)//f
    {
        return "F";
    }
}

//*********SCALE GRADE****
function ScaleGrade(a)
{
    if(a===100 || a>=93)//4.0
    {
        return "4.0"; 
    }
    else if(a===92 || a>=90)//3.7
    {
        return "3.7";
    }
    else if(a===89 || a>=87)//3.3
    {
        return "3.3";
    }
    else if(a===86 || a>=83)//3.0
    {
        return "3.0";
    }
    else if(a===82 || a>=80)//2.7
    {
        return "2.7";
    }
    else if(a===79 || a>=77)//2.3
    {
        return "2.3";
    }
    else if(a===76 || a>=73)//2.0
    {
        return "2.0";
    }
    else if(a===72 || a>=70)//1.7
    {
        return "1.7";
    }
    else if(a===69 || a>=67)//1.3
    {
        return "1.3";
    }
    else if(a===66 || a>=63)//1.0
    {
        return "1.0";
    }
    else if(a===62 || a>=60)//0.7
    {
        return "0.7";
    }
    else if(a<60)//0.0
    {
        return "0.0";
    }
}