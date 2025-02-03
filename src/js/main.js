document.addEventListener("DOMContentLoaded", function () {
    const carrossel = document.querySelector(".carrossel__container");
    const prevBtn = document.querySelector(".navigation .prev");
    const nextBtn = document.querySelector(".navigation .next");
    const cards = document.querySelectorAll(".carrossel__container .card");

    if (!carrossel || !prevBtn || !nextBtn || cards.length === 0) return; 

    let currentIndex = 0;

    function getCardWidth() {
        const card = document.querySelector(".card");
        if (!card) return 0;
        const computedStyle = getComputedStyle(carrossel);
        const gap = parseInt(computedStyle.gap) || 0;
        return card.offsetWidth + gap;
    }

    function getVisibleCards() {
        return Math.floor(document.querySelector(".carrossel").offsetWidth / getCardWidth());
    }

    let cardWidth = getCardWidth();
    let visibleCards = getVisibleCards();
    let totalCards = cards.length;

    function updateCarousel() {
        carrossel.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
    }

    function nextSlide() {
        if (currentIndex < totalCards - visibleCards) {
            currentIndex++;
            updateCarousel();
        }
    }

    function prevSlide() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    }

    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);

    window.addEventListener("resize", () => {
        cardWidth = getCardWidth();
        visibleCards = getVisibleCards();
        updateCarousel();
    });
});


// Afeito da sessão de personagens  --------------------------------------------

