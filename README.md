# visualDon-SalaireMensuelBrut

**Contexte : d'où viennent les données, qui les a créées et dans quel contexte ?**
https://opendata.swiss/fr/dataset/monatlicher-bruttolohn-nach-tatigkeit-schweiz-und-grossregionen

Ce jeu de donnée présente le salaire mensuel brut selon la région où travaille l'employé.e, son domaine d'activité, son niveau de qualification et son sexe. Les données représentent ce sujet de 2002 à 2010 et sont récoltées tous les 2 ans. Les années d'observation sont donc 2002, 2004, 2006, 2008 et 2010.
Les données proviennent du site opendata.swiss et appartiennent à l'OFS (office fédéral de la statistique) - elles sont issues de l’enquête sur la structure des salaires (ESS). 
C'est un sondage réalisé tous les deux ans auprès des entreprises en Suisse. Il permet de décrire la structure des salaires dans l'ensemble des branches économiques du secteur tertaires, c'est-à-dire, l'ensembles des services, mais aussi du secteur secondaire ce qui représente les entreprises qui dégage un bénéfice issus de la transformation de matières premières. Il prend en compte non seulement la branche économique, la taille de l’entreprise concernée, mais également les caractéristiques individuelles des salarié.es et des postes de travail.


**Description Comment sont structurées les données ? Parler du format, des attributs et du type de données ?**

Afin que toutes les données soient représentés à la même échelle, le salaire mensuel est standarisé à un plein temps de 40 heures de travail par semaine. Le mois est composé de 4,3 semaines. Les données sont présentés sous forme de tableau. Les variables suivantes représentent les composantes du tableau : Année, grande région, domaine d'activité, niveau de qualification et sexe. L'utilisateur doit sélectionner les options qu'il souhaite afficher dans son tableau (par exemple, les chiffres pour toute la Suisse, les années 2002 et 2004, dans le domaine des activités pédagogiques, etc.). Les chiffres affichés ensuite dépendent donc du choix de l'utilisateur. 

La structure des données, donc les différentes options possible pour la visualisation des données, est disponible en format JSON : https://www.pxweb.bfs.admin.ch/api/v1/fr/px-x-0304010000_101/px-x-0304010000_101.px

Une API JSON est également disponible, elle ne contient cependant pas les données brutes, mais simplement des liens vers les options à choisir, avec les différentes options disponibles, tout ça dans nos trois langues nationales : https://ckan.opendata.swiss/api/3/action/package_show?id=monatlicher-bruttolohn-nach-tatigkeit-schweiz-und-grossregionen

Parallèlement aux JSON, il y a un fichier XML disponible au téléchargement. Il contient les mêmes informations que l'API JSON. 

Le défi ici semblera d'être la récupération et la visualisation des données récupérées à travers les liens de l'API, et non du JSON directement. 


**But: qu'est-ce que vous voulez découvrir ? Des tendances ? Vous voulez explorer ou expliquer ?**

Dans un premier temps, nous souhaitons explorer et comprendre quels sont les facteurs qui nécessite des écarts de salaire mensuel brut. Est-ce que la localisation de l'entreprises a un gros impact sur la définition du salaire ? Est-ce que le niveau de formation demandé constitue un grand facteur pour définir le salaire ? Nous pourrons également observer les différences salariales entre les différents secteurs d'activité.

Nous souhaiterons aussi voir s'il y a une une évolution positive au fil des années concernant les inégalités de salaire entre les sexes. En effet, les entreprises de nos jours tentent de plus en plus d'appliquer l'égalité salariale. Ainsi nous aimerions voir quels sont les secteurs d'entreprises qui étaient en avance sur leur temps, en appliquant l'égalité des sexes et au contraire quels secteurs ne privigiligiaient pas l'égalité.

**Références: Qui d'autre dans le web ou dans la recherche a utilisé ces données ? Dans quel but ?**

Cette enquête représente une importante source d'informations pour les entreprises, les partenaires sociaux et le grand public. Ses résultats sont par exemple utilisés dans les domaines de la politique du travail, des négociations salariales, des comparaisons entre branches ou des questions d'égalité des salaires entre femmes et hommes.
Elles sont également utilisés pour être envoyé aux personnes qui souhaitent avoir accès aux mises à jour des données en s'inscrivant à la newsletter de l'OFS.


