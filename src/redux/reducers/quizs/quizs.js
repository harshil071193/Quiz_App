import { createSlice } from '@reduxjs/toolkit'

export const quizSlice = createSlice({
  name: 'quiz',
  initialState: {
    quizs:[
        {
            name:"HTML",
            description:"Attempt HTML quiz and prove your knowledge.",
            imgSrc:"https://www.w3schools.com/whatis/img_html.jpg",
            questions:[
                {
                    title:"What does the abbreviation HTML stand for?",
                    options:[
                        {
                            title:"HighText Machine Language",
                            isCorrect:false
                        },
                        {
                            title:"HyperText and links Markup Language",
                            isCorrect:false
                        },
                        {
                            title:"HyperText Markup Language",
                            isCorrect:true
                        },
                        {
                            title:"None of these",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"The correct sequence of HTML tags for starting a webpage is -",
                    options:[
                        {
                            title:"Head, Title, HTML, body",
                            isCorrect:false
                        },
                        {
                            title:"HTML, Body, Title, Head",
                            isCorrect:false
                        },
                        {
                            title:"HTML, Head, Title, Body",
                            isCorrect:false
                        },
                        {
                            title:"HTML, Head, Title, Body",
                            isCorrect:true
                        },
                    ]
                },
                {
                    title:"Which of the following element is responsible for making the text bold in HTML?",
                    options:[
                        {
                            title:"<pre>",
                            isCorrect:false
                        },
                        {
                            title:"<a>",
                            isCorrect:false
                        },
                        {
                            title:"<b>",
                            isCorrect:true
                        },
                        {
                            title:"<br>",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"Which of the following tag is used for inserting the largest heading in HTML?",
                    options:[
                        {
                            title:"<h3>",
                            isCorrect:false
                        },
                        {
                            title:"<h1>",
                            isCorrect:true
                        },
                        {
                            title:"<h5>",
                            isCorrect:false
                        },
                        {
                            title:"<h6>",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"Which of the following tag is used to insert a line-break in HTML?",
                    options:[
                        {
                            title:"<br>",
                            isCorrect:true
                        },
                        {
                            title:"<a>",
                            isCorrect:false
                        },
                        {
                            title:"<pre>",
                            isCorrect:false
                        },
                        {
                            title:"<b>",
                            isCorrect:false
                        },
                    ]
                },
            ]
        },
        {
            name:"CSS",
            description:"Attempt CSS quiz and prove your knowledge.",
            imgSrc:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png",
            questions:[
                {
                    title:"CSS stands for -",
                    options:[
                        {
                            title:"Cascade style sheets",
                            isCorrect:false
                        },
                        {
                            title:"Color and style sheets",
                            isCorrect:false
                        },
                        {
                            title:"Cascading style sheets",
                            isCorrect:true
                        },
                        {
                            title:"None of the above",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"The property in CSS used to change the background color of an element is -",
                    options:[
                        {
                            title:"bgcolor",
                            isCorrect:false
                        },
                        {
                            title:"color",
                            isCorrect:false
                        },
                        {
                            title:"background-color",
                            isCorrect:true
                        },
                        {
                            title:"All of the above",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"The property in CSS used to change the text color of an element is -",
                    options:[
                        {
                            title:"bgcolor",
                            isCorrect:false
                        },
                        {
                            title:"color",
                            isCorrect:true
                        },
                        {
                            title:"background-color",
                            isCorrect:false
                        },
                        {
                            title:"All of the above",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"The CSS property used to control the element's font-size is -",
                    options:[
                        {
                            title:"text-style",
                            isCorrect:false
                        },
                        {
                            title:"text-size",
                            isCorrect:false
                        },
                        {
                            title:"font-size",
                            isCorrect:true
                        },
                        {
                            title:"None of the above",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"The HTML attribute used to define the internal stylesheet is -",
                    options:[
                        {
                            title:"<style>",
                            isCorrect:true
                        },
                        {
                            title:"style",
                            isCorrect:false
                        },
                        {
                            title:"<link>",
                            isCorrect:false
                        },
                        {
                            title:"<script>",
                            isCorrect:false
                        },
                    ]
                },
            ]
        },
        {
            name:"JavaScript",
            description:"Attempt JavaScript quiz and prove your knowledge.",
            imgSrc:"https://www.pngitem.com/pimgs/m/116-1167737_logo-javascript-pattern-copyright-framework-free-download-javascript.png",
            questions:[
                {
                    title:"Which type of JavaScript language is ___",
                    options:[
                        {
                            title:"Object-Oriented",
                            isCorrect:false
                        },
                        {
                            title:"Object-Based",
                            isCorrect:true
                        },
                        {
                            title:"Assembly-language",
                            isCorrect:false
                        },
                        {
                            title:"High-level",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:" Which one of the following also known as Conditional Expression:",
                    options:[
                        {
                            title:"Alternative to if-else",
                            isCorrect:false
                        },
                        {
                            title:"Switch statement",
                            isCorrect:false
                        },
                        {
                            title:"If-then-else statement",
                            isCorrect:false
                        },
                        {
                            title:"immediate if",
                            isCorrect:true
                        },
                    ]
                },
                {
                    title:"In JavaScript, what is a block of statement?",
                    options:[
                        {
                            title:"Conditional block",
                            isCorrect:false
                        },
                        {
                            title:"block that combines a number of statements into a single compound statement",
                            isCorrect:true
                        },
                        {
                            title:"both conditional block and a single statement",
                            isCorrect:false
                        },
                        {
                            title:"block that contains a single statement",
                            isCorrect:false
                        },
                    ]
                },
                {
                    title:"When interpreter encounters an empty statements, what it will do:",
                    options:[
                        {
                            title:"Shows a warning",
                            isCorrect:false
                        },
                        {
                            title:"Prompts to complete the statement",
                            isCorrect:false
                        },
                        {
                            title:"Throws an error",
                            isCorrect:false
                        },
                        {
                            title:"Ignores the statements",
                            isCorrect:true
                        },
                    ]
                },
                {
                    title:"The function and  var are known as:",
                    options:[
                        {
                            title:"Keywords",
                            isCorrect:false
                        },
                        {
                            title:"Data types",
                            isCorrect:false
                        },
                        {
                            title:"Declaration statements",
                            isCorrect:true
                        },
                        {
                            title:"Prototypes",
                            isCorrect:false
                        },
                    ]
                },
            ]
        },
    ],
  },
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
export const { } = quizSlice.actions

export default quizSlice.reducer