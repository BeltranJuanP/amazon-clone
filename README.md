<!-- Improved compatibility of back to top link: See: https://github.com/othneildrew/Best-README-Template/pull/73 -->
<a name="readme-top"></a>
<!--
*** Thanks for checking out the Best-README-Template. If you have a suggestion
*** that would make this better, please fork the repo and create a pull request
*** or simply open an issue with the tag "enhancement".
*** Don't forget to give the project a star!
*** Thanks again! Now go create something AMAZING! :D
-->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h1 align="center">Juan's Amazon Clone</h1>
  
  <a href="https://amazon-clone-seven-iota.vercel.app">View Demo</a>
</div>

<!-- ABOUT THE PROJECT -->
## About The Project

A full stack clone of Amazon's store that allows users to browse and purchase products. 

<ins>Features</ins>
- Next.js server side rendering for storefront.
- Responsive design using TailwindCSS
- Integrated Stripe and Google Firebase to purchase and keep track of orders.
- Implemented Google sign in through NextAuth.js.

[![Product Name Screen Shot][product-screenshot]](https://example.com)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* ![Next][Next.js]
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![React][React.js]
* ![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
* ![Firebase](https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white)
* ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
* ![NPM](https://img.shields.io/badge/NPM-%23000000.svg?style=for-the-badge&logo=npm&logoColor=white)
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
* ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Your Name - juanbeltran2994@gmail.com

Project Link: https://amazon-clone-seven-iota.vercel.app

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* this is a purely educational project and not meant to infringe on Amazon's properties. 
* https://www.amazon.com

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/github_username/repo_name.svg?style=for-the-badge
[contributors-url]: https://github.com/github_username/repo_name/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/github_username/repo_name.svg?style=for-the-badge
[forks-url]: https://github.com/github_username/repo_name/network/members
[stars-shield]: https://img.shields.io/github/stars/github_username/repo_name.svg?style=for-the-badge
[stars-url]: https://github.com/github_username/repo_name/stargazers
[issues-shield]: https://img.shields.io/github/issues/github_username/repo_name.svg?style=for-the-badge
[issues-url]: https://github.com/github_username/repo_name/issues
[license-shield]: https://img.shields.io/github/license/github_username/repo_name.svg?style=for-the-badge
[license-url]: https://github.com/github_username/repo_name/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/linkedin_username
[product-screenshot]: Amazon-Screenshot.png
[Next.js]: https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white
[Next-url]: https://nextjs.org/
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/


## TODO
These are features that are in progress and would improve the functionality of the application.

- add documentation
- add testing
- better sign out UI
- website demo
- add similar items to product page
- expand the product database to include things like prime and rating
- add quantity to cart
- on objects with prime there shouldn't be any shipping cost
- shopping cart sign in to checkout loses all the items in the cart
- clean up the website by maybe adding some animations
- add loading states
- cant access success without success

## Testing Stripe

To test stripe use the fake card number as documented here.
https://stripe.com/docs/testing#testing-interactively

## Running Locally

Some notes to build and test the project on local device.

1. Setup Stripe CLI
   ```sh
   stripe listen --forward-to localhost:3000/api/webhook
   ```

3. Build TailwindCSS
   ```sh
   npx tailwindcss build
   ```
3. Run dev server
   ```sh
   npm run dev
   ```
