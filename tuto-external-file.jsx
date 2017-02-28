﻿var newFile = File.openDialog ("Choisir un fichier texte");if (newFile != null){   var a = readDocument(newFile, 0).contentAry;   /*        readDocument est une fonction que l'on va créer        0 est le nombre de ligne que l'on veut sauter        .contentAry est une méthode de readDocument    */    app.beginUndoGroup("Import Text");        createNewComps(a);    app.endUndoGroup();}/*    La fonction readDocument :    - prends deux paramètres en entrée :         - Le fichier sélectionné : inputDoc        - le nombre de lignes à sauter     - Le fichier sélectionné est stocké dans une variable (curDoc) de type File via le constructeur    - Un test sur cette variable est réalisé :         - Si il y a du contenu dans la variable / si un document a bien été chargé :            - On crée un nouveau tableau stocké dans une variable (contentAry);            - On ouvre le document (curDoc) via le mode read de la méthode .open            - On fait une boucle dessus pour en extraire le contenu tant qu'il y en a (eof = end of file)        - On ferme le document        - On précise le nombre de ligne à sauter        - On crée une variable (contentList) dans laquelle on stocke le tableau que l'on "joint" (remplacer les , entre les éléments par un caractère perso.).*/function readDocument(inputDoc, linesToSkip){    var curDoc = new File(inputDoc);    if (curDoc.exists){        var contentAry = new Array;        curDoc.open ("r");        while (!curDoc.eof){            contentAry[contentAry.length] = curDoc.readln();        }    curDoc.close();    }    contentAry.splice(0,linesToSkip);    var contentList = contentAry.join("_spcr_").toString().replace(new regExp("_spcr_","g"), "\r");    contentAry = contentAry;    return{        'contentAry:' contentAry,        'contentList:' contentList    }}