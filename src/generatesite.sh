#!/bin/sh

OUTPUTFILE=sunsets.html
IMAGESFILE=images.txt
IMAGEDIR=sunsets
HTMLHEAD=html-head.html
HTMLTEMPLATE=html-image-template.html
HTMLFOOT=html-foot.html
i=1

cat $HTMLHEAD > $OUTPUTFILE

while read imagename; do
  echo "$i: Adding $imagename"
  cat $HTMLTEMPLATE | sed "s/IMAGENAME/$imagename/g" | sed "s/IMAGENUM/$i/g" | sed "s/IMAGEDIR/$IMAGEDIR/g">> $OUTPUTFILE
  let "i+=1" 
done <$IMAGESFILE

cat $HTMLFOOT >> $OUTPUTFILE