document.addEventListener("DOMContentLoaded", () => {
    const characterImages = document.querySelectorAll('.right-side img');
    const characterImage = document.querySelector('.left-side img');
    const characterTitle = document.querySelector('.character-description h2');
    const characterDescription = document.querySelector('.left-side .text--small');

    const characters = {
        "Daenerys_Targaryen": {
            img: "./dist/images/section3/Daenerys_Targaryen.png",
            title: "Daenerys Targaryen",
            description: "Última herdeira da antiga dinastia, lutando para reconquistar o Trono de Ferro com seus dragões."
        },
        "Jon_Snow": {
            img: "./dist/images/section3/Jon_Snow.png",
            title: "Jon Snow",
            description: "Bastardo de Ned Stark, conhecido por sua coragem e lealdade, também tem um grande papel nas guerras do Norte."
        },
        "Cersei_Lannister": {
            img: "./dist/images/section3/Cersei_Lannister.png",
            title: "Cersei Lannister",
            description: "Rainha ambiciosa, disposta a fazer qualquer coisa para proteger seus filhos e manter o poder."
        },
        "Jaime_Lannister": {
            img: "./dist/images/section3/Jaime_Lannister.png",
            title: "Jaime Lannister",
            description: "O Cavaleiro da Mão, irmão gêmeo de Cersei, conhecido por sua habilidade com espadas e sua redenção."
        },
        "Tyrion_Lannister": {
            img: "./dist/images/section3/Tyrion_Lannister.png",
            title: "Tyrion Lannister",
            description: "O anão astuto da família Lannister, conhecido por sua inteligência e habilidade política."
        },
        "Arya_Stark": {
            img: "./dist/images/section3/Arya_Stark.png",
            title: "Arya Stark",
            description: "A jovem Stark que se transforma em uma assassina habilidosa, vingando a morte de sua família."
        },
        "Robert_Baratheon": {
            img: "./dist/images/section3/Robert_Baratheon.png",
            title: "Robert Baratheon",
            description: "Rei de Westeros, conhecido por sua força e por ter conquistado o trono, mas também por sua decadência."
        },
        "Eddard_Stark": {
            img: "./dist/images/section3/Eddard_Stark.png",
            title: "Eddard Stark",
            description: "Líder honrado do Norte, pai de Jon, Arya, Sansa, Bran, Robb e Rickon."
        },
        "Catelyn_Stark": {
            img: "./dist/images/section3/Catelyn_Stark.png",
            title: "Catelyn Stark",
            description: "Mãe protetora de seus filhos e esposa de Eddard Stark, disposta a lutar pela sua família."
        },
        "Sansa_Stark": {
            img: "./dist/images/section3/Sansa_Stark.png",
            title: "Sansa Stark",
            description: "Filha de Eddard e Catelyn Stark, inicialmente ingênua, mas se torna uma líder astuta."
        },
        "Joffrey_Baratheon": {
            img: "./dist/images/section3/Joffrey_Baratheon.png",
            title: "Joffrey Baratheon",
            description: "Rei cruel e tirânico, filho de Cersei Lannister e do falecido Robert Baratheon."
        },
        "Bran_Stark": {
            img: "./dist/images/section3/Bran_Stark.png",
            title: "Bran Stark",
            description: "O caçula dos Stark, que após um acidente ganha habilidades místicas como o Corvo de Três Olhos."
        },
        "Tywin_Lannister": {
            img: "./dist/images/section3/Tywin_Lannister.png",
            title: "Tywin Lannister",
            description: "Poderoso patriarca da família Lannister, conhecido por sua crueldade e estratégia política."
        },
        "Jorah_Mormont": {
            img: "./dist/images/section3/Jorah_Mormont.png",
            title: "Jorah Mormont",
            description: "Antigo cavaleiro exilado, leal a Daenerys Targaryen e com um amor não correspondido por ela."
        },
        "Verme_Cinzento": {
            img: "./dist/images/section3/Verme_Cinzento.png",
            title: "Verme Cinzento",
            description: "Líder dos Imaculados, leal a Daenerys Targaryen e um guerreiro imbatível."
        },
        "Missandei": {
            img: "./dist/images/section3/Missandei.png",
            title: "Missandei",
            description: "Conselheira de Daenerys Targaryen, uma das últimas sobreviventes de Naath, conhecida por sua sabedoria."
        },
        "Samwell_Tarly": {
            img: "./dist/images/section3/Samwell_Tarly.png",
            title: "Samwell Tarly",
            description: "Membro da Patrulha da Noite e amigo fiel de Jon Snow, com um grande intelecto."
        },
        "Lorde_Varys": {
            img: "./dist/images/section3/Lorde_Varys.png",
            title: "Lorde Varys",
            description: "O Mestre dos Sussurros, conhecido por sua rede de espiões e manipulações políticas."
        },
        "Petyr_Baelish": {
            img: "./dist/images/section3/Petyr_Baelish.png",
            title: "Petyr Baelish",
            description: "Ambicioso e manipulador, ele tenta se infiltrar na política de Westeros e ascender ao poder."
        },
        "Brienne_de_Tarth": {
            img: "./dist/images/section3/Brienne_de_Tarth.png",
            title: "Brienne de Tarth",
            description: "Cavaleira leal e honrada, famosa por sua força e coragem, e por sua dedicação a proteger a família Stark."
        },
        "Melisandre_de_Asshai": {
            img: "./dist/images/section3/Melisandre_de_Asshai.png",
            title: "Melisandre de Asshai",
            description: "A feiticeira vermelha, devota de R'hllor e com habilidades místicas, incluindo predições."
        },
        "Hodor": {
            img: "./dist/images/section3/Hodor.png",
            title: "Hodor",
            description: "Gigante e fiel servidor da Casa Stark, conhecido por seu comportamento peculiar."
        },
        "Theon_Greyjoy": {
            img: "./dist/images/section3/Theon_Greyjoy.png",
            title: "Theon Greyjoy",
            description: "Membro da Casa Greyjoy, que acaba se tornando uma figura trágica ao longo da série."
        },
        "Ramsay_Bolton": {
            img: "./dist/images/section3/Ramsay_Bolton.png",
            title: "Ramsay Bolton",
            description: "Filho ilegítimo de Roose Bolton, é um dos vilões mais cruéis e sádicos da série."
        }
    };
    
    characterImages.forEach(image => {
        image.addEventListener('click', (e) => {
            const characterName = e.target.alt;

            // Verificar se o personagem existe no objeto characters
            if (characters[characterName]) {
                const characterData = characters[characterName];
                
                // Alterar a imagem título e descrição
                characterImage.src = characterData.img;
                characterTitle.textContent = characterData.title;
                characterDescription.textContent = characterData.description;
            }
        });
    });
});
