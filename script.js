const datos = {
  A: [
    { numero: 1, nombre: "Lima Soteldo Daniel Eduardo", foto: "fotos/a/Lima Soteldo Daniel Eduardo.jpg", pdf: "resenas/a/Lima Soteldo Daniel Eduardo.pdf" },
    { numero: 2, nombre: "Lima Hernandez Javier Alejandro", foto: "fotos/a/Lima Hernandez Javier Alejandro.jpg", pdf: "resenas/a/Lima Hernandez Javier Alejandro.pdf" },
    { numero: 3, nombre: "Choez Gamez Maria Fernanda", foto: "fotos/a/Choez Gamez Maria Fernanda.jpg", pdf: "resenas/a/Choez Gamez Maria Fernanda.pdf" },
    { numero: 4, nombre: "Nieves Nieves Luisker Alexandeys", foto: "fotos/a/Nieves Nieves Luisker Alexandeys.jpg", pdf: "resenas/a/Nieves Nieves Luisker Alexandeys.pdf" },
    { numero: 5, nombre: "Borrego Mesa Luisana Alejandra", foto: "fotos/a/Borrego Mesa Luisana Alejandra.jpg", pdf: "resenas/a/Borrego Mesa Luisana Alejandra.pdf" },
    { numero: 6, nombre: "Betancourt Ramos Angel David ", foto: "fotos/a/Betancourt Ramos Angel David.jpg", pdf: "resenas/a/Betancourt Ramos Angel David .pdf" },
    { numero: 7, nombre: "Gonzalez Ramirez Daniela Sarai", foto: "fotos/a/Gonzalez Ramirez Daniela Sarai.jpg", pdf: "resenas/a/Gonzalez Ramirez Daniela Sarai.pdf" },
    { numero: 8, nombre: "Gonzalez Ramirez Braian Jose", foto: "fotos/a/Gonzalez Ramirez Braian Jose.jpg", pdf: "resenas/a/Gonzalez Ramirez Braian Jose.pdf" },
    { numero: 9, nombre: "Santana Armas Kilberth Jhoanel", foto: "fotos/a/Santana Armas Kilberth Jhoanel.jpg", pdf: "resenas/a/Santana Armas Kilberth Jhoanel.pdf" },
    { numero: 11, nombre: "Ramos Aguirre Valeria Beatriz", foto: "fotos/a/Ramos Aguirre Valeria Beatriz.jpeg", pdf: "resenas/a/Ramos Aguirre Valeria Beatriz.pdf" },
    { numero: 12, nombre: "Aray Requena Luis Alberto", foto: "fotos/a/Aray Requena Luis Alberto.jpeg", pdf: "resenas/a/Aray Requena Luis Alberto.pdf" },
    { numero: 13, nombre: "Infnte Marabel Victoria Gabriela", foto: "fotos/a/Infnte Marabel Victoria Gabriela.jpg", pdf:"resenas/a/Infnte Marabel Victoria Gabriela.pdf" },
    { numero: 14, nombre: "Vargas Gonzales Ruth Nazaret", foto: "fotos/a/Vargas Gonzales Ruth Nazaret.jpg", pdf: "resenas/a/Vargas Gonzales Ruth Nazaret.pdf" },
    { numero: 15, nombre: "Ojeda Silva Gregory Jesus", foto: "fotos/a/Ojeda Silva Gregory Jesus.jpeg", pdf: "resenas/a/Ojeda Silva Gregory Jesus.pdf" },
    { numero: 16, nombre: "Moreno Farfan Kaloyero Lukashenko", foto: "fotos/a/Moreno Farfan Kaloyero Lukashenko.jpeg", pdf: "resenas/a/Moreno Farfan Kaloyero Lukashenko.pdf" },
    { numero: 17, nombre: "Rengifo Gonzales Leonel Antonio", foto: "fotos/a/Rengifo Gonzales Leonel Antonio.jpg", pdf: "resenas/a/Rengifo Gonzales Leonel Antonio.pdf" },
    { numero: 18, nombre: "Solorzano  Ledezma Marielys Jose", foto: "fotos/a/Solorzano Ledezma Marielys Jose.jpg", pdf: "resenas/a/Solorzano  Ledezma Marielys Jose.pdf" },
    { numero: 19, nombre: "Bolivar Toro Sebastian Gabriel", foto: "fotos/a/Bolivar Toro Sebastian Gabriel.jpg", pdf: "resenas/a/Bolivar Toro Sebastian Gabriel.pdf" },
    { numero: 20, nombre: "Aquino Guerra Alberto Luis", foto: "fotos/a/Aquino Guerra Alberto Luis.jpg", pdf: "resenas/a/Aquino Guerra Alberto Luis.pdf" },
    { numero: 21, nombre: "Perez Ojeda Leonardo Rafael", foto: "fotos/a/Perez Ojeda Leonardo Rafael.jpeg", pdf: "resenas/a/Perez Ojeda Leonardo Rafael.pdf" },
    { numero: 22, nombre: "Solorzano Ledezma Yanitza Jose", foto: "fotos/a/Solorzano Ledezma Yanitza Jose.jpeg", pdf: "resenas/a/Solorzano Ledezma Yanitza Jose.pdf" },
    { numero: 24, nombre: "Hernandez Oropeza Romelvis Alejandra", foto: "fotos/a/Hernandez Oropeza Romelvis Aleandrap.jpg", pdf: "resenas/a/Hernandez Oropeza Romelvis Alejandra.pdf" },
    { numero: 25, nombre: "Ceballos Herrera Antonella Jose", foto: "fotos/a/Ceballos Herrera Antonella Jose.jpeg", pdf: "resenas/a/Ceballos Herrera Antonella Jose.pdf" },
    { numero: 26, nombre: "Rosas Diaz Lionel Jose", foto: "fotos/a/Rosas Diaz Lionel Jose.jpeg", pdf: "resenas/a/Rosas Diaz Lionel Jose.pdf" },
    { numero: 27, nombre: "Muñoz Navarro Juan Alejandro", foto: "fotos/a/Muñoz Navarro Juan Alejandro.jpg", pdf: "resenas/a/Muñoz Navarro Juan Alejandro.pdf" },
    { numero: 28, nombre: "Pereza Celaya Jair Jose", foto: "fotos/a/Pereza Celaya Jair Jose.jpg", pdf: "resenas/a/Pereza Celaya Jair Jose.pdf" },
    { numero: 29, nombre: "Jimenez Martinez Ramses Rafael", foto: "fotos/a/Jimenez Martinez Ramses Rafael.jpg", pdf: "resenas/a/Jimenez Martinez Ramses Rafael.pdf" },
    { numero: 30, nombre: "Bolivar Martin Miguel David", foto: "fotos/a/Bolivar Martin Miguel David.jpg", pdf: "resenas/a/Bolivar Martin Miguel David.pdf" },
    { numero: 31, nombre: "Torrealba Figueroa Dubeilys Josselyn", foto: "fotos/a/Torrealba Figueroa Dubeilys Josselyn.jpg", pdf: "resenas/a/Torrealba Figueroa Dubeilys Josselyn.pdf" },
    { numero: 33, nombre: "Diaz Mosqueda Isabela Victoria", foto: "fotos/a/Diaz Mosqueda Isabela Victoria.jpeg", pdf: "resenas/a/Diaz Mosqueda Isabela Victoria.pdf" },
    { numero: 34, nombre: "Gonzales Villalta Maria Victoria", foto: "fotos/a/Gonzales Villalta Maria Victoria.jpg", pdf: "resenas/a/Gonzales Villalta Maria Victoria.pdf" },
    { numero: 35, nombre: "Gutierrez Rivero Nelsania Josselis", foto: "fotos/a/Gutierrez Rivero Nelsania Josselis.jpg", pdf: "resenas/a/Gutierrez Rivero Nelsania Josselis.pdf" },
    { numero: 36, nombre: "Bernaez Rodriguez Angellis O.", foto: "fotos/a/Bernaez Rodriguez Angellis O..jpg", pdf: "resenas/a/Bernaez Rodriguez Angellis O..pdf" },
    ],
  B: [
    { numero: 1, nombre: "Alvarez Ortiz Gloriangel", foto: "fotos/b/Alvarez Ortiz Gloriangel.jpg", pdf: "resenas/b/Alvarez Ortiz Gloriangel.pdf" },
    { numero: 2, nombre: "Vilera Rengifo Alexander Jose", foto: "fotos/b/Vilera Rengifo Alexander Jose.jpg", pdf: "resenas/b/Vilera Rengifo Alexander Jose.pdf" },
    { numero: 3, nombre: "Brizuela Contreras Jean Moises", foto: "fotos/b/Brizuela Contreras Jean Moises.jpg", pdf: "resenas/b/Brizuela Contreras Jean Moises.pdf" },
    { numero: 4, nombre: "Ramos Palma Carlos David", foto: "fotos/b/Ramos Palma Carlos David.jpg", pdf: "resenas/b/Ramos Palma Carlos David.pdf" },
    { numero: 5, nombre: "Seijas Infante Claudibeth Sarai", foto: "fotos/b/Seijas Infante Claudibeth Sarai.jpg", pdf: "resenas/b/Seijas Infante Claudibeth Sarai.pdf" },
    { numero: 6, nombre: "Alvarez Lugo Jacnael Jhoseitt", foto: "fotos/b/Alvarez Lugo Jacnael Jhoseitt.jpg", pdf: "resenas/b/Alvarez Lugo Jacnael Jhoseitt.pdf" },
    { numero: 7, nombre: "Abad Pinto Crisleidy Eliana", foto: "fotos/b/Abad Pinto Crisleidy Eliana.jpg", pdf: "resenas/b/Abad Pinto Crisleidy Eliana.pdf" },
    { numero: 8, nombre: "David Rangel Juan Diego", foto: "fotos/b/David Rangel Juan Diego.jpg", pdf: "resenas/b/David Rangel Juan Diego.pdf" },
    { numero: 9, nombre: "Reyea Guerra Jeannelys Mayerlin", foto: "fotos/b/Reyea Guerra Jeannelys Mayerlin.jpg", pdf: "resenas/b/Reyea Guerra Jeannelys Mayerlin.pdf" },
    { numero: 10, nombre: "Rivas Arevalo Kamila Yesenia", foto: "fotos/b/Rivas Arevalo Kamila Yesenia.jpg", pdf: "resenas/b/Rivas Arevalo Kamila Yesenia.pdf" },
    { numero: 11, nombre: "Ferreira Duran Santiago Jose", foto: "fotos/b/Ferreira Duran Santiago Jose.jpg", pdf: "resenas/b/Ferreira Duran Santiago Jose.pdf" },
    { numero: 12, nombre: "Mayorga Fernandez Santiago Isaac", foto: "fotos/b/Mayorga Fernandez Santiago Isaac.jpg", pdf: "resenas/b/Mayorga Fernandez Santiago Isaac.pdf" },
    { numero: 13, nombre: "Semprun Ortiz Jose Angel ", foto: "fotos/b/Semprun Ortiz Jose Angel.jpg", pdf: "resenas/b/Semprun Ortiz Jose Angel.pdf" },
    { numero: 14, nombre: "Garcia Garcia Manuel Joaquin", foto: "fotos/b/Garcia Garcia Manuel Joaquin.jpg", pdf: "resenas/b/Garcia Garcia Manuel Joaquin.pdf" },
    { numero: 15, nombre: "Marrero Guevara Sebastian Andres", foto: "fotos/b/Marrero Guevara Sebastian Andres .jpg", pdf: "resenas/b/Marrero Guevara Sebastian Andres.pdf" },
    { numero: 16, nombre: "Ubiernes Carmona Sofia de los Angeles", foto: "fotos/b/Ubiernes Carmona Sofia de los Angeles.jpg", pdf: "resenas/b/Ubiernes Carmona Sofia de los Angeles.pdf" },
    { numero: 17, nombre: "Serrao Lopez Juan Diego", foto: "fotos/b/Serrao Lopez Juan Diego.jpg", pdf: "resenas/b/Serrao Lopez Juan Diego.pdf" },
    { numero: 18, nombre: "Olivarez Soublett Kemberly Estefania", foto: "fotos/b/Olivarez Soublett Kemberly Estefania.jpg", pdf: "resenas/b/Olivarez Soublett Kemberly Estefania.pdf" },
    { numero: 19, nombre: "Diaz Rico Paola Victoria", foto: "fotos/b/Diaz Rico Paola Victoria.jpg", pdf: "resenas/b/Diaz Rico Paola Victoria.pdf" },
    { numero: 20, nombre: "Villalobos Muñoz Marielvis Viviana", foto: "fotos/b/Villalobos Muñoz Marielvis Viviana.jpg", pdf: "resenas/b/Villalobos Muñoz Marielvis Viviana.pdf" },
    { numero: 21, nombre: "Vilera Rengifo Aleximar Jose ", foto: "fotos/b/Vilera Rengifo Aleximar Jose.jpg", pdf: "resenas/b/Vilera Rengifo Aleximar Jose.pdf" },
    { numero: 22, nombre: "Perez Alvarez Sebastian Jose", foto: "fotos/b/Perez Alvarez Sebastian Jose.jpg", pdf: "resenas/b/Perez Alvarez Sebastian Jose.pdf" },
    { numero: 23, nombre: "Herrera Lopez Juan Pablo", foto: "fotos/b/Herrera Lopez Juan Pablo.jpg", pdf: "resenas/b/Herrera Lopez Juan Pablo.pdf" },
    { numero: 24, nombre: "Parraga Herrera Victor Igancio", foto: "fotos/b/Parraga Herrera Victor Igancio.jpg", pdf: "resenas/b/Parraga Herrerla Victor Igancio.pdf" },
    { numero: 25, nombre: "Campos Martinez Daliannys Estefania", foto: "fotos/b/Campos Martinez Daliannys Estefania.jpg", pdf: "resenas/b/Campos Martinez Daliannys Estefania.pdf" },
    { numero: 26, nombre: "Isquiel Oliveros Maria Adelisbeth", foto: "fotos/b/Isquiel Oliveros Maria Adelisbeth.jpg", pdf: "resenas/b/Isquiel Oliveros Maria Adelisbeth.pdf" },
    { numero: 27, nombre: "Herrera Lopez Estefania de los Angeles", foto: "fotos/b/Herrera Lopez Estefania de los Angeles.jpg", pdf: "resenas/b/Herrera Lopez Estefania de los Angeles.pdf" },
    { numero: 28, nombre: "Castillo Velasquez Victor Jose", foto: "fotos/b/Castillo Velasquez Victor Jose.jpg", pdf: "resenas/b/Castillo Velasquez Victor Jose.pdf" },
    { numero: 29, nombre: "Mattia Perez Dianis Arcangela", foto: "fotos/b/Mattia Pérez Dianis Arcangela.jpg", pdf: "resenas/b/Mattia Perez Dianis Arcangela.pdf" },
    { numero: 31, nombre: "Andrades Campos Randy Esequiel", foto: "fotos/b/Andrades Campos Randy Esequiel.jpg", pdf: "resenas/b/Andrades Campos Randy Esequiel.pdf" },
    { numero: 32, nombre: "Arzola Croes Miguel Angel", foto: "fotos/b/Arzola Croes Miguel Angel.jpg", pdf: "resenas/b/Arzola Croes Miguel Angel.pdf" },
    { numero: 33, nombre: "Gamez Soublett Barbara Grisel", foto: "fotos/b/Gamez Soublett Barbara Grisel.jpg", pdf: "resenas/b/Gamez Soublett Barbara Grisel.pdf" },
    { numero: 34, nombre: "Tavera Guilarte Zahid Alexander", foto: "fotos/b/Tavera Guilarte Zahid Alexander.jpg", pdf: "resenas/b/Tavera Guilarte Zahid Alexander.pdf" },
  ],
  C: [
    { numero: 1, nombre: "Alvarez Ramirez Carlimar Alejandra", foto: "fotos/c/Alvarez Ramirez Carlimar Alejandra.jpg", pdf: "resenas/c/Alvarez Ramirez Carlimar Alejandra.pdf" },
    { numero: 2, nombre: "Cruz Escalona Kamila Valentina", foto: "fotos/c/Cruz Escalona Kamila Valentina.jpg", pdf: "resenas/c/Cruz Escalona Kamila Valentina.pdf" },
    { numero: 3, nombre: "Carbajal Valor Jesus Enrique", foto: "fotos/c/Carbajal Valor Jesus Enrique.jpg", pdf: "resenas/c/Carbajal Valor Jesus Enrique.pdf" },
    { numero: 4, nombre: "Garcia Acosta Dariandny Desire", foto: "fotos/c/Garcia Acosta Dariandny Desire.jpg", pdf: "resenas/c/Garcia Acosta Dariandny Desire.pdf" },
    { numero: 5, nombre: "Farias Rodriguez Lenger Elias", foto: "fotos/c/Farias Rodriguez Lenger Elias.jpg", pdf: "resenas/c/Farias Rodriguez Lenger Elias.pdf" },
    { numero: 6, nombre: "Guzman Padrino Ariana Stefania", foto: "fotos/c/Guzman Padrino Ariana Stefania.jpg", pdf: "resenas/c/Guzman Padrino Ariana Stefania.pdf" },
    { numero: 7, nombre: "Mena Parra Lucimar Chiquinquira", foto: "fotos/c/Mena Parra Lucimar Chiquinquira.jpg", pdf: "resenas/c/Mena Parra Lucimar Chiquinquira.pdf" },
    { numero: 8, nombre: "El Zaibak Alvarado Isaias Camilo", foto: "fotos/c/El Zaibak Alvarado Isaias Camilo.jpg", pdf: "resenas/c/El Zaibak Alvarado Isaias Camilo.pdf" },
    { numero: 9, nombre: "Zamora Marquez Kevin Josue", foto: "fotos/c/Zamora Marquez Kevin Josue.jpg", pdf: "resenas/c/Zamora Marquez Kevin Josue.pdf" },
    { numero: 10, nombre: "Montenegro Garcia Andrimar Paola", foto: "fotos/c/Montenegro Garcia Andrimar Paola.jpg", pdf: "resenas/c/Montenegro Garcia Andrimar Paola.pdf" },
    { numero: 12, nombre: "Zerpa Zerpa Barbara Esmeralda", foto: "fotos/c/Zerpa Zerpa Barbara Esmeralda.jpg", pdf: "resenas/c/Zerpa Zerpa Barbara Esmeralda.pdf" },
    { numero: 13, nombre: "Rodriguez Rivero Ricardo Josue", foto: "fotos/c/Rodriguez Rivero Ricardo Josue.jpg", pdf: "resenas/c/Rodriguez Rivero Ricardo Josue.pdf" },
    { numero: 14, nombre: "Alvarez Herrera Leonardo Antonio", foto: "fotos/c/Alvarez Herrera Leonardo Antonio.jpg", pdf: "resenas/c/Alvarez Herrera Leonardo Antonio.pdf" },
    { numero: 15, nombre: "Rodriguez Jimenez Abel Josue", foto: "fotos/c/Rodriguez Jimenez Abel Josue.jpg", pdf: "resenas/c/Rodriguez Jimenez Abel Josue.pdf" },
    { numero: 16, nombre: "Meza Reyes Cristian Manuel", foto: "fotos/c/Meza Reyes Cristian Manuel.jpg", pdf: "resenas/c/Meza Reyes Cristian Manuel.pdf" },
    { numero: 17, nombre: "Bolivar Rengifo Santiago de Jesus", foto: "fotos/c/Bolivar Rengifo Santiago de Jesus.jpg", pdf: "resenas/c/Bolivar Rengifo Santiago de Jesus.pdf" },
    { numero: 18, nombre: "Diaz Laya Marco Jose", foto: "fotos/c/Diaz Laya Marco Jose.jpg", pdf: "resenas/c/Diaz Laya Marco Jose.pdf" },
    { numero: 19, nombre: "Mendez Melo Ayleen Nazareth", foto: "fotos/c/Mendez Melo Ayleen Nazareth.jpg", pdf: "resenas/c/Mendez Melo Ayleen Nazareth.pdf" },
    { numero: 20, nombre: "Canduri Prado Sabrina Alexandra", foto: "fotos/c/Canduri Prado Sabrina Alexandra.jpg", pdf: "resenas/c/Canduri Prado Sabrina Alexandra.pdf" },
    { numero: 23, nombre: "Torrealba Guerra Veroska Nazareth", foto: "fotos/c/Torrealba Guerra Veroska Nazareth.jpg", pdf: "resenas/c/Torrealba Guerra Veroska Nazareth.pdf" },
    { numero: 24, nombre: "Diaz Ortega Mariely Nazareth", foto: "fotos/c/Diaz Ortega Mariely Nazareth.jpg", pdf: "resenas/c/Diaz Ortega Mariely Nazareth.pdf" },
    { numero: 25, nombre: "Herrera Guaita Victor Leomar", foto: "fotos/c/Herrera Guaita Victor Leomar.jpg", pdf: "resenas/c/Herrera Guaita Victor Leomar.pdf" },
    { numero: 26, nombre: "Seijas Ramirez Ely Sofia", foto: "fotos/c/Seijas Ramirez Ely Sofia.jpg", pdf: "resenas/c/Seijas Ramirez Ely Sofia.pdf" },
    { numero: 27, nombre: "Guevara Farias Hernan Alberto", foto: "fotos/c/Guevara Farias Hernan Alberto.jpg", pdf: "resenas/c/Guevara Farias Hernan Alberto.pdf" },
    { numero: 28, nombre: "Hurtado Espejo Lewis Maudilio", foto: "fotos/c/Hurtado Espejo Lewis Maudilio.jpg", pdf: "resenas/c/Hurtado Espejo Lewis Maudilio.pdf" },
    { numero: 30, nombre: "Lisboa Esteves Sardis Minerva ", foto: "fotos/c/Lisboa Esteves Sardis Minerva.jpg", pdf: "resenas/c/Lisboa Esteves Sardis Minerva.pdf" },
    {numero: 31, nombre: "Rojas Rojas Santiago Saul", foto: "fotos/c/Rojas Rojas Santiago Saul.jpg", pdf: "resenas/c/Rojas Rojas Santiago Saul.pdf" },
    {numero: 32, nombre: "Rojas Rojas Samantha Saray", foto: "fotos/c/Rojas Rojas Samantha Saray.jpg", pdf: "resenas/c/Rojas Rojas Samantha Saray.pdf" },
    {numero: 33, nombre: "Gamboa Rivera Samuel Gabriel", foto: "fotos/c/Gamboa Rivera Samuel Gabriel.jpg", pdf: "resenas/c/Gamboa Rivera Samuel Gabriel.pdf" },
    {numero: 34, nombre: "Marchena Malave Enmanuel Jose", foto: "fotos/c/Marchena Malave Enmanuel Jose.jpg", pdf: "resenas/c/Marchena Malave Enmanuel Jose.pdf" },
    {numero: 35, nombre: "Gamez Herrera Juan Sebastian", foto: "fotos/c/Gamez Herrera Juan Sebastian.jpg", pdf: "resenas/c/Gamez Herrera Juan Sebastian.pdf" },
  ],


  D: [
    { numero: 2, nombre: "Rondon Castillo Jose Miguel", foto: "fotos/d/Rondon Castillo Jose Miguel.jpg", pdf: "resenas/d/Rondon Castillo Jose Miguel.pdf" },
    { numero: 3, nombre: "Duarte Higuera Oscar Eduardo", foto: "fotos/d/Duarte Higuera Oscar Eduardo.jpg", pdf: "resenas/d/Duarte Higuera Oscar Eduardo.pdf" },
    { numero: 4, nombre: "Reyes Flores Camila Alejandra", foto: "fotos/d/Reyes Flores Camila Alejandra.jpg", pdf: "resenas/d/Reyes Flores Camila Alejandra.pdf" },
    { numero: 5, nombre: "Escorche Herrera Xiosmar Gabriela", foto: "fotos/d/Escorche Herrera Xiosmar Gabriela.jpg", pdf: "resenas/d/Escorche Herrera Xiosmar Gabriela.pdf" },
    { numero: 6, nombre: "Fernandez Ledezma Angel Jesus", foto: "fotos/d/Fernandez Ledezma Angel Jesus.jpg", pdf: "resenas/d/Fernandez Ledezma Angel Jesus.pdf" },
    { numero: 7, nombre: "Higuera Bastida Leonardo David", foto: "fotos/d/Higuera Bastida Leonardo David.jpg", pdf: "resenas/d/Higuera Bastida Leonardo David.pdf" },
    { numero: 8, nombre: "Camaño Magallanes Josue Daniel", foto: "fotos/d/Camaño Magallanes Josue Daniel.jpg", pdf: "resenas/d/Camaño Magallanes Josue Daniel.pdf" },
    { numero: 10, nombre: "Hernandez Infante Sophya Antonella", foto: "fotos/d/Hernandez Infante Sophya Antonella.jpg", pdf: "resenas/d/Hernandez Infante Sophya Antonella.pdf" },
    { numero: 11, nombre: "Bello Suarez Bryan David", foto: "fotos/d/Bello Suarez Bryan David.jpg", pdf: "resenas/d/Bello Suarez Bryan David.pdf" },
    { numero: 12, nombre: "Correa Marcano Fernanda Paola", foto: "fotos/d/Correa Marcano Fernanda Paola.jpg", pdf: "resenas/d/Correa Marcano Fernanda Paola.pdf" },
    { numero: 13, nombre: "Gomez Parra Eduardo Jose", foto: "fotos/d/Gomez Parra Eduardo Jose.jpg", pdf: "resenas/d/Gomez Parra Eduardo Jose.pdf" },
    { numero: 14, nombre: "Santana Mayorga Abraham Moises", foto: "fotos/d/Santana Mayorga Abraham Moises .jpg", pdf: "resenas/d/Santana Mayorga Abraham Moises.pdf" },
    { numero: 15, nombre: "Suarez Rebolledo Santiago Miguel", foto: "fotos/d/Suarez Rebolledo Santiago Miguel.jpg", pdf: "resenas/d/Suarez Rebolledo Santiago Miguel.pdf" },
    { numero: 18, nombre: "Baute Gonzales Jesus Jose", foto: "fotos/d/Baute Gonzales Jesus Jose.jpg", pdf: "resenas/d/Baute Gonzales Jesus Jose.pdf" },
    { numero: 21, nombre: "Diaz Alvarenga Miguel Alejandro", foto: "fotos/d/Diaz Alvarenga Miguel Alejandro.jpg", pdf: "resenas/d/Diaz Alvarenga Miguel Alejandro.pdf" },
    { numero: 22, nombre: "Gota Lugo Paula Victoria", foto: "fotos/d/Gota Lugo Paula Victoria.jpg", pdf: "resenas/d/Gota Lugo Paula Victoria.pdf" },
    { numero: 23, nombre: "Diaz Martinez Leudimar Jose", foto: "fotos/d/Diaz Martinez Leudimar Jose.jpg", pdf: "resenas/d/Diaz Martinez Leudimar Jose.pdf" },
    { numero: 24, nombre: "Seijas Palma Maria de la Paz", foto: "fotos/d/Seijas Palma María de la Paz.jpg", pdf: "resenas/d/Seijas Palma Maria de la Paz.pdf" },
    { numero: 25, nombre: "Suarez Marrero Jean Pier", foto: "fotos/d/Suarez Marrero Jean Pier.jpg", pdf: "resenas/d/Suarez Marrero Jean Pier.pdf" },
    { numero: 26, nombre: "Perez Piña David Alejandro", foto: "fotos/d/Perez Piña David Alejandro.jpg", pdf: "resenas/d/Perez Piña David Alejandro.pdf" },
    { numero: 29, nombre: "Infante Valera  Julieta Valentina", foto: "fotos/d/Infante Valera Julieta Valentina.jpg", pdf: "resenas/d/Infante Valera  Julieta Valentina.pdf" },
    { numero: 30, nombre: "Gonzales Hernandez Valeria Alexandra", foto: "fotos/d/Gonzales Hernandez Valeria Alexandra.jpg", pdf: "resenas/d/Gonzales Hernandez Valeria Alexandra.pdf" },
    { numero: 31, nombre: "Gonzales Guzman Omar Salvador", foto: "fotos/d/Gonzales Guzman Omar Salvador.jpg", pdf: "resenas/d/Gonzales Guzman Omar Salvador.pdf" },
    { numero: 32, nombre: "Diaz Modesto Dara Sarai", foto: "fotos/d/Diaz Modesto Dara Sarai.jpg", pdf: "resenas/d/Diaz Modesto Dara Sarai.pdf" },
    { numero: 34, nombre: "Gamez Gamez Xavier Jose", foto: "fotos/d/Gamez Gamez Xavier Jose.jpg", pdf: "resenas/d/Gamez Gamez Xavier Jose.pdf" },
    { numero: 36, nombre: "Hernandez Padrino Yulianna Alejandra ", foto: "fotos/d/Hernandez Padrino Yulianna Alejandra .jpg", pdf: "resenas/d/Hernandez Padrino Yulianna Alejandra .pdf" },
    { numero: 37, nombre: "Carpio Hernandez Diego Salvador", foto: "fotos/d/Carpio Hernandez Diego Salvador.jpg", pdf: "resenas/d/Carpio Hernandez Diego Salvador.pdf" },

  ],
  E: [
    { numero: 1, nombre: "Diaz Ortega Solimar Jose", foto: "fotos/e/Diaz Ortega Solimar Jose.jpg", pdf: "resenas/e/Diaz Ortega Solimar Jose.pdf" },
    { numero: 2, nombre: "Flores Correa Edumary Carolina", foto: "fotos/e/Flores Correa Edumary Carolina.jpg", pdf: "resenas/e/Flores Correa Edumary Carolina.pdf" },
    { numero: 3, nombre: "Gamarra Ruiz Luis Sebastian", foto: "fotos/e/Gamarra Ruiz Luis Sebastian.jpg", pdf: "resenas/e/Gamarra Ruiz Luis Sebastian.pdf" },
    { numero: 4, nombre: "Torrealba Alvarez Jhoenyer Alfonzo", foto: "fotos/e/Torrealba Alvarez Jhoenyer Alfonzo.jpg", pdf: "resenas/e/Torrealba Alvarez Jhoenyer Alfonzo.pdf" },
    { numero: 5, nombre: "Blanca Flores Joaquin Josue", foto: "fotos/e/Blanca Flores Joaquin Josue.jpg", pdf: "resenas/e/Blanca Flores Joaquin Josue.pdf" },
    { numero: 7, nombre: "Cstillo Uvieda Alberto Josue", foto: "fotos/e/Cstillo Uvieda Alberto Josue.jpg", pdf: "resenas/e/Cstillo Uvieda Alberto Josue.pdf" },
    { numero: 8, nombre: "Prado Medina Angel Daniel", foto: "fotos/e/Prado Medina Angel Daniel.jpg", pdf: "resenas/e/Prado Medina Angel Daniel.pdf" },
    { numero: 9, nombre: "Rodriguez Piruzza Gina Giovanna", foto: "fotos/e/Rodriguez Piruzza Gina Giovanna.jpg", pdf: "resenas/e/Rodriguez Piruzza Gina Giovanna.pdf" },
    { numero: 10, nombre: "Mosqueda Ruiz Manuel Eduardo", foto: "fotos/e/Mosqueda Ruiz Manuel Eduardo.jpg", pdf: "resenas/e/Mosqueda Ruiz Manuel Eduardo.pdf" },
    { numero: 11, nombre: "Dirupo Lopez Maximo Alejandro", foto: "fotos/e/Dirupo Lopez Maximo Alejandro.jpg", pdf: "resenas/e/Dirupo Lopez Maximo Alejandro.pdf" },
    { numero: 12, nombre: "Villegas Ortiz Wilfredo Jose", foto: "fotos/e/Villegas Ortiz Wilfredo Jose.jpg", pdf: "resenas/e/Villegas Ortiz Wilfredo Jose.pdf" },
    { numero: 13, nombre: "Martinez Ojeda Saidheryn Alexandra", foto: "fotos/e/Martinez Ojeda Saidheryn Alexandra.jpg", pdf: "resenas/e/Martinez Ojeda Saidheryn Alexandra.pdf" },
    { numero: 14, nombre: "Finelli Rengifo Isaballa Stefania", foto: "fotos/e/Finelli Rengifo Isaballa Stefania.jpg", pdf: "resenas/e/Finelli Rengifo Isaballa Stefania.pdf" },
    { numero: 15, nombre: "Morales Garcia Bryana Rorianny", foto: "fotos/e/Morales Garcia Bryana Rorianny.jpg", pdf: "resenas/e/Morales Garcia Bryana Rorianny.pdf" },
    { numero: 16, nombre: "Acosta Diaz Blanca Adonis ", foto: "fotos/e/Acosta Diaz Blanca Adonis .jpg", pdf: "resenas/e/Acosta Diaz Blanca Adonis.pdf" },
    { numero: 17, nombre: "Vegas Zerpa Manuel Alfonso", foto: "fotos/e/Vegas Zerpa Manuel Alfonso.jpg", pdf: "resenas/e/Vegas Zerpa Manuel Alfonso.pdf" },
    { numero: 18, nombre: "Jimenez Hernandez Samantha Daniela", foto: "fotos/e/Jimenez Hernandez Samantha Daniela.jpg", pdf: "resenas/e/Jimenez Hernandez Samantha Daniela.pdf" },
    { numero: 19, nombre: "Hernandez Rodriguez Yubianni Evelin ", foto: "fotos/e/Hernandez Rodriguez Yubianni Evelin.jpg", pdf: "resenas/e/Hernandez Rodriguez Yubianni Evelin.pdf" },
    { numero: 20, nombre: "Perez Gomez Angelo Daniel ", foto: "fotos/e/Perez Gomez Angelo Daniel.jpg", pdf: "resenas/e/Perez Gomez Angelo Daniel .pdf" },
    { numero: 21, nombre: "Machuca Garcia Abraham Andres", foto: "fotos/e/Machuca Garcia Abraham Andres.jpg", pdf: "resenas/e/Machuca Garcia Abraham Andres.pdf" },
    { numero: 22, nombre: "Marquez Guevara Ailn Celeste ", foto: "fotos/e/Marquez Guevara Ailn Celeste .jpg", pdf: "resenas/e/Marquez Guevara Ailn Celeste .pdf" },
    { numero: 23, nombre: "Puerta Perez Luciano Adolfo ", foto: "fotos/e/Puerta Perez Luciano Adolfo .jpg", pdf: "resenas/e/Puerta Perez Luciano Adolfo .pdf" },
    { numero: 24, nombre: "Campos Pantoja Albany Sofia", foto: "fotos/e/Campos Pantoja Albany Sofia.jpg", pdf: "resenas/e/Campos Pantoja Albany Sofia.pdf" },
    { numero: 25, nombre: "Manrrique Manrrique Angel Valentin", foto: "fotos/e/Manrrique Manrrique Angel Valentin.jpg", pdf: "resenas/e/Manrrique Manrrique Angel Valentin.pdf" },
    { numero: 26, nombre: "Serrao Perez Juan Carlos", foto: "fotos/e/Serrao Perez Juan Carlos.jpg", pdf: "resenas/e/Serrao Perez Juan Carlos.pdf" },
    { numero: 27, nombre: "Mejias Gamarra Isaias Daniel", foto: "fotos/e/Mejias Gamarra Isaias Daniel.jpg", pdf: "resenas/e/Mejias Gamarra Isaias Daniel.pdf" },
    { numero: 28, nombre: "Itriago Quintero Cesar Sebastian ", foto: "fotos/e/Itriago Quintero Cesar Sebastian.jpg", pdf: "resenas/e/Itriago Quintero Cesar Sebastian.pdf" },
    { numero: 29, nombre: "Pino Bolivar Krismar Valentina", foto: "fotos/e/Pino Bolivar Krismar Valentina.jpg", pdf: "resenas/e/Pino Bolivar Krismar Valentina.pdf" },
    { numero: 30, nombre: "Cabrera Molina Isabela Del Valle ", foto: "fotos/e/Cabrera Molina Isabela Del Valle.jpg", pdf: "resenas/e/Cabrera Molina Isabela Del Valle.pdf" },
    { numero: 31, nombre: "Calderon Carrilo Victor Manuel", foto: "fotos/e/Calderon Carrilo Victor Manuel .jpg", pdf: "resenas/e/Calderon Carrilo Victor Manuel .pdf" },
    { numero: 32, nombre: "Lopez Hernandez Oscar Daniel", foto: "fotos/e/Lopez Hernandez Oscar Daniel.jpg", pdf: "resenas/e/Lopez Hernandez Oscar Daniel.pdf" },
    { numero: 33, nombre: "Rodriguez Vasquez Darwin Manuel", foto: "fotos/e/Rodriguez Vasquez Darwin Manuel.jpg", pdf: "resenas/e/Rodriguez Vasquez Darwin Manuel.pdf" },
    { numero: 34, nombre: "Guerra Guijarro Francisbell Alejandra", foto: "fotos/e/Guerra Guijarro Francisbell Alejandra.jpg", pdf: "resenas/e/Guerra Guijarro Francisbell Alejandra.pdf" },
    { numero: 35, nombre: "Alvarez Zalazar Luis Angel", foto: "fotos/e/Alvarez Zalazar Luis Angel.jpg", pdf: "resenas/e/Alvarez Zalazar Luis Angel.pdf" },
],
  F: [
    { numero: 1, nombre: "Giron Villarta Luzmary Nazareth", foto: "fotos/f/Giron Villarta Luzmary Nazareth.jpg", pdf: "resenas/f/giron.pdf" },
    { numero: 2, nombre: "Vargas Carrasco Albani Jhuliet", foto: "fotos/f/Vargas Carrasco Albani Jhuliet.jpg", pdf: "resenas/f/vargas.pdf" },
    { numero: 3, nombre: "Reyes Bastardo Jose Raul", foto: "fotos/f/Reyes Bastardo Jose Raul.jpg", pdf: "resenas/f/reyes.pdf" },
    { numero: 4, nombre: "Bastidas Dos Santos Jose David", foto: "fotos/f/Bastidas Dos Santos Jose David.jpg", pdf: "resenas/f/bastidas.pdf" },
    { numero: 5, nombre: "Monserrat Gonzales Willimar del Valle ", foto: "fotos/f/Monserrat Gonzales Willimar del Valle .jpg", pdf: "resenas/f/Monserrat Gonzales Willimar del Valle .pdf" },
    { numero: 6, nombre: "Diaz Alvarez Isabella Franchesca", foto: "fotos/f/Diaz Alvarez Isabella Franchesca.jpg", pdf: "resenas/f/Diaz Alvarez Isabella Franchesca.pdf" },
    { numero: 7, nombre: "Carpio Mato Alexis Alejandro", foto: "fotos/f/Carpio Mato Alexis Alejandro.jpg", pdf: "resenas/f/Carpio Mato Alexis Alejandro.pdf" },
    { numero: 8, nombre: "Delgado Hernandez Jurester Nazareth", foto: "fotos/f/Delgado Hernandez Jurester Nazareth.jpg", pdf: "resenas/f/Delgado Hernandez Jurester Nazareth.pdf" },
    { numero: 9, nombre: "Delgado Hernandez Juelifer Nazareth", foto: "fotos/f/Delgado Hernandez Juelifer Nazareth.jpg", pdf: "resenas/f/Delgado Hernandez Juelifer Nazareth.pdf" },
    { numero: 10, nombre: "Bolivar Salazar Richard Eduardo", foto: "fotos/f/Bolivar Salazar Richard Eduardo.jpg", pdf: "resenas/f/Bolivar Salazar Richard Eduardo.pdf" },
    { numero: 11, nombre: "Gomez Flores Elias Moises", foto: "fotos/f/Gomez Flores Elias Moises.jpg", pdf: "resenas/f/Gomez Flores Elias Moises.pdf" },
    { numero: 12, nombre: "Estanga Rondon Augusto Jose", foto: "fotos/f/Estanga Rondon Augusto Jose.jpg", pdf: "resenas/f/Estanga Rondon Augusto Jose.pdf" },
    { numero: 13, nombre: "Rodriguez Medina Barbara Sthefania", foto: "fotos/f/Rodriguez Medina Barbara Sthefania.jpg", pdf: "resenas/f/Rodriguez Medina Barbara Sthefania.pdf" },
    { numero: 14, nombre: "Torrealna Talabera Pedro Manuel", foto: "fotos/f/Torrealna Talabera Pedro Manuel.jpg", pdf: "resenas/f/Torrealna Talabera Pedro Manuel.pdf" },
    { numero: 15, nombre: "Renifo Noriega Sebastian Alecci", foto: "fotos/f/Renifo Noriega Sebastian Alecci.jpg", pdf: "resenas/f/Renifo Noriega Sebastian Alecci.pdf" },
    { numero: 16, nombre: "Sambrano Gota Sofia Andreina", foto: "fotos/f/Sambrano Gota Sofia Andreina.jpg", pdf: "resenas/f/Sambrano Gota Sofia Andreina.pdf" },
    { numero: 17, nombre: "Garcia Deffit Victor Rafael", foto: "fotos/f/Garcia Deffit Victor Rafael.jpg", pdf: "resenas/f/Garcia Deffit Victor Rafael.pdf" },
    { numero: 18, nombre: "Flores Diaz William Jose", foto: "fotos/f/Flores Diaz William Jose.jpg", pdf: "resenas/f/Flores Diaz William Jose.pdf" },
    { numero: 19, nombre: "Infantes Vargas Diego Jose", foto: "fotos/f/Infantes Vargas Diego Jose.jpg", pdf: "resenas/f/Infantes Vargas Diego Jose.pdf" },
    { numero: 20, nombre: "Perez Pulido Nathalia Sofia", foto: "fotos/f/Perez Pulido Nathalia Sofia.jpg", pdf: "resenas/f/Perez Pulido Nathalia Sofia.pdf" },
    { numero: 21, nombre: "Martinez Barquero Daiberts Misael ", foto: "fotos/f/Martinez Barquero Daiberts Misael .jpg", pdf: "resenas/f/Martinez Barquero Daiberts Misael .pdf" },
    { numero: 22, nombre: "Perdomo Rico Alexabell Chiquinquira", foto: "fotos/f/Perdomo Rico Alexabell Chiquinquira.jpg", pdf: "resenas/f/Perdomo Rico Alexabell Chiquinquira.pdf" },
    { numero: 23, nombre: "Rodriguez Valera Johan Alexander", foto: "fotos/f/Rodriguez Valera Johan Alexander.jpg", pdf: "resenas/f/Rodriguez Valera Johan Alexander.pdf" },
    { numero: 24, nombre: "Reina Amatima Esmeralda Carolina", foto: "fotos/f/Reina Amatima Esmeralda Carolina.jpg", pdf: "resenas/f/Reina Amatima Esmeralda Carolina.pdf" },
    { numero: 25, nombre: "Tovar Suarez Victor Isnardo", foto: "fotos/f/Tovar Suarez Victor Isnardo.jpg", pdf: "resenas/f/Tovar Suarez Victor Isnardo.pdf" },
    { numero: 26, nombre: "Alvarado Marinez Alexandra Antonella ", foto: "fotos/f/Alvarado Marinez Alexandra Antonella .jpg", pdf: "resenas/f/Alvarado Marinez Alexandra Antonella .pdf" },
    { numero: 27, nombre: "Madriz Madriz Gabriel Charl", foto: "fotos/f/Madriz Madriz Gabriel Charl.jpg", pdf: "resenas/f/Madriz Madriz Gabriel Charl.pdf" },
    { numero: 28, nombre: "Tavera Alvarez Edmarlis Alejandra", foto: "fotos/f/Tavera Alvarez Edmarlis Alejandra.jpg", pdf: "resenas/f/Tavera Alvarez Edmarlis Alejandra.pdf" },
    { numero: 29, nombre: "Hernandez Cordero Leonardo Elias", foto: "fotos/f/Hernandez Cordero Leonardo Elias.jpg", pdf: "resenas/f/Hernandez Cordero Leonardo Elias.pdf" },
    { numero: 30, nombre: "Seijas Hernadez Gabriela Alejandra", foto: "fotos/f/Seijas Hernadez Gabriela Alejandra.jpg", pdf: "resenas/f/Seijas Hernadez Gabriela Alejandra.pdf" },
    { numero: 31, nombre: "Belisario Salazar Oreman Alexander", foto: "fotos/f/Belisario Salazar Oreman Alexander.jpg", pdf: "resenas/f/Belisario Salazar Oreman Alexander.pdf" },
    { numero: 32, nombre: "Camero Herrera Isaac Alejandro", foto: "fotos/f/Camero Herrera Isaac Alejandro.jpg", pdf: "resenas/f/Camero Herrera Isaac Alejandro.pdf" },
    { numero: 33, nombre: "Camero Herrera Victoria Sofia", foto: "fotos/f/Camero Herrera Victoria Sofia.jpg", pdf: "resenas/f/Camero Herrera Victoria Sofia.pdf" },
    { numero: 34, nombre: "Carrizalez Duran Greidys Nathacha", foto: "fotos/f/Carrizalez Duran Greidys Nathacha.jpg", pdf: "resenas/f/Carrizalez Duran Greidys Nathacha.pdf" },
    { numero: 35, nombre: "Herrera Camacho Richard Antonio", foto: "fotos/f/Herrera Camacho Richard Antonio.jpg", pdf: "resenas/f/Herrera Camacho Richard Antonio.pdf" },
  ]
};


