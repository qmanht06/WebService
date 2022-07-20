const express = require("express");
const router = express.Router();

// let tempCart = {
//   userEmail: "",
//   cart: {
//     cartList,
//     cartTotalQuantity,
//   },
// };

let mainCart = [];
let email;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.json());

//Cart Router
router.get("/", (req, res) => {
  let cartList = req.cookies.cartList ? JSON.parse(req.cookies.cartList) : [];
  let cartTotalQuantity = req.cookies.cartTotalQuantity
    ? JSON.parse(req.cookies.cartTotalQuantity)
    : 0;
  let Cart = {
    cartList: cartList,
    cartTotalQuantity: cartTotalQuantity,
  };
  //   if (req.cookies.userEmail) {
  //     mainCart.findIndex(item => )
  //     Cart = {
  //         cartList: cartList,
  //         cartTotalQuantity: cartTotalQuantity,
  //       };
  //   }

  //   console.log(req.cookies);
  res.json(Cart);
});

router.post("/", (req, res) => {
  let cartList = req.cookies.cartList ? JSON.parse(req.cookies.cartList) : [];
  let cartTotalQuantity = req.cookies.cartTotalQuantity
    ? JSON.parse(req.cookies.cartTotalQuantity)
    : 0;
  //   console.log("request body: ", req.body);
  let email = req.cookies.userEmail || 0;

  //   if (email) {
  //     const checkUser = mainCart.findIndex((item) => item.userEmail === email);
  //     if (checkUser < 0) {
  //         mainCart.push({
  //             userEmail: email,
  //             cart: { cartList: cartList, cartTotalQuantity: cartTotalQuantity },
  //           });
  //     };
  //     mainCart.push({
  //       userEmail: req.cookies.userEmail,
  //       cart: { cartList: cartList, cartTotalQuantity: cartTotalQuantity },
  //     });
  //     cartList = [];
  //     cartTotalQuantity = 0;
  //   } else {
  //     cartList = JSON.parse(req.cookies.cartItems);
  //     cartTotalQuantity = req.cookies.cartTotalQuantity;
  //   }

  let cartItem = req.body.cartItem;
  let checkExist = cartList.findIndex((item) => item.id === cartItem.id);

  if (checkExist < 0) {
    cartList.push(cartItem);
  } else cartList[checkExist].quantity += cartItem.quantity;

  //   console.log(cartList);
  // let quantity = cartList.reduce((prev, curr) => prev + curr.quantity, 0);
  cartTotalQuantity += cartItem.quantity;

  res.cookie("cartList", JSON.stringify(cartList));
  res.cookie("cartTotalQuantity", cartTotalQuantity);
  res.json({ quantity: cartTotalQuantity });
});

router.delete("/:id", (req, res) => {
  let cartList = req.cookies.cartList ? JSON.parse(req.cookies.cartList) : [];
  let cartTotalQuantity = req.cookies.cartTotalQuantity
    ? JSON.parse(req.cookies.cartTotalQuantity)
    : 0;

  //   console.log("delete request body: ", req.params);
  cartList = cartList.filter((item) => item.id !== req.params.id);
  cartTotalQuantity = cartList.reduce((prev, curr) => prev + curr.quantity, 0);
  res.cookie("cartList", JSON.stringify(cartList));
  res.cookie("cartTotalQuantity", cartTotalQuantity);
  res.json(cartList);
});

router.put("/:check/:id", (req, res) => {
  let cartList = req.cookies.cartList ? JSON.parse(req.cookies.cartList) : [];
  let cartTotalQuantity = req.cookies.cartTotalQuantity
    ? JSON.parse(req.cookies.cartTotalQuantity)
    : 0;

  let index = cartList.findIndex((item) => item.id === req.params.id);
  let checkAmount = cartList[index].quantity;
  switch (req.params.check) {
    case "increase":
      cartList[index].quantity += checkAmount < 12 ? 1 : 0;
      cartTotalQuantity += checkAmount < 12 ? 1 : 0;
      break;
    case "decrease":
      cartList[index].quantity -= checkAmount > 1 ? 1 : 0;
      cartTotalQuantity -= checkAmount > 1 ? 1 : 0;
      break;
    default:
  }

  res.cookie("cartList", JSON.stringify(cartList));
  res.cookie("cartTotalQuantity", cartTotalQuantity);
  res.json(cartTotalQuantity);
});

module.exports = router;
