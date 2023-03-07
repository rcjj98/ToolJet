import React, { useState, useEffect, useCallback } from 'react';
//import DOMPurify from "dompurify";
import { NbTextbox } from '@nebula/rui-components';
//import { NbTextbox } from "@/_components/textbox/NbTextbox.tsx";

// export default function OldRamcoTextbox() {
//     return (<NbTextbox>
//         </NbTextbox>);
// }
// IMPORT PACKAGES
// import React, { useState, useEffect, useCallback } from 'react';
// IMPORT NEBULA COMPONENTS
// import { NbTextbox } from '@nebula/components';
// import { NbTextbox } from '../../../nebulacomponents/atoms/textbox/NbTextbox';
export const OldRamcoTextbox = () => {
  return (
    <>
      <NbTextbox
        name={'id'}
        //{...metaData?.commonProps}
        caption={'text'}
        //className={name}
        disabled={false}
        value={'hello world'}
        //   onValueChange={()=>{}}
        //   helpTaskName={metaData?.hasHelp ? metaData?.helpTask : undefined}
        //   taskName={metaData?.commonProps?.task ? metaData?.commonProps?.task : undefined}
        // onTask={() => { }}
        // onEnter={() => { }}
      />
    </>
  );
};
//export default OldRamcoTextbox;
