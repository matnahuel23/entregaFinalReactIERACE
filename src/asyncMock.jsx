const product = [
    {
        id: '1',
        name: 'Diario de una Pasión',
        price: 10,
        category: 'romantica',
        duration: '121',
        img: 'https://mx.web.img2.acsta.net/c_310_420/medias/nmedia/18/67/61/01/20070878.jpg',
        stock: 2,
        description: 'En un hogar para ancianos, Duke obtiene permiso para leerle una historia romántica a una residente, la señora Hamilton, que sufre de demencia senil y pérdida de memoria. Ella recuerda partes de la historia, aunque sólo algunas partes y con cierta reserva. La historia inicia a finales de la década de los años 30, cuando una joven de familia adinerada, Allie Hamilton (Rachel McAdams), pasa las variaciones de verano en Seabrook. Ahí conoce a un trabajador del pueblo, Noah Calhoun (Ryan Gosling), un despreocupado joven con quien inicia un romance que no es bien visto por las diferentes clases sociales que representan los amantes. Aunque su relación pasa por reclamos, discusiones e incluso la Segunda Guerra Mundial, ambos luchan constantemente por superar los obstáculos y mantenerse juntos. Basada en la novela homónima de Nicholas Sparks, Diario de una pasión es una película de drama y romance.'
    },
    {
        id: '2',
        name: 'Star Wars',
        price: 200,
        category: 'fantasia',
        duration: '121',
        img: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/71/18/12/20061511.jpg',
        stock: 3,
        description: 'Los gobernantes del Imperio Galáctico, la fuerza del mal que domina el universo, capturan a la princesa Leia, quien posee datos confidenciales sobre su centro de operaciones militares, denominado "Estrella de la Muerte". Antes de su secuestro, la Princesa transfiere la información ultrasecreta a la base de datos del robot R2-D2. Catalogado como un material inservible, R2-D2, junto con su compañero C3PO, son deportados a un planeta remoto, siendo comprados por el joven Luke Skywalker en el mercado negro. Debido a un hecho fortuito, Luke accede al mensaje de la princesa Leia, quien solicita el auxilio del veterano Caballero Jedi Obi-Wan Kenobi. Luke, Obi-Wan, los robots, el piloto Han Solo y el gigantesco wookiee Chewbacca conforman la tripulación que intentará liberar a la princesa Leia de los dominios de Darth Vader, la autoridad suprema del Imperio Galáctico.'
    },
    {
        id: '3',
        name: 'Loco por Mary',
        price: 20,
        category: 'comedia',
        duration: '119',
        img: 'https://mx.web.img2.acsta.net/c_310_420/pictures/18/10/09/22/48/0468850.jpg',
        stock: 2,
        description: 'Loco por Mary es una comedia escrita y dirigida por los hermanos Peter Farrelly y Bobby Farrelly. La película nos cuenta la vida de Ted Strohehmann, un adolescente torpe y tímido emocionado porque logra una cita con la chica más popular de la escuela, Mary Jensen, la chica a la que todo el mundo desea. Ted será el afortunado que la llevará a la fiesta de graduación pero un dramático accidente con el cierre de su pantalón arruina sus planes y termina en el hospital. Mary se muda, con su familia, a otro estado y nunca se vuelven a ver. El suceso lo ha hecho vivir angustiado y atormentado y, aunque han pasado ya 13 años, sigue enamorado de ella. Por consejo de su mejor amigo Dom, Ted decide contratar a un detective privado llamado Pat para encontrarla, el único problema se dará cuando Pat también termine enamorándose de ella. Ted hará hasta lo imposible por encontrarla y conquistarla, pero la misión no será sencilla.'
    },
    {
        id: '4',
        name: '6to Sentido',
        price: 120,
        category: 'suspenso',
        duration: '107',
        img: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/84/77/79/19757766.jpg',
        stock: 3,
        description: 'Cole Sear, un niño de ocho años, oculta un terrible secreto: Su mente se ve acosada por amenazantes espíritus. Demasiado joven para comprender el porqué de estas apariciones y traumatizado por sus poderes paranormales, Cole se hunde en un miedo enfermizo y se niega a revelar a nadie la causa de su aislamiento, a excepción de un psicólogo infantil. La búsqueda de una explicación racional guiará a Cole y a su terapeuta hacia una verdad sorprendente e inexplicable.'
    },
    {
        id: '5',
        name: 'El Exorcista',
        price: 120,
        category: 'terror',
        duration: '88',
        img: 'https://es.web.img3.acsta.net/c_310_420/medias/nmedia/18/72/15/60/20054563.jpg',
        stock: 5,
        description: 'En Iraq, el Padre Merrin queda profundamente turbado por el descubrimiento de una figurilla del demonio Pazuzu y las macabras visiones que ésta provoca. Mientras tanto, en Washington, en la casa de la actriz Chris MacNeil se están produciendo extraños fenómenos: la despiertan extraños sonidos que vienen del granero y su hija Regan se queja de que su cama se mueve. Algunos días más tarde, Regan interrumpe una recepción organizada por Chris amenazando de muerte al realizador Burke Dennings. Las crisis se hacen cada vez más frecuentes. Presa de violentos espasmos, la adolescente se vuelve irreconocible y tras realizarle diversas pruebas médicas, de las que no sacan ninguna conclusión, Chris decide acudir a un exorcista. La Iglesia autoriza al Padre Damien Karras a oficiarlo en compañía del Padre Merrin. El demonio, apoderado del cuerpo de Regan, se burla de los dos sacerdotes, amenazándoles mientras intentan expulsarle del cuerpo de la niña. Karras es atacado por el demonio, que se mete en su cuerpo, y acaba tirándose por la ventana de la habitación. Regan despierta de su pesadilla sin saber qué ha pasado. Tras recuperarse de su terrible experiencia, Chris y Regan se marchan de Georgetown.'
    },
    {
        id: '6',
        name: 'Tonto y Retonto',
        price: 20,
        category: 'comedia',
        duration: '107',
        img: 'https://http2.mlstatic.com/D_NQ_NP_967648-MLA28885639781_122018-O.jpg',
        stock: 3,
        description: 'Lloyd y Harry son dos amigos bastantes idiotas cuyas vidas son un auténtico desastre. El primero trabaja como chófer de una limousine, mientras que su amigo se dedica a transportar perros. Un día sus existencias se complican aún más cuando Lloyd se enamora de una chica adinerada que desaparece dejando olvidado un maletín. A partir de ese instante Lloyd embarcará a Harry en un viaje por todo el país para devolver el maletín a su amada.'
    },
    {
        id: '7',
        name: 'Harry Potter',
        price: 200,
        category: 'fantasia',
        duration: '152',
        img: 'https://es.web.img3.acsta.net/c_310_420/pictures/14/04/30/11/55/592219.jpg',
        stock: 4,
        description: 'Harry Potter es un niño huérfano criado por su tío Vernon y su tía Petunia que lo odian. Desde que era pequeño, estos siempre le han contado que sus padres murieron en un accidente de coche. El día de su decimoprimer cumpleaños, Harry recibe la inesperada visita de un hombre gigantesco de nombre Rubeus Hagrid. Este le revela que es, de hecho, hijo de dos poderosos magos y que él también posee extraordinarios poderes. Lleno de alegría, el chico acepta ir a estudiar a Hogwarts, el famoso colegio de magia y hechicería. Por fin, tiene la oportunidad de hacer amigos. Odiado por Severus Snape, profesor de Pociones, y protegido por Albus Dumbledore, director del colegio, Harry intentará dilucidar el misterio de la piedra filosofal.'
    },
    {
        id: '8',
        name: 'Justicia Implacable',
        price: 200,
        category: 'policial',
        duration: '119',
        img: 'https://mx.web.img2.acsta.net/c_310_420/pictures/21/04/24/21/47/3410528.png',
        stock: 5,
        description: 'El frio y misterioso H (Jason Statham) es el nuevo guardia de seguridad de camionetas de efectivo que sorprende a sus compañeros de trabajo durante un atraco en el que inesperadamente desata habilidades de precisión. En Justicia implacable, su equipo se pregunta quién es y de dónde vino. Pronto, el motivo último del tirador se vuelve claro cuando toma medidas dramáticas e irrevocables para ajustar cuentas.'
    },
    {
        id: '9',
        name: 'Jurasic Park',
        price: 20,
        category: 'fantasia',
        duration: '122',
        img: 'https://es.web.img3.acsta.net/c_310_420/pictures/14/03/25/09/25/346980.jpg',
        stock: 2,
        description: 'John Hammond, magnate propietario de la empresa multinacional en bioingeniería InGen, ha soñado toda su vida con construir el mayor parque de atracciones del mundo. Una isla en Costa Rica donde habiten las criaturas más espectaculares que han pisado la Tierra: los dinosaurios. Pese a la extinción de estos reptiles, InGen ha logrado clonar diversas especies mediante la manipulación de segmentos de ADN de la propia sangre de dinosaurio, encontrada en mosquitos fosilizados en ámbar.'
    },
]

export const getProduct = () => { 
    return new Promise ((resolve) => {
        setTimeout(() => {
            resolve (product)
        }, 400);
    }
    )
}

export const getProductById = (productId) => { /* productId recibido por parametro */
    return new Promise ((resolve) => {
        setTimeout(() => {
            /* busco por ID con el find*/
            resolve (product.find(prod => prod.id === productId))
        }, 400);
    }
    )
}

export const getProductByCategory = (productCategory) => {
    return new Promise ((resolve) => {
        setTimeout(() => {
            /* busco por ID con el find*/
            resolve (product.filter(prod => prod.category === productCategory))
        }, 400);
    }
    )
}