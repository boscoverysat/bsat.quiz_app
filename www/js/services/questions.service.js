app.service('questionsService', function(){
  'use strict';

  this.getQuestion = function() {
    var questionIndex = Math.floor(Math.random() * this.questions.length);

    return this.questions[questionIndex];
  };

  this.questions = [
    {
      "id":1,
      "question":"¿Es cierto que en el espacio no hay gravedad?",
      "answer1":"No, es falso.",
      "answer2":"Sí, es cierto.",
      "explanation":"¿Cuerpos flotando? No hay duda, en el espacio no hay gravedad ¿Cierto? ¡Error! \n\nLa famosa Ley de la Gravitación Universal de sir Isaac Newton dice: \n\n\"Dos masas cualesquiera (m1, m2) se atraen con una fuerza proporcional (F) al producto de sus masas e inversamente proporcional al cuadrado de las distancias (r) que las separan.\" \n\nLa fuerza gravitatoria se hace nula solo cuando la distancia entre dichas masas es infinita. No obstante el concepto de infinito es problemático cuando se traslada a la realidad, pues nunca seremos capaces de separar dos masas infinitamente, luego la fuerza gravitatoria nunca será 0. Se concluye así que el alcance de la gravedad es ilimitado, llega a todas partes; eso sí con una intensidad que varía según el cuadrado de la distancia. Como curiosidad: la gravedad a 400 Km de la superficie terrestre (donde se encuentra la ISS) es de tan solo un 10% menor que la que experimentamos habitualmente.",
      "level":"Medio"
    },
    {
      "id":2,
      "question":"¿Qué satelite natural orbita arededor de la tierra?",
      "answer1":"La luna",
      "answer2":"El sol",
      "explanation":"La luna ya que es el unico satelite natural de la tierea , y gira alrededor de su eje (rotación) en aproximadamente 27.32dias .\n",
      "level":"Fácil"
    },
    {
      "id":3,
      "question":"¿Qué país lanzó el Sputnik?",
      "answer1":"Unión Soviética",
      "answer2":"Estados Unidos",
      "explanation":"La nave Sputnik 1 fue el primer intento no fallido de poner en órbita un satélite artificial alrededor de la Tierra. Se lanzó desde el Cosmódromo de Baikonur en Tyuratam, en Kazajistán, antes parte de la Unión Soviética",
      "level":"Fácil"
    },
    {
      "id":4,
      "question":"¿Cómo se llamaba el primer animal que fue al espacio?",
      "answer1":"Laika.",
      "answer2":"Tota.",
      "explanation":"Laika (en ruso Лайка, ‘ladradora’; Moscú, 1954 - Sputnik 2, Órbita baja terrestre, 3 de noviembre de 1957) fue una perra espacial soviética que se convirtió en el primer ser vivo terrestre en orbitar la Tierra. Lo hizo a bordo de la nave soviética Sputnik 2, el 3 de noviembre de 1957. Fuente Wikipedia.",
      "level":"Fácil"
    },
    {
      "id":5,
      "question":"¿Plutón se considera un planeta?",
      "answer1":"No",
      "answer2":"Si",
      "explanation":"Debido a su tamaño, pero continúa integrando en el Sistema Solar como planeta enano.",
      "level":"Fácil"
    },
    {
      "id":6,
      "question":"¿En qué puesto está situado Neptuno en el Sistema Solar? ",
      "answer1":"En el octavo puesto.",
      "answer2":"En el quinto puesto.",
      "explanation":"Neptuno es el octavo planeta en distancia respecto al Sol y el más lejano del sistema solar.",
      "level":"Fácil"
    },
    {
      "id":7,
      "question":"¿En qué puesto está situado Urano del Sistema Solar?",
      "answer1":"Séptimo puesto.",
      "answer2":"Décimo puesto.",
      "explanation":"Urano es el séptimo planeta del Sistema Solar, el tercero en cuanto a mayor tamaño, de mayor a menor, y el cuarto más masivo. ",
      "level":"Fácil"
    },
    {
      "id":8,
      "question":"¿Cuál es el planeta más grande que se conoce?",
      "answer1":"Jupiter",
      "answer2":"La luna",
      "explanation":"El planeta mas grande que conocemos es júpiter, es un planeta 1400 veces mas grandes que la tierra , es trece veces mas grandes que todos los planetas del sistema solar junto.Si fuera mas grande se convertiría en una estrella incandescente como el sol.",
      "level":"Medio"
    },
    {
      "id":9,
      "question":"¿Por qué un satélite no se cae sobre su planeta?",
      "answer1":"Por su punto de equilibrio.",
      "answer2":"Por una línea invisible que lo sujeta.",
      "explanation":"Se equilibran las fuerzas centrífuga, la que tiende a alejar a un cuerpo del centro de rotación, y fuerza centrípeta, la que tiende a arrastrarlo hacia el centro.",
      "level":"Medio."
    },
    {
      "id":10,
      "question":"¿Quién fue el primero en descubrir Urano?",
      "answer1":"Sir William Herschel",
      "answer2":"Vicente Gaos",
      "explanation":"Sir William Herschel fue el primero en descubrir Urano, el 13 de marzo de 1781. Sin embargo, él pensó que se trataba de un nuevo cometa.",
      "level":"Alto"
    },
    {
      "id":11,
      "question":"¿Cuándo se descubrió Neptuno?",
      "answer1":"23 de septiembre de 1846.",
      "answer2":"17 de octubre de 1845.",
      "explanation":"Neptuno fue descubierto el 23 de septiembre de 1846 mediante cálculos matemáticos.",
      "level":"Medio"
    },
    {
      "id":12,
      "question":"¿Cómo se denomina la trayectoria que hace un satélite alrededor de un planeta?",
      "answer1":"Órbita.",
      "answer2":"Asteroide.",
      "explanation":"La trayectoria que sigue un satélite alrededor de un planeta se denomina órbita",
      "level":"Fácil"
    },
    {
      "id":13,
      "question":"¿Gira el Sol?",
      "answer1":"Sí, el Sol gira, o rota.",
      "answer2":"No, el Sol nunca gira.",
      "explanation":"Como es un gas, no rota como un sólido. El Sol gira más rápido en su ecuador que en sus polos. Rota una vez cada 27 días en su ecuador, pero sólo una vez cada 31 días en sus polos. ",
      "level":"Medio"
    },
    {
      "id":14,
      "question":"¿Qué planeta tiene las mismas similitudes a la tierra? ",
      "answer1":"Kepler-452b",
      "answer2":"Saturno",
      "explanation":"Se trata de Kepler-452b y es el primer planeta con un tamaño similar a la Tierra -sólo 60% más grande- y está ubicado en una zona habitable de una estrella muy similar a nuestro Sol.Este tiene el potencial de tener agua en estado liquido.",
      "level":"Alto"
    },
    {
      "id":15,
      "question":"¿Cuál es el planeta con mayor masa del Sistema Solar?",
      "answer1":"Júpiter ",
      "answer2":"Saturno",
      "explanation":"Porque Júpiter equivale a unas 2,48 veces la suma de todos los demás  planetas juntos",
      "level":"Fácil"
    },
    {
      "id":16,
      "question":"¿Cómo se llama el punto más lejano y el punto más cercano a una Órbita?",
      "answer1":"Apogeo y Perigeo",
      "answer2":"Sol y Luna",
      "explanation":"El punto más lejano de una órbita de forma elíptica se denomina apogeo,mientras que el punto más cercano se denomina perigeo",
      "level":"Medio"
    },
    {
      "id":17,
      "question":"¿Quién creó el primer satélite artificial?",
      "answer1":"Estados Unidos.",
      "answer2": "Eisenhower.",
      "explanation":"El 4 de octubre de 1957 Estados Unidos lanza su primer satelite artificial.",
      "level":"Fácil"
    },
    {
      "id":18,
      "question":"¿Cuándo se descubrió Urano?",
      "answer1":"13 de marzo de 1781.",
      "answer2":"25 de noviembre de 1836.",
      "explanation":"Se descubrió Urano mientras se investigaba sobre las estrellas en el cielo nocturno.",
      "level":"Medio"
    },
    {
      "id":19,
      "question":"¿Cuantos planetas hay en nuestro sistema solar?",
      "answer1":"7",
      "answer2":"2000",
      "explanation":"Ellos son Marte , Mercurio , Júpiter, Venus , Saturno ,Urano y la tierra . Estos son los planetas del sistema solar ",
      "level":"Fácil"
    },
    {
      "id":22,
      "question":"¿Pueden todos los planetas del sistema solar alinearse?",
      "answer1":"Si",
      "answer2":"No, nunca.",
      "explanation":"Los planetas no se alinean, muchos de ellos suelen estar en la misma región en algunos momentos específicos. La próxima configuración planetaria será en 2040 cuando Saturno, Venus, Júpiter y Marte lo hagan, pero como vemos, no todos los planetas participan de esto. Esto curre cada 200 años.",
      "level":"Alto"
    },
    {
      "id":23,
      "question":"¿Qué año fue el primer lanzamiento de un Satélite de España con la ayuda de la N.A.S.A.?",
      "answer1":"1974",
      "answer2":"2002",
      "explanation":"Fue el primer satélite de fabricación española, se lanzó en el año 1974 y se llamaba Intasat.",
      "level":"Alto"
    },
    {
      "id":24,
      "question":"¿Qué función tiene un satélite artificial?",
      "answer1":"Para realizar telecomunicaciones.",
      "answer2":"Sirve para ver la Luna.",
      "explanation":"También sirven principalmente para realizar telecomunicaciones y en ocasiones, también se usan para investigar el espacio exterior.",
      "level":"Medio"
    },
    {
      "id":25,
      "question":"¿El sol es un planeta?",
      "answer1":"No, es una estrella ",
      "answer2":"Es un asteroide",
      "explanation":"El sol es una estrella del tipo espectral G2 que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.",
      "level":"Fácil"
    },
    {
      "id":26,
      "question":"¿Cuántos anillos tiene Neptuno?",
      "answer1":"Cinco anillos.",
      "answer2":"Ocho anillos.",
      "explanation":"El sistema consta de cinco anillos que reciben el nombre de los astrónomos más relevantes en la investigación de Neptuno.",
      "level":"Medio"
    },
    {
      "id":27,
      "question":"¿Qué edad tiene la Tierra?",
      "answer1":"Entre 4,5 y 4,8 billones de años",
      "answer2":"Entre 7,3 y 8 billones de años.",
      "explanation":"Se piensa que la Tierra tiene entre 4.5 y 4.8 billones de años de edad.",
      "level":"Medio"
    },
    {
      "id":28,
      "question":"¿Qué es un satélite?",
      "answer1":"Un cuerpo en órbita.",
      "answer2":"Un cuerpo al lado de un planeta.",
      "explanation":"Se denomina satélite natural a todo cuerpo que se encuentra en órbita en torno a un planeta de mayor masa, el cual ejerce sobre el satélite una atracción gravitacional. \n",
      "level":"Fácil"
    },
    {
      "id":29,
      "question":"¿Qué nombres poseen los anillos de Neptuno?",
      "answer1":"Galle, Le Verrier, Lassell, Arago y Adams.",
      "answer2":"Titania, Umbriel, Miranda, Ariel, Puck.",
      "explanation":"Del más interior al más exterior son: Galle, Le Verrier, Lassell, Arago y Adams.",
      "level":"Alto"
    },
    {
      "id":30,
      "question":"¿Qué distancia hay de la Tierra a la Luna?",
      "answer1":"384.400 km",
      "answer2":"390.725 km",
      "explanation":"Distancia a la Tierra, 384.400 km",
      "level":"Medio"
    },
    {
      "id":31,
      "question":"¿Quién fue el primero que descubrió el anillo de Saturno?",
      "answer1":"Galileo",
      "answer2":"Aristóteles",
      "explanation":"Y que lo vió y pensaba que era una Luna",
      "level":"Medio"
    },
    {
      "id":32,
      "question":"¿De que están echos los anillos planetarios?",
      "answer1":"De polvo y partículas pequeñas.",
      "answer2":"De gas.",
      "explanation":"Un anillo planetario es un anillo de polvo y otras partículas pequeñas que gira alrededor de un planeta. Los más espectaculares y conocidos desde la época telescópica son los anillos de Saturno.",
      "level":"Fácil"
    },
    {
      "id":33,
      "question":"¿Cuánto tarda la Luna en dar una vuelta sobre sí misma?",
      "answer1":"Tarda 28 días terrestres.",
      "answer2":"No gira.",
      "explanation":"Sí gira, pero como siempre le vemos la misma cara, la gente piensa que no.",
      "level":"Fácil"
    },
    {
      "id":34,
      "question":"¿De qué están compuestos principalmente los anillos de Neptuno?",
      "answer1":"Principalmente de polvo.",
      "answer2":"Está compuestos por hidrocarburos.",
      "explanation":"Compuestos principalmente de polvo cuya presencia fue confirmada en 1989 por la sonda espacial Voyager 2.",
      "level":"Medio"
    },
    {
      "id":35,
      "question":"¿Cuál es la fase de la Luna en eclipse lunar?",
      "answer1":"Luna Llena.",
      "answer2":"Luna Nueva.",
      "explanation":"Los eclipses lunares se producen siempre que la Luna esté en fase Llena y siempre que el Sol, la Tierra y la Luna estén alineados. Entonces la Luna se encuentra en la sombra producida por la Tierra, creando así el eclipse.",
      "level":"Fácil"
    },
    {
      "id":36,
      "question":"¿Cuál es la superficie de Urano?",
      "answer1":"8.083.079.690 km².",
      "answer2":"5.693.592.096 km².",
      "explanation":"Tiene una masa de 86,81E24 kg (14,54 Masa terrestre) y una superficie de 8.083.079.690 km².",
      "level":"Medio"
    },
    {
      "id":37,
      "question":"¿Por qué es Sol se llama así?",
      "answer1":"Por su origen latíno sol, solis.",
      "answer2":"Porque se lo puso Torricelli.",
      "explanation":"Algunas palabras del latín relacionadas con sol es solium, que quiere decir \"trono, sitial\" –quizá por eso, los romanos llamaban a nuestra estrella el carro o trono de Apolo, y los egipcios, el carro de Amón. La raíz se remonta al presánscrito sû, que significa “el que genera vida”.",
      "level":"Alto"
    },
    {
      "id":38,
      "question":"¿Cuál es la característica que diferencia a Saturno de los demás planetas del Sistema Solar?",
      "answer1":"Los anillos que tiene en su órbita.",
      "answer2":"Su meteorología",
      "explanation":"Porque en su órbita están unos anillos que los diferencian de otros planetas",
      "level":"Medio"
    },
    {
      "id":39,
      "question":"¿Cómo son los anillos de Neptuno?",
      "answer1":"Son anillos planetarios tenues y débiles.",
      "answer2":"Son campos magnéticos visibles.",
      "explanation":"Son un sistema de anillos planetarios muy tenues y débiles.",
      "level":"Alto"
    },
    {
      "id":40,
      "question":"¿Cuál es la distancia entre Júpiter y el Sol?",
      "answer1":"750 millones de kilómetros.",
      "answer2":"850 millones de kilómetros",
      "explanation":"Su distancia del Sol es de 750 millones de kilómetros del Sol.",
      "level":"Alto"
    },
    {
      "id":41,
      "question":"¿Cuántos satélites naturales tiene Saturno?",
      "answer1":"150 + 53 (menores).",
      "answer2":"150 + 20 (menores).",
      "explanation":"Saturno tiene 150 satélites + 53 satélites menores, que son pequeños.",
      "level":"Alto"
    },
    {
      "id":42,
      "question":"¿Por qué la Luna se llama así?",
      "answer1":"Porque se deriva de una palabra.",
      "answer2":"No se sabe.",
      "explanation":"Procedía de la raíz indoeuropea leuk-, presente en el griego leukós, que significa blanco brillante.",
      "level":"Medio"
    },
    {
      "id":44,
      "question":"¿Cuántos satélites orbitan alrededor de Neptuno?",
      "answer1":" Un total de 13 satélites.",
      "answer2":"Un total de 5 satélites.",
      "explanation":"Hasta agosto de 2004 se habían descubierto un total de 13 satélites de Neptuno.",
      "level":"Alto"
    },
    {
      "id":45,
      "question":"¿Qué es la Luna?",
      "answer1":"Un satélite",
      "answer2":"Una estrella",
      "explanation":"La Luna es el único satélite natural de la Tierra.",
      "level":"Fácil"
    },
    {
      "id":46,
      "question":"¿Qué es la NASA?",
      "answer1":"La encargada de investigar el universo.",
      "answer2":"Una secta que estudia los animales ",
      "explanation":"Administración Nacional de la Aeronáutica y del Espacio de los Estados Unidos , aquella que investiga el universo y hace estudios .",
      "level":"Medio"
    },
    {
      "id":47,
      "question":"¿Por qué se le llama a los planetas así?",
      "answer1":"Procede del griego.",
      "answer2":"No se sabe porque.",
      "explanation":"Procede del griego planetai, que significa “errante, vagabundo”. ",
      "level":"Medio"
    },
    {
      "id":48,
      "question":"¿Cuál es la gran formación meteorológica que hay en Júpiter?",
      "answer1":"La Gran Mancha Roja.",
      "answer2":"La Gran Tormenta.",
      "explanation":"Es una pequeña tipo de tormenta ",
      "level":"Alto"
    },
    {
      "id":49,
      "question":"¿Cuál es la estrella más grande del Sistema Solar?",
      "answer1":"El Sol",
      "answer2":"La Estrella Polar",
      "explanation":"La pregunta trata sobre la estrella más grande del sistema solar",
      "level":"Fácil"
    },
    {
      "id":50,
      "question":"¿Cuándo se descubrieron los primeros 9 anillos de Saturno?",
      "answer1":"En 1977.",
      "answer2":"En 1890.",
      "explanation":"En 1977 se descubrieron los 9 primeros anillos de Urano. En 1986, la visita de la nave Voyager permitió medir y fotografiar los anillos, y descubrir dos nuevos.",
      "level":"Medio"
    },
    {
      "id":51,
      "question":"¿Qué planeta está antes que la Tierra? (Próximo al Sol)",
      "answer1":"Venus.",
      "answer2":"Marte.",
      "explanation":"Porque el orden de los planetas es: Mercurio, Venus, Tierra, Marte, Júpiter, Saturno, Urano y Neptuno.",
      "level":"Fácil"
    },
    {
      "id":52,
      "question":"¿Cuál es el planeta del Sistema Solar que está más cerca del Sol?",
      "answer1":"Mercurio",
      "answer2":"Venus",
      "explanation":"Se dice que es el planeta del Sistema Solar más pequeño y próximo al Sol.",
      "level":"Medio"
    },
    {
      "id":53,
      "question":"¿Qué gravedad hay en Neptuno?",
      "answer1":"11 m/s2",
      "answer2":"23,12 m/s2",
      "explanation":"La fuerza de la gravedad de los demás planetas va a depender de su tamaño y su densidad. Peso = 8.16 x 11 = 89.76 kg ",
      "level":"Alto"
    },
    {
      "id":54,
      "question":"¿Es Plutón un planeta?",
      "answer1":"No.",
      "answer2":"Si.",
      "explanation":"Ya no se considera planeta ya que es muy pequeño.",
      "level":"Fácil"
    },
    {
      "id":55,
      "question":"¿Cuál es el Planeta más grande?",
      "answer1":"Júpiter",
      "answer2":"Saturno",
      "explanation":"Porque Júpiter tiene más dimensiones que Saturno",
      "level":"Fácil"
    },
    {
      "id":56,
      "question":"¿Cuántos satélites tiene la Tierra?",
      "answer1":"Uno.",
      "answer2":"Ninguno.",
      "explanation":"Uno, llamado La Luna.",
      "level":"Fácil"
    },
    {
      "id":57,
      "question":"¿Qué es el Sol, un satélite o una estrella?",
      "answer1":"Una estrella.",
      "answer2":"Un satélite.",
      "explanation":"Es la estrella más grande del sistema solar.",
      "level":"Fácil"
    },
    {
      "id":58,
      "question":"¿Qué es el Sol?",
      "answer1":"el sol es una estrella",
      "answer2":" el sol es unmeteorito",
      "explanation":"El Sol es una estrella. Es una enorme esfera de gas caliente que está brillando y girando. Aparece mucho más grande y más brillante que las otras estrellas porque nosotros estamos muy cerca de él. El Sol es el centro de nuestro sistema solar. Todos los planetas en nuestro sistema solar, incluyendo la Tierra, giran alrededor del Sol.\n",
      "level":"Fácil"
    },
    {
      "id":59,
      "question":"¿Cuántos satélites tiene Júpiter?",
      "answer1":"68.",
      "answer2":"72.",
      "explanation":"Los satélites de Júpiter descubiertos hasta ahora son 67.",
      "level":"Medio"
    },
    {
      "id":60,
      "question":"¿Cuánto tiempo se tarda en llegar a Marte?",
      "answer1":"4 años ",
      "answer2":"25 meses",
      "explanation":"Según la NASA se tardaría en llegar a Marte 4 años.",
      "level":"Alto"
    },
    {
      "id":61,
      "question":"¿Cuántos años tiene la Luna?",
      "answer1":"4.527 mil millones de años.",
      "answer2":"3.983 mil billones de años.",
      "explanation":"Edad, 4,527 mil millones de años",
      "level":"Fácil"
    },
    {
      "id":62,
      "question":"¿Qué hay entre Marte y Júpiter?",
      "answer1":"El cinturón de asteroides.",
      "answer2":"El cinturón de Orión.",
      "explanation":"El cinturón de asteroides es una región del Sistema Solar comprendida aproximadamente entre las órbitas de Marte y Júpiter. Alberga multitud de objetos irregulares, denominados asteroides, y al planeta enano Ceres",
      "level":"Medio"
    },
    {
      "id":63,
      "question":"¿Qué superficie tiene Neptuno?",
      "answer1":"7.618.272.763 km²",
      "answer2":"2.877.000.000 km",
      "explanation":"El tercero en cuanto a mayor tamaño.",
      "level":"Alto"
    },
    {
      "id":64,
      "question":"¿Cómo se formó realmente la Luna?",
      "answer1":"Tras una colisión entre la Tierra y Theia.",
      "answer2":"Después de la explosión del Big Bang.",
      "explanation":"Nuestra Luna se formó después de una colisión entre la Tierra y otro planeta llamado Theia hace unos 4.500 millones de años",
      "level":"Medio"
    },
    {
      "id":65,
      "question":"¿Qué distancia tiene Neptuno desde el Sol?",
      "answer1":" 4.498.000.000 km",
      "answer2":"2.877.000.000 km",
      "explanation":"Como su órbita es elíptica, su distancia desde el Sol cambia dependiendo de dónde esté en su órbita.",
      "level":"Alto"
    },
    {
      "id":66,
      "question":"¿Quién fue la primera persona en pisar la Luna?",
      "answer1":"Neil Armstrong",
      "answer2":"Cristobal Colón",
      "explanation":"Neil Armstrong pisó la Luna el día 20 de Julio de 1969.",
      "level":"Fácil"
    },
    {
      "id":67,
      "question":"¿ En qué año el hombre pisó la Luna por primera vez?",
      "answer1":"En el año 1969.",
      "answer2":"En el año 1988.",
      "explanation":"Neil Armstrong pisó la Luna el 20 de Julio de 1969.",
      "level":"Alto"
    },
    {
      "id":68,
      "question":"¿Cuál es el planeta más cercano a La Tierra?",
      "answer1":"Venus.",
      "answer2":"Marte.",
      "explanation":"Cuando Venus llega a su punto más cercano, está a unos 38 millones de kilómetros de la Tierra, mientras que si tenemos en cuenta el otro planeta más cercano, Marte, la distancia mas próxima es de 55 millones de kilómetros de distancia la cual tuvo lugar en el año 2003.",
      "level":"Medio"
    },
    {
      "id":69,
      "question":"¿Dejará el Sol de brillar?",
      "answer1":"Si",
      "answer2":"No",
      "explanation":"Sí, pero no por un muy, muy largo tiempo. Las estrellas brillan porque una gran cantidad de energía es creada en sus centros por un proceso llamado fusión nuclear. La fusión nuclear sucede cuando los elementos ligeros, como el hidrógeno, son combinados en elementos pesados, como el helio. En aproximadamente 5 billones de años, el hidrógeno en el centro del Sol se acabará y el Sol ya no tendrá suficiente combustible para la fusión nuclear. Así que en 5 billones de años, el Sol dejará de brillar.",
      "level":"Medio"
    },
    {
      "id":70,
      "question":"¿Cuantos planetas hay en el sistema solar? ",
      "answer1":"8",
      "answer2":"9",
      "explanation":"Plutón no esta calificado como  un planeta dentro nuestro Sistema Solar ",
      "level":"Fácil"
    },
    {
      "id":71,
      "question":"¿A qué grupo de planetas pertenece Júpiter?",
      "answer1":"Planetas exteriores o gaseosos.",
      "answer2":"Principalmente los de hidrógeno y helio.",
      "explanation":"Júpiter, por su naturaleza masiva gaseosa y aunque esté formado principalmente por hidrógeno y helio, careciendo de una superficie interior definida, está englobado en el grupo de planetas Exteriores o Gaseosos.",
      "level":"Alto"
    },
    {
      "id":72,
      "question":"¿A qué distancia se encuentra La Tierra del Sol?",
      "answer1":"A 149.600.000 km.",
      "answer2":"A 100.000.000 km.",
      "explanation":"El Sol es una estrella del tipo espectral G2 que se encuentra en el centro del sistema solar y constituye la mayor fuente de radiación electromagnética de este sistema planetario.\nLa Tierra se encuentra a una distancia de 149.600.000 km del Sol.",
      "level":"Alto"
    },
    {
      "id":73,
      "question":"¿Qué es un año luz?",
      "answer1":"La distancia que recorre la luz en un año.",
      "answer2":"Es un año con mucha luz.",
      "explanation":"Un año luz es la distancia que recorre la luz en un año. Esta unidad de medida se usa para medir objetos muy lejanos debido a que la luz viaja a 315.400 kilómetros por segundo.",
      "level":"Fácil"
    },
    {
      "id":74,
      "question":"¿Qué temperatura tiene la superficie de Mercurio?",
      "answer1":"700 grados Kelvin.",
      "answer2":"78 grados Kelvin.",
      "explanation":"Mercurio es el planeta más cercano al Sol, por lo que su temperatura es extremadamente elevada. La distancia entre el planeta y el Sol es 57.910.000 km.",
      "level":"Alto"
    },
    {
      "id":75,
      "question":"¿En que punto, La Tierra está más cercana al sol?",
      "answer1":"Perihelio.",
      "answer2":"Afelio.",
      "explanation":"La Tierra gira alrededor del Sol, describiendo una órbita elíptica, a una velocidad media de 29,8 km/s (siendo máxima en el perihelio 30,75 km/s y mínima en el afelio 28,76 km/s)",
      "level":"Alto"
    },
    {
      "id":76,
      "question":"¿A cuanta distancia esta Marte de la Tierra?",
      "answer1":"225.300.000 km",
      "answer2":"300.000 km",
      "explanation":"Mediante ha pasado el tiempo se han enviado cohetes a marte los cuales miden la distancia que hay entre Marte y la Tierra.\n",
      "level":"Medio"
    },
    {
      "id":77,
      "question":"¿Qué tan largo es un día en Marte?",
      "answer1":"24.62 h.",
      "answer2":"23.934 h.",
      "explanation":"Un día de un planeta es el tiempo que le toma al planeta en rotar o girar una vez sobre su propio eje. Marte rota casi a la misma velocidad que la Tierra, así que un día en Marte es casi tan largo como un día en la Tierra.",
      "level":"Alto"
    },
    {
      "id":78,
      "question":"¿Cuántos Satélites Naturales tiene la Tierra?",
      "answer1":"1 satélite",
      "answer2":"5000 satélites",
      "explanation":"El Satélite Natural de la Tierra es La Luna y es el quinto satélite mas grande de nuestro Sistema Solar.",
      "level":"Fácil"
    },
    {
      "id":79,
      "question":"¿Cual es el satélite mas grande del Sistema Solar, y a que planeta pertenece?",
      "answer1":"Planeta Júpiter y satélite Ganímedes.",
      "answer2":"Planeta La Tierra y satélite La Luna.",
      "explanation":"El satélite mas grande del sistema solar pertenece en efecto, al planeta mas grande de nuestro sistema, Júpiter, dicho satélite posee  5262 km de diámetro, en cambio La Luna, pese a estar considerada uno de los satélites más grandes en relación a el planeta que orbita, posee solo 3474 km de diámetro.",
      "level":"Medio"
    },
    {
      "id":80,
      "question":"¿Quién fue el primer hombre en pisar La Luna?",
      "answer1":"Neil Armstrong.",
      "answer2":"Vladimir Vasilov.",
      "explanation":"El primer hombre en pisar La Luna fue Neil Armstrong, fue el 21 de julio de 1969. Iba a bordo del Apolo 11.",
      "level":"Fácil"
    },
    {
      "id":81,
      "question":"¿En qué constelación se encuentra la estrella Antares?",
      "answer1":"En la constelación de Escorpio.",
      "answer2":"En la constelación de Andrómeda.",
      "explanation":"Antares es la estrella más brillante de la constelación de Escorpio y recibe su nombre del Griego Anti Ares (Άντάρης) y significa \"el rival de Ares\" o \"el opuesto a Ares\".",
      "level":"Alto"
    },
    {
      "id":82,
      "question":"¿Cuál es el número de estrellas visibles desde la Tierra?",
      "answer1":"Aproximadamente 8.000 estrellas.",
      "answer2":"Aproximadamente 3.000 estrellas.",
      "explanation":"Se ha realizado un cálculo, de que desde la Tierra, hay unas 8.000 estrellas visibles, de las cuáles, 4.000 están en el hemisferio norte del cielo y 4.000 en el hemisferio sur. Por la noche, sólo son visibles 2.000 estrellas de cada hemisferio.",
      "level":"Alto"
    },
    {
      "id":83,
      "question":"¿De que está compuesto Neptuno?",
      "answer1":"De gases.",
      "answer2":"De hielo y roca.",
      "explanation":"Neptuno es el octavo planeta en distancia al Sol y es denominado como uno de los Gigantes Gaseosos. ",
      "level":"Medio"
    },
    {
      "id":84,
      "question":"¿Es La Luna el único cuerpo celeste en el que el ser humano ha realizado un descenso tripulado?",
      "answer1":"Sí.",
      "answer2":"No.",
      "explanation":"El programa Apolo de Estado Unidos consiguió realizar un descenso tripulado en La Luna, aunque la Unión Soviética también ha realizado dichos descensos pero sin tripulación a bordo.",
      "level":"Fácil"
    },
    {
      "id":85,
      "question":"¿En que año la unión Soviética lanza el primer satélite llamado Sputnik 1 al espacio?",
      "answer1":"El 4 de octubre de 1957.",
      "answer2":"El 31 de Diciembre de 2000.",
      "explanation":"El Sputnik 1 fue el primero de una serie de cuatro satélites que formaron parte del programa Sputnik de la antigua Unión Soviética y se planeó como una contribución al Año Geofísico Internacional.",
      "level":"Medio"
    },
    {
      "id":86,
      "question":"¿El Sol gira alrededor de la Tierra, o La Tierra gira alrededor del Sol?",
      "answer1":"La Tierra gira alrededor del Sol",
      "answer2":"El Sol gira alrededor de la Tierra",
      "explanation":"La Tierra gira alrededor del Sol a causa de la fuerza gravitacional del Sol.",
      "level":"Fácil"
    },
    {
      "id":87,
      "question":"¿De qué está compuesto el núcleo del sol?",
      "answer1":"Gas denso y caliente en estado de plasma.",
      "answer2":"Metales en forma de aleación caliente.",
      "explanation":"El sol se encuentra constituido en gran parte por hidrógeno y helio, además de otros elementos mínimos como el carbono, nitrógeno y oxígeno.",
      "level":"Medio"
    },
    {
      "id":88,
      "question":"¿Cual es el planeta mas frió del  Sistema Solar? ",
      "answer1":"Plutón",
      "answer2":"Mercúrio",
      "explanation":"Gracias a la distancia a la que esta Plutón del sol sus temperaturas llegan a los -234 grados centigrados. En cambio Mercúrio al ser el planeta más cercano tiene una temperatura de 465 grados centigrados.",
      "level":"Medio"
    },
    {
      "id":89,
      "question":"¿Se encuentra Mercurio a mas de 60 millones de Kilómetros del sol ? ",
      "answer1":"Falso",
      "answer2":"Verdadero ",
      "explanation":"Mercurio se encuentra respecto al Sol a  57.910.000 km.",
      "level":"Medio"
    },
    {
      "id":90,
      "question":"¿Cuál es la función de los satélites de reconocimiento?",
      "answer1":"Registrar el movimiento de personas.",
      "answer2":"Medio ambiente y la meteorología.",
      "explanation":"Los satélites de reconocimiento (denominados satélites espía), son utilizados por el cuerpo militar o cuerpos de inteligencia para la observación de personas y comunicación.",
      "level":"Fácil"
    },
    {
      "id":91,
      "question":"¿Cuántas constelaciones hay en la via lactea?",
      "answer1":"Son 88 constelaciones.",
      "answer2":"Son muchas más de 100.",
      "explanation":"Son 88 y su nombre hace referencia al dibujo que describen, 48 han llegado a nosotros desde la antigüedad por griegos y árabes el resto en la era moderna.",
      "level":"Medio"
    },
    {
      "id":92,
      "question":"¿Que ser vivo fue el primero en viajar al espacio en el satélite Sputnik 2?",
      "answer1":"Una perra llamada Laika.",
      "answer2":"Un humano llamado Gagarin.",
      "explanation":"El segundo  satélite es el  Sputnik 2 que fue lanzado  por la Unión Soviética que llevaba a una perrita llamada Laika.\nEl primer ser humano en viajar al espacio fue Gagarin y lo hizo a bordo de la nave Vostok 1.",
      "level":"Medio"
    },
    {
      "id":93,
      "question":"¿ A qué constelacion pertenece nuestro sistema solar?",
      "answer1":"A ninguna el Sol es una estrella.",
      "answer2":"A la constelacion solar",
      "explanation":"El sol es una estrella y esta  dentro de  un sistema llamado solar.",
      "level":"Medio"
    },
    {
      "id":94,
      "question":"¿En qué año fue el lanzamiento de la Voyager 1?",
      "answer1":"En 1977.",
      "answer2":"En 1999.",
      "explanation":"La Voyager 1 fue lanzada en 1977.",
      "level":"Medio"
    },
    {
      "id":95,
      "question":"¿Cuánto tiempo se tarda en llegar al espacio un cohete?",
      "answer1":"8 minutos.",
      "answer2":"1 hora",
      "explanation":"Un cohete va a una velocidad de 40320 km/h lo que lleva a la conclusión de que se tarda 8 minutos.",
      "level":"Medio"
    },
    {
      "id":96,
      "question":"¿En qué año se lanzó el módulo de Comando/Servicio Apolo 15?",
      "answer1":"1971",
      "answer2":"1981",
      "explanation":"Se lanzó el 2 de agosto de 1971, su autor fue la NASA.\nInformación sacada de Wikipedia.",
      "level":"Alto"
    },
    {
      "id":97,
      "question":"¿Cuál es el segundo gas más abundante del universo?",
      "answer1":"El Helio.",
      "answer2":"El Nitrógeno.",
      "explanation":"Es el Helio ya que su composición es de 275.200 en fracción de masa en partes por millón, que el Nitrógeno que solo consta de 1.105.\nClaramente el Orden de podio en este apartado sería Hidrógeno, Helio y Oxígeno.",
      "level":"Medio"
    },
    {
      "id":98,
      "question":"¿Cuál fue la primera sonda espacial?",
      "answer1":"Lunik 2",
      "answer2":"Ranger 3 ",
      "explanation":"La primera sonda espacial fue la Lunik 2. ",
      "level":"Medio"
    },
    {
      "id":99,
      "question":"¿Cuál fue la primera mujer en ir al espacio?",
      "answer1":"Valentina Terescova",
      "answer2":"Michelle Obama",
      "explanation":"La presidenta de Estados Unidos nunca ha ido al espacio.",
      "level":"Fácil"
    },
    {
      "id":100,
      "question":"¿Como podemos orientarnos por las estrellas? ",
      "answer1":"Por la estrella Polar",
      "answer2":"por la Osa Mayor",
      "explanation":"En el hemisferio Norte podemos orientarnos por la Estrella Polar, que es una de las que forman la constelacion llamada Osa Mayor; es muy brillante y siempre señala el Norte. Si la miramos, estamos mirando al Norte.",
      "level":"Medio"
    },
    {
      "id":101,
      "question":"¿Cual fue el primer satélite puesto en órbita?",
      "answer1":"El Sputnik 1, el 4 de octubre de 1957.",
      "answer2":"El Explorer 1, el 1 de febrero de 1958.",
      "explanation":"Cuando la esfera de aluminio dio la vuelta a la Tierra, los estadounidenses quedaron aturdidos ya que, un país que según ellos, era tecnológicamente inferior, los había superado.\n\nEn noviembre aumentó su consternación cuando los soviéticos pusieron en órbita el Sputnik II con la perra Laika a bordo.\n\nSus temores por el Sputnik tenían dos vertientes: el sorprendente logro de los soviéticos les daba ventaja en la guerra propagandística",
      "level":"Fácil"
    },
    {
      "id":102,
      "question":"¿Cuál fue la primera mujer en pisar la Luna?",
      "answer1":"Ninguna.",
      "answer2":"Oprah Winfrey.",
      "explanation":"A día de hoy todavía no existe ninguna mujer que haya pisado la Luna.",
      "level":"Medio"
    },
    {
      "id":103,
      "question":"¿Cuando fue el  primer vuelo del hombre al espacio?",
      "answer1":"El 12 de abril de 1961.",
      "answer2":"El 11 de abril de 1961.",
      "explanation":"El 12 de abril de 1961 el primer teniente de la Fuerza Aérea de la URSS, Yuri Alexéyevich Gagarin, realizó en la nave Vostok el primer vuelo tripulado al espacio en la historia",
      "level":"Medio"
    },
    {
      "id":104,
      "question":"¿Es lo mismo Astronave que Nave espacial?",
      "answer1":"Si",
      "answer2":"No",
      "explanation":"Si, porque es un sinónimo.",
      "level":"Fácil"
    },
    {
      "id":105,
      "question":"¿Cuál es la estrella más grande conocida hasta la actualidad? ",
      "answer1":"Westerlund 1-26",
      "answer2":"El Sol",
      "explanation":"El Sol es la estrella más cercana a nuestro Sistema Solar, pero no es nada comparado con el tamaño de estrellas como la hipergigante roja Westerlund 1-26, la UY Scuti o la VY Canis Majoris. Fuente: https://es.wikipedia.org/wiki/Anexo:Estrellas_m%C3%A1s_grandes_conocidas",
      "level":"Alto"
    },
    {
      "id":106,
      "question":"¿Las naves espaciales solo pueden ser tripuladas?",
      "answer1":"No",
      "answer2":"Si",
      "explanation":"No, ya que las naves espaciales pueden estar dirigidas desde la Tierra sin tripulante humano alguno.",
      "level":"Fácil"
    },
    {
      "id":107,
      "question":"¿Cual fue la primera maquina que llegó a la luna?",
      "answer1":"Apollo Guiding Computer",
      "answer2":"Apolo Giuding Paradise ",
      "explanation":"El computador responsable de las misiones Apolo fue el Apollo Guiding Computer (AGC), diseñado por el MIT Instrumentation Laboratory y fabricado por Raytheon, y uno de los primeros computadores en usar circuitos integrados - considerado el primer \"sistema embebido\".",
      "level":"Medio"
    },
    {
      "id":108,
      "question":"¿Por qué la Luna tiene tantos cráteres?",
      "answer1":"Por la caída de meteoritos sobre ella.",
      "answer2":"Debido a explosiones internas.",
      "explanation":"La Luna, al no tener atmósfera, recibe una gran cantidad de impactos de pequeños cuerpos que, si se producen en la zona no iluminada de la cara visible, podemos detectar desde la Tierra.",
      "level":"Fácil"
    },
    {
      "id":109,
      "question":"¿Cuál es el Nombre del planeta más parecido a la Tierra descubierto hasta el momento?",
      "answer1":"Kepler-452b",
      "answer2":"MOA-2011-BLG-322",
      "explanation":"El planeta más parecido a la Tierra descubierto hasta la fecha por la NASA es el Kepler-452b, esta información se ha sacado de la pagina bbc.com",
      "level":"Alto"
    },
    {
      "id":110,
      "question":"¿Cómo se llama el primer animal y ser vivo en ir al espacio?",
      "answer1":"Laika",
      "answer2":"Dolly",
      "explanation":"La perra Laika fue el primer ser vivo terrestre en orbitar la Tierra. Por desgracia, murió en orbita, pero su hazaña nunca será olvidada. \n\nFuente: https://es.wikipedia.org/wiki/Laika",
      "level":"Medio"
    },
    {
      "id":111,
      "question":"¿Cuán grande es el sistema solar?",
      "answer1":"10 mil millones de millas aproximadamente.",
      "answer2":"10.000 kilometros/hora aproximadamente.",
      "explanation":"El objeto más lejano que se conoce orbitando nuestro Sol es una diminuta bola de hielo y roca llamada extraoficialmente Sedna, que ahora se encuentra a unos 10 mil millones de millas de distancia",
      "level":"Alto"
    },
    {
      "id":112,
      "question":"¿Cuántos satélites tiene Júpiter?",
      "answer1":"67",
      "answer2":"32",
      "explanation":"Hasta la fecha Júpiter tiene descubiertos 67 satélites, información sacada de Wikipedia.org",
      "level":"Alto"
    },
    {
      "id":113,
      "question":"¿Qué es el sol?",
      "answer1":"Una estrella.",
      "answer2":"Un planeta.",
      "explanation":"Es una estrella, es una enorme esfera de gas caliente que brilla y gira.",
      "level":"Medio"
    },
    {
      "id":114,
      "question":"¿Cuántas veces es más grande el sol que la tierra?",
      "answer1":"1.300.000 veces",
      "answer2":"1000 veces.",
      "explanation":"El sol es una estrella 1.300.000 veces mayor que la tierra. Aunque menos densa que la tierra.",
      "level":"Medio"
    },
    {
      "id":115,
      "question":"¿Cómo brilla el sol?",
      "answer1":"Quemando hidrógeno.",
      "answer2":"Aún no se sabe.",
      "explanation":"El Sol brilla quemando hidrógeno y convirtiéndolo en helio en su centro",
      "level":"Medio"
    },
    {
      "id":116,
      "question":"¿Por cuánto tiempo ha estado brillando el Sol?",
      "answer1":"4,6 billones de años.",
      "answer2":"1.000 millones de años.",
      "explanation":"Se estima que el sol ha estado brillando 4,6 billones de años, y estará otros 5 billones de años más.",
      "level":"Medio"
    },
    {
      "id":117,
      "question":"¿Cuál es la temperatura del sol?",
      "answer1":"5,600 grados Centigrados.",
      "answer2":"No se sabe.",
      "explanation":"La temperatura en la superficie es alrededor de 5.600 grados Centigrados.",
      "level":"Medio"
    },
    {
      "id":118,
      "question":"¿Qué distancia hay de la tierra al sol?",
      "answer1":"150 millones de kilometros",
      "answer2":"36.252 kilometros.",
      "explanation":"Está a 150 millones de km. La luz del sol tarda unos 8 minutos en llegar a la tierra.",
      "level":"Medio"
    },
    {
      "id":119,
      "question":"¿El sol gira sobre si mismo?",
      "answer1":"Si, gira o rota.",
      "answer2":"No, es falso no gira.",
      "explanation":"El Sol a pesar de ser una esfera de gas gira sobre si mismo.",
      "level":"Medio"
    },
    {
      "id":120,
      "question":"¿El sol, al ser una esfera de gas, gira más rápido en el ecuador que en los polos?",
      "answer1":"Si, gira o rota más rápido en el ecuador.",
      "answer2":"No, es falso no gira.",
      "explanation":"El Sol al no ser un cuerpo sólido no gira uniformente, gira más rápido en el ecuador.",
      "level":"Medio"
    },
    {
      "id":121,
      "question":"¿Las manchas solares son siempre las mismas?",
      "answer1":"No, cambian con el tiempo.",
      "answer2":"Si, siempre son iguales.",
      "explanation":"Algunas duran unas pocas horas,y otras duran semanas.",
      "level":"Medio"
    },
    {
      "id":122,
      "question":"¿Mercurio es el planeta más cercano al sol?",
      "answer1":"Si, es el más cercano.",
      "answer2":"No, es Venus.",
      "explanation":"Mercurio es el más cercano, la distancia más cerca a la que llega a estar es de 46 millones de kilómetros.",
      "level":"Medio"
    },
    {
      "id":123,
      "question":"¿Cuánto dura un día en Mercurio?",
      "answer1":"58 días terrestres.",
      "answer2":"22 días terrestres.",
      "explanation":"Mercurio gira muy lentamente y necesita 58 días terrestres para dar un giro sobre si mismo.",
      "level":"Medio"
    },
    {
      "id":124,
      "question":"¿La fecha que aterrizó el primer objeto de origen humano sobre la superficie de Marte?",
      "answer1":"Fue el 27 de noviembre de 1971.",
      "answer2":"Fue el 27 de noviembre de 1979.",
      "explanation":"La sonda Mars 2 (también llamada Marsnik 2 o Marte 2) fabricada por la URSS, tomó tierra el 27 de noviembre de 1971.",
      "level":"Medio"
    },
    {
      "id":125,
      "question":"¿Cuál fue el primer satelite artificial de la historia?",
      "answer1":"El Sputnik, de la URSS.",
      "answer2":"El Apolo, de EEUU.",
      "explanation":"El Sputnik 1 lanzado el 4 de octubre de 1957 por la Unión Soviética fue el primer satélite artificial de la historia.",
      "level":"Medio"
    },
    {
      "id":126,
      "question":"¿Cuál fue el primer satelite artificial Americano?",
      "answer1":"El Explorer.",
      "answer2":"El Challenger.",
      "explanation":"Fue lanzado a las 22:48 horas del 31 de enero de 1958.",
      "level":"Medio"
    }
  ];
});