let seccionActual = "A";

function abrirSeccion(sec) {
  seccionActual = sec;
  document.getElementById("inicio").classList.add("hidden");
  document.getElementById("seccion").classList.remove("hidden");
  document.getElementById("tituloSeccion").textContent = "Sección " + sec;
  document.getElementById("busqueda").value = "";
  ocultarError();
  mostrarTodos();
}

function cerrarSeccion() {
  document.getElementById("seccion").classList.add("hidden");
  document.getElementById("inicio").classList.remove("hidden");
  ocultarError();
}

function pintar(alumnos) {
  const contenedor = document.getElementById("contenedorAlumnos");
  contenedor.innerHTML = "";

  if (alumnos.length === 0) {
    contenedor.innerHTML = "<p style='color:#20507f;text-align:center;font-weight:700;'>No hay alumnos para mostrar.</p>";
    return;
  }

  alumnos.forEach(a => {
    contenedor.innerHTML += `
      <div class="card">
        <img src="${a.foto}" alt="${a.nombre}">
        <div class="card-content">
          <h3>${a.nombre}</h3>
          <p>Número de lista: ${a.numero}</p>
          <a href="${a.pdf}" target="_blank">Ver reseña PDF</a>
        </div>
      </div>
    `;
  });
}

function mostrarTodos() {
  pintar(datos[seccionActual] || []);
}

function buscar() {
  const valor = document.getElementById("busqueda").value.trim().toLowerCase();
  const error = document.getElementById("mensajeError");

  if (valor === "") {
    error.textContent = "Escriba un número de lista o un nombre.";
    error.classList.remove("hidden");
    pintar([]);
    return;
  }

  const filtrados = (datos[seccionActual] || []).filter(a =>
    String(a.numero).includes(valor) || a.nombre.toLowerCase().includes(valor)
  );

  if (filtrados.length === 0) {
    error.textContent = "No se encontraron alumnos con esa búsqueda.";
    error.classList.remove("hidden");
  } else {
    ocultarError();
  }

  pintar(filtrados);
}

function ocultarError() {
  const error = document.getElementById("mensajeError");
  error.textContent = "";
  error.classList.add("hidden");
}
