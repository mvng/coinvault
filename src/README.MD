Team Pentapod CSE 134B
**************************************************************************************************************
TASKS AND PROBLEMS WE RAN INTO

Our team implemented a new Sign Up and Log in Process with Javascript and Parse database. We also gave our customers an additional options of signing in through their Facebook account to have an easier and faster tool to sign up. After creating an account with an unique username and email, it will direct the user to the main dashboard where the user will be able to see the current prices for Gold, Silver, and Platinum as well as their current Gold Totals. 

In order to build the CRUD for our assignment, we utilized Parse and our own API to handle our backend applications as well as the operations on our webpage. We initially ran into problems using Parse, for example we had difficulties generating tables from read items, querying the right object, handling where an object exists, passing objects between different pages, etc. Additionally, a big issue we ran into was creating user's individual stacks and figuring out how to deal with the issue when Parse was deleting items too fast which caused some syncing issues.

We initially had difficulty implementing the graph on our website as we tried to incorporate data from Quandl with ChartJS. We grabbed the data from Quandl using PHP, however, we had a hard to decifering how to transfer that data over to our JS file that handled the creation of our graphs. Since none of us had previous knowledge of PHP, JSON, or AJAX, it took extensive research in order to create a functioning graph that pulled the data from Quandl. With the help of Cloud coding, as well as tweaking some our intial findings from the web, we finally were able to graph the data we retrieve from Quandl for Gold and other metals involved. In order to display the graph, we also had to use Heroku in order to run the PHP data from the server-side. 

Assumption - We didn't know the exact times for bullion trading so we made the open and close times from 6am to 1pm. 

**************************************************************************************************************
NAVIGATION

Pretty Straight forward

Index.html - Start Page, where everyone can sign up and login 
Dashboard.html - Home page after login. Users can see the bullion prices and the total costs 
goldoverview.html - This page along with platinum and silver overview are for those specific metals.
myitem.html - By clicking on each item, you will be taken to this page where you will be able to see all the information of the coin.
updateItem.html - This is the page where the user can update or delete the coin. 

**************************************************************************************************************
VALIDATION ISSUES 
(Same issues as stated in DREAM TEAM's initial pages.)

HTML:
	All the HTML validation checked out so there was no problem there.

CSS:
	The errors in CCS validation were broken down into only two problems:

	Property fill Doesn't Exist:
		CSS3 validator doesn't recognize fill as a valid attribute, but
		as we tested it with Chrome, Firefox, Safari, and IE, we're willing
		to forgo solving of this validation flag to implement the fill 
		attribute. After some further research, this seems to be a bug in 
		the validator, much like the one that will be described next.

	Calc() parse errors:
		Anywhere we used calc() in our CSS, the CSS validator threw a parse
		error. However, with research, we determined that this was a bug with 
		the CSS validator. 

		Source: https://www.w3.org/Bugs/Public/show_bug.cgi?id=18913

**************************************************************************************************************
Cross-Platform Issues   

Chrome:
	We mainly developed on Chrome, so this is the basis of comparison for all 
	other browsers

Firefox:


Safari:
	The functionality between Chrome and Safari remained mostly identical 
	throughout. One notable difference was that on the addItem.html page, 
	the drop down calendar bar for the purchase date was not compatible in
	Safari. 
	However one thing I did notice is that there were a few physical differences
	between the two browsers. The fonts between the two looked slightly 
	different as well as the shades of whites/gray were different as well.
	This wasn't a big issue by any means but worth reporting. 

	Another thing we noticed is that Safari renders fonts a little bit 
	differently from all the other browsers, and especially font-size. We used
	font-size: 0 to bring some divs flush close to each other but on Safari
	that doesn't work for some strange reason, so we compensated with some
	white-space: nowrap so that our mobile toggling selectors didn't overflow.

Internet Explorer:


**************************************************************************************************************
KNOWN ERRORS
index.html - When resizing the website to a small page, the buttons on the Log in and Sign up pages clump up together. It is not optimized for smaller screens.

Dashboard.html/ goldoverview.html - The webpages shows the number ~24k (dashboard) and ~18k (goldoverview) before immediately changing back to the actual numbers for each user. Not sure why this issue is occuring as it is. I believe it 