/*





""
" Fácil

¿Qué país lanzó el Sputnik? Unión Soviética Estados Unidos  La nave Sputnik 1 fue el primer intento no fallido de poner en órbita un satélite artificial alrededor de la Tierra. Se lanzó desde el Cosmódromo de Baikonur en Tyuratam, en Kazajistán, antes parte de la Unión Soviética Fácil
¿Cómo se llamaba el primer animal que fue al espacio? Laika.  Tota. Laika (en ruso Лайка, ‘ladradora’; Moscú, 1954 - Sputnik 2, Órbita baja terrestre, 3 de noviembre de 1957) fue una perra espacial soviética que se convirtió en el primer ser vivo terrestre en orbitar la Tierra. Lo hizo a bordo de la nave soviética Sputnik 2, el 3 de noviembre de 1957. Fuente Wikipedia. Fácil
¿Qué es el sol? Una estrella. Un planeta. Es una estrella, es una enorme esfera de gas caliente que brilla y gira.  Medio
¿Cuántas veces es más grande el sol que la tierra?  1.300.000 veces 1000 veces. El sol es una estrella 1.300.000 veces mayor que la tierra. Aunque menos densa que la tierra. Medio
¿Cómo brilla el sol?  Quemando hidrógeno. Aún no se sabe. El Sol brilla quemando hidrógeno y convirtiéndolo en helio en su centro Medio
¿Por cuánto tiempo ha estado brillando el Sol?  4,6 billones de años. 1.000 millones de años. Se estima que el sol ha estado brillando 4,6 billones de años, y estará otros 5 billones de años más. Medio
¿Cuál es la temperatura del sol?  5,600 grados Centigrados. No se sabe. La temperatura en la superficie es alrededor de 5.600 grados Centigrados. Medio
¿Qué distancia hay de la tierra al sol? 150 millones de kilometros  36.252 kilometros.  Está a 150 millones de km. La luz del sol tarda unos 8 minutos en llegar a la tierra. Medio
¿El sol gira sobre si mismo?  Si, gira o rota.  No, es falso no gira. El Sol a pesar de ser una esfera de gas gira sobre si mismo.  Medio
¿El sol, al ser una esfera de gas, gira más rápido en el ecuador que en los polos?  Si, gira o rota más rápido en el ecuador. No, es falso no gira. El Sol al no ser un cuerpo sólido no gira uniformente, gira más rápido en el ecuador. Medio
¿Las manchas solares son siempre las mismas?  No, cambian con el tiempo.  Si, siempre son iguales.  Algunas duran unas pocas horas,y otras duran semanas. Medio
¿Mercurio es el planeta más cercano al sol? Si, es el más cercano.  No, es Venus. Mercurio es el más cercano, la distancia más cerca a la que llega a estar es de 46 millones de kilómetros.  Medio
¿Cuánto dura un día en Mercurio?  58 días terrestres. 22 días terrestres. Mercurio gira muy lentamente y necesita 58 días terrestres para dar un giro sobre si mismo. Medio
¿La fecha que aterrizó el primer objeto de origen humano sobre la superficie de Marte?  Fue el 27 de noviembre de 1971. Fue el 27 de noviembre de 1979. La sonda Mars 2 (también llamada Marsnik 2 o Marte 2) fabricada por la URSS, tomó tierra el 27 de noviembre de 1971.  Medio
¿Cuál fue el primer satelite artificial de la historia? El Sputnik, de la URSS. El Apolo, de EEUU.  El Sputnik 1 lanzado el 4 de octubre de 1957 por la Unión Soviética fue el primer satélite artificial de la historia. Medio
¿Cuál fue el primer satelite artificial Americano?  El Explorer,  El Challenger.  Fue lanzado a las 22:48 horas del 31 de enero de 1958.  Medio

*/
