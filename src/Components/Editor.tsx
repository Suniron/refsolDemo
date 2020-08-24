import React from "react"
import SunEditor, { buttonList } from 'suneditor-react';
import plugins from 'suneditor/src/plugins'
import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File

export default () => <SunEditor 
    lang="fr" 
    setOptions={{
        buttonList: buttonList.complex,
        plugins: plugins
    }} 
    height={window.innerHeight *0.7} 
    placeholder="Commencez votre Refsol ici... Vous pouvez y glisser-deposer ou copier/coller du texte contenant des images."
    autoFocus={true}
    
    />