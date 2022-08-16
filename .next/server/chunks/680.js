"use strict";
exports.id = 680;
exports.ids = [680];
exports.modules = {

/***/ 7680:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Nav)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3426);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3724);
/* harmony import */ var _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





function Nav() {
  const {
    isOpen,
    onToggle
  } = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useDisclosure)();
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('Background', 'gray.800'),
      color: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.600', 'white'),
      minH: '60px',
      py: {
        base: 2
      },
      px: {
        base: 4
      },
      borderBottom: 1,
      borderStyle: 'solid',
      borderColor: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.200', 'gray.900'),
      align: 'center',
      children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        flex: {
          base: 1,
          md: 'auto'
        },
        ml: {
          base: -2
        },
        display: {
          base: 'flex',
          md: 'none'
        },
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.IconButton, {
          onClick: onToggle,
          icon: isOpen ? /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.CloseIcon, {
            w: 3,
            h: 3
          }) : /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.HamburgerIcon, {
            w: 5,
            h: 5
          }),
          variant: 'ghost',
          "aria-label": 'Toggle Navigation'
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        flex: {
          base: 1
        },
        justify: {
          base: 'center',
          md: 'start'
        },
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
          w: '36',
          h: '12',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Image, {
            src: "Logo2.png",
            alt: "RSCHAIN"
          })
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
          display: {
            base: 'none',
            md: 'flex'
          },
          ml: 10,
          mt: '5',
          children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DesktopNav, {})
        })]
      })]
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Collapse, {
      in: isOpen,
      animateOpacity: true
    })]
  });
}

const DesktopNav = () => {
  const linkColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.600', 'gray.200');
  const linkHoverColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('gray.800', 'white');
  const popoverContentBgColor = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('white', 'gray.800');
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
    direction: 'row',
    spacing: 4,
    children: NAV_ITEMS.map(navItem => {
      var _navItem$href;

      return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Popover, {
          trigger: 'hover',
          placement: 'bottom-start',
          children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.PopoverTrigger, {
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
              p: 2,
              href: (_navItem$href = navItem.href) !== null && _navItem$href !== void 0 ? _navItem$href : '#',
              fontSize: 'sm',
              fontWeight: 500,
              color: linkColor,
              _hover: {
                textDecoration: 'none',
                color: linkHoverColor
              },
              children: navItem.label
            })
          }), navItem.children && /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.PopoverContent, {
            border: 0,
            boxShadow: 'xl',
            bg: popoverContentBgColor,
            p: 4,
            rounded: 'xl',
            minW: 'sm',
            children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
              children: navItem.children.map(child => /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(DesktopSubNav, _objectSpread({}, child), child.label))
            })
          })]
        })
      }, navItem.label);
    })
  });
};

const DesktopSubNav = ({
  label,
  href,
  subLabel
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Link, {
    href: href,
    role: 'group',
    display: 'block',
    p: 2,
    rounded: 'md',
    _hover: {
      bg: (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.useColorModeValue)('pink.50', 'gray.900')
    },
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Stack, {
      direction: 'row',
      align: 'center',
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Box, {
        children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          transition: 'all .3s ease',
          _groupHover: {
            color: 'pink.400'
          },
          fontWeight: 500,
          children: label
        }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Text, {
          fontSize: 'sm',
          children: subLabel
        })]
      }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Flex, {
        transition: 'all .3s ease',
        transform: 'translateX(-10px)',
        opacity: 0,
        _groupHover: {
          opacity: '100%',
          transform: 'translateX(0)'
        },
        justify: 'flex-end',
        align: 'center',
        flex: 1,
        children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.Icon, {
          color: 'pink.400',
          w: 5,
          h: 5,
          as: _chakra_ui_icons__WEBPACK_IMPORTED_MODULE_1__.ChevronRightIcon
        })
      })]
    })
  });
};

const NAV_ITEMS = [{
  label: 'Acceuil',
  href: '/'
}, {
  label: 'A propos',
  href: './A_propos'
}, {
  label: 'Services',
  children: [{
    label: 'NFT Plateforme',
    href: './NFT'
  }, {
    label: 'Blockchain & Securité',
    href: './Blockchainsecurite'
  }]
}, {
  label: 'Projets',
  href: './Projets'
}, {
  label: 'contact',
  href: './contact'
}];

/***/ })

};
;