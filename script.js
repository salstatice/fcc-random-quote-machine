// !! IMPORTANT README:

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place. 

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments. 

/*
import React from "https://cdn.skypack.dev/react"
import ReactDOM from "https://cdn.skypack.dev/react-dom"
import { Provider, connect } from "https://cdn.skypack.dev/react-redux"
import { createStore, combineReducers, applyMiddleware } from "https://cdn.skypack.dev/redux"
import thunk from "https://cdn.skypack.dev/redux-thunk"

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/
/*
const JSX = (
      <div>
        <h1>Hello World</h1>
        <p>Lets render this to the DOM</p>
      </div>
    );
    // Change code below this line
ReactDOM.render(JSX, document.getElementById('sandy'));
*/

const quoteLibrary = [
{ "quote": "Yup, that tasted purple.", "author": "Lulu" },
{ "quote": "Hut, two, three, four.", "author": "Teemo" },
{ "quote": "I will be the best.", "author": "Wukong" },
{ "quote": "The heart is the strongest muscle.", "author": "Braum" },
{ "quote": "Should I make your pulse rise? Or... STOP! (giggles)", "author": "Ahri" }];

var themeColor = [
"#E27D60",
"#E8A87C",
"#C38D9E",
"#41B3A3",
"#8D8741",
"#659DBD",
"#DC986A",
"#05386B",
"#379683"];

var themeColorIndex = Math.floor(Math.random() * themeColor.length);

document.documentElement.style.setProperty("--theme-color", themeColor[themeColorIndex]);
/*
// Redux:
const REFRESH = 'REFRESH';
const ADD = 'ADD;'

const refreshQuote = () => {
  return {
    type: REFRESH
  }
};

const addQuote = (text, author) =>
  return {
    type: ADD,
    quote: {text, author}
  }

const quoteReducer = (state = defaultQuoteLibrary, action) => {
  switch (action.type==REFRESH) {
    case REFRESH:
      return state;
      break;
    case ADD:
      return [
        ...state,
        action.quote
      ];
    default:
      return state;
  }
}

const store = Redux.createStore(quoteReducer);

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;
*/

// React:
class DisplayQuote extends React.Component {
  constructor(props) {
    super(props);

    const defaultIndex = Math.floor(Math.random() * quoteLibrary.length);

    this.state = {
      currentIndex: defaultIndex,
      currentQuote: quoteLibrary[defaultIndex] };

    this.fetchNewQuote = this.fetchNewQuote.bind(this);
  }
  /*
    fetchNewQuote() {
      this.props.refresh();
      this.setState((state) => ({
        currentIndex : Math.floor(Math.random() * defaultQuoteLibrary.length),
        currentQuote : defaultQuoteLibrary[currentIndex]
      }));
    }
  */
  fetchNewQuote() {
    const newIndex = Math.floor(Math.random() * quoteLibrary.length);
    let newThemeIndex = Math.floor(Math.random() * themeColor.length);
    if (newThemeIndex == themeColorIndex) {
      if (newThemeIndex == 0) {
        newThemeIndex++;
      } else {
        newThemeIndex--;
      }
    }
    themeColorIndex = newThemeIndex;
    document.documentElement.style.setProperty("--theme-color", themeColor[themeColorIndex]);
    this.setState((state) =>
    newIndex != this.state.currentIndex ?
    { currentIndex: newIndex,
      currentQuote: quoteLibrary[newIndex] } :
    quoteLibrary.length == 1 ?
    { currentIndex: 0,
      currentQuote: { "quote": "Only have one quote. Come back later", "author": "Unkei" } } :
    newIndex == 0 ?
    { currentIndex: newIndex + 1,
      currentQuote: quoteLibrary[newIndex + 1] } :
    { currentIndex: newIndex - 1,
      currentQuote: quoteLibrary[newIndex - 1] });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "quote" }, /*#__PURE__*/
      React.createElement("p", { id: "text", className: "text-center" }, this.state.currentQuote.quote), /*#__PURE__*/
      React.createElement("p", { id: "author", className: "text-right" }, "- ", this.state.currentQuote.author)), /*#__PURE__*/

      React.createElement("div", { className: "row" }, /*#__PURE__*/
      React.createElement("div", { className: "col-xs-6" }, /*#__PURE__*/
      React.createElement("button", { id: "new-quote", className: "btn btn-block btn-primary", onClick: this.fetchNewQuote }, "New quote")), /*#__PURE__*/

      React.createElement("div", { className: "col-xs-3" }), /*#__PURE__*/
      React.createElement("div", { className: "col-xs-3" }, /*#__PURE__*/
      React.createElement("a", { id: "tweet-quote", href: "twitter.com/intent/tweet" }, /*#__PURE__*/React.createElement("button", { className: "btn btn-block btn-primary" }, "Tweet"))))));




  }}

/*
//React-Redux:


const mapStatetoProps = (state) => {
  return { quotes: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    refresh: () => {
      dispatch(refreshQuote())
    }
    
  }
}

const Container = connect(mapStateToProps, mapDispatchToProps)(DisplayQuote)

class AppWrapper extends.React.Componet {
  render() {
    <Provider store={store}>
      <Container/>
    </Provider>
  }
}
*/

//render to HTML
ReactDOM.render( /*#__PURE__*/React.createElement(DisplayQuote, null), document.getElementById('quote-box'));