# Library-Management-System

## [ Live Link for Client Side](https://library-management-client.web.app)
Click here for the Live Link for Client Side: [https://library-management-client.web.app](https://library-management-client.web.app)

# Questions
## _Q1. Add at least 5 Project features & functionalities_
Ans: This project has got the following features- 

- This project is all about Library-Management-System. The MainLayout of this website consits of fixed Navbar component which consists of 1 no. of Logo component & 4 nos. of Navlink components namely, (i) Home, (ii) Add Book, (iii) All Books, (iv) Borrowed Books, (v)Login.

- The Home component is a children component of the MainLayout component. The Home component consists of a Navbar, Slider, Our Categories section (which consists of 4 popular book categories), Our Services section, Contact Us section and Footer. 


- There is one button `View Details`  in each Category. By clicking VIEW DETAILS, user can see all the books of the particular Category. In each book, another button named VIEW DETAILS is attached. But, user has to login before watching this `VIEW DETAILS` section. Once, the user is logged in,he/she will get `Borrow` button. Once clicked this button, the product will be added to `Borrowed Books` section.

- The `Borrowed Books` section is a private route and user can only access if he/she is logged in.If the quantity of this book is greater than 0, user can borrow this book.Otherwise, borrow button will remain disabled.

- User can also add new product in the `ADD Book` section in the Navbar which is a protected route. This is also a private route.In the All Books sections, all the books are displayed with the quantity. There is a filter button in the Add Book Page by clicking which, only the books having quantity more than 0, will be shown. 

- In the `LOGIN NOW` button, user will be guided to either login for existing users and if there is a new user, he has to register first and then he can login. During registration,  user has to give his name, photo,emailid and password and except password, all details will be seen in the Navbar as long as the user is Logged in. User will get a Log Out option to log out from this site.

- There is also another way of login i.e. through Google. User needs to select his particular gmail id and need to give password. After that, the user will be automatically logged in. 

