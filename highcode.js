//Navbar DOM

var container = document.getElementById("container")
container.className = "navbar_wrapper"

//Creating container items

var h2item =document.createElement("h2")
h2item.innerHTML = "HighOnCoding"
container.appendChild(h2item)

var pitem =document.createElement("p")
pitem.innerHTML = "Home"
container.appendChild(pitem)

var pitem2 =document.createElement("p")
pitem2.innerHTML = "Categories"
container.appendChild(pitem2)

//Creating container items II

var container2 = document.createElement("div")
container2.className = "review_wrapper" 
document.body.appendChild(container2)

var h2item1 = document.createElement("h2")
h2item1.innerHTML = "Curse of the Current Reviews"
container2.appendChild(h2item1)

var pitem3 = document.createElement("p")
pitem3.innerHTML = "When you want to buy any application from the Apple Itunes store you have more choices than you can handle.  Most of the users scroll past the application description completely avoiding it like ads displayed on the right column of your webpage.  Their choice is dependent on three important factors: price, screenshot, and reviews."
container2.appendChild(pitem3)

//Creating container items III

var container3 = document.createElement("div")
container3.className = "bottom_wrapper" 
document.body.appendChild(container3)

var h2item3 = document.createElement("h2")
h2item3.innerHTML = "Hello Watchkit"
container3.appendChild(h2item3)

var pitem4 = document.createElement("p")
pitem4.innerHTML = "Last month Apple released the anticipated Watchkit framework for developers in the form of iOS 8.2 beta SDK release.  The WatchKit framework enable the developers to create Apple Watch applications.  In this article we are going to focus basics of getting started with the WatchKit framework and developing apps for the Apple Watch."
container3.appendChild(pitem4)

var h1item = document.createElement("h1")
h1item.innerHTML = "12 comments 124 likes"
container3.appendChild(h1item)

var h2item4 = document.createElement("h2")
h2item4.innerHTML = "Introduction to Swift"
container3.appendChild(h2item4)

var pitem5 = document.createElement("p")
pitem5.innerHTML = "Swift is a modern programming language developed by Apple to create the next generation of iOS and OSX applications.  Swift is a fairly new language and still in development but it clearly reflects the intentions and the future directions.  This article will revolve around the basic concepts in the Swift language and how you can get started."
container3.appendChild(pitem5)

var h1item2 = document.createElement("h1")
h1item2.innerHTML = "15 comments 45 likes"
container3.appendChild(h1item2)