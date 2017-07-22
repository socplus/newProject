Getting started
simple one page product information page with components and one service.


To install the Application follow the below given steps:
	
Run 'npm install'. The command will install the neccesary modules for Angular 2 code to run.
	npm install


Run 'npm start' to build the project. 
		 npm start

Deployment and Running:
Navigate to http://localhost:3000/. The app will automatically reload if you change any of the source files.


For testing 
	-> npm run test


Further Help

The code is written in TypeScript. The files are then converted to JS.


  -----------------------------------------DELIVERY FLOW:-----------------------------------------------


SERVICE                      (app.service.ts) ====> Contains the function call to fetch the JSON. The function of fetching the json is then used to populate various variables used in files(Components to be specific).


COMPONENTS            =======> app.component.ts
					  =======> app.component.html
					  =======> app.component.css
					  Purpose: Used to frame the main page of the application. The various components are used to  populate variables from the service function. 

					  =======>app.module.ts
					  purpose: USed to include the components/ services in the application


					  ========>carousel.component.ts
					  ========>carousel.component.html
					  ========>carousel.component.css
					  purpose: the file is used to make component Carousel. The data is passed from the fetched service method and results are obtained.


					  ========>counter.component.ts
					  ========>counter.component.html
					  ========>counter.component.css
					  purpose: the file is used to make component counter. The data is passed from the fetched service method and results are obtained.


					  
					   ========>Cssproperty.ts
					   purpose: The file is prepare data format to the carousel input.


					   ========>rating.component.css
					   ========>starrating.component.ts
					   pupose: The file is used to create component for rating. The data inputs are taken from the service from the app.component.ts file.



					   RESOURCE USAGE

			(index.html)+ (main.js)
					   |
					   |
					   |

			Include in (app.module.ts)
					   |
					   |
					   |
			app.component.ts  ----------> service(app.service.ts)
					   |
					   |
					   |
					   |(using following files)
		carousel.component,counter.component, rating.component, 


