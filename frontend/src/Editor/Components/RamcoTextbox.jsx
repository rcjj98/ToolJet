import React, { useState, useEffect } from 'react';
import DOMPurify from 'dompurify';
import { NbTextbox } from '@nebula/rui-components';

export const RamcoTextbox = function RamcoTextbox({
  height,
  properties,
  styles,
  darkMode,
  registerAction,
  setExposedVariable,
  dataCy,
}) {
  let {
    textSize,
    textColor,
    textAlign,
    backgroundColor,
    fontWeight,
    decoration,
    transformation,
    fontStyle,
    lineHeight,
    textIndent,
    letterSpacing,
    wordSpacing,
    fontVariant,
    disabledState,
  } = styles;
  // const { hideCaption, id, mandatory } = properties;
  // const [caption, setCaption] = useState(() => computeCaption());
  // const [value, setValue] = useState(() => computeValue());
  // const [visibility, setVisibility] = useState(styles.visibility);
  // const color = ["#000", "#000000"].includes(textColor) ? (darkMode ? "#fff" : "#000") : textColor;

  // useEffect(() => {
  //     if (visibility !== styles.visibility) setVisibility(styles.visibility);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [styles.visibility]);

  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => {
  //     const value = computeValue();
  //     setValue(value);
  //     setExposedVariable("value", value);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [properties.value]);

  // registerAction(
  //     "setValue",
  //     async function (value) {
  //         setValue(value);
  //         setExposedVariable("value", value);
  //     },
  //     [setValue]
  // );

  // registerAction(
  //     "visibility",
  //     async function (value) {
  //         setVisibility(value);
  //     },
  //     [setVisibility]
  // );

  // useEffect(() => {
  //     const caption = computeCaption();
  //     setCaption(caption);
  //     setExposedVariable("caption", caption);
  //     // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [properties.caption]);

  // registerAction(
  //     "setCaption",
  //     async function (caption) {
  //         setCaption(caption);
  //         setExposedVariable("caption", caption);
  //     },
  //     [setCaption]
  // );

  // function computeValue() {
  //     return properties.value === 0 || properties.value === false ? properties.value?.toString() : properties.value;
  // }

  // function computeCaption() {
  //     return properties.caption === 0 || properties.caption === false
  //         ? properties.caption?.toString()
  //         : properties.caption;
  // }

  // const computedStyles = {
  //     backgroundColor,
  //     color,
  //     height,
  //     display: visibility ? "flex" : "none",
  //     alignItems: "center",
  //     textAlign,
  //     fontWeight: fontWeight ? fontWeight : fontWeight === "0" ? 0 : "normal",
  //     lineHeight: lineHeight ?? 1.5,
  //     textDecoration: decoration ?? "none",
  //     textTransform: transformation ?? "none",
  //     fontStyle: fontStyle ?? "none",
  //     fontVariant: fontVariant ?? "normal",
  //     textIndent: `${textIndent}px` ?? "0px",
  //     letterSpacing: `${letterSpacing}px` ?? "0px",
  //     wordSpacing: `${wordSpacing}px` ?? "0px",
  //     border: "1px solid black",
  //     borderRadius: "5px",
  //     borderLeft: mandatory ? "3px solid #0773e6" : "none",
  //     padding: "10px",
  // };
  return (
    //         <div>
    //             text
    //         </div>
    //     );
    // };
    <NbTextbox
      caption="NbTextbox"
      // endIcon={
      //     <svg fill="none" height="19" viewBox="0 0 19 19" width="19" xmlns="http://www.w3.org/2000/svg">
      //         <rect fill="#293241" height="19" width="19" />
      //         <rect fill="#4D5563" height="19" rx="9.5" width="19" />
      //         <path d="M9.5 19L17.7272 4.75H1.27276L9.5 19Z" fill="#C5C7CB" />
      //     </svg>
      // }
      // mandatory
      // name="NbTextbox"
      // onChange={function noRefCheck() {}}
      // onTask={function noRefCheck() {}}
      size="large"
      value="textbox"
    />
  );
};
//   return (
//     <div>
//         {!hideCaption && caption && (
//         <label htmlFor={id}>
//             {caption}
//         </label>
//         )}
//         <div data-disabled={disabledState} className="text-widget" style={computedStyles} data-cy={dataCy}>
//             <div  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
//                 <div
//                     style={{ width: '100%', fontSize: textSize }}
//                     dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(value) }}
//                 />
//             </div>
//         </div>
//     </div>
//   );
// };
