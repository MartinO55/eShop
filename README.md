# React e-cShop Website

## Outline

This project is a shop front for a pet fashion store selling adoreable (and highly impractical) clothes for pets. There are currently 18 different products on sale, each horribly overpriced and available in small quantitites. This project was built with a react front end and a firestore back end, with SASS used for styling. The design of the store is simple enough, with a carousel displaying the favourited items, displaying each for 10 seconds before rotating to the next on autoplay, although there are also buttons tied to functions to move the user back and forth. The complete store inventory is displayed on cards below the carousel, with the vards also being displayed ont he Products page. Clicking on any of the cards takes the user to a page displaying that item, the different variants available for it and buttons to add them to a cart. The site design also includes mobile compatible breakpoints in the styling.

## Tech Stack

- Firestore Backend
- React Front end
- SASS for styling

## MVP

This e-shop website has two pages:

- Home Page

  - Containing:
    - A Grid of products
    - Carousel of featured products

- Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants

- All product information is stored in Firestore:
  - Including
    - quantity
    - variants (could be colors, sizes, etc)
    - price per unit
    - name
    - image url
    - favourited or not (boolean)

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

- List of products in cart

  - Ability to change quantity of products in cart
  - Ability to remove items from cart

## Icons

- Heart Icons: <"https://pixlok.com/images/like-icon-svg-heart-png-icon-free-download/">

## Links

- Github: <https://github.com/MartinO55/eShop>
- Live site: <https://martino55.github.io/eShop/>
