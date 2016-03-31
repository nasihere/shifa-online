#!/bin/bash
#By Nate Flink

#Invoke on the terminal like this
#curl -s https://gist.github.com/nateflink/9056302/raw/findreplaceosx.sh | bash -s "find-a-url.com" "replace-a-url.com"
#INSERT INTO tbl_shifa VALUES(NULL,NULL,'Kent','Mind|shrieking|children|in',0,'Mind',0,1,'In','anac,1:apis,2:bell,1:benz-ac,1:bor,3:calc,1:calc-p,2:cham,2:cina,2:coff,1:cupr,1:dor,1:dulc,1:hell,2:ign,2:ip,1:jal,2:kali-br,1:kreos,2:lac-c,3:lyc,1:rheum,2:senn,2:stram,1:',
	#'24','Mind|shrieking|children','','');

#INSERT INTO tbl_shifa 
#(_id,x3,book,title,sublevel,maincategoy,process,level,Name,Remedies,Intensity,categoy,x1,x2) VALUES(NULL,NULL,'Kent','Mind|shrieking|children|in',0,'Mind',0,1,'In','anac,1:apis,2:bell,1:benz-ac,1:bor,3:calc,1:calc-p,2:cham,2:cina,2:coff,1:cupr,1:dor,1:dulc,1:hell,2:ign,2:ip,1:jal,2:kali-br,1:kreos,2:lac-c,3:lyc,1:rheum,2:senn,2:stram,1:','24','Mind|shrieking|children','','');
#INSERT INTO tbl_report VALUES(`Abdomen`,1,`agar`,3,197,`Abdomen, Anxiety in`,0);
#INSERT INTO tbl_rem_info 
#VALUES('','','','','','','','','','','','','','','','','','',
	#NULL,'<p align=\'CENTER\'><b><font color=\'#004080\'><big><big><big>Diphtherinum.</big></big><br> </big>Homeopathic Antitoxin. (A Nosode.)</font></p> </b> <p align=\'JUSTIFY\'>Especially adapted to the strumous diathesis; scrofulous, psoric or tuberculous persons, prone to catarrhal affections of throat and respiratory mucus membranes. Patients with weak or exhausted vitality hence are extremely susceptible to the diphtheritic virus; when the attack from the onset tends to malignancy (Lac. c., Mer. cy.). Painless diphtheria; symptoms almost or entirely objective; patient too weak, apathetic or too prostrated to complain; sopor or stupor, but easily aroused when spoken to (Bap., Sulph.). Dark red swelling of tonsils and palatine arches; parotid and cervical glands greatly swollen; breath and discharges from throat, nose and mouth very offensive; tongue swollen, very red, little coating. Diphtheritic membrane, thick, dark gray or brownish black; temperature low or subnormal, pulse weak and rapid; extremities cold and marked debility; patient lies in a semi-stupid condition; eyes dull, besotted (Apis, Bap.). Epistaxis or profound prostration from very onset of attack (Ali., Apis, Carb. ac.); collapse almost at very beginning (Crot., Mer. cy.); pulse weak, rapid and vital reaction very low. Swallows without pain, but fluids are vomited or returned by the nose; breath horribly offensive. Laryngeal diphtheria, after Chlor., Kali bi., or Lac c. fail; post diphtheritic paralysis, after Caust., Gels. fail. When the patient from the first seems doomed, and <font color=\'#800000\'><i>the most carefully selected remedies fail to relieve or permanently improve</i></font>. The above are cured symptoms, verifications which the author has found guiding and reliable for twenty-five years. The remedy is prepared, like all nosodes and animal poisons, according to the Homeopathic Pharmacopoea, and like all homeopathic remedies is entirely safe when given the sick. Like all the nosodes, it is practically worthless in potencies below the 30th; its curative value also increases with increase of potency from the 200th to the m. and c. m. <font color=\'#ff0000\'><b>It need not and should not be repeated too frequently:</b></font> It will cure in every case that crude antitoxin will and is not only easy to administer, but safe and entirely free from dangerous sequellae. Besides, it is homeopathic. The author has used it for twenty-five years as a prophylactic and has never known a second case of diphtheria to occur in a family after it had been administered. The profession is asked to put it to the test and publish the failures to the world.</p>  
	#',NULL,NULL,NULL,660,'Diph',NULL);

#CREATE TABLE IF NOT EXISTS `tbl_rem_info` 


FIND='`'
REPLACE="'"

#needed for byte sequence error in ascii to utf conversion on OSX
export LC_CTYPE=C;
export LANG=C;

#sed -i "" is needed by the osx version of sed (instead of sed -i)
find . -name '*.sql' -exec sed -i "" "s|${FIND}|${REPLACE}|g" {} +
exit 0