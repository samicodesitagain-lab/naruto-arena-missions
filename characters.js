const characterData = [
  {
    name: "Uzumaki Naruto",
    url: "https://i.imgur.com/QGf2RXi.png",
    themepic: "https://i.imgur.com/CGRELyr.png",
    description:
      "A Genin from Team 7, Naruto is an orphan with the goal to one day become Hokage. Using his signature move, Shadow Clones, Naruto is able to perform powerful moves such as the Uzumaki Naruto Combo and the Rasengan.",
    descriptionBR:
      "Um Genin do Time 7, Naruto é um órfão com o objetivo de se tornar Hokage um dia. Usando seu movimento característico, 'Shadow Clones', Naruto é capaz de realizar golpes poderosos, como 'Uzumaki Naruto Combo' e 'Rasengan'.",
    skills: [
      {
        name: "Uzumaki Naruto Combo",
        themeName: "Uzumaki Naruto Combo",
        description:
          "Naruto's version of the Lion Combo. This skill <Damage>deals 20 damage<Damage> to one enemy. During <SkillName>'Shadow Clones'<SkillName>, this skill will deal <Improvements>10 additional damage<Improvements>.",
        descriptionBR:
          "A versão de Naruto do Lion Combo. Essa habilidade <Damage>causa 20 de dano<Damage> a um inimigo. Durante <SkillName>'Shadow Clones'<SkillName>, essa habilidade irá causar <Improvements>10 de dano adicional<Improvements>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Uy1TKG3.png",
        themepic: "https://i.imgur.com/ENpwcJ4.png",
      },
      {
        name: "Rasengan",
        themeName: "Rasengan",
        description:
          "Naruto hits one enemy with a ball of chakra, <Damage>dealing 45 damage<Damage> to them and <Effects>stunning<Effects> their skills for 1 turn. Requires <SkillName>'Shadow Clones'<SkillName>.",
        descriptionBR:
          "Naruto atinge um inimigo com uma esfera de chakra, <Damage>causando 45 de dano<Damage> e <Effects>atordoando<Effects> todas as suas habilidades por 1 turno. Requer <SkillName>'Shadow Clones'<SkillName>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/thNhBRH.png",
        themepic: "https://i.imgur.com/OBMIYTL.png",
      },
      {
        name: "Shadow Clones",
        themeName: "Shadow Clones",
        description:
          "Naruto creates multiple shadow clones hiding his true self. Naruto gains 15 <Defense>points of damage reduction<Defense> for 5 turns. During this time, <SkillName>'Uzumaki Naruto Combo'<SkillName> is improved and will <Improvements>deal an additional 10 damage<Improvements> and <SkillName>'Rasengan'<SkillName> may be used.",
        descriptionBR:
          "Naruto cria vários clones das sombras, escondendo seu verdadeiro eu. Naruto ganha 15 <Defense>pontos de redução de dano<Defense> por 5 turnos. Durante esse tempo, <SkillName>'Uzumaki Naruto Combo'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>, e <SkillName>'Rasengan'<SkillName> poderá ser usado.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/98c5RRL.png",
        themepic: "https://i.imgur.com/QYfmbtB.png",
      },
      {
        name: "Sexy Technique",
        themeName: "Sexy Technique",
        description:
          "This skill makes Uzumaki Naruto <Defense>invulnerable<Defense> for 1 turn. During <SkillName>'Kyuubi's Chakra Awakening'<SkillName>, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Kyuubi's Presence'<SkillName> and will be classed as <Classes>Mental<Classes>.",
        descriptionBR:
          "Essa habilidade torna Uzumaki Naruto <Defense>invulnerável<Defense> por 1 turno. Durante <SkillName>'Kyuubi's Chakra Awakening'<SkillName>, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Kyuubi's Presence'<SkillName> e será classificada como <Classes>Mental<Classes>.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Aue7Pce.png",
        themepic: "https://i.imgur.com/Q9f15Ww.png",
      },
      {
        name: "Passive: Kyuubi's Chakra Awakening",
        themeName: "Passive: Kyuubi's Chakra Awakening",
        description:
          "When Naruto <Improvements>reaches 50 health<Improvements> for the first time, Kyuubi's chakra will awaken, <Defense>healing<Defense> Naruto <Defense>for 5 health<Defense> every turn permanently. During this time, Naruto will <Improvements>deal 5 additional damage<Improvements> and <SkillName>'Shadow Clones'<SkillName> will grant him 15 <Defense>unpierceable damage<Defense> reduction instead. Passives cannot be removed.",
        descriptionBR:
          "Quando Naruto <Improvements>atingir 50 de vida<Improvements> pela primeira vez, o chakra da Kyuubi irá despertar, <Defense>curando<Defense> Naruto <Defense>em 5 de vida<Defense> a cada turno permanentemente. Durante esse tempo, Naruto irá <Improvements>causar 5 de dano adicional<Improvements>, e <SkillName>'Shadow Clones'<SkillName> concederá a ele 15 de <Defense>redução de dano impenetrável<Defense>. Passivas não podem ser removidas.",
        energy: [],
        classes: ["Passive", "Instant", "_$1", "_$2", "_$3", "_$4"],
        cooldown: 0,
        url: "https://i.imgur.com/vU2LIZQ.png",
      },
    ],
  },
  {
    name: "Haruno Sakura",
    url: "https://i.imgur.com/TWShCf2.png",
    themepic: "https://i.imgur.com/AFpDFPb.png",
    description:
      "A Genin from Team 7, Sakura is very intelligent, but self-conscious about herself. Having just recently received training from Tsunade, Sakura is now able to deliver powerful punches and heal her own allies.",
    descriptionBR:
      "Uma Genin do Time 7, Sakura é muito inteligente, mas insegura sobre si mesma. Tendo recebido treinamento de Tsunade recentemente, Sakura agora é capaz de desferir golpes poderosos e curar seus próprios aliados.",
    skills: [
      {
        name: "KO Punch",
        themeName: "KO Punch",
        description:
          "Sakura punches one enemy with all her strength, <Damage>dealing 20 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and mental<Classes> skills for 1 turn. During <SkillName>'Inner Sakura'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "Sakura soca um inimigo com toda a sua força, <Damage>causando 20 de dano<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>physical e mental<Classes> por 1 turno. Durante <SkillName>'Inner Sakura'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/x0Yqker.png",
        themepic: "https://i.imgur.com/GeVZdTf.png",
      },
      {
        name: "Cure",
        themeName: "Cure",
        description:
          "Using basic healing techniques, Sakura <Defense>heals<Defense> herself or an ally <Defense>for 25 health<Defense>.",
        descriptionBR:
          "Usando técnicas básicas de cura, Sakura <Defense>cura<Defense> a si mesma ou um aliado <Defense>em 25 de vida<Defense>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/M2O5AdG.png",
        themepic: "https://i.imgur.com/XnEwxvR.png",
      },
      {
        name: "Inner Sakura",
        themeName: "Inner Sakura",
        description:
          "Sakura's inner self surfaces and urges her on. For 4 turns, Sakura will gain <Defense>10 points of damage reduction<Defense>. During this time, Sakura will <Defense>ignore non-damage effects<Defense> and <SkillName>'KO Punch'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "O verdadeiro eu de Sakura surge e a incentiva. Por 4 turnos, Sakura ganhará <Defense>10 pontos de redução de dano<Defense>. Durante esse tempo, Sakura irá <Defense>ignorar todos os efeitos exceto dano<Defense> e <SkillName>'KO Punch'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/03BjSkn.jpg",
        themepic: "https://i.imgur.com/TaVUR1F.png",
      },
      {
        name: "Sakura Replacement Technique",
        themeName: "Sakura Replacement Technique",
        description:
          "This skill makes Haruno Sakura <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haruno Sakura <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
        themepic: "https://i.imgur.com/aGxy5GK.png",
      },
    ],
  },
  {
    name: "Uchiha Sasuke",
    url: "https://i.imgur.com/qSvGnhb.png",
    themepic: "https://i.imgur.com/kylCkxY.png",
    description:
      "A Genin from Team 7, Sasuke is the lone survivor of the Uchiha clan and has sworn vengeance against his brother. Using his sharingan, Sasuke is able to anticipate incoming attacks and is capable of advanced offensive moves.",
    descriptionBR:
      "Um Genin do Time 7, Sasuke é o único sobrevivente do clã Uchiha e jurou vingança contra seu irmão. Usando seu Sharingan, Sasuke é capaz de antecipar ataques e realizar golpes ofensivos avançados.",
    skills: [
      {
        name: "Lion Combo",
        themeName: "Lion Combo",
        description:
          "Copying a taijutsu combo that Lee used on him, Sasuke <Damage>deals 30 damage<Damage> to one enemy. This skill will <Improvements>deal an additional 15 damage<Improvements> to an enemy affected by <SkillName>'Sharingan'<SkillName>.",
        descriptionBR:
          "Copiando um combo de taijutsu que Lee usou contra ele, Sasuke <Damage>causa 30 de dano<Damage> a um inimigo. Essa habilidade irá<Improvements> causar 15 de dano adicional<Improvements> a um inimigo afetado por <SkillName>'Sharingan'<SkillName>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/tEIH5fQ.png",
        themepic: "https://i.imgur.com/MwBmJr1.png",
      },
      {
        name: "Chidori",
        themeName: "Chidori",
        description:
          "Using a lightning element attack jutsu, Sasuke <Damage>deals 40 piercing damag<Damage>e to one enemy. This skill will <Improvements>deal an additional 15 damage<Improvements> to an enemy affected by <SkillName>'Sharingan'<SkillName>. Requires <SkillName>'Sharingan'<SkillName> to be active on Sasuke.",
        descriptionBR:
          "Usando um jutsu de ataque do elemento raio, Sasuke <Damage>causa 40 de dano perfurante<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 15 de dano adicional<Improvements> a um inimigo afetado por <SkillName>'Sharingan'<SkillName>. Requer que <SkillName>'Sharingan'<SkillName> esteja ativo em Sasuke.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/kQpuuuX.png",
        themepic: "https://i.imgur.com/ubJGjcD.png",
      },
      {
        name: "Sharingan",
        themeName: "Sharingan",
        description:
          "Sasuke targets one enemy. For 4 turns, Sasuke will gain <Defense>25% damage reduction<Defense> and <SkillName>'Chidori'<SkillName> may be used. During this time, that enemy will <Improvements>receive an additional 15 damage<Improvements> from <SkillName>'Lion Combo'<SkillName> and <SkillName>'Chidori'<SkillName>.",
        descriptionBR:
          "Sasuke marca um inimigo. Por 4 turnos, Sasuke ganhará <Defense>25% de redução de dano<Defense> e <SkillName>'Chidori'<SkillName> poderá ser usado. Durante esse tempo, esse inimigo irá <Improvements>receber 15 de dano adicional<Improvements> de <SkillName>'Lion Combo'<SkillName> e <SkillName>'Chidori'<SkillName>.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Sv53VXt.png",
        themepic: "https://i.imgur.com/C2MXDHE.png",
      },
      {
        name: "Swift Block",
        themeName: "Sasuke Replacement Technique",
        description:
          "This skill makes Uchiha Sasuke <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Sasuke <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/F29QZe1.png",
        themepic: "https://i.imgur.com/aGxy5GK.png",
      },
      {
        name: "Passive: Cursed Seal Awakening",
        themeName: "Passive: Cursed Seal Awakening",
        description:
          "When Sasuke <Improvements>reaches 50 health<Improvements> for the first time, Cursed Seal will awaken, granting Sasuke <Defense>25% unpierceable damage reduction<Defense> permanently. During this time, Sasuke's skills <Classes>cannot be countered<Classes> or <Classes>reflected<Classes> and <SkillName>'Sharingan'<SkillName> will also make the enemy unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>.",
        descriptionBR:
          "Quando Sasuke <Improvements>atingir 50 de vida<Improvements> pela primeira vez, a Marca da Maldição será despertada, concedendo a Sasuke <Defense>25% de redução de dano impenetrável<Defense> permanentemente. Durante esse tempo, as habilidades de Sasuke <Classes>não poderão ser anuladas<Classes> ou <Classes>refletidas<Classes>, e <SkillName>'Sharingan'<SkillName> também fará com que o inimigo não possa <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>.",
        energy: [],
        classes: ["Passive", "Instant", "_$1", "_$2", "_$3", "_$4"],
        cooldown: 0,
        url: "https://i.imgur.com/wHV5DSC.png",
      },
    ],
  },
  {
    name: "Inuzuka Kiba",
    url: "https://i.imgur.com/2RwMXy9.png",
    themepic: "https://i.imgur.com/NaQ1sI0.png",
    description:
      "A Genin from Team 8, Kiba is a member of the Inuzuka clan, and is both short-tempered and impulsive. Using his dog, Akamaru, Kiba is capable of powerful taijutsu or fusing with Akamaru to become a deadly double headed dog.",
    descriptionBR:
      "Uma Genin do Time 8, Kiba é um membro do clã Inuzuka, sendo impetuoso e de temperamento curto. Usando seu cachorro, Akamaru, Kiba é capaz de realizar poderosos taijutsus ou se fundir com Akamaru para se tornar um mortal cachorro de duas cabeças.",
    skills: [
      {
        name: "Garouga",
        themeName: "Garouga",
        description:
          "Kiba <Damage>deals 30 damage<Damage> to one enemy. During <SkillName>'Double Headed Wolf'<SkillName>, this skill is improved and will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Kiba <Damage>causa 30 de dano<Damage> a um inimigo. Durante <SkillName>'Double Headed Wolf'<SkillName>, essa habilidade é melhorada e <Improvements>custará 1 chakra aleatório a menos<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/bDo7cUF.png",
        themepic: "https://i.imgur.com/iHIo741.png",
      },
      {
        name: "Double Headed Wolf",
        themeName: "Double Headed Wolf",
        description:
          "Kiba and Akamaru turn into a giant beast and attack all enemies, <Damage>dealing 15 damage<Damage> to them for 3 turns. The following 3 turns, <SkillName>'Garouga'<SkillName> is improved and will <Improvements>cost 1 less random chakra<Improvements>. During this time, Kiba gains 50% <Defense>unpierceable damage reduction<Defense>.",
        descriptionBR:
          "Kiba e Akamaru se transformam em uma besta gigante e atacam todos os inimigos, <Damage>causando 15 de dano<Damage> a eles por 3 turnos. Nos próximos 3 turnos, <SkillName>'Garouga'<SkillName> é melhorado e <Improvements>custará 1 chakra aleatório a menos<Improvements>. Durante esse tempo, Kiba ganha 50% de <Defense>redução de dano impenetrável<Defense>.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/dTMLAr4.png",
        themepic: "https://i.imgur.com/HrH5FGC.png",
      },
      {
        name: "Dynamic Air Marking",
        themeName: "Dynamic Air Marking",
        description:
          "Akamaru sprays urine on one enemy who cannot <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 3 turns. During this time, <SkillName>'Double Headed Wolf'<SkillName> and <SkillName>'Garouga'<SkillName> will <Improvements>deal 10 additional damage<Improvements> to them. This skill <Improvements>may not be used<Improvements> on an enemy already affected by it.",
        descriptionBR:
          "Akamaru espalha urina em um inimigo que não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense> por 3 turnos. Durante esse tempo, <SkillName>'Double Headed Wolf'<SkillName> e <SkillName>'Garouga'<SkillName> irão <Improvements>causar 10 de dano adicional<Improvements> a ele. Essa habilidade <Improvements>não pode ser usada<Improvements> em um inimigo que já esteja afetado por ela.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/I6iXYsf.png",
        themepic: "https://i.imgur.com/viYwK9c.png",
      },
      {
        name: "Smoke Bomb",
        themeName: "Smoke Bomb",
        description:
          "This skill makes Inuzuka Kiba <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Inuzuka Kiba <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SM6uB5m.png",
        themepic: "https://i.imgur.com/wS8PDNu.png",
      },
    ],
  },
  {
    name: "Aburame Shino",
    url: "https://i.imgur.com/XSgn9p9.png",
    themepic: "https://i.imgur.com/CNhe04g.png",
    description:
      "A Genin from Team 8, Shino is the successor of the Aburame clan, and a very reserved and tactical fighter. Using the bugs that live inside his body, Shino is able to leech the chakra off his enemies, or protect his entire team.",
    descriptionBR:
      "Uma Genin do Time 8, Shino é o sucessor do clã Aburame, sendo um lutador muito reservado e tático. Usando os insetos que vivem dentro de seu corpo, Shino é capaz de drenar o chakra de seus inimigos ou proteger toda a sua equipe.",
    skills: [
      {
        name: "Chakra Leach",
        themeName: "Chakra Leach",
        description:
          "Shino directs his chakra draining bugs to one enemy, <Damage>dealing 15 affliction<Damage> damage and <Effects>stealing 1 taijutsu or genjutsu chakra<Effects> from their chakra pool. The following turn <Classes>(only)<Classes>, this skill will <Improvements>deal 20 affliction damage<Improvements> but will not <Effects>steal chakra<Effects>.",
        descriptionBR:
          "Shino direciona seus insetos drenadores de chakra para um inimigo, <Damage>causando 15 de dano aflitivo<Damage> e <Effects>roubando 1 taijutsu ou genjutsu chakra<Effects> dele. No próximo turno <Classes>(apenas)<Classes>, essa habilidade irá <Improvements>causar 20 de dano aflitivo<Improvements>, mas não <Effects>roubará chakra<Effects>.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/mNTreml.png",
        themepic: "https://i.imgur.com/aytXwHt.png",
      },
      {
        name: "Female Bug",
        themeName: "Female Bug",
        description:
          "Shino directs one of his female bugs to attach itself. For 4 turns, <SkillName>'Chakra Leach'<SkillName> will <Improvements>deal 5 additional damage<Improvements> to one enemy. During this time, if that enemy <Classes>uses a new harmful skill<Classes>, they will <Effects>deal 5 less non-affliction damage<Effects> for 1 turn. This skill stacks.",
        descriptionBR:
          "Shino direciona um de seus insetos fêmea para se prender ao inimigo. Por 4 turnos, <SkillName>'Chakra Leach'<SkillName> irá <Improvements>causar 5 de dano adicional<Improvements> a um inimigo. Durante esse tempo, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ele irá <Effects>causar 5 a menos de dano não aflitivo<Effects> por 1 turno. Essa habilidade acumula.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/MRWPHSi.png",
        themepic: "https://i.imgur.com/enxCXqk.png",
      },
      {
        name: "Bug Wall",
        themeName: "Bug Wall",
        description:
          "Shino calls millions of bugs to create a wall protecting himself and his allies, making the entire team <Defense>invulnerable<Defense> for 1 turn and granting them 10 <Defense>points of permanent destructible defense<Defense>.",
        descriptionBR:
          "Shino chama milhões de insetos para criar uma parede protegendo a si e seus aliados, tornando toda a equipe <Defense>invulnerável<Defense> por 1 turno e concedendo 10 <Defense>pontos de defesa destrutível permanente<Defense>.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/Zvu9ydw.png",
        themepic: "https://i.imgur.com/JZvptaG.png",
      },
      {
        name: "Bug Clone",
        themeName: "Bug Clone",
        description:
          "This skill makes Aburame Shino <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Aburame Shino <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/MnV2zJn.png",
        themepic: "https://i.imgur.com/sx451aQ.png",
      },
    ],
  },
  {
    name: "Hyuuga Hinata",
    url: "https://i.imgur.com/e5935Kz.png",
    themepic: "https://i.imgur.com/iHUtd5j.png",
    description:
      "A Genin from Team 8, Hinata is the next in line in the Hyuuga clan, but she is shy and very withdrawn. Using the trademark Byakugan of the Hyuuga, Hinata is able to delicately target an enemy's Chakra Points while defending the team.",
    descriptionBR:
      "Uma Genin do Time 8, Hinata é a próxima na linha do clã Hyuuga, mas é tímida e muito reservada. Usando o Byakugan, marca registrada dos Hyuuga, Hinata é capaz de atingir delicadamente os Pontos de Chakra de um inimigo enquanto defende a equipe.",
    skills: [
      {
        name: "Hinata Gentle Fist",
        themeName: "Hinata Gentle Fist",
        description:
          "Using the Hyuuga clan's style of taijutsu, Hinata <Damage>deals 20 damage<Damage> to one enemy. The following turn, that enemy will be <Damage>dealt 15 damage<Damage>. During <SkillName>'Byakugan'<SkillName>, this skill will instantly <Effects>remove 1 non-genjutsu chakra<Effects> for 1 turn.",
        descriptionBR:
          "Usando o estilo de taijutsu do clã Hyuuga, Hinata <Damage>causa 20 de dano<Damage> a um inimigo. No próximo turno, esse inimigo irá <Damage>receber 15 de dano<Damage>. Durante <SkillName>'Byakugan'<SkillName>, essa habilidade irá instantaneamente <Effects>remover 1 não-genjutsu chakra<Effects> por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/hiQouXW.png",
        themepic: "https://i.imgur.com/bK0FEVS.png",
      },
      {
        name: "Eight Trigrams 64 Palms Protection",
        themeName: "Eight Trigrams 64 Palms Protection",
        description:
          "Hinata <Damage>deals 10 piercing damage<Damage> to all enemies for 2 turns. For 1 turn, if Hinata or her allies is <Classes>affected by a new damage skill<Classes>, they will become <Defense>invulnerable<Defense> for 1 turn*. During <SkillName>'Byakugan'<SkillName>, this skill will <Improvements>deal 5 additional damage<Improvements>.",
        descriptionBR:
          "Hinata <Damage>causa 10 de dano perfurante<Damage> a todos os inimigos por 2 turnos. Por 1 turno, se Hinata ou seus aliados forem <Classes>afetados por uma nova habilidade de dano<Classes>, eles se tornarão <Defense>invulneráveis<Defense> por 1 turno*. Durante <SkillName>'Byakugan'<SkillName>, essa habilidade irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/nyci2QP.png",
        themepic: "https://i.imgur.com/arcW0wq.png",
      },
      {
        name: "Byakugan",
        themeName: "Byakugan",
        description:
          "Hinata activates her Byakugan and gains <Defense>50% damage reduction<Defense> for 4 turns. During this time, <SkillName>'Gentle Fist'<SkillName> and <SkillName>'Eight Trigrams 64 Palms Protection'<SkillName> will be improved and <SkillName>'Byakugan'<SkillName> will <Effects>reveal any invisible skills<Effects> used by the enemy team. This skill <Classes>cannot be countered<Classes> and it ends if Hinata <Classes>dies<Classes>.",
        descriptionBR:
          "Hinata ativa seu Byakugan e ganha <Defense>50% de redução de dano<Defense> por 4 turnos. Durante esse tempo, <SkillName>'Gentle Fist'<SkillName> e <SkillName>'Eight Trigrams 64 Palms Protection'<SkillName> serão melhorados e <SkillName>'Byakugan'<SkillName> irá <Effects>revelar qualquer habilidade invisível<Effects> usada pela equipe inimiga. Essa habilidade <Classes>não pode ser anulada<Classes> e termina se Hinata <Classes>morrer<Classes>.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/T4KZRDT.png",
        themepic: "https://i.imgur.com/UonwrTV.png",
      },
      {
        name: "Hinata Block",
        themeName: "Eight Trigrams 64 Palms Protection",
        description:
          "This skill makes Hyuuga Hinata <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hinata <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GLXR6wv.png",
        themepic: "https://i.imgur.com/IaVrnfX.png",
      },
    ],
  },
  {
    name: "Nara Shikamaru",
    url: "https://i.imgur.com/K2zZmN5.png",
    themepic: "https://i.imgur.com/dp4itll.jpg",
    description:
      "A Genin from Team 10, a member of the Nara clan, Shikamaru is considered to be the smartest Genin of all the Konoha 11. Using his bloodline, Shikamaru can manipulate the shadows in the battlefield to disable and attack his enemies.",
    descriptionBR:
      "Uma Genin do Time 10, membro do clã Nara, Shikamaru é considerado o Genin mais inteligente de todos os Konoha 11. Usando sua linhagem, Shikamaru pode manipular as sombras no campo de batalha para desabilitar e atacar seus inimigos.",
    skills: [
      {
        name: "Meditate",
        themeName: "Meditate",
        description:
          "Shikamaru sits down and begins thinking up a strategy against one enemy, <Improvements>marking<Improvements> them for 5 turns. This skill <Classes>cannot be countered<Classes> or <Classes>reflected<Classes> and <Improvements>may not used<Improvements> on an enemy already affected by it.",
        descriptionBR:
          "Shikamaru se senta e começa a pensar em uma estratégia contra um inimigo, <Improvements>marcando<Improvements> ele por 5 turnos. Essa habilidade <Classes>não pode ser anulada<Classes> ou <Classes>refletida<Classes> e <Improvements>não pode ser usada<Improvements> em um inimigo já afetado por ela.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/CdbnJMj.png",
        themepic: "https://i.imgur.com/pTVxSZJ.jpg",
      },
      {
        name: "Shadow-Neck Bind",
        themeName: "Shadow-Neck Bind",
        description:
          "Shikamaru chokes all enemies, making them unable to <Defense>reduce damage<Defense> and <Defense>becoming invulnerable<Defense>* while <Damage>dealing 15 damage<Damage> to them for 1 turn. This skill will <Improvements>last 2 turns<Improvements> on enemies affected by <SkillName>'Meditate'<SkillName>.",
        descriptionBR:
          "Shikamaru estrangula todos os inimigos, deixando eles incapazes de <Defense>reduzir dano<Defense> ou se <Defense>tornar invulnerável<Defense>*, e <Damage>causando 15 de dano<Damage> a eles por 1 turno. Essa habilidade irá <Improvements>durar 2 turnos<Improvements> em inimigos afetados por <SkillName>'Meditate'<SkillName>.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Action", "Instant*"],
        cooldown: 1,
        url: "https://i.imgur.com/CmEudLR.png",
        themepic: "https://i.imgur.com/tAcza6c.jpg",
      },
      {
        name: "Shadow Imitation",
        themeName: "Shadow Imitation",
        description:
          "Shikamaru captures all enemies in shadows, <Effects>stunning<Effects> their <Classes>non-mental<Classes> skills for 1 turn. If used on enemies affected by <SkillName>'Meditate'<SkillName>, this skill will <Effects>fully stun<Effects> them <Improvements>for 2 turns<Improvements>.",
        descriptionBR:
          "Shikamaru captura todos os inimigos nas sombras, <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno. Se usado em inimigos afetados por <SkillName>'Meditate'<SkillName>, essa habilidade irá <Effects>atordoar completamente<Effects> esses inimigos <Improvements>por 2 turnos<Improvements>.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 3,
        url: "https://i.imgur.com/eC9GWCD.png",
        themepic: "https://i.imgur.com/0bUozVR.jpg",
      },
      {
        name: "Shikamaru Hide",
        themeName: "Shikamaru Hide",
        description:
          "This skill makes Nara Shikamaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikamaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/GhEHgrl.png",
        themepic: "https://i.imgur.com/rkCdpCF.jpeg",
      },
    ],
  },
  {
    name: "Akimichi Chouji",
    url: "https://i.imgur.com/NxOq035.png",
    themepic: "https://i.imgur.com/70dBNXr.jpg",
    description:
      "A Genin from Team 10, Chouji is a member of the Akimichi clan, a large eater, and a close friend to his allies. While innately strong, Chouji is able to sacrifice his own life using special pills from his clan to become insanely powerful.",
    descriptionBR:
      "Um Genin da Equipe 10, Chouji é um membro do clã Akimichi, <Damage>um grande comedor<Damage> e um amigo próximo de seus aliados. Embora seja naturalmente forte, Chouji é capaz de sacrificar sua própria vida usando pílulas especiais de seu clã para se tornar extremamente poderoso.",
    skills: [
      {
        name: "Partial Double Size",
        themeName: "Partial Double Size",
        description:
          "Chouji doubles the size of his arms and attacks one enemy, <Damage>dealing 20 damage<Damage> to them.",
        descriptionBR:
          "Chouji dobra o tamanho de seus braços e ataca um inimigo, <Damage>causando 20 de dano<Damage> a ele.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/cnZD5Wd.png",
        themepic: "https://i.imgur.com/19XqS0f.jpg",
      },
      {
        name: "Meat Tank",
        themeName: "Meat Tank",
        description:
          "Chouji transforms into a meat tank <Damage>dealing 10 damage<Damage> to one enemy for 2 turns. Chouji becomes <Defense>invulnerable<Defense> for 2 turns. Chouji <Defense>cannot be healed<Defense> during <SkillName>'Meat Tank'<SkillName>.",
        descriptionBR:
          "Chouji se transforma em um tanque de carne, <Damage>causando 10 de dano<Damage> a um inimigo por 2 turnos. Chouji se torna <Defense>invulnerável<Defense> por 2 turnos. Chouji <Defense>não pode ser curado<Defense> durante <SkillName>'Meat Tank'<SkillName>.",
        energy: ["Blood"],
        classes: ["Physical", "Action", "Instant*", "Melee"],
        cooldown: 2,
        url: "https://i.imgur.com/sCIWub7.png",
        themepic: "https://i.imgur.com/xKrEgxI.jpg",
      },
      {
        name: "Akimichi Pills",
        themeName: "Akimichi Pills",
        description:
          "Chouji eats a pill, <Damage>taking 15 affliction damage<Damage>*. <SkillName>'Partial Double Size'<SkillName> will <Improvements>deal 20 additional damage<Improvements> and <SkillName>'Meat Tank'<SkillName> will <Improvements>deal 10 additional damage<Improvements> permanently. Each use of this skill will <Damage>deal 5 more affliction damage<Damage> and will <Improvements>cost 2 additional random chakra<Improvements>. Chouji can only eat <Classes>three<Classes> pills.",
        descriptionBR:
          "Chouji come uma pílula, <Damage>recebendo 15 de dano aflitivo<Damage>*. <SkillName>'Partial Double Size'<SkillName> irá <Improvements>causar 20 de dano adicional<Improvements> e <SkillName>'Meat Tank'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements> permanentemente. Cada uso dessa habilidade irá <Damage>causar 5 de dano aflitivo a mais<Damage> e <Improvements>custará 2 chakra aleatório adicional<Improvements>. Chouji pode comer apenas <Classes>três<Classes> pílulas.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/mlL0qYo.png",
        themepic: "https://i.imgur.com/Nn3Fflp.jpg",
      },
      {
        name: "Effortless Block",
        themeName: "Chouji Replacement Technique",
        description:
          "This skill makes Akimichi Chouji <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akimichi Chouji <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/wVVFj3V.png",
        themepic: "https://i.imgur.com/aGxy5GK.png",
      },
      {
        name: "Passive: Butterfly Mode",
        themeName: "Passive: Butterfly Mode",
        description:
          "When Chouji <Improvements>eats the three pills<Improvements>, he will activate the Butterfly Mode, gaining 75% <Defense>unpierceable damage reduction<Defense> permanently and <Effects>gaining 1 random chakra<Effects> every turn.",
        descriptionBR:
          "Quando Chouji <Improvements>comer as três pílulas<Improvements>, ele ativará o Modo Borboleta, ganhando <Defense>75% de redução de dano intransponível<Defense> permanentemente e <Effects>ganhando 1 chakra aleatório<Effects> a cada turno.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/cRqzTG1.png",
      },
    ],
  },
  {
    name: "Yamanaka Ino",
    url: "https://i.imgur.com/5pxmVTr.png",
    themepic: "https://i.imgur.com/hsfaguh.jpg",
    description:
      "A Genin from Team 10, Ino is a member of the Yamanaka clan, and a very confident and vain girl. Ino is able to use a variety of abilities to take over and control her enemies, making it difficult to tell friend from foe.",
    descriptionBR:
      "Uma Genin do Time 10, Ino é membro do clã Yamanaka e uma garota muito confiante e vaidosa. Ino é capaz de usar uma variedade de habilidades para tomar o controle de seus inimigos, tornando difícil distinguir amigo de inimigo.",
    skills: [
      {
        name: "Mind Body Disturbance",
        themeName: "Mind Body Disturbance",
        description:
          "Using this skill Ino <Effects>stuns<Effects> one enemy's <Classes>physical and chakra skills<Classes> for 1 turn. During this time, that enemy will be unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense>. One random different enemy will <Damage>receive 20 damage<Damage> that <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Usando essa habilidade, Ino <Effects>atordoa<Effects> as <Classes>habilidades Physical e Chakra<Classes> de um inimigo por 1 turno. Durante esse tempo, esse inimigo será incapaz de <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>. Um inimigo aleatório diferente irá <Damage>receber 20 de dano<Damage> que <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/rAnVK81.png",
        themepic: "https://i.imgur.com/Z7r0aDG.jpg",
      },
      {
        name: "Change of Heart",
        themeName: "Change of Heart",
        description:
          "Ino takes over the mind of an enemy. For 3 turns, that enemy cannot <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> and their <Classes>harmful<Classes> skills are <Effects>stunned<Effects>. The following 2 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Art of the Valentine'<SkillName>.",
        descriptionBR:
          "Ino assume o controle da mente de um inimigo. Por 3 turnos, esse inimigo não poderá <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense>, e suas habilidades <Classes>ofensivas<Classes> serão <Effects>atordoadas<Effects>. Nos próximos 2 turnos, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Art of the Valentine'<SkillName>.",
        energy: ["Gen", "Gen"],
        classes: ["Mental", "Ranged", "Control"],
        cooldown: 3,
        url: "https://i.imgur.com/r6vPVIR.png",
        themepic: "https://i.imgur.com/tAV4Stg.jpg",
      },
      {
        name: "Chakra Hair Strand Trap",
        themeName: "Chakra Hair Strand Trap",
        description:
          "Ino creates a trap for an enemy. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes>, then for 2 turns, <SkillName>'Change of Heart'<SkillName> will <Improvements>last 1 additional turn<Improvements> on that enemy and <SkillName>'Mind Body Disturbance'<SkillName> will make that enemy unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 2 turns instead. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Ino cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, então por 2 turnos, <SkillName>'Change of Heart'<SkillName> irá <Improvements>durar 1 turno adicional<Improvements> nesse inimigo e <SkillName>'Mind Body Disturbance'<SkillName> fará com que esse inimigo não possa <Defense>reduzir dano<Defense> ou <Defense>se tornar invulnerável<Defense> por 2 turnos. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: [],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/4VxNq83.png",
        themepic: "https://i.imgur.com/cEmTDP1.jpeg",
      },
      {
        name: "Ino Block",
        themeName: "Ino Replacement Technique",
        description:
          "This skill makes Yamanaka Ino <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamanaka Ino <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2o5RnKa.png",
        themepic: "https://i.imgur.com/aGxy5GK.png",
      },
      {
        name: "Art of the Valentine",
        themeName: "Art of the Valentine",
        description:
          "Ino <Damage>deals 25 damage<Damage> to one enemy. If used on an enemy affected by <SkillName>'Change of Heart'<SkillName>, this skill will <Improvements>deal 30 damage<Improvements> instead.",
        descriptionBR:
          "Ino <Damage>causa 25 de dano<Damage> a um inimigo. Se usada em um inimigo afetado por <SkillName>'Change of Heart<SkillName>', essa habilidade irá <Improvements>causar 30 de dano<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/RfWzT2j.png",
        themepic: "https://i.imgur.com/TA7tY1T.jpg",
      },
    ],
  },
  {
    name: "Tenten",
    url: "https://i.imgur.com/Qe7Q2Ig.png",
    themepic: "https://i.imgur.com/bvH11Wc.jpg",
    description:
      "A member of team Gai, Tenten is a tomboyish weapon specialist who believes a kunoichi can be as strong as a male ninja. In battle, Tenten surrounds the battlefield in weapons, using them for damage and for disabling her",
    descriptionBR:
      "Membro da equipe Gai, Tenten é uma especialista em armas, com uma personalidade meio moleca, que acredita que uma kunoichi pode ser tão forte quanto um ninja masculino. Em batalha, Tenten cerca o campo de batalha com armas, utilizando-as para causar dano e desabilitar seus inimigos.",
    skills: [
      {
        name: "Twin Rising Dragons",
        themeName: "Twin Rising Dragons",
        description:
          "Tenten creates numerous weapons from her scroll, <Damage>dealing 15 damage<Damage> to all enemies for 2 turns. During this time, this skill will <Improvements>cost 1 taijutsu<Improvements> and will <Damage>deal 20 damage<Damage> to one enemy and 10 to all others.",
        descriptionBR:
          "Tenten cria diversas armas de seu pergaminho, <Damage>causando 15 de dano<Damage> a todos os inimigos por 2 turnos. Durante esse tempo, essa habilidade irá <Improvements>custar 1 taijutsu<Improvements> e <Damage>causará 20 de dano<Damage> a um inimigo e 10 a todos os outros.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 0,
        url: "https://i.imgur.com/JjGnHUb.png",
        themepic: "https://i.imgur.com/SotOhWH.jpg",
      },
      {
        name: "Twin Rising Dragons Trap",
        themeName: "Twin Rising Dragons Trap",
        description:
          "Using multiple projectiles, Tenten targets all enemies, <Damage>dealing 5 damage<Damage> to them for each time <Classes>they were damaged<Classes> by <SkillName>'Twin Rising Dragons'<SkillName>. Afterwards, all stacks are removed. During <SkillName>'Twin Rising Dragons Full Release'<SkillName>, this skill <Effects>will stun<Effects> all enemies' <Classes>harmful non-mental<Classes> skills for 1 turn.",
        descriptionBR:
          "Usando múltiplos projéteis, Tenten atinge todos os inimigos, <Damage>causando 5 de dano<Damage> a eles para cada vez que <Classes>eles receberam dano<Classes> de <SkillName>'Twin Rising Dragons'<SkillName>. Após isso, todos os stacks serão removidos. Durante <SkillName>'Twin Rising Dragons Full Release'<SkillName>, essa habilidade <Effects>irá atordoar<Effects> as <Classes>habilidades ofensivas non-mental<Classes> de todos os inimigos por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/N1MpGCn.png",
        themepic: "https://i.imgur.com/D8IWywr.jpg",
      },
      {
        name: "Twin Rising Dragons Full Release",
        themeName: "Twin Rising Dragons Full Release",
        description:
          "Tenten releases her full potential, becoming <Defense>invulnerable<Defense> to <Classes>non-mental damage skills<Classes> for 1 turn. The following 4 turns, the initial use of <SkillName>'Twin Rising Dragons'<SkillName> will <Improvements>last 3 turns instead<Improvements> and <SkillName>'Twin Rising Dragons Trap'<SkillName> will <Effects>stun<Effects> all <Classes>harmful non-mental skills<Classes> for 1 turn.",
        descriptionBR:
          "Tenten libera seu pleno potencial, tornando-se <Defense>invulnerável<Defense> a <Classes>habilidades de dano não mental<Classes> por 1 turno. Nos próximos 4 turnos, o uso inicial de <SkillName>'Twin Rising Dragons'<SkillName> irá <Improvements>durar 3 turnos em vez de 2<Improvements>, e <SkillName>'Twin Rising Dragons Trap'<SkillName> irá <Effects>atordoar<Effects> todas as <Classes>habilidades ofensivas não mentais<Classes> por 1 turno.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/JoWMQ0x.png",
        themepic: "https://i.imgur.com/ouZOdWx.jpg",
      },
      {
        name: "Spiked Boulder Shield",
        themeName: "Tenten Replacement Technique",
        description:
          "This skill makes Tenten <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tenten <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Wft7mi8.png",
        themepic: "https://i.imgur.com/aGxy5GK.png",
      },
    ],
  },
  {
    name: "Hyuuga Neji",
    url: "https://i.imgur.com/SnXl3u9.jpg",
    themepic: "https://i.imgur.com/Xdfb97o.jpg",
    description:
      "A member of team Gai; Neji is the most talented member of the Hyuuga clan in both mind and body. Neji can use the most powerful techniques of his clan, shutting down an enemy's chakra or defending with an absolute defense.",
    descriptionBR:
      "Um membro do Time Gai, Neji é o membro mais talentoso do Clã Hyuuga tanto em mente quanto em corpo. Neji pode usar as técnicas mais poderosas de seu clã, anulando o chakra de um inimigo ou se defendendo com uma defesa absoluta.",
    skills: [
      {
        name: "Neji Gentle Fist",
        themeName: "Neji Gentle Fist",
        description:
          "Using the Hyuuga clan's special form of taijutsu, Neji <Damage>deals 25 damage<Damage> to one enemy for 2 turns. Each turn, <Effects>their non-affliction damage<Effects> will be <Effects>reduced to a maximum of 25<Effects>. The following turn, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> will <Improvements>cost 1 taijutsu and 1 random chakra<Improvements>.",
        descriptionBR:
          "Usando a forma especial de taijutsu do Clã Hyuuga, Neji irá <Damage>causar 25 de dano<Damage> a um inimigo por 2 turnos. A cada turno, <Effects>o dano não aflitivo<Effects> desse inimigo será <Effects>reduzido para um máximo de 25<Effects>. No próximo turno, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> irá <Improvements>custar 1 taijutsu e 1 random chakra<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/TO1FgCV.png",
        themepic: "https://i.imgur.com/KLz5Lhr.jpg",
      },
      {
        name: "Eight Trigram Heavenly Spin",
        themeName: "Eight Trigram Heavenly Spin",
        description:
          "Neji becomes <Defense>invulnerable<Defense> for 1 turn while <Damage>dealing 15 damage<Damage> to all enemies. The following turn, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> will <Improvements>cost 1 bloodline and 1 random chakra<Improvements>.",
        descriptionBR:
          "Neji se torna <Defense>invulnerável<Defense> por 1 turno enquanto irá <Damage>causar 15 de dano<Damage> a todos os inimigos. No próximo turno, <SkillName>'Eight Trigram Sixty-Four Palms'<SkillName> irá <Improvements>custar 1 bloodline e 1 random chakra<Improvements>.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/SbXg9y7.png",
        themepic: "https://i.imgur.com/UlmubuN.jpg",
      },
      {
        name: "Eight Trigram Sixty-Four Palms",
        themeName: "Eight Trigram Sixty-Four Palms",
        description:
          "Neji closes all of one enemy's chakra nodes, <Damage>dealing 35 piercing damage<Damage> to them and <Effects>removing 1 taijutsu or ninjutsu chakra<Effects> from them for 2 turns.",
        descriptionBR:
          "Neji fecha todos os pontos de chakra de um inimigo, <Damage>causando 35 de dano perfurante<Damage> a ele e <Effects>removendo 1 taijutsu ou ninjutsu chakra<Effects> dele por 2 turnos.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/gLzCj5f.png",
        themepic: "https://i.imgur.com/vey2d0x.jpg",
      },
      {
        name: "Neji Byakugan",
        themeName: "Neji Byakugan",
        description:
          "This skill makes Hyuuga Neji <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Neji <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8mfr9KF.png",
        themepic: "https://i.imgur.com/9o6cJe9.jpeg",
      },
    ],
  },
  {
    name: "Rock Lee",
    url: "https://i.imgur.com/MJVDU1d.png",
    themepic: "https://i.imgur.com/cylUesp.jpg",
    description:
      "A member of team Gai; Lee is a genin with no talent at all in ninjutsu or genjutsu, so he has focused his life all on taijutsu. With his powerful hand to hand techniques, Lee can crush any defense with his immense power.",
    descriptionBR:
      "Sem genjutsu ou ninjutsu, não era um ninja. Por isso eu era humilhado quando era criança. Eu provei que posso acabar com quem desmerecia, Até quem era do meu time não acreditava, Neji dizia que meu esforço não valia nada, Mas eu nunca parei pra ouvir quem me criticava, Porquê quanto mais eles falavam, mais eu treinava.",
    skills: [
      {
        name: "High Speed Taijutsu",
        themeName: "High Speed Taijutsu",
        description:
          "Lee attacks one enemy with amazing speed, <Damage>dealing 25 piercing damage<Damage> to them.",
        descriptionBR:
          "Lee ataca um inimigo com uma velocidade incrível, <Damage>causando 25 de dano perfurante<Damage> a esse inimigo.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/QV0sr1f.png",
        themepic: "https://i.imgur.com/cDJZRzf.png",
      },
      {
        name: "Front Lotus",
        themeName: "Front Lotus",
        description:
          "Lee launches an enemy into the air and slams them down with a great force, <Damage>dealing 35 piercing damage<Damage> to that enemy. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Final Lotus'<SkillName> for 1 turn.",
        descriptionBR:
          "Lee lança um inimigo para o ar e o derruba com grande força, <Damage>causando 35 de dano perfurante<Damage> a esse inimigo. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Final Lotus'<SkillName> por 1 turno.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/AfJc8pr.png",
        themepic: "https://i.imgur.com/bq6mmDw.png",
      },
      {
        name: "Fifth Gate Opening",
        themeName: "Fifth Gate Opening",
        description:
          "Lee opens five of his chakra gates. Permanently, <SkillName>'High Speed Taijutsu'<SkillName> and <SkillName>'Front Lotus'<SkillName> may be used. During this time, Lee will <Improvements>deal 5 additional damage<Improvements> each time <Classes>he is damaged by a skill<Classes>. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Fiery Spirit'<SkillName>.",
        descriptionBR:
          "Lee abre cinco de seus portões de chakra. Permanentemente, <SkillName>'High Speed Taijutsu'<SkillName> e <SkillName>'Front Lotus'<SkillName> poderão ser usados. Durante esse tempo, Lee irá <Improvements>causar 5 de dano adicional<Improvements> cada vez que <Classes>ele receber dano de uma habilidade<Classes>. Essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Fiery Spirit'<SkillName>.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xT7u5Ik.png",
        themepic: "https://i.imgur.com/pPHQa6a.jpeg",
      },
      {
        name: "Evasion",
        themeName: "Evasion",
        description:
          "This skill makes Rock Lee <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Rock Lee <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FzuCWSf.png",
        themepic: "https://i.imgur.com/Dvl5kZu.jpeg",
      },
      {
        name: "Fiery Spirit",
        themeName: "Fiery Spirit",
        description:
          "Lee hypes himself up, pushing himself to fight harder, <Effects>gaining 1 taijutsu chakra<Effects> and <Defense>healing 10 health<Defense> and an <Improvements>additional 10 health<Improvements> for each 25 health Lee has lost.",
        descriptionBR:
          "Lee se anima, se esforçando para lutar com mais intensidade, <Effects>ganhando 1 taijutsu chakra<Effects> e <Defense>recuperando 10 de vida<Defense> e <Improvements>mais 10 de vida<Improvements> a cada 25 de vida que Lee tenha perdido.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/ppEEGYm.png",
        themepic: "https://i.imgur.com/NhMtUdc.jpeg",
      },
      {
        name: "Final Lotus",
        themeName: "Final Lotus",
        description:
          "Lee uses his strongets ability, expending all his chakra and <Damage>dealing 50 piercing damage<Damage> to one enemy. Afterwards, Lee <Damage>takes 5 affliction damage<Damage>*. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Lee usa sua habilidade mais poderosa, consumindo todo o seu chakra e <Damage>causando 50 de dano perfurante<Damage> a um inimigo. Depois disso, Lee <Damage>recebe 5 de dano aflitivo<Damage>*. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Tai", "Tai"],
        classes: ["Physical", "Melee", "Instant", "*Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/TJ6PEz2.png",
        themepic: "https://i.imgur.com/2hbrREX.jpeg",
      },
    ],
  },
  {
    name: "Gaara of the Desert",
    url: "https://i.imgur.com/3aOyLr1.png",
    themepic: "https://i.imgur.com/LErYB0T.jpg",
    description:
      "A Jinchuuriki from the Village of Sand, Gaara is an unstable ninja with the Shukaku, the one-tailed beast. With the Shukaku, and his own abilities, Gaara can manipulate the sand in his gourd to crush the enemy, or defend himself.",
    descriptionBR:
      "Uma Jinchuuriki da Vila da Areia, Gaara é um ninja instável com o Shukaku, a besta de uma cauda. Com o Shukaku e suas próprias habilidades, Gaara pode manipular a areia em seu cântaro para esmagar o inimigo ou se defender.",
    skills: [
      {
        name: "Desert Graveyard",
        themeName: "Desert Graveyard",
        description:
          "Gaara crushes one enemy with sand, that enemy will be <Damage>dealt 50 affliction damage<Damage> and all <SkillName>'Desert Coffin'<SkillName> stacks will be <Classes>removed<Classes> from them. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Gaara esmaga um inimigo com areia, <Damage>causando 50 de dano aflitivo<Damage> a esse inimigo e <Classes>removendo<Classes> todos os stacks de <SkillName>'Desert Coffin'<SkillName> dele. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/xWUrKCM.png",
        themepic: "https://i.imgur.com/ocTkzVO.jpg",
      },
      {
        name: "Desert Coffin",
        themeName: "Desert Coffin",
        description:
          "Gaara surrounds one enemy with a pile of sand, <Effects>stunning<Effects> their <Classes>non-mental<Classes> skills for 1 turn. Permanently, that enemy will <Improvements>receive 25 additional damage<Improvements> from <SkillName>'Desert Graveyard'<SkillName>. This skill stacks.",
        descriptionBR:
          "Gaara envolve um inimigo com uma pilha de areia, <Effects>atordoando<Effects> suas habilidades <Classes>não mental<Classes> por 1 turno. Permanentemente, esse inimigo irá <Improvements>receber 25 de dano adicional<Improvements> de <SkillName>'Desert Graveyard'<SkillName>. Essa habilidade acumula.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/Gjak99o.png",
        themepic: "https://i.imgur.com/pwwcVis.jpg",
      },
      {
        name: "Third Eye",
        themeName: "Third Eye",
        description:
          "Gaara connects the third eye with his optic nerve using chakra. For 1 turn, any enemy that <Classes>uses a new harmful skill<Classes> will grant Gaara 15 <Defense>permanent destructible defense<Defense>; Any enemy that <Classes>uses a new helpful skill<Classes> will grant Gaara 1 <Effects>random chakra<Effects>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Por 1 turno, qualquer inimigo que <Classes>usar uma nova habilidade ofensiva<Classes> concederá a Gaara 15 de <Defense>defesa destrutível permanente<Defense>; qualquer inimigo que <Classes>usar uma nova habilidade defensiva<Classes> irá conceder a Gaara 1 <Effects>chakra aleatório<Effects>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/nAfddU1.png",
        themepic: "https://i.imgur.com/H9TL6jY.jpeg",
      },
      {
        name: "Sand Shield",
        themeName: "Sand Shield",
        description:
          "This skill makes Gaara of the Desert <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Gaara of the Desert <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/VMr3Nwd.png",
        themepic: "https://i.imgur.com/KPaAf6J.jpg",
      },
    ],
  },
  {
    name: "Kankuro",
    url: "https://i.imgur.com/5uxGoSN.png",
    themepic: "https://i.imgur.com/bDLrOMQ.jpg",
    description:
      "The brother of Gaara, and a master puppeeter, Kankuro is one of the three sand siblings. With his puppets, Kankuro is able to use the varied abilities hidden inside them to attack his enemies, or even protect himself.",
    descriptionBR:
      "O irmão de Gaara e um mestre marionetista, Kankuro é um dos três irmãos da areia. Com suas marionetes, Kankuro é capaz de usar as habilidades variadas escondidas nelas para atacar seus inimigos, ou até mesmo se proteger.",
    skills: [
      {
        name: "Black Secret Machine One Shot",
        themeName: "Black Secret Machine One Shot",
        description:
          "Kankuro uses two of his puppets to stab one enemy, <Damage>dealing 30 piercing damage<Damage> to them. During <SkillName>'Puppet Preparation'<SkillName>, this skill will <Improvements>deal an additional 5 damage<Improvements>.",
        descriptionBR:
          "Kankuro usa duas de suas marionetes para esfaquear um inimigo, que <Damage>recebe 30 de dano perfurante<Damage>. Durante <SkillName>'Puppet Preparation'<SkillName>, essa habilidade irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/dHWzRYI.png",
        themepic: "https://i.imgur.com/mDUBY4c.jpg",
      },
      {
        name: "Poison Bomb",
        themeName: "Poison Bomb",
        description:
          "One of Kankuro's puppets creates a cloud of smoke, <Damage>dealing 10 affliction damage<Damage> to all enemies. During <SkillName>'Puppet Preparation'<SkillName>, this skill will <Improvements>last 1 additional turn<Improvements>.",
        descriptionBR:
          "Uma das marionetes de Kankuro cria uma nuvem de fumaça, <Damage>causando 10 de dano aflitivo<Damage> a todos os inimigo. Durante <SkillName>'Puppet Preparation'<SkillName>, essa habilidade irá <Improvements>durar 1 turno adicional<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/vJFqLIY.png",
        themepic: "https://i.imgur.com/cDFekhy.jpg",
      },
      {
        name: "Puppet Preparation",
        themeName: "Puppet Preparation",
        description:
          "Kankuro prepares his puppets for combat, <Defense>gaining 10 points of destructible defense<Defense> for 4 turns. The following 3 turns, Kankuro's skills will <Improvements>be improved<Improvements>.",
        descriptionBR:
          "Kankuro prepara suas marionetes para o combate, <Defense>ganhando 10 pontos de defesa destrutível<Defense> por 4 turnos. Nos próximos 3 turnos, as habilidades de Kankuro irão <Improvements>serão melhoradas<Improvements>.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Kya84CC.png",
        themepic: "https://i.imgur.com/Gn7eEa3.jpg",
      },
      {
        name: "Puppet Replacement Technique",
        themeName: "Puppet Replacement Technique",
        description:
          "This skill makes Kankuro <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kankuro <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/mpGOYy6.png",
        themepic: "https://i.imgur.com/3VBkF9F.jpg",
      },
    ],
  },
  {
    name: "Temari",
    url: "https://i.imgur.com/kTLEaMP.png",
    themepic: "https://i.imgur.com/xcO10nD.jpg",
    description:
      "The elder sister of Gaara and Kankuro, Temari is a somewhat cruel and blunt ninja that fights using the wind at her side. With her fan, Temari can create powerful gusts of wind that she can manipulate at her desire.",
    descriptionBR:
      "A irmã mais velha de Gaara e Kankuro, Temari é uma ninja um tanto cruel e direta que luta usando o vento a seu favor. Com seu leque, Temari pode criar poderosas rajadas de vento que ela pode manipular à sua vontade.",
    skills: [
      {
        name: "Cutting Whirlwind",
        themeName: "Cutting Whirlwind",
        description:
          "Temari creates a razor sharp wind, <Damage>dealing 20 piercing damage<Damage> to one enemy and 10 <Damage>piercing damage<Damage> to all others enemies. For 1 turn, Temari becomes <Defense>invulnerable<Defense>. This skill <Classes>cannot be countered<Classes>.",
        descriptionBR:
          "Temari cria um vento cortante afiado, <Damage>causando 20 de dano perfurante<Damage> a um inimigo e 10 <Damage>de dano perfurante<Damage> a todos os outros inimigos. Por 1 turno, Temari se tornará <Defense>invulnerável<Defense>. Essa habilidade <Classes>não pode ser anulada<Classes>.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XA5pGTk.png",
        themepic: "https://i.imgur.com/KpQ54dV.jpg",
      },
      {
        name: "Summoning Quick Beheading Dance",
        themeName: "Summoning Quick Beheading Dance",
        description:
          "Temari summons the wind weasel Kamatari in the battlefield, <Damage>dealing 35 damage<Damage> to one enemy and <Damage>25 damage<Damage> to all others. If used after <SkillName>'Cutting Whirlwind'<SkillName>, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Temari invoca a doninha do vento Kamatari no campo de batalha, <Damage>causando 35 de dano<Damage> a um inimigo e <Damage>25 de dano<Damage> a todos os outros. Se usada após <SkillName>'Cutting Whirlwind'<SkillName>, essa habilidade irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
        energy: ["Nin", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/z6DZR9Q.png",
        themepic: "https://i.imgur.com/WB6p7br.jpg",
      },
      {
        name: "Dust Wind",
        themeName: "Dust Wind",
        description:
          "Temari kicks up dust, making her team <Defense>invulnerable<Defense> for 1 turn. If targatable, all enemies will <Effects>deal 20 less non-affliction damage<Effects> for 1 turn. If used after <SkillName>'Cutting Whirlwind'<SkillName>, this skill will <Improvements>decrease damage for 2 turns<Improvements> instead.",
        descriptionBR:
          "Temari levanta poeira, tornando sua equipe <Defense>invulnerável<Defense> por 1 turno. Se alvejável, todos os inimigos irão <Effects>causar 20 a menos de dano não-affliction<Effects> por 1 turno. Se usada após <SkillName>'Cutting Whirlwind'<SkillName>, essa habilidade <Improvements>irá reduzir dano por 2 turnos<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/JbSunqZ.png",
        themepic: "https://i.imgur.com/v7Vg57q.jpg",
      },
      {
        name: "Fan Defence Technique",
        themeName: "Fan Defence Technique",
        description:
          "This skill makes Temari <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Temari <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UBBy2S7.png",
        themepic: "https://i.imgur.com/etzQ5m5.jpg",
      },
    ],
  },
  {
    name: "Tsuchi Kin",
    url: "https://i.imgur.com/omC0mq2.png",
    themepic: "https://i.imgur.com/Rt6TW18.jpg",
    description:
      "One of the three sound genin; Kin is a confident ninja that likes to toy with her enemies before finishing them off. Using a set of needles and bells, Kin has a number of different effects she can create to attack her enemies.",
    descriptionBR:
      "Uma das três genins do Som, Kin é uma ninja confiante que gosta de brincar com seus inimigos antes de finalizá-los. Usando um conjunto de agulhas e sinos, Kin pode criar uma variedade de efeitos para atacar seus inimigos.",
    skills: [
      {
        name: "Illusion Bell Needles",
        themeName: "Illusion Bell Needles",
        description:
          "Kin deals 15 piercing damage to one enemy. The following turn, if Kin uses any of her harmful skill, that skill will also deal 15 regular damage to an enemy.",
        descriptionBR:
          "Kin causa 15 de dano perfurante a um inimigo. No próximo turno, se Kin usar qualquer uma de suas habilidades ofensivas, essa habilidade também irá causar 15 de dano regular a um inimigo.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/GpC5xdJ.png",
        themepic: "https://i.imgur.com/NRlBJXf.jpg",
      },
      {
        name: "Needle and Bell Trap",
        themeName: "Needle and Bell Trap",
        description:
          "Kin stuns one enemy's skills for 1 turn. The following turn, if Kin uses any of her harmful skills, that skill will also stun an enemy's harmful skills for 1 turn.",
        descriptionBR:
          "Kin atordoa as habilidades de um inimigo por 1 turno. No próximo turno, se Kin usar qualquer uma de suas habilidades ofensivas, essa habilidade também irá atordoar as habilidades ofensiva de um inimigo por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/jvEeZjs.png",
        themepic: "https://i.imgur.com/bvBE9EJ.jpg",
      },
      {
        name: "Unnerving Bells",
        themeName: "Unnerving Bells",
        description:
          "Kin removes 1 random chakra from one enemy. The following turn, if Kin uses any of her harmful skill, that skill will also remove 1 bloodline or genjutsu chakra from an enemy.",
        descriptionBR:
          "Kin remove 1 chakra aleatório de um inimigo. No próximo turno, se Kin usar qualquer uma de suas habilidades ofensivas, essa habilidade também irá remover 1 bloodline ou genjutsu chakra de um inimigo.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/SDppNlB.png",
        themepic: "https://i.imgur.com/mZQr5zc.jpg",
      },
      {
        name: "Sharp Analysis",
        themeName: "Sharp Analysis",
        description:
          "This skill makes Tsuchi Kin invulnerable for 1 turn. The following turn, if Kin uses any of her harmful skill, that skill will also make Kin invulnerable to damage skills for 1 turn.",
        descriptionBR:
          "Essa habilidade torna Tsuchi Kin invulnerável por 1 turno. No próximo turno, se Kin usar qualquer uma de suas habilidades ofensivas, essa habilidade também tornará Kin invulnerável a habilidades de dano por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/E4r6BN9.png",
        themepic: "https://i.imgur.com/BUHjkoO.jpeg",
      },
    ],
  },
  {
    name: "Abumi Zaku",
    url: "https://i.imgur.com/zCdcIJ8.png",
    themepic: "https://i.imgur.com/1TPAxHl.jpg",
    description:
      "Abumi Zaku is one of the three sound genin sent to the chuunin exams. He was surgically altered with hollow tubes in his arms, allowing him to create waves of compressed air.",
    descriptionBR:
      "Abumi Zaku é um dos três genin do Som enviados para os exames chuunin. Ele foi cirurgicamente alterado com tubos ocos em seus braços, permitindo-lhe criar ondas de ar comprimido.",
    skills: [
      {
        name: "Air Cutter",
        themeName: "Air Cutter",
        description:
          "Zaku fires a blast of supersonic air at one enemy, dealing 25 damage to them. The following turn, Zaku can use 'Extreme Air Cutter'.",
        descriptionBR:
          "Zaku dispara uma rajada de ar supersônico a um inimigo, causando 25 de dano a ele. No próximo turno, Zaku poderá usar 'Extreme Air Cutter'.",
        energy: ["Blood"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/tm12H2k.png",
        themepic: "https://i.imgur.com/refM6q6.jpg",
      },
      {
        name: "Wall of Air",
        themeName: "Wall of Air",
        description:
          "Zaku alters his air wave to protect one ally for 1 turn. The first harmful skill used on that ally will be countered. If successful, Zaku will instantly apply 'Air Cutter' on the countered enemy. This skill is invisible.",
        descriptionBR:
          "Zaku altera sua onda de ar para proteger um aliado por 1 turno. A primeira habilidade ofensiva usada nesse aliado será anulada. Se for bem-sucedido, Zaku irá aplicar instantaneamente 'Air Cutter' no inimigo anulado. Essa habilidade é invisível.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/upWnlDl.png",
        themepic: "https://i.imgur.com/gVlpsCV.jpg",
      },
      {
        name: "Extreme Air Cutter",
        themeName: "Extreme Air Cutter",
        description:
          "Zaku boosts his air waves to a frightening level and deals 45 damage to all enemies. Afterwards, Zaku gains 1 random chakra.",
        descriptionBR:
          "Zaku intensifica suas ondas de ar a um nível assustador e causa 45 de dano a todos os inimigos. Depois disso, Zaku ganha 1 chakra aleatório.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Yo7IQNe.png",
        themepic: "https://i.imgur.com/CvPkUiN.jpg",
      },
      {
        name: "Airwave Deflection",
        themeName: "Airwave Deflection",
        description: "This skill makes Abumi Zaku invulnerable for 1 turn.",
        descriptionBR: "This skill makes Abumi Zaku invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/xssUpbi.png",
        themepic: "https://i.imgur.com/xssUpbi.png",
      },
    ],
  },
  {
    name: "Kinuta Dosu",
    url: "https://i.imgur.com/eX7lgm2.png",
    themepic: "https://i.imgur.com/TPZvs6P.jpg",
    description:
      "Perhaps the strongest of the three sound genin, Kinuta Dosu uses his implanted Melody Arm to amplify sound waves and increase the power of his taijutsu.",
    descriptionBR:
      "Talvez o mais forte dos três genin do Som, Kinuta Dosu usa seu Melody Arm implantado para amplificar ondas sonoras e aumentar o poder de seu taijutsu.",
    skills: [
      {
        name: "Vibrating Sound Drill",
        themeName: "Vibrating Sound Drill",
        description:
          "Dosu attacks with his drill, dealing 20 damage to one enemy. For 1 turn, that enemy will deal 15 less non-affliction damage with their physical and chakra skills. If used after 'Sound Manipulation', this skill will deal an additional 10 damage.",
        descriptionBR:
          "Dosu ataca com sua broca, causando 20 de dano a um inimigo. Por 1 turno, esse inimigo irá causar 15 a menos de dano não-affliction com suas habilidades physical e chakra. Se usada após 'Sound Manipulation', essa habilidade irá causar 10 de dano adicional.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/iiBIyJS.png",
        themepic: "https://i.imgur.com/Ooq0cDH.jpg",
      },
      {
        name: "Sound Manipulation",
        themeName: "Sound Manipulation",
        description:
          "Dosu manipulates the sound to directly disorient one enemy, dealing 10 damage to them and stunning their skills for 1 turn. If used after 'Vibrating Sound Drill', this skill will also remove 1 ninjutsu or bloodline chakra.",
        descriptionBR:
          "Dosu manipula o som para desorientar diretamente um inimigo, causando 10 de dano a ele e atordoando suas habilidades por 1 turno. Se usada após 'Vibrating Sound Drill', essa habilidade também irá remover 1 ninjutsu ou bloodline chakra.",
        energy: ["Gen"],
        classes: ["Mental", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/FsCfPfd.png",
        themepic: "https://i.imgur.com/x7r9QAc.jpg",
      },
      {
        name: "Melody Arm Tuning",
        themeName: "Melody Arm Tuning",
        description:
          "Dosu marks one enemy for 2 turns. If Dosu or an ally attacks that enemy with a new non-affliction damage, they will lose 1 random chakra (only once per turn); Cannot be triggered by removing/stealing chakra skills. The following 2 turns, Dosu's other skills will automatically active their secondary effects.",
        descriptionBR:
          "Dosu marca um inimigo por 2 turnos. Se Dosu ou um aliado atacar esse inimigo com um novo dano não-affliction, ele irá perder 1 chakra aleatório (apenas uma vez por turno); Não pode ser ativada por habilidades que removam/roubam chakra. Nos próximos 2 turnos, as outras habilidades de Dosu irão ativar automaticamente seus efeitos secundários.",
        energy: ["Random"],
        classes: ["Mental", "Melee", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/ONsIZzw.png",
        themepic: "https://i.imgur.com/zuNb2Yo.jpg",
      },
      {
        name: "Dosu Hide",
        themeName: "Dosu Hide",
        description:
          "This skill makes Kinuta Dosu <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kinuta Dosu <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Jqlym0M.png",
        themepic: "https://i.imgur.com/wWslgr5.jpg",
      },
    ],
  },
  {
    name: "Haku",
    url: "https://i.imgur.com/xkQrIRT.png",
    themepic: "https://i.imgur.com/yjxmIsU.jpg",
    description:
      "The sole survivor of the Yuki clan, and the subordinate of Zabuza; Haku, despite being young, holds enough potential strength to surpass almost any ninja. Using his ice based bloodline, and his intelligence, Haku can attack and defend nearly simultaneously.",
    descriptionBR:
      "O único sobrevivente do clã Yuki e subordinado de Zabuza, Haku, apesar de jovem, possui força potencial suficiente para superar quase qualquer ninja. Usando sua linhagem sanguínea baseada em gelo e sua inteligência, Haku pode atacar e se defender quase simultaneamente.",
    skills: [
      {
        name: "Water Needles",
        themeName: "Water Needles",
        description:
          "Haku flings a number of water based needles, <Damage>dealing 30 piercing damage<Damage> to one enemy. This skill will <Improvements>deal an additional 10 damage<Improvements> to that enemy if <Effects>they are stunned<Effects>. While improved, this skill will <Damage>deal 40 piercing damage<Damage> to the target instead.",
        descriptionBR:
          "Haku arremessa várias agulhas de água, <Damage>causando 30 de dano perfurante<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements> a esse inimigo se <Effects>ele estiver atordoado<Effects>. Quando aprimorada, essa habilidade irá <Damage>causar 40 de dano perfurante<Damage> ao alvo.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2rG04gY.png",
        themepic: "https://i.imgur.com/wwC2zoI.jpg",
      },
      {
        name: "Acupuncture",
        themeName: "Acupuncture",
        description:
          "Haku hits the acupuncture points of one enemy, <Effects>stunning<Effects> their skills for 1 turn. While improved, this skill will <Improvements>last 2 turns<Improvements> instead. This skill ignores invulnerability.",
        descriptionBR:
          "Haku atinge os pontos de acupuntura de um inimigo, <Effects>atordoando<Effects> suas habilidades por 1 turno. Quando aprimorada, essa habilidade irá <Improvements>durar 2 turnos<Improvements>. Essa habilidade ignora invulnerabilidade.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/UH3730n.png",
        themepic: "https://i.imgur.com/U1gziqq.jpg",
      },
      {
        name: "Demonic Ice Mirrors",
        themeName: "Demonic Ice Mirrors",
        description:
          "Haku creates numerous mirrors, <Damage>dealing 10 damage<Damage> to all enemies for 3 turns. The following 3 turns, <SkillName>'Water Needles'<SkillName> and <SkillName>'Acupuncture'<SkillName> will be improved. During this time, Haku gains 30 <Defense>points of destructible defense<Defense> and <Defense>ignores all non-damage effects<Defense>.",
        descriptionBR:
          "Haku cria numerosos espelhos, <Damage>causando 10 de dano<Damage> a todos os inimigos por 3 turnos. Nos próximos 3 turnos, <SkillName>'Water Needles'<SkillName> e <SkillName>'Acupuncture'<SkillName> serão aprimorados. Durante esse tempo, Haku ganha 30 <Defense>pontos de defesa destrutível<Defense> e irá <Defense>ignorar todos os efeitos exceto dano<Defense>.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/nV4rFP7.png",
        themepic: "https://i.imgur.com/g2V37J0.jpg",
      },
      {
        name: "Mirror Transfer",
        themeName: "Mirror Transfer",
        description:
          "This skill makes Haku <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haku <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/3DsZLu9.png",
        themepic: "https://i.imgur.com/0uNieMb.jpg",
      },
    ],
  },
  {
    name: "Young Kakashi",
    url: "https://i.imgur.com/Jgctdrf.png",
    themepic: "https://i.imgur.com/At83QP8.jpg",
    description:
      "A jounin at the age of 13 and the son of the legendary White Fang, Kakashi is a member of Team Minato. Using his early ninjutsu, and borrowed sharingan, Kakashi can fight any adult on an equal level.",
    descriptionBR:
      "Um jounin aos 13 anos e filho da lendária Canino Branco, Kakashi é membro da Equipe Minato. Usando seu ninjutsu precoce e o sharingan emprestado, Kakashi pode lutar em pé de igualdade contra qualquer adulto.",
    skills: [
      {
        name: "White Fang Slash",
        themeName: "White Fang Slash",
        description:
          "Using his sword, Young Kakashi <Damage>deals 20 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 5 less non-affliction damage<Effects>. The following turn, Young Kakashi will <Improvements>deal 5 additional damage<Improvements> with his skills.",
        descriptionBR:
          "Usando sua espada, Young Kakashi <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 5 a menos de dano não-aflitivo<Effects>. No próximo turno, Young Kakashi irá <Improvements>causar 5 de dano adicional<Improvements> com suas habilidades.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/IpdntOA.png",
        themepic: "https://i.imgur.com/7RifUDt.jpg",
      },
      {
        name: "Amateur Raikiri",
        themeName: "Amateur Raikiri",
        description:
          "Using a weaker form of his signature jutsu, Young Kakashi <Damage>deals 25 piercing damage<Damage> to one enemy. For 1 turn, that enemy will <Effects>deal 5 less non-affliction damage<Effects>. The following turn, Young Kakashi will <Improvements>deal 5 additional damage<Improvements> with his skills.",
        descriptionBR:
          "Usando uma forma mais fraca de seu jutsu signature, Young Kakashi <Damage>causa 25 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 5 a menos de dano não-aflitivo<Effects>. No próximo turno, Young Kakashi irá <Improvements>causar 5 de dano adicional<Improvements> com suas habilidades.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DFBg2VL.png",
        themepic: "https://i.imgur.com/qr9FzF2.jpg",
      },
      {
        name: "Implanted Sharingan",
        themeName: "Implanted Sharingan",
        description:
          "If used on an ally, the <Classes>first non-unique skill<Classes> used by them will be copied and will <Improvements>cost 1 bloodline and 1 random chakra<Improvements> for 1 turn. If used on an enemy, for 1 turn the <Classes>first skill used<Classes> by them that: deals damage will <Improvements>increase Kakashi's damage by 10<Improvements>; stuns will make Kakashi's skills <Effects>stun<Effects> for 1 turn; drains chakra will <Effects>grant Kakashi 1 random chakra<Effects>. <Invisible>Invisible on enemies.<Invisible>",
        descriptionBR:
          "Se usado em um aliado, a <Classes>primeira habilidade não-unique usada<Classes> por ele será copiada e irá <Improvements>custar 1 bloodline e 1 chakra aleatório<Improvements> por 1 turno. Se usado em um inimigo, por 1 turno, a <Classes>primeira habilidade usada<Classes> por ele que: causar dano <Improvements>aumentará o dano de Kakashi em 10<Improvements>; atordoar fará com que as habilidades de Kakashi <Effects>atordoem<Effects> por 1 turno; drenar chakra <Effects>concederá 1 chakra aleatório<Effects> a Kakashi. <Invisible>Invisível em inimigos.<Invisible>",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/nBwjX6M.png",
        themepic: "https://i.imgur.com/bymbVvU.jpg",
      },
      {
        name: "Sword Parry",
        themeName: "Sword Parry",
        description: "This skill makes Young Kakashi invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Young Kakashi invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2L2GQSA.png",
        themepic: "https://i.imgur.com/SXIitn7.jpg",
      },
    ],
  },
  {
    name: "Uchiha Obito",
    url: "https://i.imgur.com/YwerQiX.png",
    themepic: "https://i.imgur.com/0z1rORe.jpg",
    description:
      "A minor member of the Uchiha clan and a chuunin, Obito is a member of Team Minato. While Obito does not possess any singular powerful ability, he can use all of what he knows with his developing sharingan to put up a fight.",
    descriptionBR:
      "Um membro menor do clã Uchiha e um chuunin, Obito é integrante do Time Minato. Embora Obito não possua nenhuma habilidade extremamente poderosa, ele pode usar tudo o que sabe junto com seu Sharingan em desenvolvimento para lutar.",
    skills: [
      {
        name: "Piercing Stab",
        themeName: "Piercing Stab",
        description:
          "Finding an opening in his enemy's defense, Obito quickly stabs them, <Damage>dealing 15 damage<Damage> to the enemy. During <SkillName>'Obito Sharingan'<SkillName>, this skill <Damage>deals 25 piercing damage<Damage> while <Improvements>ignoring invulnerability<Improvements>.",
        descriptionBR:
          "Encontrando uma brecha na defesa do inimigo, Obito rapidamente o apunhala, <Damage>causando 15 de dano<Damage> a um inimigo. Durante <SkillName>'Obito Sharingan'<SkillName>, essa habilidade irá <Damage>causar 25 de dano perfurante<Damage> que <Improvements>irá ignorar invulnerabilidade<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/aIkGH5N.png",
        themepic: "https://i.imgur.com/LnEqnwU.jpg",
      },
      {
        name: "Obito Goukakyuu no Jutsu",
        themeName: "Obito Goukakyuu no Jutsu",
        description:
          "Obito breathes searing fire on one enemy <Damage>dealing 15 affliction damage<Damage> to them for 2 turns. During <SkillName>'Obito Sharigan'<SkillName>, this skill will <Damage>deal 30 affliction damage<Damage> instantly while <Improvements>ignoring invulnerability<Improvements>.",
        descriptionBR:
          "Obito exala fogo ardente em um inimigo, <Damage>causando 15 de dano aflitivo<Damage> a ele por 2 turnos. Durante <SkillName>'Obito Sharingan'<SkillName>, essa habilidade irá <Damage>causar 30 de dano aflitivo<Damage> instantaneamente enquanto <Improvements>ignora invulnerabilidade<Improvements>.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/GlgVYSz.png",
        themepic: "https://i.imgur.com/ExWmSjc.jpg",
      },
      {
        name: "Obito Sharingan",
        themeName: "Obito Sharingan",
        description:
          "Obito activates his sharingan, gaining 15 <Defense>points of damage reduction<Defense> for 4 turns. During this time, if any of <Classes>Obito's allies use a new skill<Classes>, the cost of their <Invisible>harmful skills<Invisible> will be <Improvements>decreased by 1 random chakra<Improvements> for 1 turn. This skill cannot trigger twice in a row on the same ally. This skill ends if Obito dies.",
        descriptionBR:
          "Obito ativa seu Sharingan, ganhando 15 <Defense>pontos de redução de dano<Defense> por 4 turnos. Durante esse tempo, se algum <Classes>aliado de Obito usar uma nova habilidade<Classes>, o custo de suas <Invisible>habilidades ofensivas<Invisible> será <Improvements>reduzido em 1 chakra aleatório<Improvements> por 1 turno. Essa habilidade não pode ser ativada duas vezes seguidas no mesmo aliado. Essa habilidade termina se Obito morrer.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/uB9HwbX.png",
        themepic: "https://i.imgur.com/bgDBA23.jpg",
      },
      {
        name: "Sparkling Parry",
        themeName: "Sparkling Parry",
        description:
          "This skill makes Uchiha Obito <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Obito <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/6ViiDkX.png",
        themepic: "https://i.imgur.com/Px71LZt.jpg",
      },
    ],
  },
  {
    name: "Nohara Rin",
    url: "https://i.imgur.com/kJ3u53S.png",
    themepic: "https://i.imgur.com/uogEl77.jpg",
    description:
      "A chuunin medical nin assigned to Team Minato, Rin is a quiet and passive girl who focuses on keeping her team mates alive. Using her healing abilities, and her intelligence, Rin is able to heal her allies while trapping her enemies.",
    descriptionBR:
      "Uma chuunin médica designada para o Time Minato, Rin é uma garota quieta e passiva que se concentra em manter seus companheiros de equipe vivos. Usando suas habilidades de cura e sua inteligência, Rin é capaz de curar seus aliados enquanto prende seus inimigos.",
    skills: [
      {
        name: "Pit Trap",
        themeName: "Pit Trap",
        description:
          "Rin traps one enemy. For 1 turn, that enemy will <Effects>deal 20 less non-affliction damage<Effects>, and at the end of their turn, the target will <Damage>take 20 piercing damage<Damage>. If that enemy <Classes>uses a new skill<Classes>, they will another <Damage>take 10 piercing damage<Damage>. <Invisible>This skill is invisible.<Invisible>",
        descriptionBR:
          "Rin prende um inimigo. Por 1 turno, esse inimigo irá <Effects>causar 20 a menos de dano não-affliction<Effects>, e ao final do turno dele, o alvo irá <Damage>receber 20 de dano perfurante<Damage>. Se esse inimigo <Classes>usar uma nova habilidade<Classes>, ele irá <Damage>receber mais 10 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Instant", "piercing"],
        cooldown: 0,
        url: "https://i.imgur.com/k6wzRLL.png",
        themepic: "https://i.imgur.com/lrsVwPN.jpg",
      },
      {
        name: "Healing Touch",
        themeName: "Healing Touch",
        description:
          "Rin <Defense>heals<Defense> herself or an ally <Defense>for 25 health<Defense> and <Effects>removes<Effects> all <Classes>harmful affliction skills<Classes> from them.",
        descriptionBR:
          "Rin <Defense>cura<Defense> si mesma ou um aliado <Defense>por 25 de vida<Defense> e <Effects>remove<Effects> todas as <Classes>habilidades affliction ofensivas<Classes> dele.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/zLmVk8s.png",
        themepic: "https://i.imgur.com/S6I87F4.jpg",
      },
      {
        name: "Medical Kit",
        themeName: "Medical Kit",
        description:
          "Rin gives her medical kit to herself or an ally, granting them <Defense>50% damage reduction<Defense> and <Defense>healing them 15 health<Defense> for 3 turns.",
        descriptionBR:
          "Rin entrega seu kit médico a si mesma ou a um aliado, concedendo <Defense>50% de redução de dano<Defense> e <Defense>curando 15 de vida<Defense> por 3 turnos.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/c4HwOLU.png",
        themepic: "https://i.imgur.com/NJpZO76.jpg",
      },
      {
        name: "Flee",
        themeName: "Flee",
        description:
          "This skill makes Nohara Rin <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nohara Rin <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/0XboBBP.png",
        themepic: "https://i.imgur.com/sdrhcZS.jpg",
      },
    ],
  },
  {
    name: "Hyuuga Hanabi",
    url: "https://i.imgur.com/ovkEczm.jpg",
    themepic: "https://i.imgur.com/ovkEczm.jpg",
    description:
      "The younger sister of Hinata, Hanabi is a Hyuuga clan member from the main branch family who trains endlessly to prove her worth. While young, Hanabi's skills surpass her elder sister's, and although unable to utilize her byakugan yet and lacking in physical strength, Hanabi makes up for it with her tenacity and speed.",
    descriptionBR:
      "A irmã mais nova de Hinata, Hanabi é um membro do clã Hyuuga da família principal, que treina incansavelmente para provar seu valor. Embora jovem, as habilidades de Hanabi superam as de sua irmã mais velha, e, embora ainda não consiga utilizar seu Byakugan e falte força física, Hanabi compensa isso com sua tenacidade e velocidade.",
    skills: [
      {
        name: "Hanabi Gentle Fist",
        themeName: "Hanabi Gentle Fist",
        description:
          "Hanabi<Damage> deals 20 damage<Damage> to one enemy for 1 turn, and <Damage>10 damage<Damage> the following turn. For 1 turn, if that enemy <Classes>uses a new non-chakra skill<Classes>, they will <Effects>lose 1 non-genjutsu chakra<Effects>.",
        descriptionBR:
          "Hanabi <Damage>causa 20 de dano<Damage> a um inimigo por 1 turno, e <Damage>10 de dano<Damage> no turno seguinte. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade não-chakra<Classes>, ele irá <Effects>perder 1 chakra não-genjutsu<Effects>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/it1bsDV.png",
        themepic: "https://i.imgur.com/it1bsDV.png",
      },
      {
        name: "Hanabi Kaiten",
        themeName: "Hanabi Kaiten",
        description:
          "Hanabi spins at one enemy, <Damage>dealing 20 damage<Damage> to them for 1 turn, and <Damage>10 damage<Damage> the following turn. For 1 turn, if that enemy <Classes>uses a new non-physical skill<Classes>, their skills will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Hanabi gira em direção a um inimigo, <Damage>causando 20 de dano<Damage> a ele por 1 turno, e <Damage>10 de dano<Damage> no turno seguinte. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade não-physical<Classes>, as habilidades dele serão <Effects>atordoadas<Effects> por 1 turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/plUIFd7.png",
        themepic: "https://i.imgur.com/plUIFd7.png",
      },
      {
        name: "Unyielding Tenacity",
        themeName: "Unyielding Tenacity",
        description:
          "Hanabi fights to the bitter end. For 2 turns, Hanabi will be <Defense>unable to be killed<Defense> and will <Defense>ignore all stun effects<Defense>. During this time, <SkillName>'Hanabi Gentle Fist'<SkillName> and <SkillName>'Hanabi Kaiten'<SkillName> will <Improvements>cost 1 random chakra<Improvements> and Hanabi will <Improvements>deal 5 additional damage<Improvements>.",
        descriptionBR:
          "Hanabi luta até o fim. Por 2 turnos, Hanabi não <Defense>poderá ser morta<Defense> e irá <Defense>ignorar todos os efeitos de atordoamento<Defense>. Durante esse tempo, <SkillName>'Hanabi Gentle Fist'<SkillName> e <SkillName>'Hanabi Kaiten'<SkillName> irão <Improvements>custar 1 chakra aleatório<Improvements> e Hanabi irá <Improvements>causar 5 de dano adicional<Improvements>.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZKzud8s.jpg",
        themepic: "https://i.imgur.com/ZKzud8s.jpg",
      },
      {
        name: "Byakugan Insight",
        themeName: "Byakugan Insight",
        description:
          "This skill makes Hyuuga Hanabi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hanabi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/To9EsI6.png",
        themepic: "https://i.imgur.com/To9EsI6.png",
      },
    ],
  },
  {
    name: "Demon Brothers",
    url: "https://i.imgur.com/rO5gKY6.png",
    themepic: "https://i.imgur.com/ksjzFCW.jpg",
    description:
      "A duo of Mist Nin who work for Zabuza, the Demon Brothers specialize in assassinating their targets with their shuriken chain.",
    descriptionBR:
      "Uma dupla de Ninjas da Névoa que trabalha para Zabuza, os Irmãos Demônios são especialistas em assassinar seus alvos com sua corrente de shuriken.",
    skills: [
      {
        name: "Chain Wrap",
        themeName: "Chain Wrap",
        description:
          "Demon Brothers wrap one enemy. The following 3 turns, if Demon Brothers <Classes>uses a new harmful skill<Classes> on that enemy, their <Classes>non-mental skills<Classes> will be <Effects>stunned<Effects> for 1 turn. During this time, Demon Brothers becomes <Defense>invulnerable to ranged skills, ignores stun effects<Defense> and this skill is replaced by <SkillName>'Chain Shred'<SkillName>.",
        descriptionBR:
          "Demon Brothers prende um inimigo. Nos próximos 3 turnos, se Demon Brothers <Classes>usar uma nova habilidade ofensiva<Classes> nesse inimigo, as <Classes>habilidades non-Mental<Classes> dele serão <Effects>atordoadas<Effects> por 1 turno. Durante esse tempo, Demon Brothers se tornarão <Defense>invulneráveis a habilidades Ranged, ignorarão efeitos de atordoamento<Defense> e essa habilidade é substituída por <SkillName>'Chain Shred'<SkillName>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/Jy3kQlZ.png",
        themepic: "https://i.imgur.com/OttCmYx.jpg",
      },
      {
        name: "Bladed Gauntlet",
        themeName: "Bladed Gauntlet",
        description:
          "Demon Brothers uses their gauntlets shredding, gaining 10 <Defense>permanent destructible defense<Defense> and <Damage>dealing 30 damage<Damage> to one enemy. This skill will <Improvements>deal an additional 5 damage<Improvements> to the enemy affected by <SkillName>'Chain Wrap'<SkillName>.",
        descriptionBR:
          "Demon Brothers usam suas manoplas para dilacerar, ganhando 10 de <Defense>defesa destrutível permanente<Defense> e <Damage>causando 30 de dano<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 5 de dano adicional<Improvements> ao inimigo afetado por <SkillName>'Chain Wrap'<SkillName>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/v9AIQOF.png",
        themepic: "https://i.imgur.com/CDk6Mt8.jpg",
      },
      {
        name: "Puddle Illusion",
        themeName: "Puddle Illusion",
        description:
          "The Demon Brothers hide in water, gaining 20 <Defense>points of destructible defense<Defense> and 1 <Effects>taijutsu chakra<Effects>.",
        descriptionBR:
          "Demons Brother se esconde na água, ganhando 20 <Defense>pontos de defesa destrutível<Defense> e 1 <Effects>Taijutsu chakra<Effects>.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/CSs3png.png",
        themepic: "https://i.imgur.com/XUthtL5.jpg",
      },
      {
        name: "Demon Brothers Vanish",
        themeName: "Demon Brothers Vanish",
        description:
          "This skill makes Demon Brothers <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Demon Brothers <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Xzic8o5.png",
        themepic: "https://i.imgur.com/8uuLiKL.jpeg",
      },
      {
        name: "Chain Shred",
        themeName: "Chain Shred",
        description:
          "Demon Brothers rip apart one enemy affected by <SkillName>'Chain Wrap'<SkillName>, <Damage>dealing 45 piercing damage<Damage> to them.",
        descriptionBR:
          "Demon Brothers despedaçam um inimigo afetado por <SkillName>'Chain Wrap'<SkillName>, <Damage>causando 45 de dano perfurante<Damage> nele.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/7Fr4FND.png",
        themepic: "https://i.imgur.com/GNiaPxu.jpg",
      },
    ],
  },
  {
    name: "Momochi Zabuza",
    url: "https://i.imgur.com/OzHvYsF.png",
    themepic: "https://i.imgur.com/78Sgit7.jpg",
    description:
      "Zabuza is a missing-nin from the Hidden Mist Village. He is a frightening opponent attacking his enemies out of the fog he creates.",
    descriptionBR:
      "Zabuza é um ninja renegado da Vila da Névoa Oculta. Ele é um oponente aterrorizante, atacando seus inimigos a partir da névoa que cria.",
    skills: [
      {
        name: "Silent Homicide Technique",
        themeName: "Silent Homicide Technique",
        description:
          "Using an advanced assasination technique, Zabuza <Damage>deals 30 piercing damage<Damage> to one enemy. During <SkillName>'Hidden Mist Technique'<SkillName>, this skill will be <Improvements>improved<Improvements> and will <Damage>deal 45 piercing damage<Damage> to one enemy which <Invisible>ignores invulnerability<Invisible>.",
        descriptionBR:
          "Usando uma técnica de assassinato avançada, Zabuza <Damage>causa 30 de dano perfurante<Damage> a um inimigo. Durante <SkillName>'Hidden Mist Technique'<SkillName>, essa habilidade será <Improvements>aprimorada<Improvements> e irá <Damage>causar 45 de dano perfurante<Damage> a um inimigo, <Invisible>ignorando invulnerabilidade<Invisible>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/uKEgTlB.png",
        themepic: "https://i.imgur.com/wXH0ZOG.jpg",
      },
      {
        name: "Great Waterfall Technique",
        themeName: "Great Waterfall Technique",
        description:
          "Zabuza knocks all enemies down with a giant wave of water, <Damage>dealing 10 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and ranged<Classes> skills for 1 turn.",
        descriptionBR:
          "Zabuza derruba todos os inimigos com uma onda gigante de água, <Damage>causando 10 de dano<Damage> a eles e <Effects>atordoando<Effects> suas habilidades <Classes>Physical e Ranged<Classes> por 1 turno.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/Q3i8RGc.png",
        themepic: "https://i.imgur.com/hAubZug.jpg",
      },
      {
        name: "Hidden Mist Technique",
        themeName: "Hidden Mist Technique",
        description:
          "Zabuza creates a dense fog. For 2 turns, all enemies' <Classes>physical and mental skills<Classes> will <Effects>cost 1 additional random chakra<Effects>; This effect <Damage>cannot be ignored<Damage>. The following 2 turns, Zabuza gains <Defense>25% damage reduction<Defense> and <SkillName>'Silent Homicide Technique'<SkillName> will be improved. This skill <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Zabuza cria uma névoa densa. Por 2 turnos, todas as <Classes>habilidades Physical e Mental<Classes> dos inimigos irão <Effects>custar 1 chakra aleatório adicional<Effects>; Esse efeito <Damage>não pode ser ignorado<Damage>. Nos próximos 2 turnos, Zabuza irá receber <Defense>25% de redução de dano<Defense>, e <SkillName>'Silent Homicide Technique'<SkillName> será aprimorado. Essa habilidade <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/1qbKqeg.png",
        themepic: "https://i.imgur.com/ZK5Ms0X.jpg",
      },
      {
        name: "Water Clone Zabuza",
        themeName: "Water Clone Zabuza",
        description:
          "This skill makes Momochi Zabuza <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Momochi Zabuza <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7qpg9re.png",
        themepic: "https://i.imgur.com/IMX8uc5.jpg",
      },
    ],
  },
  {
    name: "Oboro",
    url: "https://i.imgur.com/XLe6m8K.png",
    themepic: "https://i.imgur.com/BUrah23.jpg",
    description:
      "A Rain Genin in the Chuunin exams, Oboro specializes in distracting his opponents with illusions and attacking when unexpected.",
    descriptionBR:
      "Um Genin da Vila da Chuva nos exames Chuunin, Oboro é especializado em distrair seus oponentes com ilusões e atacar quando menos esperado.",
    skills: [
      {
        name: "Underground Ambush",
        themeName: "Underground Ambush",
        description:
          "Hiding in the ground, Oboro attacks one enemy from behind, <Damage>dealing 20 damage<Damage> and <Effects>stunning<Effects> their <Classes>physical and mental<Classes> skills for 1 turn. During <SkillName>'Haze Clones'<SkillName>, this skill is <Improvements>improved<Improvements> and <Improvements>targets all enemies instead<Improvements>. This skill <Invisible>cannot be countered<Invisible>.",
        descriptionBR:
          "Escondido no chão, Oboro ataca um inimigo por trás, <Damage>causando 20 de dano<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>Physical e Mental<Classes> por 1 turno. Durante <SkillName>'Haze Clones'<SkillName>, essa habilidade é <Improvements>aprimorada<Improvements> e <Improvements>atinge todos os inimigos<Improvements>. Essa habilidade <Invisible>não pode ser anulada<Invisible>.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/0mrTugT.png",
        themepic: "https://i.imgur.com/yUynsa4.jpg",
      },
      {
        name: "Exploding Kunai",
        themeName: "Exploding Kunai",
        description:
          "Oboro throws a kunai with an exploding tag on it <Damage>dealing 15 damage to all enemies<Damage>. During <SkillName>'Haze Clones'<SkillName>, this skill is <Improvements>improved<Improvements> and <Damage>deals 20 damage<Damage>.",
        descriptionBR:
          "Oboro lança um kunai com uma etiqueta explosiva, <Damage>causando 15 de dano a todos os inimigos<Damage>. Durante <SkillName>'Haze Clones'<SkillName>, essa habilidade é <Improvements>aprimorada<Improvements> e <Damage>causa 20 de dano<Damage>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/LRf4G2h.png",
        themepic: "https://i.imgur.com/e367rf8.jpg",
      },
      {
        name: "Haze Clones",
        themeName: "Haze Clones",
        description:
          "Oboro creates illusionary duplicates of himself. The following 3 turns, <SkillName>'Exploding Kunai'<SkillName> and <SkillName>'Underground Ambush'<SkillName> will be <Improvements>improved<Improvements>. During this time, Oboro gains 30 <Defense>points of destructible defense<Defense> and becomes <Defense>invulnerable<Defense> to <Classes>mental<Classes> skills.",
        descriptionBR:
          "Oboro cria duplicatas ilusórias de si mesmo. Nos próximos 3 turnos, <SkillName>'Exploding Kunai'<SkillName> e <SkillName>'Underground Ambush'<SkillName> serão <Improvements>aprimorados<Improvements>. Durante esse tempo, Oboro ganha 30 <Defense>pontos de defesa destrutível<Defense> e se torna <Defense>invulnerável<Defense> a habilidades <Classes>Mental<Classes>.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/ByWGkAm.png",
        themepic: "https://i.imgur.com/g3Q0FyC.jpg",
      },
      {
        name: "Fleet of Foot",
        themeName: "Fleet of Foot",
        description:
          "This skill makes Oboro <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Oboro <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/A1qWXdJ.png",
        themepic: "https://i.imgur.com/W5GrdxK.jpg",
      },
    ],
  },
  {
    name: "Shigure",
    url: "https://i.imgur.com/lLYJBpS.png",
    themepic: "https://i.imgur.com/aP6YjiP.jpg",
    description:
      "A Genin from the Village of Rain, Shigure specializes in using his chakra to control needles hidden in his umbrellas.",
    descriptionBR:
      "Um Genin da Vila da Chuva, Shigure é especializado em usar seu chakra para controlar agulhas escondidas em seus guarda-chuvas.",
    skills: [
      {
        name: "Umbrella Toss",
        themeName: "Umbrella Toss",
        description:
          "Shigure tosses his umbrellas into the air, gaining 5 <Defense>points of damage reduction<Defense> for 3 turns. During this time, any enemy that <Classes>uses a new skill<Classes> on <Improvements>Shigure<Improvements> or his <Improvements>allies<Improvements> will be <Damage>dealt 5 piercing damage<Damage>. The following 3 turns, <SkillName>'Sprinkling Needles'<SkillName> may be <Improvements>used<Improvements>. This skill <Effects>ends<Effects> when <Invisible>Shigure dies<Invisible>.",
        descriptionBR:
          "Shigure lança seus guarda-chuvas para o alto, ganhando 5 <Defense>pontos de redução de dano<Defense> por 3 turnos. Durante esse tempo, qualquer inimigo que <Classes>usar uma nova habilidade<Classes> em <Improvements>Shigure<Improvements> ou em seus <Improvements>aliados<Improvements> irá <Damage>receber 5 de dano perfurante<Damage>. Nos próximos 3 turnos, <SkillName>'Sprinkling Needles'<SkillName> poderá ser <Improvements>usada<Improvements>. Essa habilidade <Effects>termina<Effects> quando <Invisible>Shigure morrer<Invisible>.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/oo2VNIZ.png",
        themepic: "https://i.imgur.com/KT7GoJh.jpg",
      },
      {
        name: "Sprinkling Needles",
        themeName: "Sprinkling Needles",
        description:
          "Needles rain down from Shigure's umbrellas, <Damage>dealing 10 piercing damage<Damage> to all enemies for 3 turns. The following 3 turns, <SkillName>'Needle Barrage'<SkillName> <Improvements>may be used<Improvements> on enemies affected by this skill. This skill cannot be <Invisible>countered<Invisible> and it requires <SkillName>'Umbrella Toss'<SkillName> to be used.",
        descriptionBR:
          "Agulhas caiem dos guarda-chuvas de Shigure, <Damage>causando 10 de dano perfurante<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, <SkillName>'Needle Barrage'<SkillName> <Improvements>poderá ser usado<Improvements> em inimigos afetados por essa habilidade. Essa habilidade não pode ser <Invisible>anulada<Invisible> e requer o uso de <SkillName>'Umbrella Toss'<SkillName>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Action", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/IiYoFlG.png",
        themepic: "https://i.imgur.com/LLgZlu0.jpg",
      },
      {
        name: "Needle Barrage",
        themeName: "Needle Barrage",
        description:
          "Shigure specifically directs needles at one enemy, <Damage>dealing 30 damage<Damage> to them. This skill can only target enemies that are affected by <SkillName>'Sprinkling Needles'<SkillName>.",
        descriptionBR:
          "Shigure direciona especificamente agulhas a um inimigo, <Damage>causando 30 de dano<Damage> a ele. Essa habilidade só pode atingir inimigos que estão afetados por <SkillName>'Sprinkling Needles'<SkillName>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/72iKrUX.png",
        themepic: "https://i.imgur.com/PTAV1CM.jpg",
      },
      {
        name: "Umbrella Block",
        themeName: "Umbrella Block",
        description:
          "This skill makes Shigure <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shigure <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SVXZnxK.png",
        themepic: "https://i.imgur.com/RdXDYJH.jpg",
      },
    ],
  },
  {
    name: "Shiore Orochimaru",
    url: "https://i.imgur.com/AzUvWCt.png",
    description:
      "Originally a genin from the Hidden Grass Village attending the Chuunin Exams, Shiore was killed by Orochimaru shortly before the exams began. Orochimaru then took over Shiore's body and used it as a disguise in order to infiltrate the Chuunin Exams and scout out the potential of Uchiha Sasuke as a future vessel.",
    descriptionBR:
      "Originalmente um genin da Vila da Grama que participava dos Exames Chuunin, Shiore foi morto por Orochimaru pouco antes do início dos exames. Orochimaru então tomou o corpo de Shiore e o usou como disfarce para se infiltrar nos Exames Chuunin e avaliar o potencial de Uchiha Sasuke como um possível receptáculo futuro.",
    skills: [
      {
        name: "Five Elements Seal",
        themeName: "Five Elements Seal",
        description:
          "Shiore seals one enemy, dealing 10 affliction damage to them for 3 turns. During this time, that enemy will deal 10 less non-affliction damage and their harmful skills will cost 1 additional random chakra.",
        descriptionBR:
          "Shiore sela um inimigo, causando 10 de dano aflitivo a ele por 3 turnos. Durante esse tempo, esse inimigo irá causar 10 a menos de dano não-affliction e suas habilidades ofensivas irão custar 1 chakra aleatório adicional.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Instant", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/0c8ekXI.png",
      },
      {
        name: "Giant Snake Bind",
        themeName: "Giant Snake Bind",
        description:
          "Shiore summons a giant snake and binds one enemy, dealing 20 damage to them for 2 turns. The first turn, that enemy will be stunned for 1 turn.",
        descriptionBR:
          "Shiore invoca uma cobra gigante e prende um inimigo, causando 20 de dano a ele por 2 turnos. No primeiro turno, esse inimigo será atordoado por 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 1,
        url: "https://i.imgur.com/dxhnYwl.png",
      },
      {
        name: "Curse Seal",
        themeName: "Curse Seal",
        description:
          "Shiore places a curse seal on an enemy, stealing 5 health from them for 3 turns. While active, that enemy will be unable to become invulnerable*. During this time, if that enemy is killed, Shiore gains 1 random chakra*.",
        descriptionBR:
          "Shiore coloca um selo amaldiçoado em um inimigo, roubando 5 de vida dele por 3 turnos. Enquanto ativo, esse inimigo não poderá se tornar invulnerável*. Durante esse tempo, se esse inimigo for morto, Shiore ganha 1 chakra aleatório*.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Action", "Affliction", "Instant*"],
        cooldown: 3,
        url: "https://i.imgur.com/xj18zrg.png",
      },
      {
        name: "Snake Body Replacement",
        themeName: "Snake Body Replacement",
        description:
          "This skill makes Shiore Orochimaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shiore Orochimaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/Sssep9n.png",
      },
    ],
  },
  {
    name: "Jiroubou",
    url: "https://i.imgur.com/MuepMwr.png",
    themepic: "https://i.imgur.com/31vKriX.jpg",
    description:
      "Jiroubou is the largest member of the Sound four. His fighting style involves powerful physical attacks in combination with manipulation of earth.",
    descriptionBR:
      "Jiroubou é o maior membro do Quarteto do Som. Seu estilo de luta envolve ataques físicos poderosos combinados com manipulação da terra.",
    skills: [
      {
        name: "Nirvana Fist Style",
        themeName: "Nirvana Fist Style",
        description:
          "Jiroubou <Damage>deals 30 damage<Damage> to one enemy. The following turn, <SkillName>'Earth Seal Mud Cannonball'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "Jiroubou <Damage>ausa 30 de dano<Damage> a um inimigo. No próximo turno, <SkillName>'Earth Seal Mud Cannonball'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/p23bcPf.png",
        themepic: "https://i.imgur.com/gujO5J1.jpg",
      },
      {
        name: "Earth Seal Mud Cannonball",
        themeName: "Earth Seal Mud Cannonball",
        description:
          "Jiroubou <Damage>deals 20 damage<Damage> to all enemies. The following turn, <SkillName>'Nirvana Fist Style'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "Jiroubou <Damage>causa 20 de dano<Damage> a todos os inimigos. No próximo turno, <SkillName>'Nirvana Fist Style'<SkillName> irá <Improvements>causar 10 de dano adicional<Improvements>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/FD9OSvE.png",
        themepic: "https://i.imgur.com/6nV4BPw.jpg",
      },
      {
        name: "Dungeon Chamber of Nothingness",
        themeName: "Dungeon Chamber of Nothingness",
        description:
          "Jiroubou captures the enemy team in a prison of earth, <Effects>stealing 2 random chakra<Effects> from their pool. Jiroubou and all allies <Defense>become invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Jiroubou captura o time inimigo em uma prisão de terra, <Effects>roubando 2 chakras aleatórios<Effects> deles. Jiroubou e todos os aliados se <Defense>tornam invulneráveis<Defense> por 1 turno.",
        energy: ["Nin", "Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/HN5PgS3.png",
        themepic: "https://i.imgur.com/2R67ncw.jpg",
      },
      {
        name: "Earth Wall Land Flip",
        themeName: "Earth Wall Land Flip",
        description:
          "This skill makes Jiroubou <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Jiroubou <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/DaSkMHS.png",
        themepic: "https://i.imgur.com/sIeYsjV.jpg",
      },
    ],
  },
  {
    name: "Kidoumaru",
    url: "https://i.imgur.com/ZSWwJiY.png",
    themepic: "https://i.imgur.com/ihAINhI.jpg",
    description:
      "Kidoumaru has spider-like skills. He has 6 arms and has the ability to create weapons and traps with a strange golden web-like liquid.",
    descriptionBR:
      "Kidoumaru possui habilidades semelhantes às de uma aranha. Ele tem 6 braços e a capacidade de criar armas e armadilhas com um estranho líquido dourado semelhante a teias.",
    skills: [
      {
        name: "Golden Arrow",
        themeName: "Golden Arrow",
        description:
          "Kidoumaru fires a special arrow made of enzymes from his mouth at one enemy <Damage>dealing 50 piercing damage<Damage>.",
        descriptionBR:
          "Kidoumaru dispara uma seta especial feita de enzimas de sua boca em um inimigo, <Damage>causando 50 de dano perfurante<Damage>.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/9FGWta9.png",
        themepic: "https://i.imgur.com/s0SPE7z.jpg",
      },
      {
        name: "Summoning: Kyodaigumo",
        themeName: "Summoning: Kyodaigumo",
        description:
          "Kidoumaru summons Kyodaigumo, dealing 10 damage to all enemies for 5 turns. The following 5 turns, Kidoumaru will gain 10 permanent destructible defense each turn and any new skill an enemy uses will have its cooldown increased by 1.",
        descriptionBR:
          "Kidoumaru invoca Kyodaigumo, causando 10 de dano a todos os inimigos por 5 turnos. Nos próximos 5 turnos, Kidoumaru irá ganhar 10 de defesa destrutível permanente a cada turno e qualquer habilidade nova que um inimigo usar terá seu cooldown aumentado em 1.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 5,
        url: "https://i.imgur.com/TyhkdYM.png",
        themepic: "https://i.imgur.com/eYmkjWa.jpg",
      },
      {
        name: "Spider Web",
        themeName: "Spider Web",
        description:
          "Kidoumaru uses spider web on himself or an ally. For 1 turn, the first enemy to use a new harmful damage skill on that ally will be countered, and will deal 10 less damage for 2 turns. If successful, 'Spider Web' current cooldown will be increased by 1.",
        descriptionBR:
          "Kidoumaru usa teias de aranha nele mesmo ou em um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade de dano ofensiva nesse inimigo será anulado, e irá causar 10 a menos de dano por 2 turnos. Se for bem-sucedida, o cooldown atual de 'Spider Web' será aumentado em 1.",
        energy: ["Blood"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Mcx7Ibu.png",
        themepic: "https://i.imgur.com/az9Nh4x.jpg",
      },
      {
        name: "Golden Armor",
        themeName: "Golden Armor",
        description:
          "This skill makes Kidoumaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kidoumaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/5h0v2Qd.png",
        themepic: "https://i.imgur.com/lEYHOSF.jpg",
      },
    ],
  },
  {
    name: "Sakon",
    url: "https://i.imgur.com/fXMOzMv.png",
    themepic: "https://i.imgur.com/AxKXmpX.jpg",
    description:
      "Sakon usually carries a strange head around on his back. This head turns out to be his brother Ukon, who can also exit Sakon and enter other bodies in order to destroy them.",
    descriptionBR:
      "Sakon geralmente carrega uma cabeça estranha nas costas. Essa cabeça é, na verdade, seu irmão Ukon, que também pode sair de Sakon e entrar em outros corpos para destruí-los.",
    skills: [
      {
        name: "Gattling Punch",
        themeName: "Gattling Punch",
        description:
          "Using one body, Sakon and Ukon rapidly punch one enemy, <Damage>dealing 40 damage<Damage> to them.",
        descriptionBR:
          "Usando um corpo, Sakon e Ukon rapidamente socam um inimigo, <Damage>causando 40 de dano<Damage> a ele.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/uBllXX7.png",
        themepic: "https://i.imgur.com/TyTCxYO.jpg",
      },
      {
        name: "Parasite Demon Technique",
        themeName: "Parasite Demon Technique",
        description:
          "Sakon <Damage>deals 15 affliction damage<Damage> to one enemy permanently. During this time, Sakon gains 15 points of <Defense>damage reduction<Defense> and <Defense>heals 5 health<Defense> each turn. This skill <Improvements>cannot be used<Improvements> on the <Effects>same target<Effects>. This skill will <Improvements>end<Improvements> if <Effects>used<Effects> on a <Invisible>different enemy<Invisible> or if the affected enemy <Effects>dies<Effects>.",
        descriptionBR:
          "Sakon e Ukon irão <Damage>causar 15 de dano aflitivo<Damage> a um inimigo permanentemente. Durante esse tempo, Sakon ganha 15 pontos de <Defense>redução de dano<Defense> e irá <Defense>curar 5 de vida<Defense> todo turno. Essa habilidade <Improvements>não pode ser usada<Improvements> no <Effects>mesmo alvo<Effects>. Essa habilidade <Improvements>terminará<Improvements> se <Effects>usada<Effects> em um <Invisible>inimigo diferente<Invisible> ou se o inimigo afetado <Effects>morrer<Effects>.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/MxZI7Mt.png",
        themepic: "https://i.imgur.com/QBFg12e.jpg",
      },
      {
        name: "Rest",
        themeName: "Rest",
        description:
          "Ukon rests within the body of Sakon, <Defense>healing him for 30 health<Defense>. This skill will <Effects>end<Effects> <SkillName>'Parasite Demon Technique'<SkillName> if it's currently active.",
        descriptionBR:
          "Ukon descansa dentro do corpo de Sakon, <Defense>curando-o em 30 de vida<Defense>. Essa habilidade <Effects>terminará<Effects> <SkillName>'Parasite Demon Technique'<SkillName> se estiver ativada no momento.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/5IHOsdy.png",
        themepic: "https://i.imgur.com/0WwcWwG.jpg",
      },
      {
        name: "Summoning: Rashoumon",
        themeName: "Summoning: Rashoumon",
        description:
          "This skill makes Sakon <Defense> invulnerable<Defense>  for 1 turn.",
        descriptionBR:
          "Essa habilidade torna Sakon  <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/uUrOzuw.png",
        themepic: "https://i.imgur.com/7MYmzIJ.jpg",
      },
    ],
  },
  {
    name: "Tayuya",
    url: "https://i.imgur.com/ZkTTfAq.png",
    themepic: "https://i.imgur.com/uPjG3E3.jpg",
    description:
      "Tayuyas only weapon is a flute with which she can cast Genjutsu or control three summoned demons, The Doki.",
    descriptionBR:
      "A única arma de Tayuya é uma flauta com a qual ela pode lançar Genjutsu ou controlar três demônios invocados, os Doki.",
    skills: [
      {
        name: "Doki Demons",
        themeName: "Doki Demons",
        description:
          "Tayuya summons the Doki Demons, <Damage>dealing 15 piercing damage<Damage> to all enemies for 2 turns. Tayuya gains 10 <Damage>points of damage<Damage> reduction for 2 turns. The following turn, <SkillName>'Doki Ghosts'<SkillName> will be <Improvements>improved<Improvements> and will <Effects>remove chakra<Effects> from the enemy.",
        descriptionBR:
          "Tayuya invoca os Demônios Doki, <Damage>causando 15 de dano perfurante<Damage> a todos os inimigos por 2 turnos. Tayuya ganha 10 <Damage>pontos de redução de dano<Damage> por 2 turnos. No próximo turno, <SkillName>'Doki Ghosts'<SkillName> será <Improvements>aprimorada<Improvements> e irá <Effects>remover chakra<Effects> do inimigo.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Action", "Unique", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/yzxk31N.png",
        themepic: "https://i.imgur.com/HvxR6SZ.jpg",
      },
      {
        name: "Doki Ghosts",
        themeName: "Doki Ghosts",
        description:
          "Tayuya <Damage>deals 10 affliction damage<Damage> to one enemy. If used after <SkillName>'Doki Demons'<SkillName>, this skill will also <Effects>remove 1 ninjutsu or genjutsu chakra<Effects>. If used after <SkillName>'Demonic Flute Illusion'<SkillName>, this skill will also <Effects>stun<Effects> the enemy's <Classes>physical and chakra<Classes> skills for 1 turn.",
        descriptionBR:
          "Tayuya irá <Damage>causar 10 de dano aflitivo<Damage> a um inimigo. Se usada após <SkillName>'Doki Demons'<SkillName>, essa habilidade também irá <Effects>remover 1 ninjutsu ou genjutsu chakra<Effects>. Se usada após <SkillName>'Demonic Flute Illusion'<SkillName>, essa habilidade também irá<Effects>atordoar<Effects> as habilidades <Classes>Physical e Chakra<Classes> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/1KKY3gs.png",
        themepic: "https://i.imgur.com/WqWPPOQ.jpg",
      },
      {
        name: "Demonic Flute Illusion",
        themeName: "Demonic Flute Illusion",
        description:
          "Playing a genjutsu melody on her flute, Tayuya <Effects>stuns<Effects> all enemies for 1 turn. The following turn, <SkillName>'Doki Ghosts'<SkillName> will be <Improvements>improved<Improvements> and will <Effects>stun<Effects> the enemy's <Classes>physical and chakra<Classes> skills for 1 turn.",
        descriptionBR:
          "Tayuya toca uma melodia de genjutsu em sua flauta, <Effects>atordoando<Effects> todos os inimigos por 1 turno. No próximo turno, <SkillName>'Doki Ghosts'<SkillName> será <Improvements>aprimorada<Improvements> e irá <Effects>atordoar<Effects> as habilidades <Classes>Physical e Chakra<Classes> do inimigo por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/IPdtqHq.png",
        themepic: "https://i.imgur.com/NwT66bH.jpg",
      },
      {
        name: "Tayuya Insight",
        themeName: "Tayuya Insight",
        description:
          "This skill makes Tayuya <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tayuya <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/XG0Xs1t.png",
        themepic: "https://i.imgur.com/gaA5HCv.jpg",
      },
    ],
  },
  {
    name: "Kimimaro",
    url: "https://i.imgur.com/qzCv58M.png",
    themepic: "https://i.imgur.com/gtE042X.jpg",
    description:
      "A member of the Sound Five, Kimimaro was the leader, and the strongest of the team before his illness. Kimimaro's bloodline grants him unstoppable offensive power, however, his illness is slowly killing him, giving him precious little time.",
    descriptionBR:
      "Membro do Quinteto do Som, Kimimaro era o líder e o mais forte da equipe antes de sua doença. Sua linhagem sanguínea lhe concede um poder ofensivo imparável; no entanto, sua doença está lentamente o matando, lhe restando muito pouco tempo.",
    skills: [
      {
        name: "Dance of the Camellia",
        themeName: "Dance of the Camellia",
        description:
          "Kimimaro uses his superior taijutsu and arm bones as a sword <Damage>dealing 30 damage<Damage> to one enemy. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>. Afterwards, Kimimaro will <Damage>receive 5 affliction damage<Damage>.*",
        descriptionBR:
          "Kimimaro usa seu taijutsu superior e ossos do braço como uma espada, <Damage>causando 30 de dano<Damage> a um inimigo. Essa habilidade não pode ser <Classes>anulada<Classes> ou <Classes>refletida<Classes>. Em seguida, Kimimaro irá <Damage>receber 5 de dano aflitivo<Damage>.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/kwWcpw0.png",
        themepic: "https://i.imgur.com/zIpXEZr.jpg",
      },
      {
        name: "Dance of the Clematis",
        themeName: "Dance of the Clematis",
        description:
          "Kimimaro attacks one enemy with an extremely hard and sharp bone spear, <Damage>dealing 40 damage<Damage> to them and <Effects>stunning<Effects> them for 1 turn. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>. Afterwards, Kimimaro <Damage>will receive 10 affliction damage<Damage>.",
        descriptionBR:
          "Kimimaro ataca um inimigo com uma lança óssea extremamente dura e afiada, <Damage>causando 40 de dano<Damage> a ele e <Effects>atordoando-o<Effects> por 1 turno. Essa habilidade não pode ser <Classes>anulada<Classes> ou <Classes>refletida<Classes>. Em seguida, Kimimaro <Damage>irá receber 10 de dano aflitivo<Damage>.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Instant", "Unique", "Melee", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/Q6rE1Ey.png",
        themepic: "https://i.imgur.com/ShFLrWG.jpg",
      },
      {
        name: "Dance of the Seedling Fern",
        themeName: "Dance of the Seedling Fern",
        description:
          "Kimimaro creates a forest of sharp bones, <Damage>dealing 30 damage<Damage> to all enemies and <Effects>reducing<Effects> all enemy <Classes>physical and chakra<Classes> <Effects>non-affliction damage<Effects> <Effects>by 20<Effects> for 1 turn. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>. Afterwards, Kimimaro will <Damage>receive 15 affliction damage<Damage> for 2 turns.*",
        descriptionBR:
          "Kimimaro cria uma floresta de ossos afiados, <Damage>causando 30 de dano<Damage> a todos os inimigos e <Effects>reduzindo todo o dano não-aflitivo<Effects> de habilidades <Classes>physical e chakra<Classes> <Effects>inimigas em 20<Effects> por 1 turno. Essa habilidade não pode ser <Classes>anulada<Classes> ou <Classes>refletida<Classes>. Em seguida, Kimimaro <Damage>irá receber 15 de dano aflitivo<Damage> por 2 turnos.*",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Instant", "Unique", "Ranged", "Affliction*"],
        cooldown: 2,
        url: "https://i.imgur.com/hgM78mG.png",
        themepic: "https://i.imgur.com/xI4CGeo.jpg",
      },
      {
        name: "Bone Defense",
        themeName: "Bone Defense",
        description:
          "This skill makes Kimimaro <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kimimaro <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/bSUqg3e.png",
        themepic: "https://i.imgur.com/oI2V9GS.jpg",
      },
    ],
  },
  {
    name: "Touji Mizuki",
    url: "https://i.imgur.com/56OlIhi.png",
    themepic: "https://i.imgur.com/sYJTVs6.jpg",
    description:
      "An instructor for Konoha, Mizuki is a chuunin, and old friend of Iruka that over time grew jealous and petty. While Mizuki doesn't have any special abilities, he knows to instead be patient, and wait until the right time to strike.",
    descriptionBR:
      "Instrutor de Konoha, Mizuki é um chuunin e velho amigo de Iruka que, com o tempo, se tornou invejoso e mesquinho. Embora Mizuki não possua habilidades especiais, ele sabe ser paciente e esperar o momento certo para atacar.",
    skills: [
      {
        name: "Kunai Assault",
        themeName: "Kunai Assault",
        description:
          "Throwing many kunais, Mizuki <Damage>deals 15 damage<Damage> to one enemy. The following turn, this skill <Improvements>will have no cost<Improvements>.",
        descriptionBR:
          "Lançando vários kunais, Mizuki irá <Damage>causar 15 de dano<Damage> a um inimigo. No próximo turno, essa habilidade <Improvements>não terá custo<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Ka9FkRw.png",
        themepic: "https://i.imgur.com/zEH0PwS.jpeg",
      },
      {
        name: "Shuriken Execution",
        themeName: "Shuriken Execution",
        description:
          "Mizuki throws a giant shuriken, <Damage>dealing 35 piercing damage<Damage> to one enemy. This skill may only target <Effects>enemies at or below 50 health<Effects>. <SkillName>'Shuriken Execution'<SkillName> will <Improvements>deal 10 less damage permanently<Improvements> each time it is used. This skill <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Mizuki lança um grande shuriken, <Damage>causando 35 de dano perfurante<Damage> a um inimigo. Essa habilidade só pode atingir <Effects>inimigos com 50 de vida ou menos<Effects>. <SkillName>'Shuriken Execution'<SkillName> irá <Improvements>causar 10 de dano a menos permanentemente<Improvements> cada vez que for usada. Essa habilidade <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/oV3goLL.png",
        themepic: "https://i.imgur.com/DKIJQxu.jpg",
      },
      {
        name: "Genjutsu Ambush",
        themeName: "Genjutsu Ambush",
        description:
          "Mizuki uses his ambush tactics with genjutsu. The following 3 turns, if Mizuki <Classes>uses a new harmful skill<Classes>, he will become <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Mizuki utiliza suas táticas de emboscada com genjutsu. Nos próximos 3 turnos, se Mizuki <Classes>usar uma nova habilidade ofensiva<Classes>, ele se tornará <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/w3ZJUcA.png",
        themepic: "https://i.imgur.com/I8SUNqM.jpeg",
      },
      {
        name: "Mizuki Dodge",
        themeName: "Mizuki Dodge",
        description:
          "This skill makes Touji Mizuki <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Touji Mizuki <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/mewyRIs.png",
        themepic: "https://i.imgur.com/BAvdvCe.jpg",
      },
    ],
  },
  {
    name: "Umino Iruka",
    url: "https://i.imgur.com/VFwEl8B.png",
    themepic: "https://i.imgur.com/KbEbB3a.jpg",
    description:
      "Iruka is one of the instructors at the Konoha ninja academy. He is a well rounded ninja with diverse abilities and skills.",
    descriptionBR:
      "Iruka é um dos instrutores na academia ninja de Konoha. Ele é um ninja equilibrado, com habilidades e habilidades diversas.",
    skills: [
      {
        name: "Shuriken Throw",
        themeName: "Shuriken Throw",
        description:
          "Iruka throws a couple shurikens at one enemy who <Damage>takes 20 piercing damage<Damage>. This skill <Improvements>will deal an additional 10 damage<Improvements> for <Improvements>each 30 health Iruka has lost<Improvements>.",
        descriptionBR:
          "Iruka lança alguns shurikens em um inimigo, que <Damage>recebe 20 de dano perfurante<Damage>. Essa habilidade <Improvements>irá causar 10 de dano adicional<Improvements> a cada <Improvements>30 de vida que Iruka tiver perdido<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/bLYgmz1.png",
        themepic: "https://i.imgur.com/vJk1zWz.jpg",
      },
      {
        name: "Shield Ally",
        themeName: "Shield Ally",
        description:
          "Iruka uses his own body to shield one ally. For 1 turn, that ally <Defense>will ignore all damage dealt<Defense> to them. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Iruka usa seu próprio corpo para proteger um aliado. Por 1 turno, esse aliado <Defense>irá ignorar todo dano causado<Defense> a ele. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/NmaAnE6.png",
        themepic: "https://i.imgur.com/cxDOPL3.jpg",
      },
      {
        name: "Sealed Bombs Square Formation",
        themeName: "Sealed Bombs Square Formation",
        description:
          "Iruka creates a trap with a set of exploding seals. The following 2 turns, one enemy <Improvements>will take 75% more damage<Improvements> from <Classes>melee<Classes> skills. During this time, if that enemy <Classes>use a new skill<Classes>, they <Damage>will take 20 piercing damage<Damage> and this skill will <Effects>end<Effects>.",
        descriptionBR:
          "Iruka cria uma armadilha com um conjunto de selos explosivos. Nos próximos 2 turnos, um inimigo <Improvements>receberá 75% a mais de dano<Improvements> de habilidades <Classes>melee<Classes>. Durante esse tempo, se esse inimigo <Classes>usar uma nova habilidade<Classes>, ele irá <Damage>receber 20 de dano perfurante<Damage> e essa habilidade será <Effects>encerrada<Effects>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/tz3UXHq.png",
        themepic: "https://i.imgur.com/5U1DHY1.jpg",
      },
      {
        name: "Kunai Parry",
        themeName: "Kunai Parry",
        description:
          "This skill makes Umino Iruka <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Umino Iruka <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZRDdP9S.png",
        themepic: "https://i.imgur.com/ZRDdP9S.png",
      },
    ],
  },
  {
    name: "Akadou Yoroi",
    url: "https://i.imgur.com/ZqpOP0D.png",
    themepic: "https://i.imgur.com/e0KwYhs.jpg",
    description:
      "Part of the three man team of Kabuto during the Chuunin Exams working as spies, Yoroi has a special ability that allows him to absorb his opponents energy.",
    descriptionBR:
      "Parte da equipe de três membros de Kabuto durante o Exame Chuunin, trabalhando como espiões, Yoroi possui uma habilidade especial que lhe permite absorver a energia de seus oponentes.",
    skills: [
      {
        name: "Chakra and Life Absorption",
        themeName: "Chakra and Life Absorption",
        description:
          "Yoroi endows his attacks. The following 3 turns, <SkillName>'Draining Assault'<SkillName> and <SkillName>'Energy Drain'<SkillName> may be used.",
        descriptionBR:
          "Yoroi concede poder a seus ataques. Nos próximos 3 turnos, <SkillName>'Draining Assault'<SkillName> e <SkillName>'Energy Drain'<SkillName> poderão ser usados.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/0qvKdhQ.png",
        themepic: "https://i.imgur.com/ijSYyUH.jpg",
      },
      {
        name: "Energy Drain",
        themeName: "Energy Drain",
        description:
          "Yoroi touches one enemy, <Damage>stealing 20 health<Damage> from them for 1 turn and <Effects>lowering their non-affliction damage by 5<Effects> until that enemy <Classes>uses a new damage skill<Classes>. During <SkillName>'Draining Assault'<SkillName>, this skill will <Effects>steal 1 bloodline chakra<Effects>. Requires <SkillName>'Chakra and Life Absorption'<SkillName> to be used.",
        descriptionBR:
          "Yoroi toca um inimigo, <Damage>roubando 20 de vida<Damage> dele por 1 turno e <Effects>reduzindo o dano não-aflição dele em 5<Effects> até que esse inimigo use uma nova habilidade <Effects>que cause dano<Effects>. Durante <SkillName>'Draining Assault'<SkillName>, essa habilidade irá <Effects>roubar 1 bloodline chakra<Effects>. Requer <SkillName>'Chakra and Life Absorption'<SkillName> para ser usada.",
        energy: ["Tai"],
        classes: ["Chakra", "Instant", "Melee", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/5WXWl5W.png",
        themepic: "https://i.imgur.com/nei1AaF.jpg",
      },
      {
        name: "Draining Assault",
        themeName: "Draining Assault",
        description:
          "Yoroi charges at one enemy with multiple energy drains, <Damage>stealing 12 health<Damage> from them for 3 turns and <Effects>stealing 1 bloodline or ninjutsu chakra<Effects> each turn. During this time, <SkillName>'Energy Drain'<SkillName> will be <Improvements>improved<Improvements>. Requires <SkillName>'Chakra and Life Absorption'<SkillName> to be used.",
        descriptionBR:
          "Yoroi carrega contra um inimigo com múltiplos drenos de energia, <Damage>roubando 12 de vida<Damage> deles por 3 turnos e roubando <Effects>1 bloodline ou ninjutsu chakra<Effects> a cada turno. Durante esse tempo, <SkillName>'Energy Drain'<SkillName> irá <Improvements>aprimorada<Improvements>. Requer o uso de <SkillName>'Chakra and Life Absorption'<SkillName>.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Chakra", "Action", "Melee", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/F4ymMEe.png",
        themepic: "https://i.imgur.com/flCumYI.jpg",
      },
      {
        name: "Chakra Block",
        themeName: "Chakra Block",
        description:
          "This skill makes Akadou Yoroi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akadou Yoroi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/MNnA4mF.png",
        themepic: "https://i.imgur.com/Cj7QXOE.jpg",
      },
    ],
  },
  {
    name: "Tsurugi Misumi",
    url: "https://i.imgur.com/M8EPY4F.png",
    themepic: "https://i.imgur.com/tmxLtSn.png",
    description:
      "A sound village genin that infiltrated Konoha as a spy, Misumi likes taking the initiative, preferring to be the first to strike in combat. With his unique abilities, Misumi can flex his muscles and bones, twisting them to wrap around his enemies, or even defend his allies.",
    descriptionBR:
      "Um genin da Vila do Som que se infiltrou em Konoha como espião, Misumi gosta de tomar a iniciativa, preferindo ser o primeiro a atacar no combate. Com suas habilidades únicas, Misumi pode flexionar seus músculos e ossos, torcendo-os para se enrolar em seus inimigos, ou até mesmo defender seus aliados.",
    skills: [
      {
        name: "Flexible Twisting Joints",
        themeName: "Flexible Twisting Joints",
        description:
          "Using his distractingly loose joints, Misumi targets an ally or an enemy. If used on an enemy he <Damage>will deal 15 damage<Damage> that <Classes>ignores invulnerability<Classes> to them. If used on an ally, that ally will gain 15 <Defense>points of damage reduction<Defense> for 1 turn.",
        descriptionBR:
          "Usando suas articulações exageradamente soltas, Misumi atinge um aliado ou inimigo. Se usado em um inimigo, ele <Damage>causará 15 de dano<Damage> que <Classes>ignora invulnerabilidade<Classes>. Se usado em um aliado, esse aliado ganhará 15 <Defense>pontos de redução de dano<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ehKhgIx.jpg",
        themepic: "https://i.imgur.com/ehKhgIx.jpg",
      },
      {
        name: "Soft Physique Modification",
        themeName: "Soft Physique Modification",
        description:
          "Misumi wraps around one enemy. For 2 turns all <Classes>new harmful<Classes> skills used on Misumi will be <Defense>reflected to that enemy instead<Defense>. During this time, that enemy will be unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense>.",
        descriptionBR:
          "Misumi se envolve em torno de um inimigo. Por 2 turnos, todas as <Classes>novas habilidades<Classes> ofensivas usadas em Misumi serão <Defense>refletidas para aquele inimigo<Defense>. Durante esse tempo, aquele inimigo não poderá <Defense>reduzir dano<Defense> nem se tornar <Defense>invulnerável<Defense>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Control"],
        cooldown: 4,
        url: "https://i.imgur.com/8kdZEAV.jpg",
        themepic: "https://i.imgur.com/8kdZEAV.jpg",
      },
      {
        name: "Tighten Joints",
        themeName: "Tighten Joints",
        description:
          "Misumi tightens his joints gaining 15 <Defense>destructible defense<Defense>. If <SkillName>'Soft Physique Modification'<SkillName> is active, the enemy that it is active on will also <Damage>receive 20 damage<Damage> and will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Misumi aperta suas articulações, ganhando 15 <Defense>pontos de defesa destrutível<Defense>. Se <SkillName>'Soft Physique Modification'<SkillName> estiver ativo, o inimigo no qual está ativo também <Damage>irá receber 20 de dano<Damage> e será <Effects>atordoado<Effects> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/d1JEFna.jpg",
        themepic: "https://i.imgur.com/d1JEFna.jpg",
      },
      {
        name: "Misumi Block",
        themeName: "Misumi Block",
        description:
          "This skill makes Tsurugi Misumi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsurugi Misumi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/uH3KoI8.jpg",
        themepic: "https://i.imgur.com/uH3KoI8.jpg",
      },
    ],
  },
  {
    name: "Mitarashi Anko",
    url: "https://i.imgur.com/q0YFcWg.png",
    themepic: "https://i.imgur.com/X7AhYjf.jpg",
    description:
      "Once a student of Orochimaru and a bearer of the Cursed Seal of Heaven, Anko is now a special Jounin who oversees the second portion of the Chuunin exams.",
    descriptionBR:
      "Uma ex-aluna de Orochimaru e portadora do Selo Amaldiçoado do Céu, Anko é agora uma Jounin especial que supervisiona a segunda parte dos exames Chuunin.",
    skills: [
      {
        name: "Dual Pin",
        themeName: "Dual Pin",
        description:
          "Anko <Damage>deals 5 affliction damage<Damage> to one enemy permanently. Until that enemy is <Classes>killed<Classes>, they will <Improvements>receive an additional 5 damage<Improvements> from all <Classes>Anko's other skills<Classes>. During this time, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Dragon Fire'<SkillName>.",
        descriptionBR:
          "Anko irá <Damage>causar 5 dano aflitivo<Damage> a um inimigo permanentemente. Até que esse inimigo <Classes>morra<Classes>, ele irá <Improvements>receber 5 de dano adicional<Improvements> de todas as outras <Classes>habilidades de Anko<Classes>. Durante esse tempo, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Dragon Fire'<SkillName>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Affliction", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/tjBSEBp.png",
        themepic: "https://i.imgur.com/pcCN6bs.jpg",
      },
      {
        name: "Twin Snakes",
        themeName: "Twin Snakes",
        description:
          "Anko delivers a large dose of poison, <Damage>dealing 15 affliction damage<Damage> to one random enemy. For 1 turn, Anko becomes <Defense>invulnerable<Defense> to <Defense>physical<Defense> skills. The following turn, Anko's skills <Improvements>will cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Anko entrega uma grande dose de veneno, <Damage>causando 15 dano aflitivo<Damage> a um inimigo aleatório. Por 1 turno, Anko se tornará <Defense>invulnerável<Defense> a habilidades <Defense>Physical<Defense>. No próximo turno, as habilidades de Anko <Improvements>irão custar 1 chakra aleatório a menos<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/0vzNgam.png",
        themepic: "https://i.imgur.com/EdTB6uK.jpg",
      },
      {
        name: "Hidden Shadow Snake Hand",
        themeName: "Hidden Shadow Snake Hand",
        description:
          "Anko calls forth snakes from under her jacket which slam into one enemy, <Damage>dealing 20 damage<Damage> and <Damage>*15 affliction damage<Damage> to them. Afterwards, Anko gains 5 permanent <Defense>destructible defense<Defense>.",
        descriptionBR:
          "Anko invoca cobras debaixo de sua jaqueta que atingem um inimigo, <Damage>causando 20 de dano<Damage> e <Damage>*15 de dano aflitivo<Damage> a ele. Em seguida, Anko recebe 5 <Defense>de defesa destrutível<Defense> permanente.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Instant", "Melee", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/QRV4RTd.png",
        themepic: "https://i.imgur.com/ayoi3R9.jpg",
      },
      {
        name: "Quick Reflexes",
        themeName: "Quick Reflexes",
        description:
          "This skill makes Mitarashi Anko <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mitarashi Anko <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/aLUTqtz.png",
        themepic: "https://i.imgur.com/QLNbwod.jpg",
      },
      {
        name: "Dragon Fire",
        themeName: "Dragon Fire",
        description:
          "Anko scorches the battlefield with fire, <Damage>dealing 10 affliction damage<Damage> to all enemies for 2 turns. During this time, they will also <Improvements>receive an additional 5 affliction damage<Improvements> from all other <Classes>affliction<Classes> skills.",
        descriptionBR:
          "Anko incendeia o campo de batalha com fogo, <Damage>causando 10 de dano aflitivo<Damage> a todos os inimigos por 2 turnos. Durante esse tempo, eles também <Improvements>irão receber 5 de dano aflitivo adicional<Improvements> de todas as outras habilidades <Classes>Affliction<Classes>.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/JfRvVaJ.png",
      },
    ],
  },
  {
    name: "Shizune",
    url: "https://i.imgur.com/V4ZPeu0.png",
    themepic: "https://i.imgur.com/465I7Is.jpg",
    description:
      "Shizune is the aid of Tsunade. A competent combatant using poisons and needles, she is also a highly skilled medic who is able to heal her allies.",
    descriptionBR:
      "Shizune é a assistente de Tsunade. Uma combatente competente que usa venenos e agulhas, ela também é uma médica altamente habilidosa capaz de curar seus aliados.",
    skills: [
      {
        name: "Prepared Needle Shot",
        themeName: "Prepared Needle Shot",
        description:
          "Shizune shoots hidden needles at one enemy <Damage>dealing 15 piercing damage<Damage> to them. For 1 turn, that enemy's non-affliction damage will be <Effects>reduced to a maximum of 15<Effects>.",
        descriptionBR:
          "Shizune dispara agulhas escondidas em um inimigo, <Damage>causando 15 de dano perfurante<Damage> a ele. Por 1 turno, o dano não-affliction desse inimigo será <Effects>reduzido para um máximo de 15<Effects>.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/IXgvJIk.png",
        themepic: "https://i.imgur.com/h2D4xiw.jpg",
      },
      {
        name: "Poison Mist",
        themeName: "Poison Mist",
        description:
          "Shizune breaths a poison cloud on one enemy who <Damage>takes 12 affliction damage<Damage> for 3 turns. This skill <Improvements>may not be used<Improvements> on an enemy currently affected.",
        descriptionBR:
          "Shizune exala uma nuvem de veneno em um inimigo, que irá <Damage>receber 12 de dano aflitivo<Damage> por 3 turnos. Essa habilidade <Improvements>não pode ser usada<Improvements> em um inimigo que já esteja afetado.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/pAf7GAy.png",
        themepic: "https://i.imgur.com/kHJYL3F.jpg",
      },
      {
        name: "Healing Resuscitation Regeneration",
        themeName: "Healing Resuscitation Regeneration",
        description:
          "Using this advanced healing technique, Shizune <Defense>heals<Defense> one ally <Defense>for 35 health<Defense> and <Effects>removes<Effects> all <Classes>enemy affliction skills<Classes> from them.",
        descriptionBR:
          "Usando essa técnica avançada de cura, Shizune <Defense>cura<Defense> um aliado <Defense>em 35 de vida<Defense> e <Effects>remove<Effects> todas as <Classes>habilidades Affliction inimigas<Classes> dele.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/PXcTQUt.png",
        themepic: "https://i.imgur.com/3pVkDYM.jpg",
      },
      {
        name: "Shizune Dodge",
        themeName: "Shizune Dodge",
        description:
          "This skill makes Shizune <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shizune <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ykKkwKV.png",
        themepic: "https://i.imgur.com/ykKkwKV.png",
      },
    ],
  },
  {
    name: "Yakushi Kabuto",
    url: "https://i.imgur.com/ZIyW33w.png",
    themepic: "https://i.imgur.com/4kwL3yX.jpg",
    description:
      "Kabuto was once found on the battlefield, was taught medical ninjutsu, and now assists Orochimaru. He uses his medical skill for both offence and defense.",
    descriptionBR:
      "Kabuto foi encontrado no campo de batalha, aprendeu ninjutsu médico e agora auxilia Orochimaru. Ele usa suas habilidades médicas tanto para ataque quanto para defesa.",
    skills: [
      {
        name: "Mystical Palm Technique",
        themeName: "Mystical Palm Technique",
        description:
          "Kabuto cuts one enemy through their flesh like a scalpel, <Damage>dealing 15 damage<Damage> and <Effects>removing 1 non-genjutsu chakra<Effects> from them. This skill will <Improvements>remove 1 additional non-genjutsu chakra<Improvements> if used on an enemy stunned by <SkillName>'Temple of Nirvana'<SkillName>.",
        descriptionBR:
          "Kabuto corta um inimigo através da carne, como um bisturi, <Damage>causando 15 de dano<Damage> e <Effects>removendo 1 não-genjutsu chakra<Effects> dele. Essa habilidade irá <Improvements>remover 1 chakra não-genjutsu adicional<Improvements> se usada em um inimigo atordoado por <SkillName>'Temple of Nirvana'<SkillName>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/jyPztJT.png",
        themepic: "https://i.imgur.com/BhijRbd.jpg",
      },
      {
        name: "Temple of Nirvana",
        themeName: "Temple of Nirvana",
        description:
          "Kabuto creates a large scale genjutsu. For 1 turn, any enemy that <Classes>uses a new skill<Classes> will be <Effects>stunned<Effects> for 1 turn. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Kabuto cria um genjutsu em grande escala. Por 1 turno, qualquer inimigo que <Classes>usar uma nova habilidade<Classes> será <Effects>atordoado<Effects> por 1 turno. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/6MjweCd.png",
        themepic: "https://i.imgur.com/qsrADbd.jpg",
      },
      {
        name: "Secret Healing Wound Destruction",
        themeName: "Secret Healing Wound Destruction",
        description:
          "Kabuto <Effects>removes<Effects> all <Classes>enemy affliction skills<Classes> from himself, gains 50% <Defense>damage reduction<Defense> for 1 turn and <Defense>heals 35 health<Defense>. This skill <Effects>will heal 5 less health<Effects> each time it is used.",
        descriptionBR:
          "Kabuto <Effects>remove<Effects> todas as <Classes>habilidades Affliction inimigas<Classes> de si mesmo, ganha 50% de <Defense>redução de dano<Defense> por 1 turno e <Defense>cura 35 de vida<Defense>. Essa habilidade <Effects>irá curar 5 de vida a menos<Effects> a cada vez que for usada.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/nFIj8h6.png",
        themepic: "https://i.imgur.com/jeRuVsG.jpg",
      },
      {
        name: "Dead Soul Technique",
        themeName: "Dead Soul Technique",
        description:
          "This skill makes Yakushi Kabuto <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yakushi Kabuto <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/1DqPb41.png",
        themepic: "https://i.imgur.com/1ymdv9I.jpg",
      },
    ],
  },
  {
    name: "Hatake Kakashi",
    url: "https://i.imgur.com/EiPfRpg.png",
    themepic: "https://i.imgur.com/bNfA9x0.jpg",
    description:
      "Kakashi is the sensei of Naruto, Sakura, and Sasuke. With his Sharingan he is able to turn his foes skills back upon themselves and can cause severe damage with his Raikiri and Nin-Dogs skills.",
    descriptionBR:
      "Kakashi é o sensei de Naruto, Sakura e Sasuke. Com seu Sharingan, ele é capaz de devolver as habilidades dos inimigos contra eles mesmos e pode causar dano severo com suas habilidades Raikiri e Nin-Dogs.",
    skills: [
      {
        name: "Sharingan Copy",
        themeName: "Sharingan Copy",
        description:
          "For 1 turn, any <Classes>new non-unique skill<Classes> that targets Kakashi will instantly be <Defense>reflected<Defense> back upon the enemy who used it. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Por 1 turno, qualquer <Classes>nova habilidade não-unique<Classes> que tiver como alvo Kakashi será instantaneamente <Defense>refletida<Defense> de volta ao inimigo que a usou. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/nqbmD13.png",
        themepic: "https://i.imgur.com/E8xJgSA.jpg",
      },
      {
        name: "Nin-Dogs",
        themeName: "Nin-Dogs",
        description:
          "Kakashi summons the nin-dogs which bite an enemy. That enemy has their <Classes>physical and mental<Classes> skills <Effects>stunned<Effects> for 1 turn. During this time 'Raikiri' <SkillName>will do 50 more damage to that enemy<SkillName>.",
        descriptionBR:
          "Kakashi invoca os nin-dogs, que mordem um inimigo. Esse inimigo terá suas habilidades <Classes>physical e mental<Classes> <Effects>atordoadas<Effects> por 1 turno. Durante esse tempo, <SkillName>'Raikiri'<SkillName> irá <SkillName>causar 50 de dano a mais a esse inimigo<SkillName>.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Control", "Ranged", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/qenftRL.png",
        themepic: "https://i.imgur.com/WpUUMMk.jpg",
      },
      {
        name: "Raikiri",
        themeName: "Raikiri",
        description:
          "An attack so strong it is said to cut lightning. This skill <Damage>deals 50 piercing damage<Damage> to one enemy. If the enemy is affected by '<SkillName>Nin-Dogs'<SkillName> the enemy will<Improvements> take 100 piercing damage<Improvements> from <SkillName>'Raikiri'<SkillName> instead.",
        descriptionBR:
          "Um ataque tão poderoso que dizem ser capaz de cortar relâmpagos. Essa habilidade <Damage>causa 50 de dano perfurante<Damage> a um inimigo. Se o inimigo estiver afetado por <SkillName>'Nin-Dogs'<SkillName>, ele irá <Improvements>receber 100 de dano perfurante<Improvements> de <SkillName>'Raikiri'<SkillName>.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/IO6GaRr.png",
        themepic: "https://i.imgur.com/lMRDfAz.jpg",
      },
      {
        name: "Kakashi Replacement Technique",
        themeName: "Kakashi Replacement Technique",
        description:
          "This skill makes Hatake Kakashi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hatake Kakashi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
        themepic: "https://i.imgur.com/B71vCGL.jpg",
      },
    ],
  },
  {
    name: "Yuhi Kurenai",
    url: "https://i.imgur.com/L1IWoqb.png",
    themepic: "https://i.imgur.com/VwNHHZg.jpg",
    description:
      "Yuhi Kurenai is a jounin and team leader of Hinata, Shino and Kiba. She is a genjutsu master who is able to both disable and attack her enemies with illusions.",
    descriptionBR:
      "Yuhi Kurenai é uma jounin e líder de equipe de Hinata, Shino e Kiba. Ela é uma mestre em genjutsu, capaz de tanto incapacitar quanto atacar seus inimigos com ilusões.",
    skills: [
      {
        name: "Cherry Blossom Suffocation",
        themeName: "Cherry Blossom Suffocation",
        description:
          "Kurenai suffocates all enemies with illusionary cherry blossoms, <Damage>dealing 10 damage<Damage> to them for 3 turns. During this time, if <SkillName>'Plant-Form Attack'<SkillName> is used on an enemy affected by this skill, they will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Kurenai sufoca todos os inimigos com ilusórias flores de cerejeira, <Damage>causando 10 de dano<Damage> a eles por 3 turnos. Durante esse tempo, se <SkillName>'Plant-Form Attack'<SkillName> for usada em um inimigo afetado por essa habilidade, ele será <Effects>atordoado<Effects> por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Action", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/IKQQZHC.png",
        themepic: "https://i.imgur.com/kTSILEe.jpg",
      },
      {
        name: "Plant Form Attack",
        themeName: "Plant Form Attack",
        description:
          "Kurenai <Damage>deals 20 damage<Damage> to one enemy. For 2 turns, that enemy will be unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense>; This effect is applied <Defense>before the damage<Defense>. If used on an <Improvements>enemy affected<Improvements> by <SkillName>'Cherry Blossom Suffocation'<SkillName>, their <Classes>physical and ranged<Classes> skills will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Kurenai <Damage>causa 20 de dano<Damage> a um inimigo. Por 2 turnos, esse inimigo não poderá <Defense>reduzir dano<Defense> nem se tornar <Defense>invulnerável<Defense>; esse efeito é aplicado<Defense>antes do dano<Defense>. Se usada em um <Improvements>inimigo afetado<Improvements> por <SkillName>'Cherry Blossom Suffocation'<SkillName>, as habilidades <Classes>physical e ranged<Classes> dele serão <Effects>atordoadas<Effects> por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/p4ruZfg.png",
        themepic: "https://i.imgur.com/h0MLBYc.jpg",
      },
      {
        name: "Tree Bind Death",
        themeName: "Tree Bind Death",
        description:
          "Kurenai protects herself or an ally for 1 turn. The first <Classes>non-affliction damaging<Classes> skill used on that ally will be <Defense>countered<Defense>. The <Defense>countered<Defense> enemy will have their <Classes>chakra and melee<Classes> skills <Effects>stunned<Effects> and will <Improvements>receive double damage<Improvements> from <Classes>mental<Classes> skills for 3 turns. <Invisible>This skill is Invisible<Invisible>. <Effects>Ends<Effects> when Kurenai <Effects>dies<Effects>.",
        descriptionBR:
          "Kurenai protege a si mesma ou um aliado por 1 turno. A primeira <Classes>habilidade que cause dano não aflitivo<Classes> usada nesse aliado será <Defense>anulada<Defense>. O inimigo <Defense>anulado<Defense> terá suas habilidades <Classes>chakra e melee<Classes> <Effects>atordoadas<Effects> e irá <Improvements>receber dano dobrado<Improvements> de habilidades <Classes>mental<Classes> por 3 turnos. <Invisible>Essa habilidade é Invisível<Invisible>. <Effects>Termina<Effects> quando Kurenai <Effects>morre<Effects>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/t08cNjA.png",
        themepic: "https://i.imgur.com/Cg1rXmV.jpg",
      },
      {
        name: "Vanishing Illusion",
        themeName: "Vanishing Illusion",
        description:
          "This skill makes Yuhi Kurenai <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yuhi Kurenai <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/j22EpUB.png",
        themepic: "https://i.imgur.com/hHtrmkP.jpg",
      },
    ],
  },
  {
    name: "Sarutobi Asuma",
    url: "https://i.imgur.com/N4ZFINr.png",
    themepic: "https://i.imgur.com/6nePVlx.jpg",
    description:
      "Sarutobi Asuma is the leader of Team 10. He uses trench knives extended by his chakra to fight and protect his teammates.",
    descriptionBR:
      "Sarutobi Asuma é o líder do Time 10. Ele usa facas de trincheira ampliadas por seu chakra para lutar e proteger seus companheiros de equipe.",
    skills: [
      {
        name: "Flying Swallow",
        themeName: "Flying Swallow",
        description:
          "Using blades with wind chakra, Asuma and his allies gain 10 <Defense>points of damage reduction<Defense> and all enemies <Damage>take 10 damage<Damage> for 3 turns.",
        descriptionBR:
          "Usando lâminas com chakra de vento, Asuma e seus aliados ganham 10 <Defense>pontos de redução de dano<Defense>, e todos os inimigos irão <Damage>receber 10 de dano<Damage> por 3 turnos.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/Dnwx46P.png",
        themepic: "https://i.imgur.com/9bm6Eaj.jpg",
      },
      {
        name: "Finishing Blow",
        themeName: "Finishing Blow",
        description:
          "Asuma <Damage>deals 35 damage<Damage> to one enemy. During the second turn of <SkillName>'Flying Swallow'<SkillName>, this skill will <SkillName>stun<SkillName> <Classes>physical and ranged<Classes> skills for 1 turn. During the third turn of <SkillName>'Flying Swallow'<SkillName>, this skill will <Classes>deal 5 additional damage<Classes> and will <Effects>remove 1 taijutsu or bloodline chakra<Effects>.",
        descriptionBR:
          "Asuma <Damage>causa 35 de dano<Damage> a um inimigo. Durante o segundo turno de <SkillName>'Flying Swallow'<SkillName>, essa habilidade irá <SkillName>atordoar<SkillName> habilidades <Classes>physical e ranged<Classes> por 1 turno. Durante o terceiro turno de <SkillName>'Flying Swallow'<SkillName>, essa habilidade irá <Classes>causar 5 de dano adicional<Classes> e irá <Effects>remover 1 taijutsu ou bloodline chakra<Effects>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/gjMSfaG.png",
        themepic: "https://i.imgur.com/lLvGBNi.jpg",
      },
      {
        name: "Self Sacrifice",
        themeName: "Self Sacrifice",
        description:
          "Sarutobi Asuma protects one ally from harm. For 1 turn, that ally will become <Defense>invulnerable<Defense> to <Classes>harmful<Classes> skills.",
        descriptionBR:
          "Sarutobi Asuma protege um aliado do perigo. Por 1 turno, esse aliado se tornará <Defense>invulnerável<Defense> a habilidades <Classes>ofensivas<Classes>.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/iHE7E8U.png",
        themepic: "https://i.imgur.com/y5qZYuW.jpg",
      },
      {
        name: "Wind Chakra Blades Block",
        themeName: "Asuma Replacement Technique",
        description:
          "This skill makes Sarutobi Asuma <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sarutobi Asuma <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/vndck21.png",
        themepic: "https://i.imgur.com/TnhUmr0.jpg",
      },
    ],
  },
  {
    name: "Maito Gai",
    url: "https://i.imgur.com/mZzzuP2.png",
    themepic: "https://i.imgur.com/umjE4Ip.jpg",
    description:
      "Gai is the sensei of Lee, Tenten and Neji. He and Lee both use the same fighting style, Strong Fist, which involves high-speed attacks and the opening of inner chakra gates.",
    descriptionBR:
      "Gai é o sensei de Lee, Tenten e Neji. Ele e Lee usam o mesmo estilo de luta, o Punho Forte, que envolve ataques de alta velocidade e a abertura dos portões internos de chakra.",
    skills: [
      {
        name: "Strong Whirlwind",
        themeName: "Strong Whirlwind",
        description:
          "Gai kicks with a strong whirlwind, <Damage>dealing 30 piercing damage<Damage> to one enemy. During <SkillName>'Sixth Gate Opening'<SkillName>, this skill will be <Improvements>improved<Improvements> and will <Damage>deal 60 piercing damage<Damage> ignoring <Invisible>invulnerability<Invisible>.",
        descriptionBR:
          "Gai desfere um chute com um forte turbilhão, <Damage>causando 30 de dano perfurante<Damage> a um inimigo. Durante <SkillName>'Sixth Gate Opening'<SkillName>, essa habilidade será <Improvements>aprimorada<Improvements> e <Damage>causará 60 de dano perfurante<Damage> ignorando <Invisible>invulnerabilidade<Invisible>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/EEtspTO.png",
        themepic: "https://i.imgur.com/IdpGBlW.jpg",
      },
      {
        name: "Sixth Gate Opening",
        themeName: "Sixth Gate Opening",
        description:
          "Gai opens six chakra gates, <Damage>taking 40% affliction damage <Damage> of his current health and becoming invulnerable for 2 turns. The following 2 turns, <SkillName>'Strong Whirlwind'<SkillName> will be <Improvements>improved<Improvements> and will <Damage>deal 60 piercing damage<Damage> ignoring <Invisible>invulnerability<Invisible>.",
        descriptionBR:
          "Gai abre seis portões de chakra, <Damage>tomando 40% de dano aflitivo<Damage> da sua vida atual e se tornando invulnerável por 2 turnos. Pelos 2 turnos seguintes, <SkillName>'Strong Whirlwind'<SkillName> será <Improvements>aprimorada<Improvements> e causará <Damage>60 de dano perfurante<Damage> ignorando <Invisible>invulnerabilidade<Invisible>.",
        energy: ["Tai"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/2tVPi5d.png",
        themepic: "https://i.imgur.com/DobYZ7q.jpg",
      },
      {
        name: "Counter Punch",
        themeName: "Counter Punch",
        description:
          "Gai singles out one enemy to counter attack. If that enemy <Classes>uses a new harmful skill<Classes>, they will be <Defense>countered<Defense> and will <Damage>receive 30 damage<Damage>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Gai escolhe um inimigo para contra-atacar. Se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ele será <Defense>anulado<Defense> e <Damage>receberá 30 de dano<Damage>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/3rcsOKj.png",
        themepic: "https://i.imgur.com/h12OiKl.jpg",
      },
      {
        name: "Gai Dodge",
        themeName: "Gai Dodge",
        description:
          "This skill makes Maito Gai <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Maito Gai <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/3X5TEhi.png",
        themepic: "https://i.imgur.com/3X5TEhi.png",
      },
    ],
  },
  {
    name: "Namikaze Minato",
    url: "https://i.imgur.com/PSc47fS.png",
    themepic: "https://i.imgur.com/aSeVlSS.jpg",
    description:
      "Known as Konoha's Yellow Flash, Minato is the leader of Team Minato. His style of combat is unique and he is a highly analytical and caring person.",
    descriptionBR:
      "Conhecido como o Relâmpago Amarelo de Konoha, Minato é o líder do Time Minato. Seu estilo de combate é único e ele é uma pessoa altamente analítica e atenciosa.",
    skills: [
      {
        name: "Hiraishin no Jutsu",
        themeName: "Hiraishin no Jutsu",
        description:
          "Minato <Damage>deals 25 piercing damage<Damage> to one enemy and gains 75% <Defense>unpierceable damage reduction<Defense> for 1 turn. All enemies <Improvements>marked<Improvements> by <SkillName>'Hiraishin Marking'<SkillName> will <Damage>take 15 piercing damage<Damage>. All allies marked by <SkillName>'Hiraishin Marking'<SkillName>' will become <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Minato <Damage>causa 25 de dano perfurante<Damage> a um inimigo e recebe 75% <Defense>de redução de dano impenetrável<Defense> por 1 turno. Todos os inimigos <Improvements>marcados<Improvements> com <SkillName>'Hiraishin Marking'<SkillName> <Damage>receberão 15 de dano perfurante<Damage>. Todos os aliados marcados com <SkillName>'Hiraishin Marking'<SkillName> se tornarão <Defense>invulneráveis<Defense> por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/gWT6r09.png",
        themepic: "https://i.imgur.com/LV6hlem.jpg",
      },
      {
        name: "Hiraishin Marking",
        themeName: "Hiraishin Marking",
        description:
          "If used on an enemy, that enemy will be unable to become <Defense>invulnerable<Defense>. If used on an ally, that ally gains 5 <Defense>points of damage reduction<Defense>. This skill lasts 3 turns, <Classes>ignores invulnerability<Classes> and <Improvements>cannot be used<Improvements> on the same target the following turn.",
        descriptionBR:
          "Se usada em um inimigo, ele não poderá se tornar <Defense>invulnerável<Defense>. Se usada em um aliado, ele recebe 5 <Defense>pontos de redução de dano<Defense>. Esta habilidade dura 3 turnos, <Classes>ignora invulnerabilidade<Classes> e <Improvements>não pode ser usada<Improvements> no mesmo alvo no turno seguinte.",
        energy: [],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/xuWHZFo.png",
        themepic: "https://i.imgur.com/GaGw2Jk.jpg",
      },
      {
        name: "Hiraishin Kunai Scatter",
        themeName: "Hiraishin Kunai Scatter",
        description:
          "By scattering hiraishin kunais, Minato applies <SkillName>'Hiraishin Marking'<SkillName> on all enemies and all allies for 1 turn. Afterwards, Minato <Effects>gains 1 random chakra<Effects>. <Invisible>This skill is invisible<Invisible> and <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Espalhando kunais de hiraishin, Minato aplica <SkillName>'Hiraishin Markin'<SkillName> em todos os inimigos e aliados por 1 turno. Em seguida, Minato <Effects>ganha 1 chakra aleatório<Effects>. <Invisible>Esta habilidade é invisível<Invisible> e <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Control", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/BreOhEB.png",
        themepic: "https://i.imgur.com/2HVXWYO.jpg",
      },
      {
        name: "Seal Sensing",
        themeName: "Seal Sensing",
        description:
          "This skill makes Namikaze Minato <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Namikaze Minato <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GjTFYPH.png",
        themepic: "https://i.imgur.com/mSQnaFc.jpg",
      },
    ],
  },
  {
    name: "Uzumaki Kushina",
    url: "https://i.imgur.com/Bt4OJMT.jpg",
    themepic: "https://i.imgur.com/RFe6vxQ.png",
    description:
      "The mother of Uzumaki Naruto, wife to Minato and once the jinchuuriki to the nine-tailed fox. Kushina specializes in unique sealing and barrier techniques that can hinder and disable even the strongest of enemies.",
    descriptionBR:
      "Mãe de Uzumaki Naruto, esposa de Minato e antiga jinchuuriki da raposa de nove caudas. Kushina é especialista em técnicas únicas de selamento e barreiras que podem impedir e neutralizar até os inimigos mais poderosos.",
    skills: [
      {
        name: "Four Symbols Seal",
        themeName: "Four Symbols Seal",
        description:
          "Kushina attempts to seal an enemy away, <Effects>destroying<Effects> their <Defense>destructible defense<Defense>, <Damage>dealing 15 piercing damage<Damage> to them, <Effects>stunning<Effects> their skills for 1 turn, <Effects>removing 1 bloodline or genjutsu chakra<Effects> from them and <Effects>permanently lowering the non-affliction damage they deal by 5<Effects>.",
        descriptionBR:
          "Kushina tenta selar um inimigo, <Effects>destruindo<Effects> sua <Defense>defesa destrutível<Defense>, <Damage>causando 15 de dano perfurante<Damage>, <Effects>atordoando<Effects> suas habilidades por 1 turno, <Effects>removendo 1 Bloodline ou Genjutsu chakra<Effects> e <Effects>reduzindo permanentemente o dano não-aflitivo que ele causa em 5<Effects>.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/7MDXZv2.jpg",
        themepic: "https://i.imgur.com/7MDXZv2.jpg",
      },
      {
        name: "Life Link",
        themeName: "Life Link",
        description:
          "For 4 turns if either Kushina or one enemy <Classes>dies<Classes>, the other will <Classes>die<Classes> as well. The following 4 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Life Transfer'<SkillName>. This skill <Classes>ignores invulnerability<Classes> and cannot be <Classes>countered<Classes>, <Classes>reflected<Classes>, <Classes>ignored<Classes>, <Classes>removed<Classes> or <Classes>interact<Classes> with other skills.",
        descriptionBR:
          "Por 4 turnos, se Kushina ou um inimigo <Classes>morrer<Classes>, o outro também <Classes>morrerá<Classes>. Nos 4 turnos seguintes, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Life Transfer'<SkillName>. Esta habilidade <Classes>ignora invulnerabilidade<Classes> e não pode ser <Classes>anulada<Classes>, <Classes>refletida<Classes>, <Classes>ignorada<Classes>, <Classes>removida<Classes> ou <Classes>interagir<Classes> com outras habilidades.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/KeQwfcn.jpg",
        themepic: "https://i.imgur.com/KeQwfcn.jpg",
      },
      {
        name: "Adamantine Sealing Chains",
        themeName: "Adamantine Sealing Chains",
        description:
          "Kushina uses an immensely powerful seal, surrounding one enemy with chains, first <Effects>removing<Effects> all <Classes>helpful skills<Classes> on them and then <Effects>stunning<Effects> them and making them <Defense>invulnerable<Defense> to all further skills for 2 turns. <Classes>This skill ignores invulnerability<Classes> and cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
        descriptionBR:
          "Kushina usa um selo extremamente poderoso, cercando um inimigo com correntes. Primeiro <Effects>remove<Effects> todas as <Classes>habilidades benéficas<Classes> nele, depois o <Effects>atordoa<Effects> e o torna <Defense>invulnerável<Defense> a quaisquer outras habilidades por 2 turnos. <Classes>Esta habilidade ignora invulnerabilidade<Classes> e não pode ser <Classes>anulada<Classes> ou <Classes>refletida<Classes>.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/kVgbH4G.jpg",
        themepic: "https://i.imgur.com/kVgbH4G.jpg",
      },
      {
        name: "Adamantine Covering Chains",
        themeName: "Adamantine Covering Chains",
        description:
          "This skill makes Uzumaki Kushina <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uzumaki Kushina <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/O3yVOUO.jpg",
        themepic: "https://i.imgur.com/O3yVOUO.jpg",
      },
      {
        name: "Life Transfer",
        themeName: "Life Transfer",
        description:
          "Kushina <Defense>heals<Defense> an ally for 25 <Defense>points<Defense> and <Damage>deals 25 damage to herself.",
        descriptionBR:
          "Kushina <Defense>cura<Defense> um aliado em 25 <Defense>pontos<Defense> e <Damage>causa 25 de dano<Damage> a si mesma.",
        energy: ["Random"],
        classes: ["Mental", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/SnE3AWh.png",
        themepic: "https://i.imgur.com/SnE3AWh.png",
      },
    ],
  },
  {
    name: "Gekko Hayate",
    url: "https://i.imgur.com/CXtg9Cd.png",
    themepic: "https://i.imgur.com/B0cFWJv.jpg",
    description:
      "Gekko Hayate is a jounin and one of the instructors of the chuunin exams in Konoha. He is an intelligent Shinobi that distances himself from an enemy to use illusionary techniques.",
    descriptionBR:
      "Gekko Hayate é um jounin e um dos instrutores dos exames chuunin em Konoha. Ele é um shinobi inteligente que se distancia dos inimigos para usar técnicas ilusórias.",
    skills: [
      {
        name: "Eavesdrop",
        themeName: "Eavesdrop",
        description:
          "For 1 turn, the first <Classes>harmful non-mental skill<Classes> used on Hayate will be <Defense>countered<Defense>. <Invisible>This skill is invisible<Invisible> the first turn. Permanently, <SkillName>'Dance of the Crescent Moon'<SkillName> will <Improvements>deal 10 additional damage<Improvements> when this skill is used. This skill stacks.",
        descriptionBR:
          "Por 1 turno, a primeira <Classes>habilidade prejudicial não-mental<Classes> usada em Hayate será <Defense>anulada<Defense>. <Invisible>Esta habilidade é invisível<Invisible> no primeiro turno. Permanentemente, <SkillName>'Dance of the Crescent Moon'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> sempre que esta habilidade for usada. Esse efeito é acumulativo.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/hXtcI2H.png",
        themepic: "https://i.imgur.com/yx9hLH4.jpg",
      },
      {
        name: "Dance of the Crescent Moon",
        themeName: "Dance of the Crescent Moon",
        description:
          "Using both his sword and genjutsu, Hayate becomes <Defense>invulnerable<Defense> for 1 turn and <Damage>deals 30 damage<Damage> to one enemy. Afterwards, all the additional damage from <SkillName>'Eavesdrop'<SkillName> and <SkillName>'Crescent Moon Slash'<SkillName> will be <Effects>removed<Effects> and <Effects>converted<Effects> into permanent <Defense>damage reduction<Defense>, in percentage.",
        descriptionBR:
          "Usando sua espada junto com genjutsu, Hayate torna-se <Defense>invulnerável<Defense> por 1 turno e <Damage>causa 30 de dano<Damage> a um inimigo. Em seguida, todo o dano adicional acumulado por <SkillName>'Eavesdrop'<SkillName> e <SkillName>'Crescent Moon Slash'<SkillName> será <Effects>removido<Effects> e <Effects>convertido<Effects> em <Defense>redução de dano<Defense> permanente, em porcentagem.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/2HfMnfe.png",
        themepic: "https://i.imgur.com/KwaX4rN.jpg",
      },
      {
        name: "Crescent Moon Slash",
        themeName: "Crescent Moon Slash",
        description:
          "Hayate jumps on an enemy from above, <Damage>dealing 20 piercing damage<Damage> to them. Permanently, <SkillName>'Dance of the Crescent Moon'<SkillName> will <Improvements>deal 10 additional damage<Improvements> when this skill is used. This skill stacks.",
        descriptionBR:
          "Hayate salta sobre um inimigo por cima, <Damage>causando 20 de dano perfurante<Damage>. Permanentemente, <SkillName>'Dance of the Crescent Moon'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> sempre que esta habilidade for usada. Esse efeito é acumulativo.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/84XGL6v.png",
        themepic: "https://i.imgur.com/KnSABr2.jpg",
      },
      {
        name: "Determined Retreat",
        themeName: "Determined Retreat",
        description:
          "This skill makes Gekko Hayate <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Gekko Hayate <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/kaMmauE.png",
        themepic: "https://i.imgur.com/jMCTxnZ.jpg",
      },
    ],
  },
  {
    name: "Baki",
    url: "https://i.imgur.com/f0YWgRx.png",
    themepic: "https://i.imgur.com/7lonf62.jpg",
    description:
      "Baki is the Jounin team leader of Gaara, Temari, and Kankuro. A mysterious and perhaps devious but loyal man, he specializes in wind element jutsu.",
    descriptionBR:
      "Baki é o líder Jounin da equipe de Gaara, Temari e Kankuro. Um homem misterioso e talvez ardiloso, mas leal, ele é especialista em jutsus do elemento vento.",
    skills: [
      {
        name: "Wind Blade",
        themeName: "Wind Blade",
        description:
          "Baki conjures a maelstrom of blade-like wind and <Damage>does 40 piercing damage<Damage> to one enemy.",
        descriptionBR:
          "Baki conjura um redemoinho de vento cortante e <Damage>causa 40 de dano perfurante<Damage> a um inimigo.",
        energy: ["Gen", "Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/eBHHYKn.png",
        themepic: "https://i.imgur.com/Y1F9cs2.jpg",
      },
      {
        name: "Sudden Strike",
        themeName: "Sudden Strike",
        description:
          "A simple, blindingly fast attack leaving an illusionary trail to throw off enemies. Baki <Damage>does 20 piercing damage<Damage> to one enemy.",
        descriptionBR:
          "Um ataque simples e incrivelmente rápido, deixando um rastro ilusório para confundir os inimigos. Baki <Damage>causa 20 de dano perfurante<Damage> a um inimigo.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/TvDIanB.png",
        themepic: "https://i.imgur.com/NFX8yai.jpg",
      },
      {
        name: "Flak Jacket",
        themeName: "Flak Jacket",
        description:
          "Baki puts on a specialized flak jacket from the sand village on himself, or one ally granting that character 50 <Defense>destructible defense<Defense> for 4 turns. During this time, that character will <Defense>ignore all harmful effects except damage<Defense> until this <Effects>defense is destroyed<Effects>.",
        descriptionBR:
          "Baki veste um colete especial da vila da areia em si mesmo ou em um aliado, concedendo 50 <Defense>de defesa destrutível<Defense> por 4 turnos. Durante esse tempo, o personagem irá <Defense>ignorar todos os efeitos nocivos, exceto dano<Defense>, até que essa <Effects>defesa seja destruída<Effects>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/kaJlaHV.png",
        themepic: "https://i.imgur.com/KJfQeYW.jpg",
      },
      {
        name: "Baki Teleportation",
        themeName: "Baki Teleportation",
        description:
          "This skill makes Baki <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Baki <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZBwSMFi.png",
        themepic: "https://i.imgur.com/a4JxIDQ.jpeg",
      },
    ],
  },
  {
    name: "Orochimaru",
    url: "https://i.imgur.com/SujZWa4.png",
    themepic: "https://i.imgur.com/xPSPd5X.jpg",
    description:
      "Orochimaru is one of the Legendary Sannin. He can increase his teams chakra for a price and summon powerful snakes to beat his enemies.",
    descriptionBR:
      "Orochimaru é um dos Lendários Sannin. Ele pode aumentar o chakra de sua equipe a um custo e invocar cobras poderosas para derrotar seus inimigos.",
    skills: [
      {
        name: "Kusanagi",
        themeName: "Kusanagi",
        description:
          "Orochimaru pulls the legendary sword Kusanagi and stabs one enemy, <Damage>dealing 30 damage<Damage> to them and <Effects>removing 1 bloodline or genjutsu chakra<Effects> from that enemy.",
        descriptionBR:
          "Orochimaru saca a lendária espada Kusanagi e perfura um inimigo, <Damage>causando 30 de dano<Damage> e <Effects>removendo 1 chakra do tipo Bloodline ou Genjutsu<Effects> daquele inimigo.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/n1J8CAt.png",
        themepic: "https://i.imgur.com/di8touu.jpg",
      },
      {
        name: "Cursed Seal Technique",
        themeName: "Cursed Seal Technique",
        description:
          "Orochimaru places a cursed seal on an ally or an enemy, <Damage>dealing 15 affliction damage<Damage> to them and <Effects>granting them 1 random chakra<Effects>.",
        descriptionBR:
          "Orochimaru aplica um selo amaldiçoado em um aliado ou inimigo, <Damage>causando 15 de dano aflitivo<Damage> e <Effects>concedendo 1 chakra aleatório<Effects> ao alvo.",
        energy: [],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/2AkEZmm.png",
        themepic: "https://i.imgur.com/DA5fqER.jpg",
      },
      {
        name: "Major Summoning: Manda",
        themeName: "Major Summoning: Manda",
        description:
          "By summoning Manda in the battlefield, Orochimaru <Damage>deals 45 damage<Damage> to one enemy and that enemy will <Effects>lose 1 bloodline, ninjutsu<Effects> and <Effects>genjutsu<Effects> from their <Effects>pool<Effects>.",
        descriptionBR:
          "Ao invocar Manda no campo de batalha, Orochimaru <Damage>causa 45 de dano<Damage> a um inimigo e este <Effects>perderá 1 chakra Bloodline, Ninjutsu<Effects> e <Effects>Genjutsu<Effects> de sua <Effects>reserva<Effects>.",
        energy: ["Tai", "Blood", "Nin"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/fsxSCxd.png",
        themepic: "https://i.imgur.com/zdwXImF.jpg",
      },
      {
        name: "Earth Clone Technique",
        themeName: "Earth Clone Technique",
        description:
          "This skill makes Orochimaru <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Orochimaru <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/cbN5L9k.png",
        themepic: "https://i.imgur.com/2AfNJqR.jpg",
      },
    ],
  },
  {
    name: "Jiraiya",
    url: "https://i.imgur.com/tZpyvBQ.png",
    themepic: "https://i.imgur.com/6WQko9A.jpg",
    description:
      "Jiraiya is one of the Legendary Sannin. With his various frog-based jutsus he is able to both hinder and damage all of his opponents.",
    descriptionBR:
      "Jiraiya é um dos Lendários Sannin. Com seus diversos jutsus baseados em sapos, ele é capaz de enfraquecer e causar dano a todos os seus oponentes.",
    skills: [
      {
        name: "Toad Mouth Bind",
        themeName: "Toad Mouth Bind",
        description:
          "By placing every character into a giant toad mouth, Jiraiya grants his team 20% <Defense>damage reduction<Defense> for 2 turns. During this time, all enemies will receive 25% <Improvements>more damage<Improvements>.",
        descriptionBR:
          "Colocando todos os personagens dentro da boca de um sapo gigante, Jiraiya concede 20% de <Defense>redução de dano<Defense> à sua equipe por 2 turnos. Durante esse tempo, todos os inimigos receberão 25% <Improvements>mais dano<Improvements>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 3,
        url: "https://i.imgur.com/3JTvPnM.png",
        themepic: "https://i.imgur.com/kHfyO6w.jpg",
      },
      {
        name: "Major Summoning: Gamabunta",
        themeName: "Major Summoning: Gamabunta",
        description:
          "Jiraiya summons Gamabunta in the battlefield, <Damage>dealing 35 damage<Damage> to all enemies. If targetable, Jiraiya will become <Defense>invulnerable<Defense> for 1 turn and will <Effects>gain 1 random chakra<Effects>. This skill cannot be <Classes>countered<Classes>.",
        descriptionBR:
          "Jiraiya invoca Gamabunta no campo de batalha, <Damage>causando 35 de dano<Damage> a todos os inimigos. Se possível, Jiraiya se tornará <Defense>invulnerável<Defense> por 1 turno e <Effects>ganhará 1 chakra aleatório<Effects>. Esta habilidade não pode ser <Classes>anulada<Classes>.",
        energy: ["Tai", "Blood", "Gen"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/Jjt22lv.png",
        themepic: "https://i.imgur.com/PaFGnjM.jpg",
      },
      {
        name: "Great Fireball Technique",
        themeName: "Great Fireball Technique",
        description:
          "Jiraiya spits a giant fireball at all enemies, <Damage>dealing 20 affliction damage<Damage> to one enemy and 10 <Damage>affliction damage<Damage> to all other enemies.",
        descriptionBR:
          "Jiraiya cospe uma grande bola de fogo em todos os inimigos, <Damage>causando 20 de dano aflitivo<Damage> a um inimigo e 10 de <Damage>dano aflitivo<Damage> a todos os outros.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/NNHCL9Z.png",
        themepic: "https://i.imgur.com/E25lVNj.jpg",
      },
      {
        name: "Spiked Buddha",
        themeName: "Spiked Buddha",
        description:
          "This skill makes Jiraiya <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Jiraiya <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/imwdLV0.png",
        themepic: "https://i.imgur.com/OyNzJAe.jpg",
      },
    ],
  },
  {
    name: "Tsunade",
    url: "https://i.imgur.com/LGztynU.png",
    themepic: "https://i.imgur.com/69K6a5e.jpg",
    description:
      "Tsunade is the Godaime Hokage and a Legendary Sannin. Her skill with medical ninjutsu allows her to do significant damage and heal herself and teammates.",
    descriptionBR:
      "Tsunade é a Godaime Hokage e uma das Lendárias Sannin. Sua habilidade com ninjutsu médico permite causar dano significativo e curar a si mesma e seus aliados.",
    skills: [
      {
        name: "Major Summoning: Katsuyu",
        themeName: "Major Summoning: Katsuyu",
        description:
          "Tsunade sunmons the slug queen Katsuyu, granting her team 50% <Defense>damage reduction<Defense> for 2 turns and <Defense>healing<Defense> them <Defense>20 health<Defense> instantly. Katsuyu also spits acid in all enemies <Damage>dealing 20 affliction damage<Damage> to them.",
        descriptionBR:
          "Tsunade invoca a rainha das lesmas, Katsuyu, concedendo à sua equipe 50% de <Defense>redução de dano<Defense> por 2 turnos e <Defense>curando<Defense> <Defense>20 de vida<Defense> instantaneamente. Katsuyu também cospe ácido em todos os inimigos, <Damage>causando 20 de dano aflitivo<Damage>.",
        energy: ["Blood", "Nin", "Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Aflitivo"],
        cooldown: 6,
        url: "https://i.imgur.com/EgdhY9k.png",
        themepic: "https://i.imgur.com/3gwzdiz.jpg",
      },
      {
        name: "Painful Sky Leg",
        themeName: "Painful Sky Leg",
        description:
          "Tsunade performs a drop kick with her insane strength, dealing 30 piercing damage to one enemy and stunning their physical and mental skills for 1 turn.",
        descriptionBR:
          "Tsunade aplica um chute descendente com sua força insana, causando 30 de dano perfurante a um inimigo e atordoando suas habilidades físicas e mentais por 1 turno.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/w5xkFjJ.png",
        themepic: "https://i.imgur.com/ALJC0ka.jpg",
      },
      {
        name: "Creation Rebirth",
        themeName: "Creation Rebirth",
        description:
          "Using stored chakra Tsunade regenerates herself, healing 35 health instantly.",
        descriptionBR:
          "Usando chakra armazenado, Tsunade regenera a si mesma, curando 35 de vida instantaneamente.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/MVBNqnb.png",
        themepic: "https://i.imgur.com/I2YrQlR.jpg",
      },
      {
        name: "Tsunade Replacement Technique",
        themeName: "Tsunade Replacement Technique",
        description:
          "This skill makes Tsunade <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsunade <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
        themepic: "https://i.imgur.com/9tlWw7k.jpg",
      },
    ],
  },
  {
    name: "Sandaime Hokage",
    url: "https://i.imgur.com/OUgT0V5.jpg",
    themepic: "https://i.imgur.com/aBAcI2c.jpg",
    description:
      "Sandaime Hokage, known as the God of Shinobi, was the strongest Kage to ever live. He is able to concentrate on one opponent while his summon, Enma, confronts others. When all else fails he can summon the death god.",
    descriptionBR:
      "Sandaime Hokage, conhecido como o Deus Shinobi, foi o Kage mais poderoso que já existiu. Ele é capaz de se concentrar em um inimigo enquanto sua invocação, Enma, enfrenta os outros. Quando tudo falha, ele pode invocar o deus da morte.",
    skills: [
      {
        name: "Fire Dragon Flame Missile",
        themeName: "Fire Dragon Flame Missile",
        description:
          "Sandaime Hokage <Damage>deals 25 damage<Damage> to one enemy. This enemy also <Damage>takes 15 affliction damage<Damage> the following turn.*",
        descriptionBR:
          "Sandaime Hokage <Damage>causa 25 de dano<Damage> a um inimigo. Esse inimigo também <Damage>receberá 15 de dano aflitivo<Damage> no turno seguinte.*",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/2DC5GaI.png",
        themepic: "https://i.imgur.com/D4B3DDU.jpg",
      },
      {
        name: "Major Summoning Enma",
        themeName: "Major Summoning Enma",
        description:
          "By summoning Enma, Sandaime and all allies gain 25% <Defense>damage reduction<Defense> and <Defense>cannot be killed<Defense> by enemies for 2 turns*. If targetable, Sandaime will <Damage>do 15 damage<Damage> to all enemies for 2 turns.",
        descriptionBR:
          "Ao invocar Enma, Sandaime e todos os aliados ganham 25% de <Defense>redução de dano<Defense> e <Defense>não podem ser mortos<Defense> por inimigos por 2 turnos*. Se possível, Sandaime também <Damage>causará 15 de dano<Damage> a todos os inimigos por 2 turnos.",
        energy: ["Tai", "Nin", "Gen"],
        classes: ["Physical", "Ranged", "Action", "*Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/pBFI2qO.png",
        themepic: "https://i.imgur.com/gLRc0yl.jpg",
      },
      {
        name: "Shiki Fuujin",
        themeName: "Shiki Fuujin",
        description:
          "The death god sucks the life out of one enemy who <Damage>takes 35 affliction damage<Damage>, is <Effects>stunned and cannot <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense> every turn.* Sandaime himself <Damage>takes 20 affliction damage<Damage> and is <Damage>stunned<Damage> every turn. This skill cannot be <Invisible>removed<Invisible> or <Invisible>ignored<Invisible>, may only target one enemy and is <Effects>cancelled<Effects> when Sandaime <Effects>dies<Effects>.",
        descriptionBR:
          "O deus da morte suga a vida de um inimigo, que <Damage>recebe 35 de dano aflitivo<Damage>, é <Effects>atordoado<Effects> e não pode <Defense>reduzir dano<Defense> ou se tornar <Defense>invulnerável<Defense> a cada turno.* Sandaime também <Damage>recebe 20 de dano aflitivo<Damage> e é <Damage>atordoado<Damage> a cada turno. Esta habilidade não pode ser <Invisible>removida<Invisible> ou <Invisible>ignorada<Invisible>, só pode atingir um inimigo e é <Effects>cancelada<Effects> quando Sandaime <Effects>morre<Effects>.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Affliction", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Sh5V2xt.png",
        themepic: "https://i.imgur.com/4U6oi4t.jpg",
      },
      {
        name: "Earth Release Wall",
        themeName: "Earth Release Wall",
        description:
          "This skill makes Sandaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sandaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FCO9qTm.png",
        themepic: "https://i.imgur.com/8XAazKY.jpg",
      },
    ],
  },
  {
    name: "Shodai Hokage",
    url: "https://i.imgur.com/4Qt9UaS.png",
    themepic: "https://i.imgur.com/n53EGmq.jpg",
    description:
      "The First Hokage and the founder of the Hidden Village of Konoha, Shodai Hokage has the ability to create and manipulate trees. This ability to give life shows the extent of his power.",
    descriptionBR:
      "O Primeiro Hokage e fundador da Vila Oculta de Konoha, Shodai Hokage tem a habilidade de criar e manipular árvores. Essa capacidade de dar vida mostra o quão poderoso ele é.",
    skills: [
      {
        name: "Birth of the Trees",
        themeName: "Birth of the Trees",
        description:
          "Hashirama summons a giant field of trees. For 3 turns, any enemy that <Classes>uses a new harmful skill<Classes> will have the <Effects>cost of their harmful skills<Effects> <Effects>increased<Effects> by <Effects>1 random chakra<Effects> and <Effects>their cooldowns increased by 1<Effects> for 1 turn. The following 3 turns, if Hashirama <Effects>uses a new skill<Effects> his team will gain 5 <Defense>destructible defense<Defense>.",
        descriptionBR:
          "Hashirama invoca um enorme campo de árvores. Por 3 turnos, qualquer inimigo que <Classes>usar uma nova habilidade ofensiva<Classes> terá o <Effects>custo de suas habilidades ofensivas aumentado<Effects> em <Effects>1 chakra aleatório<Effects> e suas <Effects>recargas aumentadas em 1<Effects> por 1 turno. Nos 3 turnos seguintes, se Hashirama <Effects>usar uma nova habilidade<Effects>, sua equipe ganhará 5 <Defense>pontos de defesa destrutível<Defense>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/ztMMKn0.png",
        themepic: "https://i.imgur.com/g3VFlu5.jpg",
      },
      {
        name: "Tree Strangulation",
        themeName: "Tree Strangulation",
        description:
          "Hashirama catches and crushes one enemy in giant tree branches, <Damage>dealing 25 piercing damage<Damage> to that enemy and <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn. During <SkillName>'Birth of the Trees'<SkillName>, this skill <Improvements>will cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Hashirama captura e esmaga um inimigo com galhos gigantes, <Damage>causando 25 de dano perfurante<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>Physical e Chakra<Classes> por 1 turno. Durante <SkillName>'Birth of the Trees'<SkillName>, essa skill custará 1 chakra aleatório a menos<Improvements>.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/3ghIvfW.png",
        themepic: "https://i.imgur.com/FUbSre4.jpg",
      },
      {
        name: "Branch Manipulation",
        themeName: "Branch Manipulation",
        description:
          "Hashirama sends out his trees in all directions, <Damage>dealing 10 affliction damage<Damage> to all enemies and granting 25% <Defense>damage reduction<Defense> to himself and his allies. During <SkillName>'Birth of the Trees'<SkillName>, this skill will <Improvements>have no cooldown<Improvements>.",
        descriptionBR:
          "Hashirama envia suas árvores em todas as direções, <Damage>causando 10 de dano aflitivo<Damage> a todos os inimigos e concedendo 25% de <Defense>redução de dano<Defense> para si mesmo e aliados. Durante <SkillName>'Birth of the Trees'<SkillName>, essa habilidade <Improvements>não terá cooldown<Improvements>.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/2ZW1vwA.png",
        themepic: "https://i.imgur.com/uaUDetQ.jpg",
      },
      {
        name: "Deflection",
        themeName: "Deflection",
        description:
          "This skill makes Shodai Hokage invulnerable for 1 turn. This skill will <Defense>not<Defense> grant <Defense>destructible defense<Defense> during <SkillName>'Birth of the Trees'<SkillName>.",
        descriptionBR:
          "Essa skill torna Shodai Hokage <Defense>invulnerável<Defense> por 1 turno. Essa habilidade <Defense>não<Defense> concede <Defense>defesa destrutível<Defense> durante <SkillName>'Birth of the Trees'<SkillName>.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/RyqXqfk.png",
        themepic: "https://i.imgur.com/Dov8aW0.jpg",
      },
    ],
  },
  {
    name: "Nidaime Hokage",
    url: "https://i.imgur.com/GyEmocs.png",
    themepic: "https://i.imgur.com/bQ6ZtQc.jpg",
    description:
      "Nidaime is the second Hokage and the grand uncle of Tsunade. He is very skilled with water jutsu, requiring no water source to perform them.",
    descriptionBR:
      "Nidaime é o Segundo Hokage e tio-avô de Tsunade. Ele é muito habilidoso com jutsus de água, não necessitando de fonte de água para executá-los.",
    skills: [
      {
        name: "Bringer of Darkness",
        themeName: "Bringer of Darkness",
        description:
          "Tobirama plunges the battlefield into total darkness. For 1 turn, Tobirama and his allies will become <Defense>invulnerable<Defense> to <Classes>physical and mental skills<Classes>.",
        descriptionBR:
          "Tobirama mergulha o campo de batalha em completa escuridão. Por 1 turno, Tobirama e seus aliados ficam <Defense>invulneráveis<Defense> a habilidades <Classes>Physical e Mental<Classes>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/9aqZPND.png",
        themepic: "https://i.imgur.com/WyWfAe8.jpg",
      },
      {
        name: "Water Collision Destruction",
        themeName: "Water Collision Destruction",
        description:
          "Summoning a giant wave of water, Tobirama <Damage>deals 10 damage<Damage> to all enemies for 3 turns. Each turn, all enemies will have all their skills <Classes>subclassed<Classes> as <Classes>Affliction<Classes> <Effects>stunned<Effects>. The following 3 turns, <SkillName>'Water Assault'<SkillName> will <Improvements>deal 10 additional damage<Improvements>.",
        descriptionBR:
          "Invocando uma enorme onda de água, Tobirama <Damage>causa 10 de dano<Damage> a todos os inimigos por 3 turnos. A cada turno, todos os inimigos terão todas as suas skills <Classes>subclassificadas<Classes> como <Classes>aflitivas<Classes> <Effects>atordoadas<Effects>. Nos 3 turnos seguintes, <SkillName>'Water Assault'<SkillName> <Improvements>causará 10 de dano adicional<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Action", "Ranged", "stun"],
        cooldown: 3,
        url: "https://i.imgur.com/qfJm4UQ.png",
        themepic: "https://i.imgur.com/l4s3RjO.jpg",
      },
      {
        name: "Water Assault",
        themeName: "Water Assault",
        description:
          "Nidaime encases one enemy in water, <Damage>dealing 20 damage<Damage> to them and making them <Defense>ignore<Defense> all <Classes>helpful effects<Classes> for 1 turn.",
        descriptionBR:
          "Nidaime envolve um inimigo em água, <Damage>causando 20 de dano<Damage> e fazendo-o <Defense>ignorar<Defense> todos os <Classes>efeitos benéficos<Classes> por 1 turno.",
        energy: ["Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/TzDpZzQ.png",
        themepic: "https://i.imgur.com/2vgnWxO.jpg",
      },
      {
        name: "Water Encampment Wall",
        themeName: "Water Encampment Wall",
        description:
          "This skill makes Nidaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nidaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/bUxeevY.png",
        themepic: "https://i.imgur.com/UnCrQYo.jpg",
      },
    ],
  },
  {
    name: "Yondaime Hokage",
    url: "https://i.imgur.com/JD6Ftin.png",
    themepic: "https://i.imgur.com/7krFLsD.jpg",
    description:
      "The fourth Hokage was known as the yellow flash, regarded by all as the fastest shinobi to ever live. He is also the father of Uzumaki Naruto and the one who sealed the Kyuubi in his son.",
    descriptionBR:
      "O Quarto Hokage era conhecido como o Flash Amarelo, considerado por todos o shinobi mais rápido que já existiu. Ele também é o pai de Uzumaki Naruto e quem selou o Kyuubi em seu filho.",
    skills: [
      {
        name: "Hiraishin Rasengan",
        themeName: "Hiraishin Rasengan",
        description:
          "Yondaime Hokage <Damage>deals 40 damage<Damage> to one enemy <Classes>ignoring invulnerability<Classes> that cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>. The following turn, this skill will <Improvements>cost 1 ninjutsu chakra<Improvements> and will <Improvements>deal 35 damage instead<Improvements>.",
        descriptionBR:
          "Yondaime Hokage <Damage>causa 40 de dano<Damage> em um inimigo, <Classes>ignorando invulnerabilidade<Classes>, que não pode ser <Classes>anulado<Classes> nem <Classes>refletido<Classes>. No turno seguinte, essa habilidade <Improvements>custará 1 chakra ninjutsu<Improvements> e <Improvements>causará 35 de dano<Improvements>.",
        energy: ["Nin", "Gen"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/bcnhcBn.png",
        themepic: "https://i.imgur.com/MwAnQcC.jpg",
      },
      {
        name: "Space Time Barrier",
        themeName: "Space Time Barrier",
        description:
          "Using his space-time abilities, Yondaime Hokage targets one ally or himself. For 1 turn, all <Classes>new non-mental skills<Classes> used on that ally will be <Defense>reflected<Defense> onto the enemy. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Usando suas habilidades espaço-temporais, Yondaime Hokage mira em um aliado ou em si mesmo. Por 1 turno, todas as <Classes>novas habilidades não mentais<Classes> usadas nesse aliado serão <Defense>refletidas<Defense> no inimigo. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/NPtZUyI.png",
        themepic: "https://i.imgur.com/tUbpF0r.jpg",
      },
      {
        name: "Dead Demon Consuming Seal",
        themeName: "Dead Demon Consuming Seal",
        description:
          "Using a partial seal, Yondaime seals part of one enemy away. That enemy will <Damage>lose 30% of their health<Damage> and have their <Classes>physical and ranged<Classes> skills <Effects>stunned<Effects> for 1 turn. If that enemy's health <Effects>falls to 10 or lower<Effects> that enemy will be <Effects>killed<Effects>. Yondaime Hokage will take <Damage>10 affliction damage<Damage>*.",
        descriptionBR:
          "Usando um selo parcial, Yondaime sela parte de um inimigo. Esse inimigo <Damage>perderá 30% da sua vida<Damage> e terá suas habilidades <Classes>Physical e Ranged<Classes> <Effects>atordoadas<Effects> por 1 turno. Se a vida desse inimigo <Effects>cair para 10 ou menos<Effects>, ele será <Effects>morto<Effects>. Yondaime Hokage sofrerá <Damage>10 de dano aflitivo<Damage>*.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NbuLkmG.png",
        themepic: "https://i.imgur.com/WjcBLVE.jpg",
      },
      {
        name: "Kunai Defense",
        themeName: "Kunai Defense",
        description:
          "This skill makes Yondaime Hokage <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yondaime Hokage <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/SUru7Y9.png",
        themepic: "https://i.imgur.com/kUSFNBh.jpg",
      },
    ],
  },
  {
    name: "Gaara Rehabilitated",
    url: "https://i.imgur.com/tV82AF4.png",
    themepic: "https://i.imgur.com/ovRWNtR.jpg",
    description:
      "After his fateful encounter with Naruto, Gaara has left behind his murderous ways. He has become even more skilled with using sand since Naruto last saw him too.",
    descriptionBR:
      "Após seu encontro decisivo com Naruto, Gaara abandonou seus caminhos assassinos. Ele também se tornou ainda mais habilidoso no uso da areia desde a última vez que Naruto o viu.",
    skills: [
      {
        name: "Sand Mastery",
        themeName: "Sand Mastery",
        description:
          "Using sand to both defend and attack, Gaara gains 5 permanent <Defense>destructible defense<Defense>. Permanently, Gaara's skills will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Usando a areia tanto para se defender quanto para atacar, Gaara ganha 5 de <Defense>defesa destrutível<Defense> permanente. Permanentemente, as habilidades de Gaara <Improvements>custarão 1 chakra aleatório a menos<Improvements>.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/wcE2zcH.png",
        themepic: "https://i.imgur.com/GYW82Cn.jpg",
      },
      {
        name: "Desert Imperial Funeral",
        themeName: "Desert Imperial Funeral",
        description:
          "Gaara <Damage>deals 25 piercing damage<Damage> to one enemy. For 1 turn, that enemy will be unable to <Damage>reduce damage<Damage> or become <Damage>invulnerable<Damage> and their skills will <Effects>cost 1 additional random chakra<Effects>. If that enemy is affected by <SkillName>'Quicksand Waterfall'<SkillName>, their skills will <Effects>cost 2 additional random chakra<Effects> instead.",
        descriptionBR:
          "Gaara <Damage>causa 25 de dano perfurante<Damage> a um inimigo. Por 1 turno, esse inimigo não poderá <Damage>reduzir dano<Damage> ou se tornar <Damage>invulnerável<Damage>, e suas habilidades <Effects>custarão 1 chakra aleatório adicional<Effects>. Se esse inimigo estiver afetado por <SkillName>'Quicksand Waterfall'<SkillName>, o <Effects>custo aumentará em 2 chakras aleatórios<Effects>.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/KX5LPwj.png",
        themepic: "https://i.imgur.com/7JmMqS7.jpg",
      },
      {
        name: "Quicksand Waterfall",
        themeName: "Quicksand Waterfall",
        description:
          "Gaara creates massive waves of sand. For 4 turns, Gaara and his allies gain 10 <Defense>destructible defense<Defense> and all enemies <Damage>take 10 damage<Damage>*. During this time, if Gaara or an ally <Classes>receives new non-affliction damage<Classes>, they will gain 5 <Defense>destructible defense<Defense> the following turn.",
        descriptionBR:
          "Gaara cria enormes ondas de areia. Por 4 turnos, Gaara e seus aliados ganham 10 de <Defense>defesa destrutível<Defense> e todos os inimigos <Damage>recebem 10 de dano<Damage>*. Durante esse tempo, se Gaara ou um aliado <Classes>receber dano novo não aflitivo<Classes>, ganhará 5 de <Defense>defesa destrutível<Defense> no turno seguinte.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique", "Action*"],
        cooldown: 4,
        url: "https://i.imgur.com/LsFUhWE.png",
        themepic: "https://i.imgur.com/J7SfcDf.jpg",
      },
      {
        name: "Shield of Shukaku",
        themeName: "Shield of Shukaku",
        description:
          "Gaara uses the ultimately hard absolute defense, creating a protective shield in front of his team and granting them 20 <Defense>points of destructible defense<Defense> for 3 turns.",
        descriptionBR:
          "Gaara usa a defesa absoluta mais resistente, criando um escudo protetor à frente de sua equipe, concedendo 20 <Defense>pontos de defesa destrutível<Defense> por 3 turnos.",
        energy: ["Random", "Random", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/QVMa2Mh.png",
        themepic: "https://i.imgur.com/6bxmI4V.jpg",
      },
    ],
  },
  {
    name: "Drunken Lee",
    url: "https://i.imgur.com/QYXQyIZ.png",
    themepic: "https://i.imgur.com/QYXQyIZ.png",
    description:
      "Rock Lee has accidentally drunk too much Alcohol and has awakened his natural Drunken Fist Technique which has given him amazing speed and unpredictability.",
    descriptionBR:
      "Rock Lee bebeu álcool acidentalmente em excesso e despertou sua técnica natural do Punho Bêbado, que lhe concedeu velocidade incrível e imprevisibilidade.",
    skills: [
      {
        name: "Unpredictable Assault",
        themeName: "Unpredictable Assault",
        description:
          "Using his drunken master abilities, Lee <Damage>deals 20 damage<Damage> to one enemy that <Classes>cannot be countered<Classes>. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes>, Lee will instantly <Defense>heal<Defense> 10 <Defense>health<Defense>. Permanently, Lee will <Improvements>deal 5 additional damage.<Improvements> This effect stacks.",
        descriptionBR:
          "Usando suas habilidades de mestre bêbado, Lee <Damage>causa 20 de dano a um inimigo<Damage> que <Classes>não pode ser anulado<Classes>. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, Lee <Defense>curará<Defense> instantaneamente 10 <Defense>de vida<Defense>. Permanentemente, Lee <Improvements>causará 5 de dano adicional<Improvements>. Este efeito acumula.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/cMMgVUq.png",
        themepic: "https://i.imgur.com/cMMgVUq.png",
      },
      {
        name: "Drunken Fist",
        themeName: "Drunken Fist",
        description:
          "Lee charges at an enemy and hits them with a knockout blow, <Damage>dealing 30 damage<Damage> to that enemy, and for 1 turn, their skills will <Effects>deal 100% less damage<Effects>.",
        descriptionBR:
          "Lee avança contra um inimigo e o acerta com um golpe nocauteante, <Damage>causando 30 de dano<Damage>. Por 1 turno, as habilidades desse inimigo <Effects>causarão 100% a menos de dano<Effects>.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/qQsZR3t.png",
        themepic: "https://i.imgur.com/8wvF8ps.jpeg",
      },
      {
        name: "Drunken Counter",
        themeName: "Drunken Counter",
        description:
          "Lee targets himself or an ally. For 1 turn, the <Classes>first harmful physical or melee skill<Classes> used on that ally will be <Defense>countered<Defense>. If successfully, the <Defense>countered<Defense> enemy will have <SkillName>'Unpredictable Assault'<SkillName> used on them. This skill is invisible.",
        descriptionBR:
          "Lee mira em si mesmo ou em um aliado. Por 1 turno, a <Classes>primeira habilidade Physical ou Melee ofensiva<Classes> usada nesse aliado será <Defense>anulada<Defense>. Se for bem-sucedido, o inimigo que foi <Defense>anulado<Defense> receberá <SkillName>'Unpredictable Assault'<SkillName>. Essa habilidade é invisível.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "$__", "$__2"],
        cooldown: 2,
        url: "https://i.imgur.com/56rirZI.png",
        themepic: "https://i.imgur.com/ZGfojET.png",
      },
      {
        name: "Drunken Leap",
        themeName: "Drunken Leap",
        description:
          "This skill makes Drunken Lee <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Drunken Lee <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/WWza0iI.png",
        themepic: "https://i.imgur.com/M9nrHe5.jpeg",
      },
    ],
  },
  {
    name: "Cursed Seal Mizuki",
    url: "https://i.imgur.com/V6AYlxZ.png",
    themepic: "https://i.imgur.com/IIuRhSp.png",
    description:
      "Touji Mizuki is now a missing nin that has been corrupted by his own dark ambitions and the will of Orochimaru.",
    descriptionBR:
      "Touji Mizuki agora é um ninja renegado que foi corrompido por suas próprias ambições sombrias e pela vontade de Orochimaru.",
    skills: [
      {
        name: "Curse Seal: Tiger",
        themeName: "Curse Seal: Tiger",
        description:
          "By drinking a curse seal potion, Mizuki transforms into a wild tiger. The following 3 turns, Mizuki will gain 35 <Defense>points of destructible defense<Defense> and during this time, <SkillName>'Curse Seal: Tiger Punch'<SkillName> will be <Improvements>>improved<<Improvements> and <SkillName>'Puppets Genjutsu'<SkillName> will be <Improvements>replaced<Improvements> by its <Improvements>alternate version<Improvements>.",
        descriptionBR:
          "Ao beber uma poção do selo amaldiçoado, Mizuki se transforma em um tigre selvagem. Nos próximos 3 turnos, Mizuki ganhará 35 <Defense>pontos de defesa destrutível<Defense> e durante esse tempo, <SkillName>'Curse Seal: Tiger Punch'<SkillName> será <Improvements>>melhorada<<Improvements> e <SkillName>'Puppets Genjutsu'<SkillName> será <Improvements>substituída<Improvements> por sua versão <Improvements>alternativa<Improvements>.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/wZY8Gg2.jpg",
        themepic: "https://i.imgur.com/wZY8Gg2.jpg",
      },
      {
        name: "Curse Seal: Tiger Punch",
        themeName: "Curse Seal: Tiger Punch",
        description:
          "Mizuki fiercely punches one enemy, <Damage>dealing 30 damage<Damage> to them. For 2 turns, that enemy's skills will <Effects>deal 10 less damage<Effects>. During <SkillName>'Curse Seal: Tiger'<SkillName>, this skill is <Improvements>improved<Improvements> and will <Improvements>deal 45 damage instead<Improvements>. This skill does not stack.",
        descriptionBR:
          "Mizuki golpeia ferozmente um inimigo, <Damage>causando 30 de dano<Damage>. Por 2 turnos, as habilidades desse inimigo <Effects>causarão 10 a menos de dano<Effects>. Durante <SkillName>'Curse Seal: Tiger'<SkillName>, esta habilidade é <Improvements>melhorada<Improvements> e <Improvements>causará 45 de dano<Improvements>. Esta habilidade não acumula.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/EEkuwOc.png",
        themepic: "https://i.imgur.com/EEkuwOc.png",
      },
      {
        name: "Puppets Genjutsu",
        themeName: "Puppets Genjutsu",
        description:
          "Mizuki puts an enemy under a genjutsu. For 2 turns, that enemy will be unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense>, and their skills will <Effects>deal 5 less damage<Effects> and will <Effects>cost 1 additional random chakra<Effects>. During this time, if that enemy does <Classes>not use a new skill<Classes>, they will <Damage>take 10 damage<Damage>.",
        descriptionBR:
          "Mizuki coloca um inimigo sob um genjutsu. Por 2 turnos, esse inimigo não poderá <Defense>reduzir dano<Defense> ou se tornar <Defense>invulnerável<Defense>, e suas habilidades <Effects>causarão 5 a menos de dano<Effects> e <Effects>custarão 1 chakra aleatório adicional<Effects>. Durante esse tempo, se o inimigo <Classes>não usar uma nova habilidade<Classes>, sofrerá <Damage>10 de dano<Damage>.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/jHkf7ow.png",
        themepic: "https://i.imgur.com/jHkf7ow.png",
      },
      {
        name: "Evil Intentions",
        themeName: "Evil Intentions",
        description:
          "This skill makes Cursed Seal Mizuki <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Cursed Seal Mizuki <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/eus0S47.png",
        themepic: "https://i.imgur.com/eus0S47.png",
      },
      {
        name: "Curse Seal: Tiger Bomb",
        themeName: "Curse Seal: Tiger Bomb",
        description:
          "Mizuki charges like a bomb, <Damage>dealing 45 damage<Damage> to one enemy and becoming <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Mizuki avança como uma bomba, <Damage>causando 45 de dano a um inimigo<Damage> e tornando-se <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/P7chy1d.png",
        themepic: "https://i.imgur.com/P7chy1d.png",
      },
    ],
  },
  {
    name: "Kyuubi Naruto",
    url: "https://i.imgur.com/ZUhruBS.png",
    themepic: "https://i.imgur.com/G0gEUWD.jpg",
    description:
      "Drawing upon the strength of the Kyuubi demon sealed inside him, the power of Naruto explodes, and he becomes a virtual army onto himself.",
    descriptionBR:
      "Ao extrair a força do demônio Kyuubi selado dentro dele, o poder de Naruto explode, e ele se torna praticamente um exército sozinho.",
    skills: [
      {
        name: "Kyuubi Chakra",
        themeName: "Kyuubi Chakra",
        description:
          "Unknowingly using the Kyuubi Chakra, Naruto gains 50% <Defense>damage reduction<Defense>* and <Defense>heals 15 health<Defense> each turn for 3 turns. During this time, <SkillName>'Kyuubi Rasengan'<SkillName> will be <Effects>worsened<Effects>.* This skill will <Effects>cancel<Effects> <SkillName>'Kyuubi Rage'<SkillName> when used.",
        descriptionBR:
          "Usando inconscientemente o Chakra do Kyuubi, Naruto ganha 50% de <Defense>redução de dano<Defense>* e <Defense>cura 15 de vida<Defense> a cada turno por 3 turnos. Durante esse tempo, <SkillName>'Kyuubi Rasengan'<SkillName> será <Effects>enfraquecido<Effects>.* Esta habilidade irá <Effects>cancelar<Effects> <SkillName>'Kyuubi Rage'<SkillName> ao ser usada.",
        energy: ["Blood"],
        classes: ["Chakra", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/rnk8wVi.png",
        themepic: "https://i.imgur.com/seJEUto.jpg",
      },
      {
        name: "Kyuubi Rage",
        themeName: "Kyuubi Rage",
        description:
          "Using the vile Kyuubi chakra surrounding him, Kyuubi Naruto <Damage><Damage>deals 10 damage<Damage> to all enemies for 3 turns. During this time, <SkillName>'Kyuubi Rasengan'<SkillName> will be <Improvements>improved<Improvements>*. This skill will <Effects>cancel<Effects> <SkillName>'Kyuubi Chakra'<SkillName> when used.",
        descriptionBR:
          "Usando o chakra vil do Kyuubi ao seu redor, Kyuubi Naruto <Damage>causa 10 de dano<Damage> a todos os inimigos por 3 turnos. Durante esse tempo, <SkillName>'Kyuubi Rasengan'<SkillName> será <Improvements>melhorado<Improvements>*. Esta habilidade irá <Effects>cancelar<Effects> <SkillName>'Kyuubi Chakra'<SkillName> ao ser usada.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Action", "Instant*", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/WexhqIW.png",
        themepic: "https://i.imgur.com/SlPbsK5.jpg",
      },
      {
        name: "Kyuubi Rasengan",
        themeName: "Kyuubi Rasengan",
        description:
          "Kyuubi Naruto <Damage>deals 40 damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental<Classes> skills. Kyuubi Naruto <Damage>takes 10 affliction damage<Damage>*. During <SkillName>'Kyuubi Rage'<SkillName>, this skill will <Improvements>deal 50 damage<Improvements>. During <SkillName>'Kyuubi Chakra'<SkillName>, this skill will <Improvements>deal 30 damage<Improvements>.",
        descriptionBR:
          "Kyuubi Naruto <Damage>causa 40 de dano<Damage> a um inimigo e <Effects>atordoa<Effects> as habilidades <Classes>não mentais<Classes> dele. Kyuubi Naruto <Damage>recebe 10 de dano aflitivo<Damage>*. Durante <SkillName>'Kyuubi Rage'<SkillName>, esta habilidade <Improvements>causará 50 de dano<Improvements>. Durante <SkillName>'Kyuubi Chakra'<SkillName>, esta habilidade <Improvements>causará 30 de dano<Improvements>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/2rPw0jH.png",
        themepic: "https://i.imgur.com/VrpdwO3.jpg",
      },
      {
        name: "Chakra Howl",
        themeName: "Chakra Howl",
        description: "This skill makes Kyuubi Naruto invulnerable for 1 turn.",
        descriptionBR:
          "Esta habilidade torna Kyuubi Naruto invulnerável por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/tFrnFax.png",
        themepic: "https://i.imgur.com/MEN4NlG.jpg",
      },
    ],
  },
  {
    name: "Cursed Seal Sasuke",
    url: "https://i.imgur.com/r4RPyUj.png",
    themepic: "https://i.imgur.com/NzYo8ow.jpg",
    description:
      "When Sasuke releases the full power of his cursed seal his body and chakra become a twisted vision of his inner self and his strength is amplified greatly.",
    descriptionBR:
      "Quando Sasuke libera todo o poder de seu selo amaldiçoado, seu corpo e chakra se tornam uma visão distorcida de si mesmo e sua força é amplificada enormemente.",
    skills: [
      {
        name: "Corrupt Chidori",
        themeName: "Corrupt Chidori",
        description:
          "Using a cursed seal chakra corrupted Chidori Sasuke <Damage>does 45 piercing damage<Damage> to one enemy and for 2 turns, will <Effects>reduce their non-affliction damage<Effects> by 20.",
        descriptionBR:
          "Usando um Chidori corrompido pelo chakra do selo amaldiçoado, Sasuke <Damage>causa 45 de dano perfurante<Damage> a um inimigo e por 2 turnos, irá fazer ele <Effects>causar 20 de dano não-aflitivo a menos<Effects>.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/2eNeRIl.png",
        themepic: "https://i.imgur.com/Fzgcw4y.jpg",
      },
      {
        name: "Katon: Goukakyuu no Jutsu",
        themeName: "Katon: Goukakyuu no Jutsu",
        description:
          "Sasuke launches a giant fireball, <Damage>dealing 20 affliction damage<Damage> to one enemy. For 1 turn, If that enemy <Classes>uses a skill<Classes> they will take <Damage>10 affliction damage<Damage>. During <SkillName>'Cursed Seal'<SkillName>, this skill will be <Improvements>improved<Improvements> and will also <Improvements>deal an additional 10 damage<Improvements>.",
        descriptionBR:
          "Sasuke lança uma gigantesca bola de fogo, <Damage>causando 20 de dano aflitivo<Damage> a um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma habilidade<Classes>, ele <Damage>receberá 10 de dano aflitivo<Damage>. Durante <SkillName>'Cursed Seal'<SkillName>, esta habilidade será <Improvements>melhorada<Improvements> e <Improvements>causará 10 de dano adicional<Improvements>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/YZZPJg7.png",
        themepic: "https://i.imgur.com/v9JSHUV.jpg",
      },
      {
        name: "Cursed Seal",
        themeName: "Cursed Seal",
        description:
          "Sasuke taps into the Cursed Seal, growing claw wings from his back. Sasuke <Damage>takes 20 affliction damage*<Damage> and becomes <Defense>invulnerable<Defense> for 1 turn. The following turn, <SkillName>'Corrupt Chidori'<SkillName> will <Improvements>cost 1 random chakra<Improvements> and <SkillName>'Katon: Goukakyuu no Jutsu'<SkillName> will have no cost. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Dark Void'<SkillName> for 1 turn.",
        descriptionBR:
          "Sasuke acessa o Selo Amaldiçoado, fazendo crescer asas com garras em suas costas. Sasuke <Damage>recebe 20 de dano aflitivo*<Damage> e fica <Defense>invulnerável<Defense> por 1 turno. No turno seguinte, <SkillName>'Corrupt Chidori'<SkillName> <Improvements>custará 1 chakra aleatório<Improvements> e <SkillName>'Katon: Goukakyuu no Jutsu'<SkillName> não terá custo. Esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Dark Void'<SkillName> por 1 turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/zdEp3Mv.png",
        themepic: "https://i.imgur.com/muPmje0.jpg",
      },
      {
        name: "Sharingan Evasion",
        themeName: "Sharingan Evasion",
        description:
          "This skill makes Cursed Seal Sasuke <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Cursed Seal Sasuke <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/gcRgFEG.png",
        themepic: "https://i.imgur.com/MmQVF6Q.jpg",
      },
      {
        name: "Dark Void",
        themeName: "Dark Void",
        description:
          "Expunging the corrupt chakra, Sasuke engulfs one enemy, <Effects>stunning<Effects> them for 2 turns, and making them <Defense>invulnerable<Defense> to <Effects>all skills<Effects>. When this skill <Classes>ends<Classes>, that enemy will <Damage>receive 55 damage<Damage>. This skill will <Classes>end<Classes> if Sasuke <Classes>dies<Classes>.",
        descriptionBR:
          "Expulsando o chakra corrompido, Sasuke envolve um inimigo, <Effects>atordoando-o<Effects> por 2 turnos e tornando-o <Defense>invulnerável<Defense> a <Effects>todas as habilidades<Effects>. Quando esta habilidade <Classes>terminar<Classes>, esse inimigo <Damage>receberá 55 de dano<Damage>. Esta habilidade<Classes> terminará<Classes> se Sasuke <Classes>morrer<Classes>.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/Gi982SB.png",
        themepic: "https://i.imgur.com/TqxHV8g.jpeg",
      },
    ],
  },
  {
    name: "Shukaku Gaara",
    url: "https://i.imgur.com/bJHNRJ2.png",
    themepic: "https://i.imgur.com/bJHNRJ2.png",
    description:
      "Having lived inside him the whole time, Shukaku is one of the nine tailed beasts and is very eager to escape and cause chaos to the world. While Shukaku slowly takes over Gaara, his own power increases, allowing him to demolish his foes with powerful sand attacks.",
    descriptionBR:
      "Tendo vivido dentro dele o tempo todo, Shukaku é uma das nove bestas com cauda e está muito ansioso para escapar e causar o caos no mundo. Enquanto Shukaku toma conta de Gaara aos poucos, seu próprio poder aumenta, permitindo-lhe destruir seus inimigos com poderosos ataques de areia.",
    skills: [
      {
        name: "Sand Claw",
        themeName: "Sand Claw",
        description:
          "Gaara attacks with a claw of concentrated sand, <Damage>dealing 30 damage<Damage> to one enemy and gaining 10 <Defense>destructible defense<Defense>.",
        descriptionBR:
          "Gaara ataca com uma garra de areia concentrada, <Damage>causando 30 de dano<Damage> a um inimigo e ganhando 10 de <Defense>defesa destrutível<Defense>.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/A4pnLul.jpg",
        themepic: "https://i.imgur.com/A4pnLul.jpg",
      },
      {
        name: "Constricting Sand Prison",
        themeName: "Constricting Sand Prison",
        description:
          "Gaara traps an enemy with sand, <Damage>dealing 10 damage<Damage> to them each turn. During this time, the <Classes>first skill<Classes> that enemy uses will be <Defense>countered<Defense> and this skill will <Effects>end<Effects>.",
        descriptionBR:
          "Gaara prende um inimigo com areia, <Damage>causando 10 de dano<Damage> a ele a cada turno. Durante esse tempo, a <Classes>primeira habilidade<Classes> que esse inimigo usar será <Defense>anulada<Defense> e esta habilidade <Effects>terminará<Effects>.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/p2DRexz.jpg",
        themepic: "https://i.imgur.com/p2DRexz.jpg",
      },
      {
        name: "Sand Transformation",
        themeName: "Sand Transformation",
        description:
          "Each turn, for 5 turns, Gaara will gain 10 <Defense>destructible defense<Defense>. When this skill <Effects>ends<Effects>, Gaara will transform into the Shukaku for 3 turns, <Improvements>reducing the cost<Improvements> of <SkillName>'Sand Claw'<SkillName> by <Improvements>1 random<Improvements> and <Improvements>replacing<Improvements> <SkillName>'Constricting Sand Prison'<SkillName> and <SkillName>'Sand Transformation'<SkillName>.",
        descriptionBR:
          "A cada turno, por 5 turnos, Gaara ganhará 10 de <Defense>defesa destrutível<Defense>. Quando esta habilidade <Effects>terminar<Effects>, Gaara se transformará no Shukaku por 3 turnos, <Improvements>reduzindo o custo<Improvements> de <SkillName>'Sand Claw'<SkillName> em <Improvements>1 chakra aleatório<Improvements> e <Improvements> <SkillName>'Constricting Sand Prison'<SkillName> e <SkillName>'Sand Transformation'<SkillName>.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Unique", "Instant", "Unique"],
        cooldown: 6,
        url: "https://i.imgur.com/HfgfCr9.jpg",
        themepic: "https://i.imgur.com/HfgfCr9.jpg",
      },
      {
        name: "Thick Sand Coat",
        themeName: "Thick Sand Coat",
        description:
          "This skill makes Shukaku Gaara <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shukaku Gaara <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/GKm7Zvl.jpg",
        themepic: "https://i.imgur.com/GKm7Zvl.jpg",
      },
      {
        name: "Drilling Air Bullet",
        themeName: "Drilling Air Bullet",
        description:
          "Sending forth a powerful ball of wind, Gaara <Damage>deals 60 damage<Damage> to one enemy.",
        descriptionBR:
          "Lançando uma poderosa bola de vento, Gaara <Damage>causa 60 de dano<Damage> a um inimigo.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/ZSMchzk.png",
        themepic: "https://i.imgur.com/ZSMchzk.png",
      },
      {
        name: "True Awakening",
        themeName: "True Awakening",
        description:
          "Gaara truly lets Shukaku awaken from inside him, letting it take over. The Following turn, <SkillName>'Sand Claw'<SkillName> and <SkillName>'Drilling Air Bullet'<SkillName> will <Improvements>deal double damage<Improvements>.",
        descriptionBR:
          "Gaara permite que o Shukaku desperte verdadeiramente de dentro dele, deixando-o assumir o controle. No turno seguinte, <SkillName>'Sand Claw'<SkillName> e <SkillName>'Drilling Air Bullet'<SkillName> <Improvements>causarão o dobro de dano<Improvements>.",
        energy: ["Blood"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/kAWDB8g.jpg",
        themepic: "https://i.imgur.com/kAWDB8g.jpg",
      },
    ],
  },
  {
    name: "Hoshigaki Kisame",
    url: "https://i.imgur.com/M8xGMby.png",
    themepic: "https://i.imgur.com/fpM115N.jpg",
    description:
      "Formerly one of the Seven Swordsmen of the Mist Village, Kisame is an S-Rank missing nin. He is Itachi's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    descriptionBR:
      "Anteriormente um dos Sete Espadachins da Vila da Névoa, Kisame é um ninja rank S procurado. Ele é parceiro de Itachi e membro de uma organização misteriosa. Criado junto com Redxmaverick.",
    skills: [
      {
        name: "Samehada Slash",
        themeName: "Samehada Slash",
        description:
          "Using his sword, Samehada, Kisame slashes one enemy who <Damage>takes 20 damage<Damage> and <Effects>stunning<Effects> their <Classes>physical or chakra<Classes> skills for 1 turn.",
        descriptionBR:
          "Usando sua espada, Samehada, Kisame corta um inimigo que <Damage>recebe 20 de dano<Damage> e fica com suas habilidades <Classes>Physical ou Chakra<Classes> <Effects>atordoadas<Effects> por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 1,
        url: "https://i.imgur.com/kyyyNkG.png",
        themepic: "https://i.imgur.com/oZthygZ.jpg",
      },
      {
        name: "Samehada Shred",
        themeName: "Samehada Shred",
        description:
          "Kisame unwraps Samehada and shreds one enemy. For 2 turns that enemy <Damage>takes 15 damage<Damage> and <Effects>one bloodline or genjutsu chakra<Effects> is <Effects>stolen from their pool<Effects>.",
        descriptionBR:
          "Kisame desembrulha a Samehada e dilacera um inimigo. Por 2 turnos esse inimigo <Damage>recebe 15 de dano<Damage> e um <Effects>chakra de Bloodline ou Genjutsu é roubado<Effects> de sua <Effects>reserva<Effects>.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Action", "Melee", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/7ZVF8bP.png",
        themepic: "https://i.imgur.com/k3bNKxt.jpg",
      },
      {
        name: "Water Shark Projectile",
        themeName: "Water Shark Projectile",
        description:
          "Using a stream of compressed water Kisame <Damage>does 20 damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>chakra or ranged<Classes> skills for 1 turn.",
        descriptionBR:
          "Usando um jato de água comprimida, Kisame <Damage>causa 20 de dano<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades de <Classes>Chakra ou Ranged<Classes> por 1 turno.",
        energy: ["Nin"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/5Y5yd7c.png",
        themepic: "https://i.imgur.com/U5ZCAvY.jpg",
      },
      {
        name: "Kisame Replacement Technique",
        themeName: "Kisame Replacement Technique",
        description:
          "This skill makes Hoshigaki Kisame <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hoshigaki Kisame <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hGOwcqv.png",
        themepic: "https://i.imgur.com/xd9Fopn.jpg",
      },
    ],
  },
  {
    name: "Uchiha Itachi",
    url: "https://i.imgur.com/n2JnI5c.png",
    themepic: "https://i.imgur.com/m8Tm4cO.jpg",
    description:
      "The only other surviving Uchiha, Itachi is a master of doujutsu and is an S-Rank missing nin. He is Kisame's partner and a member of a mysterious organization. Designed with Redxmaverick.",
    descriptionBR:
      "O único outro Uchiha sobrevivente, Itachi é um mestre do doujutsu e um ninja rank S procurado. Ele é parceiro de Kisame e membro de uma organização misteriosa. Criado junto com Redxmaverick.",
    skills: [
      {
        name: "Mangekyou Sharingan",
        themeName: "Mangekyou Sharingan",
        description:
          "Itachi activates his Mangekyou Sharingan. For 2 turns, Itachi will become <Defense>invulnerable<Defense> to <Classes>physical and chakra<Classes> damage skills.",
        descriptionBR:
          "Itachi ativa seu Mangekyou Sharingan. Por 2 turnos, Itachi se tornará <Defense>invulnerável<Defense> a habilidades de dano <Classes>'Physical' e Chakra<Classes>.",
        energy: ["Blood"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/BZ3ZwgH.png",
        themepic: "https://i.imgur.com/wFElZ18.jpg",
      },
      {
        name: "Tsukuyomi",
        themeName: "Tsukuyomi",
        description:
          "Itachi mentally tortures one enemy for 3 days in a matter of seconds <Effects>stunning<Effects> their <Classes>harmful<Classes> skills for 3 turns.",
        descriptionBR:
          "Itachi tortura mentalmente um inimigo por 3 dias em questão de segundos, <Effects>atordoando<Effects> suas habilidades <Classes>ofensivas<Classes> por 3 turnos.",
        energy: ["Gen", "Gen"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/jcw6Uxg.png",
        themepic: "https://i.imgur.com/BkXiVP9.jpg",
      },
      {
        name: "Amaterasu",
        themeName: "Amaterasu",
        description:
          "Itachi <Damage>deals 14 affliction damage<Damage> to one enemy every turn permanently. This skill will <Effects>end<Effects> if Itachi <Effects>dies<Effects> or if the skill is <Effects>used<Effects> on a <Effects>different enemy<Effects>. This skill does not stack.",
        descriptionBR:
          "Itachi <Damage>causa 14 de dano aflitivo<Damage> a um inimigo permanentemente a cada turno. Esta habilidade <Effects>terminará<Effects> se Itachi <Effects>morrer<Effects> ou se for <Effects>usada<Effects> em um <Effects>inimigo diferente<Effects>. Esta habilidade não acumula.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/oghlSYj.png",
        themepic: "https://i.imgur.com/mQsi6OJ.jpg",
      },
      {
        name: "Sharingan Insight",
        themeName: "Sharingan Insight",
        description:
          "This skill makes Uchiha Itachi <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Itachi <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/rCdqw3U.png",
        themepic: "https://i.imgur.com/oIofBVn.jpg",
      },
    ],
  },
  {
    name: "Masked Man",
    url: "https://i.imgur.com/zp0TERK.png",
    themepic: "https://i.imgur.com/zp0TERK.png",
    description:
      "Not much is known about the Masked Man, other than his uncontrollable hatred for the Leaf Village. After extracting the Kyuubi from Kushina, Masked Man is able to summon the Nine Tails Beast into the battlefield, while also being able to use his other unknown techniques.",
    descriptionBR:
      "Pouco se sabe sobre o Masked Man, além do seu ódio incontrolável pela Vila da Folha. Após extrair o Kyuubi de Kushina, Masked Man é capaz de invocar a Besta de Nove Caudas no campo de batalha, além de usar outras técnicas desconhecidas.",
    skills: [
      {
        name: "Strange Jutsu",
        themeName: "Strange Jutsu",
        description:
          "Masked Man isolates himself and one enemy from the battlefield, *making them both <Defense>invulnerable<Defense> to <Classes>every characters except each other<Classes> for 3 turns; This effect <Classes>cannot be ignored<Classes>. During this time, that enemy will <Damage>take 15 piercing damage<Damage> each turn.",
        descriptionBR:
          "Masked Man isola a si mesmo e um inimigo do campo de batalha, tornando ambos <Defense>invulneráveis<Defense> a <Classes>todos os personagens exceto um ao outro<Classes> por 3 turnos; este efeito <Classes>não pode ser ignorado<Classes>. Durante esse tempo, o inimigo <Damage>receberá 15 de dano perfurante<Damage> a cada turno.",
        energy: ["Gen"],
        classes: ["Chakra", "Melee", "Action", "Unique", "*Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/pTLohi4.png",
        themepic: "https://i.imgur.com/pTLohi4.png",
      },
      {
        name: "Chain Assault",
        themeName: "Chain Assault",
        description:
          "Producing chains from his wrists, Masked Man gains 10 <Damage>destructible defense<Damage> for 1 turn and <Damage>deals 25 damage<Damage> to one enemy, <Effects>reducing their non-affliction damage<Effects> by 10 for 1 turn. This skill <Improvements>deals 35 damage and reduces 15  points of damage<Improvements> to the enemy affected by <SkillName>'Strange Jutsu'<SkillName>.",
        descriptionBR:
          "Produzindo correntes de seus pulsos, Masked Man ganha 10 de <Damage>defesa destrutível<Damage> por 1 turno e <Damage>causa 25 de dano<Damage> a um inimigo, <Effects>reduzindo o dano não aflitivo<Effects> deles em 10 por 1 turno. Esta habilidade <Improvements>causa 35 de dano e reduz 15 pontos do dano<Improvements> do inimigo afetado por <SkillName>'Strange Jutsu'<SkillName>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5N1uOWp.png",
        themepic: "https://i.imgur.com/5N1uOWp.png",
      },
      {
        name: "Summoning: Kyuubi",
        themeName: "Summoning: Kyuubi",
        description:
          "Masked Man may summons Kyuubi <Effects>if he has 50 health or less<Effects>, granting himself 55 <Defense>points of destructible defense<Defense> permanent. While he has this destructible defense, all of his skills will be <Effects>replaced<Effects> by <SkillName>'Summoned Kyuubi: Bijuudama'.",
        descriptionBR:
          "Masked Man pode invocar o Kyuubi <Effects>se estiver com 50 de vida ou menos<Effects>, concedendo a si mesmo 55 <Defense>pontos de defesa destrutível<Defense> permanente. Enquanto tiver essa defesa, todas as suas habilidades serão <Effects>substituídas<Effects> por <SkillName>'Summoned Kyuubi: Bijuudama'<SkillName>.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 9,
        url: "https://i.imgur.com/lfO8e0S.png",
        themepic: "https://i.imgur.com/lfO8e0S.png",
      },
      {
        name: "Masked Man Block",
        themeName: "Masked Man Block",
        description:
          "This skill makes Masked Man <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Masked Man <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BLdXQ3T.png",
        themepic: "https://i.imgur.com/BLdXQ3T.png",
      },
      {
        name: "Summoned Kyuubi: Bijuudama",
        themeName: "Summoned Kyuubi: Bijuudama",
        description:
          "Kyuubi gathers a massive sphere of chakra and fires it at all enemies <Damage>dealing 35 piercing damage<Damage> to them.",
        descriptionBR:
          "Kyuubi reúne uma esfera massiva de chakra e dispara contra todos os inimigos <Damage>causando 35 de dano perfurante<Damage> a eles.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/G5lZyNP.png",
        themepic: "https://i.imgur.com/G5lZyNP.png",
      },
    ],
  },
  {
    name: "Uzumaki Naruto (S)",
    url: "https://i.imgur.com/ksOuPJi.png",
    themepic: "https://i.imgur.com/AyQeKCH.png",
    description:
      "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
    descriptionBR:
      "After nearly three years of secluded training with Jiraiya, Naruto(s) has returned to Konoha with a greatly improved arsenal of ninja skills.",
    skills: [
      {
        name: "Oodama Rasengan",
        themeName: "Oodama Rasengan",
        description:
          "Naruto uses a greater version of Rasengan, dealing 40 piercing damage to one enemy ignoring invulnerability. During 'Kyuubi Boost', this skill will stun that enemy's non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage*. During 'Passive: Three Tails Release', this skill will be replaced.",
        descriptionBR:
          "Naruto uses a greater version of Rasengan, dealing 40 piercing damage to one enemy ignoring invulnerability. During 'Kyuubi Boost', this skill will stun that enemy's non-mental skills for 1 turn. Afterwards, Naruto takes 5 affliction damage*. During 'Passive: Three Tails Release', this skill will be replaced.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Instant", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/toWCXT5.png",
        themepic: "https://i.imgur.com/OjjYVZg.png",
      },
      {
        name: "Shadow Clones: Rasengan",
        themeName: "Shadow Clones: Rasengan",
        description:
          "The following turn, Naruto will deal 20 piercing damage to one enemy and make them unable to reduce damage or become invulnerable for 1 turn. During this time, Naruto will ignore all harmful effects. During 'Passive: Three Tails Release', this skill will be replaced. This skill is invisible.",
        descriptionBR:
          "The following turn, Naruto will deal 20 piercing damage to one enemy and make them unable to reduce damage or become invulnerable for 1 turn. During this time, Naruto will ignore all harmful effects. During 'Passive: Three Tails Release', this skill will be replaced. This skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Action", "Melee"],
        cooldown: 2,
        url: "https://i.imgur.com/KdxZzju.png",
      },
      {
        name: "Kyuubi Boost",
        themeName: "Kyuubi Boost",
        description:
          "Naruto gains 1 Ninjutsu chakra, loses 15 health and for 3 turns gains 10 points of unpierceable damage reduction. The following 3 turns, he will ignore stun effects and this skill becomes 'Kyuubi Empowered Rasengan'. Cannot be used during 'Passive: Three Tails Transformation'.",
        descriptionBR:
          "Naruto gains 1 Ninjutsu chakra, loses 15 health and for 3 turns gains 10 points of unpierceable damage reduction. The following 3 turns, he will ignore stun effects and this skill becomes 'Kyuubi Empowered Rasengan'. Cannot be used during 'Passive: Three Tails Transformation'.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/Mv0n65V.jpg",
      },
      {
        name: "Shadow Clone Save",
        themeName: "Shadow Clone Save",
        description:
          "This skill makes Uzumaki Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uzumaki Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8lPJUXh.png",
      },
      {
        name: "Kyuubi Empowered Rasengan",
        themeName: "Kyuubi Empowered Rasengan",
        description:
          "Naruto uses a Rasengan empowered by the Kyuubi chakra, dealing 25 damage to one enemy and stunning their non-mental skills for 1 turn.",
        descriptionBR:
          "Naruto uses a Rasengan empowered by the Kyuubi chakra, dealing 25 damage to one enemy and stunning their non-mental skills for 1 turn.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/iqprvFg.png",
      },
      {
        name: "Passive: Three Tails Release",
        themeName: "Passive: Three Tails Release",
        description:
          "Each time Naruto uses 'Oodama Rasengan' or 'Kyuubi Empowered Rasengan', he will gain 1 Kyuubi Rage stack. At 4 Kyuubi Rage stacks, kyuubi chakra will be released for 3 turns, removing all harmful skills, granting 50% unpierceable damage reduction, ignoring stun effects and improving his skills.",
        descriptionBR:
          "Each time Naruto uses 'Oodama Rasengan' or 'Kyuubi Empowered Rasengan', he will gain 1 Kyuubi Rage stack. At 4 Kyuubi Rage stacks, kyuubi chakra will be released for 3 turns, removing all harmful skills, granting 50% unpierceable damage reduction, ignoring stun effects and improving his skills.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/W4maqPt.png",
      },
      {
        name: "Three-Tail: Claw Smash",
        themeName: "Three-Tail: Claw Smash",
        description:
          "Naruto dashes forward and strikes one enemy with a powerful smash, dealing 40 piercing damage and stunning their non-mental for 1 turn. Afterwards, Naruto takes 5 affliction damage. This skill ignores invulnerability.",
        descriptionBR:
          "Naruto dashes forward and strikes one enemy with a powerful smash, dealing 40 piercing damage and stunning their non-mental for 1 turn. Afterwards, Naruto takes 5 affliction damage. This skill ignores invulnerability.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/MOw6ymg.png",
      },
      {
        name: "Three-Tail: Chakra Shockwave",
        themeName: "Three-Tail: Chakra Shockwave",
        description:
          "The following turn, Naruto will deal 20 affliction damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible.",
        descriptionBR:
          "The following turn, Naruto will deal 20 affliction damage to all enemies. During this time, Naruto will ignore all harmful effects. This skill is invisible.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/pd00clo.png",
      },
    ],
  },
  {
    name: "Haruno Sakura (S)",
    url: "https://i.imgur.com/5iC4YJR.png",
    themepic: "https://i.imgur.com/aMoXvEA.jpg",
    description:
      "With her extensive training under Tsunade, the Godaime, for the last two and a half years, Sakura(s)'s healing and combat abilities have both greatly improved.",
    descriptionBR:
      "Com seu extenso treinamento sob Tsunade, a Godaime, pelos últimos dois anos e meio, as habilidades de cura e combate de Sakura(s) melhoraram muito.",
    skills: [
      {
        name: "Chakra Enhanced Punch",
        themeName: "Chakra Enhanced Punch",
        description:
          "Enhancing her attack with finely controlled chakra, Sakura <Effects>breaks<Effects> one enemy's <Defense>destructible defense<Defense> and deals 25 <Damage>piercing damage<Damage> to them. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Blossom's Fury'<SkillName>.",
        descriptionBR:
          "Aprimorando seu ataque com chakra finamente controlado, Sakura <Effects>destrói<Effects> a <Defense>defesa destrutível<Defense> de um inimigo e causa 25 de <Damage>dano perfurante<Damage>. Esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Blossom's Fury'<SkillName>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/hlJj8Px.png",
        themepic: "https://i.imgur.com/Ws4byF7.jpg",
      },
      {
        name: "Trained Healing",
        themeName: "Trained Healing",
        description:
          "Using her trained healing skills, Sakura <Defense>heals<Defense> an ally for 20 <Defense>health<Defense> for 2 turns. Each turn, that ally will have <Classes>all affliction skills<Classes> <Effects>removed<Effects> from them.",
        descriptionBR:
          "Usando suas habilidades de cura treinadas, Sakura <Defense>cura<Defense> um aliado em 20 de <Defense>vida<Defense> por 2 turnos. A cada turno, esse aliado terá <Classes>todas as habilidades de aflição<Classes> <Effects>removidas<Effects>.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/Oi5rkOB.png",
        themepic: "https://i.imgur.com/6G20DUQ.jpg",
      },
      {
        name: "Self Heal",
        themeName: "Self Heal",
        description:
          "Sakura targets herself permanently, <Defense>healing<Defense> 20 <Defense>health<Defense> instantly the first time she is <Classes>damaged<Classes> by a <Classes>skill<Classes>. <Invisible>This skill is invisible<Invisible> and <Classes>ends<Classes> when <Classes>triggered<Classes>.",
        descriptionBR:
          "Sakura se mira permanentemente, <Defense>curando<Defense> 20 de <Defense>vida<Defense> instantaneamente na primeira vez que <Classes>sofrer dano<Classes> de uma <Classes>habilidade<Classes>. <Invisible>Esta habilidade é invisível<Invisible> e <Classes>termina<Classes> quando <Classes>acionada<Classes>.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aJqXOqH.png",
        themepic: "https://i.imgur.com/drdHHuW.jpg",
      },
      {
        name: "Insightful Dodge",
        themeName: "Insightful Dodge",
        description:
          "This skill makes Haruno Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Haruno Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tvBST5g.png",
        themepic: "https://i.imgur.com/oKhDnzA.jpg",
      },
      {
        name: "Blossom's Fury",
        themeName: "Blossom's Fury",
        description:
          "Sakura releases a ground breaking punch, <Effects>destroying<Effects> one enemy's <Defense>destructible defense<Defense> and <Damage>dealing 35 piercing damage<Damage> to them. This skill cannot be <Classes>reflected<Classes> and returns to <SkillName>'Chakra Enhanced Punch'<SkillName> once it's used.",
        descriptionBR:
          "Sakura libera um soco devastador, <Effects>destruindo<Effects> a <Defense>defesa destrutível<Defense> de um inimigo e <Damage>causando 35 de dano perfurante<Damage>. Esta habilidade não pode ser <Classes>refletida<Classes> e volta a ser <SkillName>'Chakra Enhanced Punch'<SkillName> após o uso.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ALv0zL8.png",
        themepic: "https://i.imgur.com/d0shSGl.jpeg",
      },
    ],
  },
  {
    name: "Sai (S)",
    url: "https://i.imgur.com/pox7fg0.png",
    themepic: "https://i.imgur.com/18YzCEK.jpg",
    description:
      "A current member of the elite ANBU Root, Sai(s) is an unparalleled artist who uses chakra to bring his images to life.",
    descriptionBR:
      "Membro atual do elite ANBU Root, Sai(s) é um artista incomparável que usa chakra para dar vida às suas imagens.",
    skills: [
      {
        name: "Great Beast Painting: Lions",
        themeName: "Great Beast Painting: Lions",
        description:
          "Sai creates a number of ink lions to attack one enemy <Damage>dealing 30 damage<Damage> to them, and for 1 turn, Sai will gain 15 points of <Defense>destructible defense<Defense>.",
        descriptionBR:
          "Sai cria vários leões de tinta para atacar um inimigo, <Damage>causando 30 de dano<Damage>, e por 1 turno, Sai ganhará 15 pontos de <Defense>destructible defense<Defense>.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/d1ic0UR.png",
        themepic: "https://i.imgur.com/vE1XCS0.jpg",
      },
      {
        name: "Great Beast Painting: Snake",
        themeName: "Great Beast Painting: Snake",
        description:
          "Sai creates a snake made of ink to trap one enemy. <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn. During this time, that enemy will be unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense>. This skill ignores invulnerability.",
        descriptionBR:
          "Sai cria uma cobra feita de tinta para prender um inimigo, <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno. Durante esse tempo, o inimigo não poderá <Defense>reduzir dano<Defense> nem ficar <Defense>invulnerável<Defense>. Esta habilidade <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/fGlKQw8.png",
        themepic: "https://i.imgur.com/icLvLaS.jpg",
      },
      {
        name: "Adaptive Painting",
        themeName: "Adaptive Painting",
        description:
          "For 3 turns, any ally that is <Effects>stunned<Effects> will become <Defense>invulnerable<Defense> for 1 turn; Any ally that has <Effects>chakra removed/stolen will gain 1 random <Effects>; Any enemy that <Damage>damages<Damage> Sai or his allies will <Improvements>increase<Improvements> Sai's <Improvements>damage by 10 for 1 turn<Improvements>. The following 3 turns, <SkillName>'Great Beast Painting: Snake'<SkillName> will be <Improvements>replaced<Improvements>.",
        descriptionBR:
          "Por 3 turnos, qualquer aliado que for <Effects>atordoado<Effects> ficará <Defense>invulnerável<Defense> por 1 turno; qualquer aliado que tiver seu <Effects>chakra removido/roubado ganhará 1 chakra aleatório<Effects>; qualquer inimigo que <Damage>causar dano<Damage> em Sai ou seus aliados <Improvements>aumentará o dano<Improvements> de Sai <Improvements>em 10 por 1 turno<Improvements>. Nos próximos 3 turnos, <SkillName>'Great Beast Painting: Snake'<SkillName> será <Improvements>substituído<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/nB8cFU3.png",
        themepic: "https://i.imgur.com/DVq8xOR.jpg",
      },
      {
        name: "Ink Clone",
        themeName: "Ink Clone",
        description:
          "This skill makes Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/AoZJ9Vr.png",
        themepic: "https://i.imgur.com/HguWAJq.jpg",
      },
      {
        name: "Great Beast Painting: Bird",
        themeName: "Great Beast Painting: Bird",
        description:
          "Sai creates a giant ink bird that crashes into one enemy, <Damage>dealing 25 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>physical and chakra<Classes> skills for 1 turn.",
        descriptionBR:
          "Sai cria um pássaro gigante de tinta que atinge um inimigo, <Damage>causando 25 de dano<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>physical e chakra<Classes> por 1 turno.",
        energy: ["Gen"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/QKM5SKP.png",
        themepic: "https://i.imgur.com/c1wQeX2.png",
      },
    ],
  },
  {
    name: "Hatake Kakashi (S)",
    url: "https://i.imgur.com/lKc2rbD.png",
    themepic: "https://i.imgur.com/JQfAHYj.jpg",
    description:
      "Kakashi(s) has used the last couple years to improve upon his sharingan, giving him access to a new deadly but costly ability.",
    descriptionBR:
      "Kakashi(s) usou os últimos anos para aprimorar seu Sharingan, concedendo-lhe acesso a uma habilidade nova, mortal porém custosa.",
    skills: [
      {
        name: "Jutsu Imitation",
        themeName: "Jutsu Imitation",
        description:
          "Kakashi imitates one enemy's jutsu, copying a <Classes>random offensive skill<Classes> from them. The copied skill will have its <Improvements>cost changed<Improvements> to <Improvements>random chakras<Improvements> and will be <Improvements>replacing<Improvements> this skill for 3 turns. This skill cannot copy skills that <Effects>require a preparation<Effects>.",
        descriptionBR:
          "Kakashi imita o jutsu de um inimigo, copiando uma <Classes>habilidade ofensiva aleatória<Classes> dele. A habilidade copiada terá seu <Improvements>custo alterado<Improvements> para c<Improvements>hakras aleatórios<Improvements> e <Improvements>substituirá<Improvements> esta habilidade por 3 turnos. Esta habilidade não pode copiar skills que <Effects>requerem preparação<Effects>.",
        energy: [],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/PkxKF4C.png",
        themepic: "https://i.imgur.com/KxqcboI.jpg",
      },
      {
        name: "Kakashi Mangekyou",
        themeName: "Kakashi Mangekyou",
        description:
          "By using his newly developed Mangekyou Sharingan, Kakashi warps space and time <Damage>dealing 45 piercing damage<Damage> to one enemy and <Effects>increasing their cooldowns<Effects> by 1 turn for 2 turns. This skill cannot be <Classes>countered<Classes>, <Classes>reflected<Classes> and <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Usando seu Mangekyou Sharingan recém-desenvolvido, Kakashi distorce espaço e tempo <Damage>causando 45 de dano perfurante<Damage> a um inimigo e <Effects>aumentando seus cooldowns<Effects> em 1 turno por 2 turnos. Esta habilidade não pode ser <Classes>anulada<Classes>, <Classes>refletida<Classes> e <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/I91aeZc.png",
        themepic: "https://i.imgur.com/0LQWVeR.jpg",
      },
      {
        name: "Team Tactics",
        themeName: "Team Tactics",
        description:
          "For 1 turn, Kakashi and all his allies will <Defense>ignore<Defense> enemy <Effects>stun<Effects> effects. The following turn all their skills will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Por 1 turno, Kakashi e todos seus aliados irão <Defense>ignorar<Defense> efeitos de <Effects>atordoamento<Effects> inimigos. No turno seguinte, todas as suas habilidades <Improvements>custarão 1 chakra aleatório a menos<Improvements>.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/yPfyM9R.png",
        themepic: "https://i.imgur.com/txK68T9.jpg",
      },
      {
        name: "Bunshin Stand-in",
        themeName: "Bunshin Stand-in",
        description:
          "This skill makes Hatake Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hatake Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ToRKfvb.png",
        themepic: "https://i.imgur.com/GXZwhio.jpg",
      },
    ],
  },
  {
    name: "Yamato (S)",
    url: "https://i.imgur.com/9H3giit.png",
    themepic: "https://i.imgur.com/wlfMqxC.jpg",
    description:
      "Yamato(s) is a member of ANBU whose real name is unknown. Given the code name Yamato(s) by Tsunade for this mission, he is tasked to lead Team 7 while Kakashi recovers.",
    descriptionBR:
      "Yamato(s) é membro do ANBU cujo nome verdadeiro é desconhecido. Recebeu o codinome Yamato(s) de Tsunade para esta missão, e foi designado para liderar o Time 7 enquanto Kakashi se recupera.",
    skills: [
      {
        name: "Sanctuary Enlightenment Enclosing Palm",
        themeName: "Sanctuary Enlightenment Enclosing Palm",
        description:
          "Yamato uses an ancient technique that seals one enemy's power, <Damage>dealing 30 piercing damage<Damage> to them. For 1 turn, that enemy will <Defense>ignore all effects that improve their skills<Defense> and will be unable to become <Defense>invulnerable<Defense> by enemies's skills.",
        descriptionBR:
          "Yamato usa uma técnica antiga que sela o poder de um inimigo, <Damage>causando 30 de dano perfurante<Damage> nele. Por 1 turno, esse inimigo <Defense>ignorará todos os efeitos que melhoram suas skills<Defense> e ficará impossibilitado de ficar <Defense>invulnerável<Defense> de habilidades inimigas.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/DXZh3w1.png",
        themepic: "https://i.imgur.com/uT2ze20.jpg",
      },
      {
        name: "Four Column Prison",
        themeName: "Four Column Prison",
        description:
          "Yamato creates a barrier of wood around one enemy or ally. If used on an enemy, that enemy will have their <Classes>non-mental<Classes> skills <Effects>stunned<Effects> and will become <Defense>invulnerable<Defense> to <Classes>helpful<Classes> skills for 2 turns. If used on an ally, that ally will gain 40 <Defense>destructible defense<Defense>. This skill <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Yamato cria uma barreira de madeira ao redor de um inimigo ou aliado. Se usada em um inimigo, ele terá suas skills <Classes>non-mental<Classes> <Effects>atordoadas<Effects> e ficará <Defense>invulnerável<Defense> a habilidades <Classes>benéficas<Classes> por 2 turnos. Se usada em um aliado, ele ganha 40 de <Defense>defesa destrutível<Defense>. Esta habilidade <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/B8QtS9K.png",
        themepic: "https://i.imgur.com/pZZyIn5.jpg",
      },
      {
        name: "Wood Clone",
        themeName: "Wood Clone",
        description:
          "Yamato protects one ally or himself with a clone of wood for 1 turn, <Defense>countering<Defense> the first <Classes>physical or chakra skill<Classes> used against them. The <Defense>countered<Defense> enemy will <Damage>take 20 damage<Damage>* and the protected ally will gain 20 <Defense>destructible defense<Defense>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Yamato protege um aliado ou a si mesmo com um clone de madeira por 1 turno, <Defense>anulando<Defense> a primeira <Classes>habilidade Physical ou Chakra<Classes> usada contra eles. O inimigo <Defense>anulado<Defense> sofrerá <Damage>20 de dano<Damage>* e o aliado protegido ganhará 20 de <Defense>defesa destrutível<Defense>. <Invisible>Esta skill é invisível<Invisible>.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Melee*"],
        cooldown: 2,
        url: "https://i.imgur.com/Cy9zjvr.png",
        themepic: "https://i.imgur.com/3FjgGdG.jpg",
      },
      {
        name: "Wood Locking Wall",
        themeName: "Wood Locking Wall",
        description:
          "This skill makes Yamato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/m9SiZkn.png",
        themepic: "https://i.imgur.com/GA0cIe8.jpg",
      },
    ],
  },
  {
    name: "Rock Lee (S)",
    url: "https://i.imgur.com/DTqDmu4.png",
    themepic: "https://i.imgur.com/AZFL6Ri.jpeg",
    description:
      "Now a chuunin, Lee has trained endlessly with Gai, and not only learned new abilities, but has learned what it truly means to fight. In battle, Lee now fights for his friends and allies, growing stronger as they fall around him.",
    descriptionBR:
      "Agora um chuunin, Lee treinou incansavelmente com Gai, não só aprendendo novas habilidades, mas também entendendo o verdadeiro significado de lutar. Em batalha, Lee luta pelos seus amigos e aliados, ficando mais forte conforme eles caem ao seu redor.",
    skills: [
      {
        name: "Leaf Rising Wind",
        themeName: "Leaf Rising Wind",
        description:
          "Lee tries to hinder an enemy, <Damage>dealing 15 damage<Damage> to them and <Effects>lowering all their damage by 10<Effects> for 2 turns. This skill<Improvements> will deal an additional 10 damage<Improvements>, and the damage reduction effect<Improvements> will last 1 additional<Improvements> turn for each <Classes>ally<Classes> that is <Classes>dead<Classes>.",
        descriptionBR:
          "Lee tenta atrapalhar um inimigo, <Damage>causando 15 de dano<Damage> e <Effects>reduzindo todo o dano dele em 10<Effects> por 2 turnos. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements>, e o efeito de redução de dano <Improvements>durará 1 turno a mais<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DSfZAbq.png",
        themepic: "https://i.imgur.com/QcXHTth.jpeg",
      },
      {
        name: "Leaf Great Whirlwind",
        themeName: "Leaf Great Whirlwind",
        description:
          "Lee gains momentum, <Damage>dealing 20 damage<Damage> to one enemy and gaining 10 points of <Defense>damage reduction<Defense> for 1 turn. The following turn this skill <Improvements>will deal an additional 10 damage<Improvements> and <Improvements>grant 10 more damage reduction<Improvements>. This skill <Improvements>will deal an additional 10 damage<Improvements> for every <Classes>ally<Classes> that has been <Classes>killed<Classes>.",
        descriptionBR:
          "Lee ganha impulso, <Damage>causando 20 de dano<Damage> a um inimigo e ganhando 10 pontos de <Defense>redução de dano<Defense> por 1 turno. No turno seguinte, esta habilidade <Improvements>causará 10 de dano adicional<Improvements> e <Improvements>concederá mais 10 de redução de dano<Improvements>. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "allyBypass", "__$"],
        cooldown: 0,
        url: "https://i.imgur.com/66wenY8.png",
        themepic: "https://i.imgur.com/X78qpDT.jpeg",
      },
      {
        name: "Maximum Force Blast",
        themeName: "Maximum Force Blast",
        description:
          "Mixing the power of his gates, his allies and everything Lee fights for, he unleashes a powerful attack at one enemy <Damage>dealing 20 damage<Damage> to them. This skill <Improvements>will deal an additional 20 damage<Improvements> for each <Classes>ally<Classes that is <Classes>dead<Classes>, and an <Improvements>additional 20 damage<Improvements> for each <Defense>30 health<Defense> that Lee has <Defense>lost<Defense>.",
        descriptionBR:
          "Combinando o poder de seus portões, seus aliados e tudo pelo que Lee luta, ele libera um ataque poderoso em um inimigo <Damage>causando 20 de dano<Damage>. Esta habilidade <Improvements>causará 20 de dano adicional<Improvements> para cada <Classes>aliado<Classes> <Classes>morto<Classes> e <Improvements>mais 20 de dano<Improvements> para cada <Defense>30 de vida<Defense> que Lee <Defense>perdeu<Defense>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/1T89JYR.png",
        themepic: "https://i.imgur.com/1DRHOMU.jpeg",
      },
      {
        name: "Jumping Dodge",
        themeName: "Jumping Dodge",
        description:
          "This skill makes Rock Lee (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Rock Lee (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Z8QItbi.jpeg",
        themepic: "https://i.imgur.com/AGnKl2z.jpeg",
      },
    ],
  },
  {
    name: "Hyuuga Neji (S)",
    url: "https://i.imgur.com/imvUIBX.png",
    themepic: "https://i.imgur.com/Q460Z49.jpg",
    description:
      "The only one of the original genins to make it to the level of jounin, Neji(s) has greatly increased his ability with both byakugan and gentle fist taijutsu.",
    descriptionBR:
      "O único dos genins originais a chegar ao nível de jounin, Neji(s) aumentou muito sua habilidade tanto com byakugan quanto com o taijutsu gentle fist.",
    skills: [
      {
        name: "Eight Trigams Sky Palm",
        themeName: "Eight Trigams Sky Palm",
        description:
          "Neji deals 20 damage to one enemy. For 1 turn, if that enemy uses any new skill, they will lose 1 non-taijutsu chakra.",
        descriptionBR:
          "Neji causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar qualquer habilidade nova, ele perderá 1 chakra não-taijutsu.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Vz9AP1d.png",
        themepic: "https://i.imgur.com/KCW3ksw.jpg",
      },
      {
        name: "Mountain Crusher Palm",
        themeName: "Mountain Crusher Palm",
        description:
          "Neji destroys all enemy destructible defense and deals them 30 damage to them, and then removes them 1 taijutsu and 1 genjutsu chakra. For 2 turns, 'Eight Trigams Sky Palm' will deal 10 additional damage to that enemy.",
        descriptionBR:
          "Neji destrói toda defesa destrutível inimiga e causa 30 de dano, além de remover 1 chakra taijutsu e 1 genjutsu. Por 2 turnos, 'Eight Trigams Sky Palm' causará 10 de dano adicional a esse inimigo.",
        energy: ["Tai", "Blood"],
        classes: ["Chakra", "Instant", "Melee", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/RjDKqBY.png",
        themepic: "https://i.imgur.com/67aAnGE.jpg",
      },
      {
        name: "Reactive Rotation",
        themeName: "Reactive Rotation",
        description:
          "Neji target himself or one ally for 1 turn. The first harmful non-mental skill used on the protected character will be countered, and for 3 turns will take 10 additional damage from Neji's skills. This skill is invisible.",
        descriptionBR:
          "Neji protege a si mesmo ou um aliado por 1 turno. A primeira habilidade ofensiva não-mental usada no personagem protegido será anulada, e por 3 turnos ele receberá 10 de dano adicional das habilidades de Neji. Esta habilidade é invisível.",
        energy: ["Blood"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/OY8Aq78.png",
        themepic: "https://i.imgur.com/p1OswdF.jpg",
      },
      {
        name: "Neji Insight",
        themeName: "Neji Insight",
        description:
          "This skill makes Hyuuga Neji (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Neji (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/QcbCtD3.png",
        themepic: "https://i.imgur.com/IUmuPC1.jpeg",
      },
    ],
  },
  {
    name: "Tenten (S)",
    url: "https://i.imgur.com/lFtTPeQ.png",
    themepic: "https://i.imgur.com/LDXf77K.jpg",
    description:
      "After nearly three years Tenten(s) is now a chuunin. In this time she has improved the diversity and strength of her ranged arsenal.",
    descriptionBR:
      "Após quase três anos, Tenten (S) agora é uma chuunin. Durante esse tempo, ela aprimorou a diversidade e a força de seu arsenal ranged.",
    skills: [
      {
        name: "Weapon Upgrade",
        themeName: "Weapon Upgrade",
        description:
          "By upgrading her weapons, Tenten gains 10 points of<Defense>destructible defense<Defense> for 1 turn. The following turn, <SkillName>'Kunai Grenade'<SkillName> and <SkillName>'Heavenly Chain Disaster'<SkillName> <Improvements>will cost 1 less random chakra<Improvements>. This skill will be <Improvements>replaced<Improvements> by <SkillName>'Explosive Kunais Wave'<SkillName> for 1 turn.",
        descriptionBR:
          "Ao aprimorar suas armas, Tenten ganha 10 pontos de<Defense> defesa destrutível<Defense> por 1 turno. No turno seguinte, <SkillName>'Kunai Grenade'<SkillName> e <SkillName>'Heavenly Chain Disaster'<SkillName> irão <Improvements>custar 1 chakra Random a menos<Improvements>. Esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Explosive Kunais Wave'<SkillName> por 1 turno.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/4gqbQHh.png",
        themepic: "https://i.imgur.com/poj8M8O.jpg",
      },
      {
        name: "Kunai Grenade",
        themeName: "Kunai Grenade",
        description:
          "Tenten throws an explosive filled with kunais at the enemy team, <Damage>dealing 15 damage<Damage> to one enemy and <Damage>10 damage<Damage> to all other enemies. Any enemy that falls to <Defense>35 health<Defense> or <Defense>below<Defense> will also <Damage>receive 5 affliction damage<Damage>*.",
        descriptionBR:
          "Tenten lança um explosivo cheio de kunais na equipe inimiga, <Damage>causando 15 de dano<Damage> a um inimigo e <Damage>10 de dano<Damage> a todos os outros inimigos. Qualquer inimigo que estiver com <Defense>35 de vida<Defense> ou <Defense>menos<Defense> <Damage>receberá também 5 de dano aflitivo<Damage>*.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/g0ZItPe.png",
        themepic: "https://i.imgur.com/nKNWRKU.jpg",
      },
      {
        name: "Heavenly Chain Disaster",
        themeName: "Heavenly Chain Disaster",
        description:
          "Tenten rains blindingly fast projectiles upon the battlefield, <Damage>dealing 30 piercing damage<Damage> to all enemies.",
        descriptionBR:
          "Tenten lança projéteis extremamente rápidos no campo de batalha, <Damage>causando 30 de dano perfurante<Damage> a todos os inimigos.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/ooQdu9y.png",
        themepic: "https://i.imgur.com/ZVKo8hG.jpg",
      },
      {
        name: "Leaping Dodge",
        themeName: "Leaping Dodge",
        description:
          "This skill makes Tenten (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tenten (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9Q9R8e4.png",
        themepic: "https://i.imgur.com/NtMiFVH.jpg",
      },
      {
        name: "Explosive Kunais Wave",
        themeName: "Explosive Kunais Wave",
        description:
          "Tenten throws a wave of kunais with explosive tag on the enemy team, <Damage>dealing 10 affliction damage<Damage> to them. The following 3 turns, these enemies will be <Damage>dealt 5 affliction damage<Damage> each turn.",
        descriptionBR:
          "Tenten lança uma onda de kunais com selos explosivos na equipe inimiga, <Damage>causando 10 de dano aflitivo<Damage>. Nos 3 turnos seguintes, esses inimigos <Damage>receberão 5 de dano aflitivo<Damage> por turno.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/OPV7YPl.png",
        themepic: "https://i.imgur.com/3qrTAKq.png",
      },
    ],
  },
  {
    name: "Maito Gai (S)",
    url: "https://i.imgur.com/WKbKj3F.png",
    themepic: "https://i.imgur.com/AsfWa6J.jpg",
    description:
      "Team 9's Professor is back! Gai improved his techniques and strength much more. And now he will use all possible techniques to defeat Akatsuki. Whether releasing Hachimon Tonkou or using extreme taijutsu techniques.",
    descriptionBR:
      "O professor do Time 9 está de volta! Gai aprimorou muito suas técnicas e força. Agora ele usará todas as técnicas possíveis para derrotar a Akatsuki, seja liberando o Hachimon Tonkou ou utilizando técnicas extremas de taijutsu.",
    skills: [
      {
        name: "Gai Nunchaku Style",
        themeName: "Gai Nunchaku Style",
        description:
          "Gai <Damage>deals 10 damage<Damage> to one enemy for 3 turns. Whenever an enemy <Classes>uses a new physical or melee skill<Classes> on him, they will <Damage>take 15 damage<Damage>*. During this time, the target of this skill will <Improvements>receive 10 additional damage<Improvements> from <SkillName>'Reactive Taijutsu Rampage'<SkillName>.",
        descriptionBR:
          "Gai <Damage>causa 10 de dano<Damage> a um inimigo por 3 turnos. Sempre que um inimigo <Classes>usar uma nova habilidade Physical ou melee<Classes> contra ele, receberá <Damage>15 de dano<Damage>*. Durante esse tempo, o alvo desta habilidade <Improvements>receberá 10 de dano adicional<Improvements> do <SkillName>'Reactive Taijutsu Rampage'<SkillName>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Harmful", "Action", "Instant*"],
        cooldown: 1,
        url: "https://imgur.com/b1lPDCS.jpg",
        themepic: "https://i.imgur.com/SJJGAwR.jpg",
      },
      {
        name: "Gate Release",
        themeName: "Gate Release",
        description:
          "Gai release one gate per turn, gaining 10% of an <Defense>unpierceable damage reduction<Defense> and 5 <Defense>additional damage<Defense> each turn for 6 turns. During this time, he will take <Damage>5 affliction damage<Damage> and cannot be <Defense>healed<Defense>.This skill <Improvements>becomes<Improvements> <SkillName>'Asakuujaku'<SkillName> permanently.",
        descriptionBR:
          "Gai libera um portão por turno, ganhando 10% de <Defense>redução de dano impenetrável<Defense> e 5 de <Defense>dano adicional<Defense> a cada turno por 6 turnos. Durante esse tempo, ele <Damage>receberá 5 de dano aflitivo<Damage> e não poderá ser <Defense>curado<Defense>. Esta habilidade se <Improvements>transforma<Improvements> permanentemente em 'Asakuujaku'.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://imgur.com/qFZQDQS.jpg",
        themepic: "https://i.imgur.com/WvK89ge.jpg",
      },
      {
        name: "Reactive Taijutsu Rampage",
        themeName: "Reactive Taijutsu Rampage",
        description:
          "Gai <Damage>deals 25 damage<Damage> to one enemy. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
        descriptionBR:
          "Gai <Damage>causa 25 de dano<Damage> a um inimigo. Esta habilidade não pode ser <Classes>anulada<Classes> nem <Classes>refletida<Classes>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://imgur.com/PfWXjuX.jpg",
        themepic: "https://i.imgur.com/M7OmTHW.png",
      },
      {
        name: "Muscle Block",
        themeName: "Muscle Block",
        description:
          "This skill makes Maito Gai (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Maito Gai (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/cqGiKss.jpg",
        themepic: "https://i.imgur.com/cKVjQ7F.jpg",
      },
      {
        name: "Asakuujaku",
        themeName: "Asakuujaku",
        description:
          "Gai <Damage>deals 15 piercing damage<Damage> and <Damage>10 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their skills. This skill cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
        descriptionBR:
          "Gai <Damage>causa 15 de dano perfurante<Damage> e <Damage>10 de dano aflitivo<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades. Esta habilidade não pode ser <Classes>anulada<Classes> nem <Classes>refletida<Classes>.",
        energy: ["Tai", "Blood"],
        classes: [
          "Physical",
          "Melee",
          "Instant",
          "Harmful",
          "Affliction",
          "Unique",
        ],
        cooldown: 2,
        url: "https://imgur.com/yy5hWBz.jpg",
        themepic: "https://i.imgur.com/b4qJoqr.jpg",
      },
    ],
  },
  {
    name: "Akimichi Chouji (S)",
    url: "https://i.imgur.com/yOkMa5x.png",
    themepic: "https://i.imgur.com/MSFojqa.jpg",
    description:
      "After nearly three years, Chouji has grown into a reliable ninja and is now a chuunin. His appetite has grown and so has his body, but now he is truly mastering the Akimichi clan techniques.",
    descriptionBR:
      "Após quase três anos, Chouji se tornou um ninja confiável e agora é um chuunin. Seu apetite aumentou, assim como seu corpo, mas agora ele está realmente dominando as técnicas do clã Akimichi.",
    skills: [
      {
        name: "Mega Palm Thrusts",
        themeName: "Mega Palm Thrusts",
        description:
          "Expanding his arms for more inertia, Chouji <Damage>deals 30 damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>physical and melee<Classes> skills for 1 turn.",
        descriptionBR:
          "Expandindo seus braços para ganhar mais inércia, Chouji <Damage>causa 30 de dano<Damage> a um inimigo e <Effects>atordoa<Effects> as habilidades <Classes>Physical e melee<Classes> dele por 1 turno.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Pc3SHDn.png",
        themepic: "https://i.imgur.com/bvxqPWr.jpg",
      },
      {
        name: "Spiked Meat Tank",
        themeName: "Spiked Meat Tank",
        description:
          "If used on an enemy: That enemy will be <Damage>dealt 25 damage<Damage> and Chouji becomes <Defense>invulnerable<Defense> for 1 turn. If used on himself or an ally: For 1 turn, all <Classes>non-mental<Classes> skills used on that ally will be <Defense>countered<Defense> and any <Defense>countered<Defense> enemy will be <Damage>dealt 10 piercing damage<Damage>*; Invisible. (Cooldown: 2).",
        descriptionBR:
          "Se usada em um inimigo: o inimigo <Damage>receberá 25 de dano<Damage> e Chouji se tornará <Defense>invulnerável<Defense> por 1 turno. Se usada nele mesmo ou em um aliado: por 1 turno, todas as habilidades <Classes>não mentais<Classes> usadas nesse aliado serão <Defense>anuladas<Defense>, e qualquer inimigo anulado <Damage>receberá 10 de dano perfurante<Damage>*; Invisible. (Cooldown: 2).",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "__$"],
        cooldown: 1,
        url: "https://i.imgur.com/EwDVEsS.png",
        themepic: "https://i.imgur.com/21gTKtE.jpg",
      },
      {
        name: "Expansion Technique",
        themeName: "Expansion Technique",
        description:
          "Chouji grows gigantic, gaining 45 <Defense>destructible defense<Defense> for 3 turns. The following 3 turns, <SkillName>'Mega Palm Thrusts'<SkillName> will target all enemies and <SkillName>'Spiked Meat Tank'<SkillName><Improvements> will target all enemies<Improvements> or <Improvements>will target all allies<Improvements> if used on an ally.",
        descriptionBR:
          "Chouji cresce até se tornar gigante, ganhando 45 de <Defense>defesa destrutível<Defense> por 3 turnos. Nos 3 turnos seguintes, <SkillName>'Mega Palm Thrusts'<SkillName> irá atingir todos os inimigos e <SkillName>'Spiked Meat Tank'<SkillName> <Improvements>atingirá todos os inimigos<Improvements>, ou <Improvements>todos os aliados<Improvements> se usada em um aliado.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/dstCSmJ.png",
        themepic: "https://i.imgur.com/hSflbF7.jpg",
      },
      {
        name: "Chouji Leap",
        themeName: "Chouji Leap",
        description:
          "This skill makes Akimichi Chouji (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akimichi Chouji (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7df1cOL.png",
        themepic: "https://i.imgur.com/Sbuk4wY.jpg",
      },
    ],
  },
  {
    name: "Nara Shikamaru (S)",
    url: "https://i.imgur.com/DJ6gLqt.png",
    themepic: "https://i.imgur.com/ye2ieNu.jpg",
    description:
      "Once known to be one of the laziest ninja, Shikamaru has worked tireless to become not only stronger, but a leader too. More than ever before, Shikamaru excels at coming up with long winded and convoluted plans meant to defeat any enemies in his path.",
    descriptionBR:
      "Antes conhecido como um dos ninjas mais preguiçosos, Shikamaru trabalhou incansavelmente para se tornar não apenas mais forte, mas também um líder. Mais do que nunca, Shikamaru se destaca ao criar planos longos e complexos para derrotar qualquer inimigo em seu caminho.",
    skills: [
      {
        name: "Shadow Sewing",
        themeName: "Shadow Sewing",
        description:
          "Shikamaru sends several tendrils of shadow to one enemy, <Damage>dealing 35 damage<Damage> to them and <Effects>stunning<Effects> their <Classes>Physical and Chakra<Classes> skills for 1 turn. Afterwards, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Shadow Sewing - Hold'<SkillName> for 1 turn.",
        descriptionBR:
          "Shikamaru envia vários tentáculos de sombra para um inimigo, <Damage>causando 35 de dano<Damage> e <Effects>atordoando<Effects> as habilidades <Classes>Physical e Chakra<Classes> dele por 1 turno. Depois disso, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Shadow Sewing - Hold'<SkillName> por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/1eTGjYh.png",
        themepic: "https://i.imgur.com/EFQOCcj.jpg",
      },
      {
        name: "Long-Range Tactics",
        themeName: "Long-Range Tactics",
        description:
          "Shikamaru goes long. For 4 turns, each time Shikamaru <Classes>uses a new harmful skill<Classes>, he will become <Defense>invulnerable<Defense> for 1 turn. If Shikamaru receives new <Classes>non-affliction damage<Classes>, this skill will be <Defense>ignored<Defense> for 1 turn. The following 4 turns, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Final Explosion'<SkillName>.",
        descriptionBR:
          "Shikamaru vai de longe. Por 4 turnos, toda vez que Shikamaru  <Classes>usar uma novahabilidade ofensiva<Classes>, ele se tornará <Defense>invulnerável<Defense> por 1 turno. Se Shikamaru receber um novo <Classes>dano não aflitivo <Classes>, essa habilidade será <Defense>ignorada<Defense> por 1 turno. Nos 4 turnos seguintes, esta habilidade será <Improvements>substituída<Improvements> por <SkillName>'Final Explosion'<SkillName>.",
        energy: ["Tai"],
        classes: ["Physical", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/SkoW7Eb.png",
        themepic: "https://i.imgur.com/fK5QssV.jpg",
      },
      {
        name: "Expert Analysis",
        themeName: "Expert Analysis",
        description:
          "By carefully analyzing one enemy, Shikamaru figures out their weakness. For 3 turns, any time that enemy <Classes>uses a new skill<Classes> that enemy will be unable to become <Defense>invulnerable<Defense> or <Defense>reduce damage<Defense> and all <Classes>helpful counter<Classes> and <Classes>reflect<Classes> skills on them will be <Defense>ignored<Defense> for 1 turn. This skill is <Invisible>invisible<Invisible>",
        descriptionBR:
          "Ao analisar cuidadosamente um inimigo, Shikamaru descobre sua fraqueza. Por 3 turnos, sempre que esse inimigo <Classes>usar uma nova habilidade<Classes>, ele não poderá se tornar <Defense>invulnerável<Defense> ou <Defense>reduzir dano<Defense>, e todas as habilidades de <Classes>anular<Classes> e <Classes>reflexão beneficas<Classes> nele serão <Defense>ignoradas<Defense> por 1 turno. Esta habilidade é <Invisible>invisível<Invisible>",
        energy: [],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/EeUkfpQ.png",
        themepic: "https://i.imgur.com/vQWUgWo.jpg",
      },
      {
        name: "Panicked Dodge",
        themeName: "Panicked Dodge",
        description:
          "This skill makes Nara Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tZe7d8i.png",
        themepic: "https://i.imgur.com/Emf0hZc.jpg",
      },
      {
        name: "Shadow Sewing - Hold",
        themeName: "Shadow Sewing - Hold",
        description:
          "Shikamaru continues to maintain his technique, <Effects>stunning<Effects> the <Effects>physical and chakra<Effects> skills of the enemy affected by <SkillName>'Shadow Sewing'<SkillName> or this skill for 1 turn and <Damage>dealing 20 damage<Damage> to them. After that, this skill remains active on the enemy.",
        descriptionBR:
          "Shikamaru continua mantendo sua técnica, <Effects>atordoando<Effects> as habilidades <Effects>Physical e Chakra<Effects> do inimigo afetado por <SkillName>'Shadow Sewing'<SkillName> ou esta habilidade por 1 turno e <Damage>causando 20 de dano<Damage> a ele. Depois disso, esta habilidade permanece ativa no inimigo.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/YRBb3D8.png",
        themepic: "https://i.imgur.com/Zv1hl0O.jpeg",
      },
      {
        name: "Final Explosion",
        themeName: "Final Explosion",
        description:
          "Using his shadow technique, his analysis and his range, Shikamaru traps one enemy in a pit, and blows them up. One enemy affected by <SkillName>'Shadow Sewing'<SkillName> or <SkillName>'Shadow Sewing - Hold'<SkillName> and <SkillName>'Expert Analysis'<SkillName> while Shikamaru is <Defense>invulnerable<Defense> through <SkillName>'Long-Range Tactics'<SkillName> will <Damage>receive 100 damage<Damage>.",
        descriptionBR:
          "Usando sua técnica de sombra, sua análise e seu alcance, Shikamaru prende um inimigo em uma armadilha e o explode. Um inimigo afetado por <SkillName>'Shadow Sewing'<SkillName> ou <SkillName>'Shadow Sewing - Hold'<SkillName> e <SkillName>'Expert Analysis'<SkillName>, enquanto Shikamaru estiver <Defense>invulnerável<Defense> por <SkillName>'Long-Range Tactics'<SkillName>, <Damage>receberá 100 de dano<Damage>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/m4z05zN.png",
        themepic: "https://i.imgur.com/0tvaRqr.jpeg",
      },
    ],
  },
  {
    name: "Yamanaka Ino (S)",
    url: "https://i.imgur.com/6qdt23k.png",
    themepic: "https://i.imgur.com/lNZ0cUf.jpg",
    description:
      "In the past couple years Ino(s) has become a chuunin and improved her ability with her family's mind control techniques. During this time she also began learning rudimentary medical techniques.",
    descriptionBR:
      "Nos últimos anos, Ino se tornou uma chuunin e aprimorou sua habilidade com as técnicas de controle mental de sua família. Durante esse tempo, ela também começou a aprender técnicas médicas rudimentares.",
    skills: [
      {
        name: "Rudimentary Healing",
        themeName: "Rudimentary Healing",
        description:
          "Using her healing skills, Ino <Defense>heals<Defense> an ally for <Defense>20 health<Defense>. If Ino has <Classes>used any of her other skills<Classes> on the previous turn, this skill <Improvements>will heal 10 additional health<Improvements> instead.",
        descriptionBR:
          "Usando suas habilidades de cura, Ino <Defense>cura<Defense> um aliado em <Defense>20 de vida<Defense>. Se Ino tiver <Classes>usado uma de suas outras habilidades<Classes> no turno anterior, esta habilidade <Improvements>curará 10 de vida adicional<Improvements>.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/eTrzRC4.png",
        themepic: "https://i.imgur.com/K9eFwMh.jpg",
      },
      {
        name: "Proxy Surveillance",
        themeName: "Proxy Surveillance",
        description:
          "Ino predicts one enemy's move. For 1 turn, if this character <Classes>uses a new harmful skill<Classes>, it will be <Effects>delayed<Effects> by 2 turns. <Invisible>This skill is invisible.<Invisible>",
        descriptionBR:
          "Ino prevê o movimento de um inimigo. Por 1 turno, se esse personagem <Classes>usar uma nova habilidade ofensiva<Classes>, ela será <Effects>atrasada<Effects> em 2 turnos. <Invisible>Esta habilidade é invisível.<Invisible>",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/y3bJlyB.png",
        themepic: "https://i.imgur.com/hMOGSwx.jpeg",
      },
      {
        name: "Mind Body Switch",
        themeName: "Mind Body Switch",
        description:
          "Ino forces her mind into one enemy, <Damage>dealing 20 piercing damage<Damage> to them and <Effects>ending<Effects> any <Classe>harmful<Classe> skill activated by that enemy. Afterwards, that enemy will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Ino força sua mente dentro de um inimigo, <Damage>causando 20 de dano perfurante<Damage> e <Effects>encerrando<Effects> qualquer habilidade <Classe>ofensiva<Classe> ativada por esse inimigo. Em seguida, esse inimigo será <Effects>atordoado<Effects> por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/lSobTDI.pngs",
        themepic: "https://i.imgur.com/ZFeonI0.jpeg",
      },
      {
        name: "Hide",
        themeName: "Hide",
        description:
          "This skill makes Yamanaka Ino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamanaka Ino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GYxhrYp.png",
        themepic: "https://i.imgur.com/xDgta7h.jpeg",
      },
    ],
  },
  {
    name: "Sarutobi Asuma (S)",
    url: "https://i.imgur.com/PFcN7Rp.png",
    themepic: "https://i.imgur.com/3Eu0T5l.jpg",
    description:
      "Somehow continuing to avoid lung cancer, Asuma has remained the leader of Team 10 through the years. With the secret techniques of the fire temple, Asuma is able to attack and defend while waiting for the opportune moment to slice some heads off.",
    descriptionBR:
      "De alguma forma evitando o câncer de pulmão, Asuma continuou sendo o líder do Time 10 ao longo dos anos. Com as técnicas secretas do Templo do Fogo, Asuma é capaz de atacar e se defender enquanto espera o momento certo para decapitar seus inimigos.",
    skills: [
      {
        name: "Thousand-Armed Murder",
        themeName: "Thousand-Armed Murder",
        description:
          "Asuma gains 40 <Defense>destructible defense<Defense> and <Damage>instantly deals 25 damage<Damage> to one enemy. During this time, he can use this skill again <Improvements>for 1 random chakra<Improvements> to <Damage>deal 20 damage<Damage> to one enemy. When this skill <Effects>ends<Effects>, Asuma will be <Effects>unable<Effects> to use this skill for 1 turn.",
        descriptionBR:
          "Asuma ganha 40 de <Defense>defesa destrutível<Defense> e <Damage>causa instantaneamente 25 de dano<Damage> a um inimigo. Durante esse tempo, ele pode usar essa habilidade novamente <Improvements>por 1 chakra aleatório<Improvements> para <Damage>causar 20 de dano<Damage>. Quando esse efeito <Effects>terminar<Effects>, Asuma ficará <Effects>impossibilitado<Effects> de usar essa habilidade por 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/jNKJQur.png",
        themepic: "https://i.imgur.com/1EwBXs9.jpeg",
      },
      {
        name: "Ash Pile Burning",
        themeName: "Ash Pile Burning",
        description:
          "Asuma exhales a cloud of combustible ash on all enemies, <Effects>increasing the cooldown of their skills<Effects> by 1 turn. During this time, this skill will be <Improvements>replaced<Improvements> by <SkillName>'Ash Pile Burning - Ignite'<SkillName>.",
        descriptionBR:
          "Asuma exala uma nuvem de cinzas combustíveis em todos os inimigos, <Effects>aumentando o tempo de recarga das habilidades<Effects> deles em 1 turno<. Durante esse tempo, essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Ash Pile Burning - Ignite'<SkillName>.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/51JwKbr.png",
        themepic: "https://i.imgur.com/fQkn8Fp.jpg",
      },
      {
        name: "Decapitate",
        themeName: "Decapitate",
        description:
          "Showing no mercy, Asuma targets one enemy, and if that enemy's <Defense>health<Defense> is <Defense>25 or less<Defense>, he will <Effects>instantly kill that enemy<Effects>. This skill <Classes>ignores invulnerability<Classes> and cannot be <Classes>countered<Classes> or <Classes>reflected<Classes>.",
        descriptionBR:
          "Sem mostrar piedade, Asuma mira em um inimigo, e se a <Defense>vida<Defense> desse inimigo for <Defense>25 ou menos<Defense>, ele o <Effects>matará instantaneamente<Effects>. Esta habilidade <Classes>ignora invulnerabilidade<Classes> e não pode ser <Classes>anulada<Classes> ou <Classes>refletida<Classes>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/QgXg9fS.png",
        themepic: "https://i.imgur.com/6xC9ebd.jpg",
      },
      {
        name: "Asuma Evasion",
        themeName: "Asuma Evasion",
        description:
          "This skill makes Sarutobi Asuma (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sarutobi Asuma (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/K0um1gq.png",
        themepic: "https://i.imgur.com/CnaiBNk.jpg",
      },
      {
        name: "Ash Pile Burning - Ignite",
        themeName: "Ash Pile Burning - Ignite",
        description:
          "Asuma lights up the ash on the battlefield, dealing <Damage>10 affliction damage<Damage> to all enemies for each stack of <SkillName>'Ash Pile Cloud'<SkillName> on them. This skill will <Effects>end<Effects> <SkillName>'Ash Pile Cloud'<SkillName> and it cannot be <Classes>countered<Classes> or <Classes>reflected<Classes> and <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Asuma incendeia as cinzas no campo de batalha, causando <Damage>10 de dano aflitivo<Damage> a todos os inimigos para cada acúmulo de <SkillName>'Ash Pile Cloud'<SkillName> neles. Essa habilidade <Effects>encerrará<Effects> <SkillName>'Ash Pile Cloud'<SkillName> e não pode ser <Classes>anulada<Classes>, <Classes>refletida<Classes> e <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/hjg9FWz.png",
        themepic: "https://i.imgur.com/jhfyHoy.jpeg",
      },
    ],
  },
  {
    name: "Hyuuga Hinata (S)",
    url: "https://i.imgur.com/UgFmcJC.png",
    themepic: "https://i.imgur.com/rrZxc8A.jpg",
    description:
      "Hinata(s) has taken the lessons she learned during the chuunin exam, and Naruto's words of support to heart in the last couple years. She has matured greatly as a ninja, the heir to the Hyuuga clan, and as a woman.",
    descriptionBR:
      "Hinata (S) levou a sério as lições aprendidas durante o exame chuunin e as palavras de apoio de Naruto nos últimos anos. Ela amadureceu muito como ninja, como herdeira do clã Hyuuga e como mulher.",
    skills: [
      {
        name: "Gentle Step Twin Lions Fist",
        themeName: "Gentle Step Twin Lions Fist",
        description:
          "Hinata creates two chakra lions and attacks an enemy, dealing <Damage>30 piercing damage<Damage> to them and <Effects>removing 1 random chakra<Effects> from them. The following turn, <SkillName>'Pressure Point Closure'<SkillName> will <Effects>stun<Effects> for 1 turn.",
        descriptionBR:
          "Hinata cria dois leões de chakra e ataca um inimigo, causando <Damage>30 de dano perfurante<Damage> e <Effects>removendo 1 chakra aleatório<Effects> dele. No turno seguinte, <SkillName>'Pressure Point Closure'<SkillName> irá <Effects>atordoar<Effects> por 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/8FLF4CK.png",
        themepic: "https://i.imgur.com/8FLF4CK.png",
      },
      {
        name: "Eight Trigrams Thirty Two Palms",
        themeName: "Eight Trigrams Thirty Two Palms",
        description:
          "Hinata uses a lesser form of eight trigram sixty four palms, <Damage>dealing 30 piercing damage<Damage> to one enemy and <Effects>stunning<Effects> their non-mental skills for 1 turn. The following turn, <SkillName>'Pressure Point Closure'<SkillName> will <Effects>remove 1 random chakra<Effects>.",
        descriptionBR:
          "Hinata usa uma forma reduzida dos Oito Trigramas Sessenta e Quatro Palmas, causando <Damage>30 de dano perfurante<Damage> a um inimigo e <Effects>atordoando<Effects> suas habilidades não-Mental por 1 turno. No turno seguinte, <SkillName>'Pressure Point Closure'<SkillName> <Effects>removerá 1 chakra aleatório<Effects>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/xx8r4gO.png",
        themepic: "https://i.imgur.com/XOytzeV.jpg",
      },
      {
        name: "Pressure Point Closure",
        themeName: "Pressure Point Closure",
        description:
          "Hinata closes an enemy's pressure point, <Damage>dealing 20 damage<Damage> to them.",
        descriptionBR:
          "Hinata fecha um dos pontos de pressão de um inimigo, <Damage>causando 20 de dano<Damage>.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/O5hJAUF.png",
        themepic: "https://i.imgur.com/FHkHjDN.jpg",
      },
      {
        name: "Byakugan Sight",
        themeName: "Byakugan Sight",
        description:
          "This skill makes Hyuuga Hinata (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hinata (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/JikfyqH.png",
        themepic: "https://i.imgur.com/lckWH5w.jpg",
      },
    ],
  },
  {
    name: "Aburame Shino (S)",
    url: "https://i.imgur.com/tTKpPqk.png",
    themepic: "https://i.imgur.com/z5tk6Uy.jpg",
    description:
      "Still as mysterious and secretive as ever, Shino has improved greatly over the years, learning and practicing with his loyal bugs. With his new found mastery, Shino can disable enemies even harder while slowly waiting for his bugs to erupt from their bodies and destroy them.",
    descriptionBR:
      "Ainda tão misterioso e reservado como sempre, Shino melhorou muito ao longo dos anos, aprendendo e praticando com seus leais insetos. Com sua nova maestria, Shino pode desabilitar inimigos ainda mais enquanto espera lentamente seus insetos explodirem de seus corpos para destruí-los.",
    skills: [
      {
        name: "Insect Swarm",
        themeName: "Insect Swarm",
        description:
          "Shino sends out wave of his insect army at one enemy, <Damage>dealing 15 affliction damage<Damage> to them for 3 turns. The following 3 turns, that enemy will be <Defense>invulnerable<Defense> to all <Classes>friendly skills<Classes> each turn and during this time this skill will be <Improvements>replaced<Improvements> by <SkillName>'Insect Consumption'<SkillName>.",
        descriptionBR:
          "Shino envia uma onda de seu exército de insetos para um inimigo, <Damage>causando 15 de dano aflitivo<Damage> por 3 turnos. Nos 3 turnos seguintes, esse inimigo ficará <Defense>invulnerável<Defense> a todas as <Classes>habilidades benéficas<Classes> a cada turno e durante esse tempo essa habilidade será <Improvements>substituída<Improvements> por <SkillName>'Insect Consumption'<SkillName>.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Unique", "Action", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/FcaqanX.png",
        themepic: "https://i.imgur.com/uS36iK7.jpg",
      },
      {
        name: "Insect Barricade",
        themeName: "Insect Barricade",
        description:
          "The following turn, the first <Classes>new harmful skill<Classes> used on himself or one ally will be <Defense>countered<Defense>, <SkillName>'Parasitic Giant Beetle Infestation'<SkillName> will be placed on the countered enemy and then activated. If this skill does <Defense>not counter<Defense> an enemy, Shino will <Effects>gain 1 Bloodline chakra<Effects>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "No turno seguinte, a primeira <Classes>nova habilidade ofensiva<Classes> usada contra ele ou um aliado será <Defense>anulada<Defense>, <SkillName>'Parasitic Giant Beetle Infestation'<SkillName> será aplicada no inimigo anulado e ativada. Se essa habilidade <Defense>não anular<Defense> um inimigo, Shino<Effects> ganhará 1 chakra Bloodline<Effects>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Blood"],
        classes: ["Chakra", "Unique", "Instant", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/JIRZUb3.png",
        themepic: "https://i.imgur.com/E6Gmm5T.jpg",
      },
      {
        name: "Parasitic Giant Beetle Infestation",
        themeName: "Parasitic Giant Beetle Infestation",
        description:
          "Shino infects one enemy with a small bug. 3 turns after this skill has been used, the bug bursts out, <Damage>dealing 30 affliction damage<Damage> to them and <Effects>activating<Effects> all other <Effects>copies<Effects> of this skill on that enemy. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Shino infecta um inimigo com um pequeno inseto. 3 turnos após essa habilidade ser usada, o inseto explode, <Damage>causando 30 de dano aflitivo<Damage> e <Effects>ativando<Effects> todas as outras <Effects>cópias<Effects> dessa habilidade naquele inimigo. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/c5NaVkK.png",
        themepic: "https://i.imgur.com/c5NaVkK.png",
      },
      {
        name: "Insect Cocoon",
        themeName: "Insect Cocoon",
        description:
          "This skill makes Aburame Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Aburame Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Ae7nPxG.png",
        themepic: "https://i.imgur.com/MmvNDkb.jpg",
      },
      {
        name: "Insect Consumption",
        themeName: "Insect Consumption",
        description:
          "Shino commands his insects to drain the chakra of one enemy affected by <SkillName>'Insect Swarm'<SkillName> <Effects>stealing 1 random chakra<Effects> from them and <Improvements>increasing the damage that enemy receives<Improvements> from <SkillName>'Insect Swarm'<SkillName> by 5 that turn.",
        descriptionBR:
          "Shino ordena que seus insetos drenem o chakra de um inimigo afetado por <SkillName>'Insect Swarm'<SkillName>, <Effects>roubando 1 chakra aleatório<Effects> e <Improvements>aumentando o dano que esse inimigo recebe<Improvements> de <SkillName>'Insect Swarm'<SkillName> em 5 naquele turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Unique", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/w0m7Tt8.png",
        themepic: "https://i.imgur.com/8d2GnOq.jpg",
      },
    ],
  },
  {
    name: "Inuzuka Kiba (S)",
    url: "https://i.imgur.com/Rclcwro.png",
    themepic: "https://i.imgur.com/2iNZhKw.jpg",
    description:
      "After two years, Kiba finally becomes a chuunin. Now with Akamaru grown up, they become an unbeatable fighting unit, taking the Inuzuka clan's techniques to the next level. Now both have more precision for massive attacks, and an even sharper sense of smell.",
    descriptionBR:
      "Após dois anos, Kiba finalmente se torna um chuunin. Agora com Akamaru crescido, eles se tornam uma unidade de combate imbatível, elevando as técnicas do clã Inuzuka a outro nível. Ambos agora têm mais precisão para ataques massivos e um olfato ainda mais apurado.",
    skills: [
      {
        name: "Man Beast Clone",
        themeName: "Man Beast Clone",
        description:
          "Kiba grant himself and one ally 5 <Defense>damage reduction<Defense>. If Kiba use a <Classes>new harmful skill<Classes>, that ally gains 10 <Defense>destructible defense<Defense> for 1 turn. If that ally uses a  <Classes>new harmful skill <Classes>, Kiba <Improvements>gains 5 additional non affliction damage<Improvements> for 1 turn; Doesn't stack. Becomes <SkillName>'Enhanced Garouga'<SkillName>, cannot be <Classes>removed<Classes>.",
        descriptionBR:
          "Kiba concede a si mesmo e a um aliado 5 de <Defense>redução de dano<Defense>. Se Kiba usar uma <Classes>nova habilidade ofensiva<Classes>, esse aliado ganha 10 de <Defense>defesa destrutível<Defense> por 1 turno. Se esse aliado usar  <Classes>uma nova habilidade ofensiva <Classes>, Kiba <Improvements>ganha 5 de dano adicional não aflitivo<Improvements> por 1 turno. Torna-se <SkillName>'Enhanced Garouga'<SkillName>, não pode ser <Classes>removido<Classes>.",
        energy: [],
        classes: ["Chakra", "Instant", "Helpful"],
        cooldown: 0,
        url: "https://imgur.com/XyV1UFl.jpg",
        themepic: "https://i.imgur.com/IdUdwWj.jpg",
      },
      {
        name: "Piercing Fang",
        themeName: "Piercing Fang",
        description:
          "Kiba <Damage>deals 20 piercing damage<Damage> to one enemy. For 1 turn, Kiba will <Defense>ignore stun effects<Defense> and his other skills will cost <Improvements>1 random chakra less<Improvements>.",
        descriptionBR:
          "Kiba <Damage>causa 20 de dano perfurante<Damage> a um inimigo. Por 1 turno, Kiba irá <Defense>ignorar efeitos atordoantes<Defense> e suas outras habilidades custarão <Improvements>1 chakra aleatório a menos<Improvements>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful", "Unique"],
        cooldown: 0,
        url: "https://imgur.com/wWIV1As.jpg",
        themepic: "https://i.imgur.com/bPXkjGM.jpg",
      },
      {
        name: "Fang Over Fang",
        themeName: "Fang Over Fang",
        description:
          "Kiba <Damage>deals 20 damage<Damage> to all enemies this turn. For 2 turns, Kiba will <Improvements>deal 5 more damage<Improvements> on them.",
        descriptionBR:
          "Kiba <Damage>causa 20 de dano<Damage> a todos os inimigos neste turno. Por 2 turnos, Kiba <Improvements>causará 5 de dano a mais<Improvements> neles.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/h5jyqO0.png",
        themepic: "https://i.imgur.com/DbJ8U8z.jpg",
      },
      {
        name: "Hide in the Shade",
        themeName: "Hide in the Shade",
        description:
          "This skill makes Inuzuka Kiba (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Inuzuka Kiba (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/FYMv2pb.png",
        themepic: "https://i.imgur.com/imW0jUY.jpg",
      },
      {
        name: "Enhanced Garouga",
        themeName: "Enhanced Garouga",
        description:
          "Kiba <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> all other enemies <Classes>Harmful<Classes> for 1 turn.",
        descriptionBR:
          "Kiba <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as habilidades <Classes>Harmful<Classes> de todos os outros inimigos por 1 turno.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful", "Unique"],
        cooldown: 2,
        url: "https://imgur.com/3tg3QXE.jpg",
        themepic: "https://imgur.com/3tg3QXE.jpg",
      },
    ],
  },
  {
    name: "Yamashiro Aoba (S)",
    url: "https://i.imgur.com/DSILjJ6.png",
    themepic: "https://i.imgur.com/iJ4OAyP.jpg",
    description:
      "Aoba is one of the special jounins of the Hidden Leaf Village. By summoning crows, he is able to distract enemies, protect allies, and all while disguising himself among them to create openings for stealth attacks. In addition, Aoba is also able to penetrate the minds of his enemies to obtain information.",
    descriptionBR:
      "Aoba é um dos jounins especiais da Vila Oculta da Folha. Invocando corvos, ele consegue distrair inimigos, proteger aliados e, ao mesmo tempo, se disfarçar entre eles para criar aberturas para ataques furtivos. Além disso, Aoba também consegue penetrar nas mentes de seus inimigos para obter informações.",
    skills: [
      {
        name: "Crow Assault",
        themeName: "Crow Assault",
        description:
          "Aoba <Damage>deals 5 damage<Damage> to all enemies for 4 turns. All Aoba team will also gain 5 <Defense>damage reduction points<Defense> for 4 turns.",
        descriptionBR:
          "Aoba <Damage>causa 5 de dano<Damage> a todos os inimigos por 4 turnos. Toda a equipe de Aoba também ganhará 5 <Defense>pontos de redução de dano<Defense> por 4 turnos.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Action"],
        cooldown: 0,
        url: "https://i.imgur.com/2VvTqS9.png",
        themepic: "https://i.imgur.com/9JvT1QJ.png",
      },
      {
        name: "Crow Convergence",
        themeName: "Crow Convergence",
        description:
          "Aoba targets one enemy, making them unable to <Defense>reduce damage<Defense> or become <Defense>invulnerable<Defense> and <Damage>dealing 30 damage<Damage> to them for 1 turn. For 3 turns, that enemy will take <Improvements>5 additional mental damage<Improvements>.",
        descriptionBR:
          "Aoba primeiro torna um inimigo incapaz de <Defense>reduzir dano<Defense> ou ficar <Defense>invulnerável<Defense> e <Damage>causa 30 de dano<Damage> nele por 1 turno. Por 3 turnos, esse inimigo <Improvements>receberá 5 de dano mental adicional<Improvements>.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/N4Z04FG.png",
        themepic: "https://i.imgur.com/N4Z04FG.png",
      },
      {
        name: "Chakra Imbued Kunai",
        themeName: "Chakra Imbued Kunai",
        description:
          "Aoba targets one enemy for 2 turns. If a new skill that has <Defense>counter<Defense>, <Defense>reflect<Defense>, or <Defense>invulnerability<Defense> is used on that enemy, they will <Defense>ignore<Defense> <Classes>helpful<Classes> effects for 1 turn. While active, that enemy will <Improvements>receive 10 additional damage<Improvements> from Aoba's skills. <Invisible>This skill is invisible<Invisible> and <Effects>ends<Effects> when triggered.",
        descriptionBR:
          "Aoba mira um inimigo por 2 turnos. Se uma nova habilidade de <Defense>anular<Defense>, <Defense>refletir<Defense> ou <Defense>invulnerabilidade<Defense> for usada nesse inimigo, ele <Defense>ignorará<Defense> efeitos <Classes>benéficos<Classes> por 1 turno. Enquanto ativa, esse inimigo <Improvements>recebe 10 de dano adicional<Improvements> das habilidades de Aoba. <Invisible>Esta habilidade é invisível<Invisible> e <Effects>termina<Effects> quando acionada.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/p7dKbjA.jpg",
        themepic: "https://imgur.com/p7dKbjA.jpg",
      },
      {
        name: "Crow Smoke Screen",
        themeName: "Crow Smoke Screen",
        description:
          "This skill makes Yamashiro Aoba (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamashiro Aoba (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/q5wXgcr.jpg",
        themepic: "https://imgur.com/q5wXgcr.jpg",
      },
    ],
  },
  {
    name: "Izumo and Kotetsu (S)",
    url: "https://i.imgur.com/9zd3jpv.jpg",
    themepic: "https://i.imgur.com/wU35Vhd.jpg",
    description:
      "Part of the Nijuu Shoutai, Izumo and Kotetsu are almost always found together and work together excellently as a combat team.",
    descriptionBR:
      "Parte do Nijuu Shoutai, Izumo e Kotetsu quase sempre aparecem juntos e trabalham em equipe com excelência no combate.",
    skills: [
      {
        name: "Mace Crush",
        themeName: "Mace Crush",
        description:
          "Kotetsu summons a giant mace and slams it against one enemy, <Damage>dealing 30 damage<Damage> to them. This skill will <Improvements>deal 10 more damage<Improvements> if the enemy has been <Effects>stunned<Effects> by the <SkillName>'Starch Syrup Capturing Field'<SkillName>.",
        descriptionBR:
          "Kotetsu invoca um enorme porrete e o golpeia contra um inimigo, <Damage>causando 30 de dano<Damage>. Esta habilidade <Improvements>causará 10 de dano adicional<Improvements> se o inimigo estiver <Effects>atordoado<Effects> pelo <SkillName>'Starch Syrup Capturing Field'<SkillName>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 0,
        url: "https://i.imgur.com/st09j1g.jpg",
        themepic: "https://i.imgur.com/w4K54OY.jpg",
      },
      {
        name: "Starch Syrup Capturing Field",
        themeName: "Starch Syrup Capturing Field",
        description:
          "Izumo Spits out a field of sticky skyrup making it harder for the enemy team to move around. For 2 turns, any enemy that <Classes>uses a new non-mental skill<Classes>, including Affliction as a separated class, will have that specif class of skill <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Izumo cospe um campo de xarope pegajoso dificultando o movimento do time inimigo. Por 2 turnos, qualquer inimigo que <Classes>usar uma nova habilidade não-mental<Classes>, incluindo Affliction como uma classe separada, terá a classe específica da habilidade <Effects>atordoada<Effects> por 1 turno.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/I2M3m7i.jpg",
      },
      {
        name: "Devastate",
        themeName: "Devastate",
        description:
          "Izumo moves to hit an enemy from the left. For the next 3 turns, if <SkillName>'Annihilate'<SkillName> is used on that target, they will <Damage>take 65 damage<Damage>.",
        descriptionBR:
          "Izumo se move para golpear um inimigo pela esquerda. Nos próximos 3 turnos, se <SkillName>'Annihilate'<SkillName> for usado nesse alvo, ele <Damage>receberá 65 de dano<Damage>.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 2,
        url: "https://i.imgur.com/W5VuH7m.jpg",
      },
      {
        name: "Tag Team",
        themeName: "Tag Team",
        description:
          "Izumo swap, exchanging his <Defense>health points<Defense> for Kotetsu's. If Izumo or Kotetsu is <Classes>killed<Classes> during this time, the other will take permanent control. During this period, <SkillName>'Devastate'<SkillName> will be replaced by <SkillName>'Annihilate'<SkillName>. This skill can be used again to <Classes>exchange<Classes> <Defense>health points<Defense>. This skill cannot be <Classes>ignored<Classes> or <Classes>removed<Classes>.",
        descriptionBR:
          "Izumo troca seus <Defense>pontos de vida<Defense> pelos de Kotetsu. Se Izumo ou Kotetsu <Classes>morrer<Classes> durante esse período, o outro assumirá o controle permanente. Durante esse tempo, <SkillName>'Devastate'<SkillName> será substituído por <SkillName>'Annihilate'<SkillName>. Esta habilidade pode ser usada novamente para <Classes>trocar<Classes> <Defense>pontos de vida<Defense>. Esta habilidade não pode ser <Classes>ignorada<Classes> ou <Classes>removida<Classes>.",
        energy: ["Random"],
        classes: ["Instant", "Unique", "CanOnlyBeStunnedByHelpfulStuns"],
        cooldown: 0,
        url: "https://i.imgur.com/gDCDUMD.jpg",
      },
      {
        name: "Annihilate",
        themeName: "Annihilate",
        description:
          "Kotetsu moves to hit an enemy from the right. For the next 3 turns, if <SkillName>'Devastate'<SkillName> is used on that target, they will <Damage>take 65 damage<Damage>.",
        descriptionBR:
          "Kotetsu se move para golpear um inimigo pela direita. Nos próximos 3 turnos, se <SkillName>'Devastate'<SkillName> for usado nesse alvo, ele <Damage>receberá 65 de dano<Damage>.",
        energy: ["Tai"],
        classes: ["Physical", "Instant", "Melee"],
        cooldown: 2,
        url: "https://i.imgur.com/gFhN8WU.png",
      },
    ],
  },
  {
    name: "Inuzuka Tsume (S)",
    url: "https://i.imgur.com/IIeGmwW.png",
    themepic: "https://i.imgur.com/PFbYHvU.png",
    description:
      "A Konoha jounin, a member of the Inuzuka clan, and the mother of Kiba, Tsume, much like her son, is a wild and impatient woman with an often odd sense of humor. Like other members of her clan, Tsume fights one with her companion, Kuromaru, while allowing her wild instincts to take over.",
    descriptionBR:
      "Jounin de Konoha, membro do clã Inuzuka e mãe de Kiba, Tsume é, assim como seu filho, uma mulher selvagem, impaciente e com um senso de humor peculiar. Como os outros membros de seu clã, ela luta em sincronia com seu companheiro Kuromaru, permitindo que seus instintos selvagens assumam o controle.",
    skills: [
      {
        name: "Summon Kuromaru",
        themeName: "Summon Kuromaru",
        description:
          "Tsume calls Kuromaru to aid her. The following 4 turns, she will gain 50% points of damage reduction. During this time, this skill will be replaced by 'Fierce Bite' and any enemy that uses a new harmful non-affliction skill on Tsume will receive 10 damage.",
        descriptionBR:
          "Tsume chama Kuromaru para ajudá-la. Pelos próximos 4 turnos, ela receberá 50% de redução de dano. Durante esse tempo, esta habilidade será substituída por 'Fierce Bite' e qualquer inimigo que usar uma nova habilidade ofensiva não aflitiva contra Tsume receberá 10 de dano.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BxSvfpG.png",
        themepic: "https://i.imgur.com/wnSKNbk.png",
      },
      {
        name: "Passing Fang",
        themeName: "Passing Fang",
        description:
          "Tsume spins, dealing 15 piercing damage to one enemy for 2 turns. All stun skills that enemy uses will also be decreased by 2 turns. If 'Summon Kuromaru' is active, this skill will deal 5 additional damage.",
        descriptionBR:
          "Tsume gira, causando 15 de dano perfurante a um inimigo por 2 turnos. Todas as habilidades de atordoamento que esse inimigo usar terão sua duração reduzida em 2 turnos. Se 'Summon Kuromaru' estiver ativo, esta habilidade causará 5 de dano adicional.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 0,
        url: "https://i.imgur.com/53f8q2Q.png",
        themepic: "https://i.imgur.com/oaDb2oO.png",
      },
      {
        name: "Flashbang",
        themeName: "Flashbang",
        description:
          "Tsume covers herself and her allies, making them invulnerable to all non-affliction skills for 1 turn. Tsume only carries 3 of these grenades with her at all times, so this skill can only be used three times in a game.",
        descriptionBR:
          "Tsume protege a si mesma e seus aliados, tornando-os invulneráveis a todas as habilidades não aflitivas por 1 turno. Tsume carrega apenas 3 dessas granadas, então esta habilidade só pode ser usada três vezes por partida.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/P1Y9n3z.png",
        themepic: "https://i.imgur.com/sHbwAPc.png",
      },
      {
        name: "Man-Beast Defense",
        themeName: "Man-Beast Defense",
        description:
          "This skill makes Inuzuka Tsume (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Inuzuka Tsume (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UmQRaHZ.png",
        themepic: "https://i.imgur.com/fAZfHgy.png",
      },
      {
        name: "Fierce Bite",
        themeName: "Fierce Bite",
        description:
          "Kuromaru jumps at one enemy dealing 25 damage which ignores invulnerability. If that enemy dies this turn, then for 2 turns Tsume will have her damage increased by 10, will ignore all stun effects and cannot be killed.",
        descriptionBR:
          "Kuromaru salta sobre um inimigo causando 25 de dano que ignora invulnerabilidade. Se esse inimigo morrer neste turno, então por 2 turnos Tsume terá seu dano aumentado em 10, ignorará todos os efeitos de atordoamento e não poderá ser morta.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/sjrxK3l.png",
        themepic: "https://i.imgur.com/sjrxK3l.png",
      },
    ],
  },
  {
    name: "Yamanaka Inoichi (S)",
    url: "https://i.imgur.com/LWxD0ty.jpg",
    themepic: "https://i.imgur.com/LWxD0ty.jpg",
    description:
      "Yamanaka Inoichi (S) is the father of Ino and the leader of the Yamanaka clan. He is a jounin and a member of the Konoha interrogation squad.",
    descriptionBR:
      "Yamanaka Inoichi (S) é o pai da Ino e o líder do clã Yamanaka. Ele é um jounin e membro da equipe de interrogatório de Konoha.",
    skills: [
      {
        name: "Mental Barrier",
        themeName: "Mental Barrier",
        description:
          "Inoichi (S) puts up his Mental Barrier. For 2 turns one enemy's skills will <Effects>cost 1 additional random chakra<Effects> and Inoichi will be <Defense>invulnerable<Defense> to <Classes>ranged<Classes> skills. During this time Inoichi (S) will gain 25% <Defense>damage reduction<Defense> and <SkillName>'Telepathy'<SkillName> will be <Improvements>improved<Improvements>.",
        descriptionBR:
          "Inoichi (S) ergue sua Barreira Mental. Por 2 turnos, as habilidades de um inimigo <Effects>custarão 1 chakra aleatório adicional<Effects> e Inoichi ficará <Defense>invulnerável<Defense> a habilidades do tipo <Classes>ranged<Classes>. Durante esse tempo, Inoichi (S) receberá 25% de <Defense>redução de dano<Defense> e a habilidade <SkillName>'Telepathy'<SkillName> será <Improvements>aprimorada<Improvements>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 3,
        url: "https://i.imgur.com/4rvW1jp.jpg",
        themepic: "https://i.imgur.com/4rvW1jp.jpg",
      },
      {
        name: "Mind Probe",
        themeName: "Mind Probe",
        description:
          "Inoichi (S) uses Mind Probe. For 1 turn the <Classes>first enemy skill<Classes> that targets Inoichi (S) will be <Defense>reflected<Defense>. <Defense>This skill is invisible<Defense>. The following turn <SkillName>'Telepathy'<SkillName> will be <Improvements>improved<Improvements> and will <Improvements>deal an additional 10 damage<Improvements>.",
        descriptionBR:
          "Inoichi (S) usa Mind Probe. Por 1 turno, a <Classes>primeira habilidade ofensiva<Classes> que atingir Inoichi (S) será <Defense>refletida<Defense>. <Defense>Esta habilidade é invisível<Defense>. No turno seguinte, <SkillName>'Telepathy'<SkillName> será <Improvements>aprimorada<Improvements> e <Improvements>causará 10 de dano adicional<Improvements>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/GC9TAYc.jpg",
        themepic: "https://i.imgur.com/GC9TAYc.jpg",
      },
      {
        name: "Telepathy",
        themeName: "Telepathy",
        description:
          "Inoichi (S) uses his mind to <Damage>deal 25 damage<Damage> to one enemy. During <SkillName>'Mental Barrier'<SkillName> this skill will <Damage>deal 25 piercing damage<Damage> instead and will have <Improvements>no cooldown<Improvements>.",
        descriptionBR:
          "Inoichi (S) usa sua mente para <Damage>causar 25 de dano<Damage> a um inimigo. Durante <SkillName>'Mental Barrier'<SkillName>, esta habilidade <Damage>causará 25 de dano perfurante<Damage> e <Improvements>não terá tempo de recarga<Improvements>.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/Al0RYvz.jpg",
        themepic: "https://i.imgur.com/Al0RYvz.jpg",
      },
      {
        name: "Stiff Arm",
        themeName: "Stiff Arm",
        description:
          "This skill makes Yamanaka Inoichi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yamanaka Inoichi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/2JBI0Vh.jpg",
        themepic: "https://i.imgur.com/2JBI0Vh.jpg",
      },
    ],
  },
  {
    name: "Morino Ibiki (S)",
    url: "https://i.imgur.com/cZN19Fg.jpg",
    themepic: "https://i.imgur.com/cZN19Fg.jpg",
    description:
      "Morino Ibiki (S) is a jounin and the designer of the chuunin exams. He is the leader of the Konoha interrogation squad.",
    descriptionBR:
      "Morino Ibiki (S) é um jounin e o idealizador dos exames chuunin. Ele é o líder da equipe de interrogatório de Konoha.",
    skills: [
      {
        name: "Iron Maiden Summoning",
        themeName: "Iron Maiden Summoning",
        description:
          "Ibiki (S) uses Iron Maiden Summoning on one enemy. That enemy will be dealt 25 piercing damage and have their physical and ranged skills stunned for 1 turn.",
        descriptionBR:
          "Ibiki (S) invoca a Donzela de Ferro sobre um inimigo. Esse inimigo receberá 25 de dano perfurante e suas habilidades do tipo Physical e ranged serão atordoadas por 1 turno.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/EXtcS9K.jpg",
        themepic: "https://i.imgur.com/EXtcS9K.jpg",
      },
      {
        name: "Torture Chamber Summoning",
        themeName: "Torture Chamber Summoning",
        description:
          "Ibiki (S) uses his Torture Chamber Summoning. For 3 turns Ibiki (S) grant his team 10 points of destructible defense and one enemy will be invulnerable to new friendly skills. Interrogation can be used on that enemy during this skill.",
        descriptionBR:
          "Ibiki (S) usa sua Invocação da Câmara de Tortura. Por 3 turnos, Ibiki (S) concede 10 pontos de defesa destrutível à sua equipe, e um inimigo se tornará invulnerável a novas habilidades benéficas. Interrogation pode ser usada nesse inimigo durante este efeito.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/j0rwu9e.jpg",
        themepic: "https://i.imgur.com/j0rwu9e.jpg",
      },
      {
        name: "Interrogation",
        themeName: "Interrogation",
        description:
          "Ibiki (S) uses Interrogation on one enemy effected by Torture Chamber Summoning dealing 20 damage. Ibiki (S) gains 5 permanent destructible defense when this skill is used.",
        descriptionBR:
          "Ibiki (S) usa Interrogation em um inimigo afetado por Torture Chamber Summoning, causando 20 de dano. Ibiki (S) ganha 5 de defesa destrutível permanente ao usar esta habilidade.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5xm2RZC.jpg",
        themepic: "https://i.imgur.com/5xm2RZC.jpg",
      },
      {
        name: "Sliding Evasion",
        themeName: "Sliding Evasion",
        description:
          "This skill makes Morino Ibiki (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Morino Ibiki (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/HbhUFbp.jpg",
        themepic: "https://i.imgur.com/HbhUFbp.jpg",
      },
    ],
  },
  {
    name: "Akimichi Chouza (S)",
    url: "https://i.imgur.com/U2UtnIs.jpg",
    themepic: "https://i.imgur.com/U2UtnIs.jpg",
    description:
      "Akimichi Chouza (S) is the leader of the Akimichi clan and the father of Chouji. He is a jounin and he is skilled in all of his clan's secret techniques.",
    descriptionBR:
      "Akimichi Chouza (S) é o líder do clã Akimichi e pai de Chouji. Ele é um jounin habilidoso em todas as técnicas secretas de seu clã.",
    skills: [
      {
        name: "Chain Bind",
        themeName: "Chain Bind",
        description:
          "Chouza slows down an enemy, dealing 5 damage to them and lowering all physical and chakra non-affliction damage they deal by 10 for 1 turn. Chouza's team will also gain 5 destructible defense.",
        descriptionBR:
          "Chouza desacelera um inimigo, causando 5 de dano e reduzindo em 10 todo dano Physical e chakra não aflitivo que ele causar por 1 turno. A equipe de Chouza também receberá 5 de defesa destrutível.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/u6ll8Ji.jpg",
        themepic: "https://i.imgur.com/u6ll8Ji.jpg",
      },
      {
        name: "Jounin Meat Tank",
        themeName: "Jounin Meat Tank",
        description:
          "Chouza begins rolling for 3 turns, dealing 15 damage to one enemy and granting his team 10 destructible defense for 1 turn each turn.",
        descriptionBR:
          "Chouza começa a rolar por 3 turnos, causando 15 de dano a um inimigo e concedendo 10 de defesa destrutível à sua equipe a cada turno por 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/eqmooOT.jpg",
        themepic: "https://i.imgur.com/eqmooOT.jpg",
      },
      {
        name: "Expansion Smash",
        themeName: "Expansion Smash",
        description:
          "If used on an enemy, for 1 turn, the next non-mental harmful skill they use will be countered. If used on an ally, for 1 turn, the next non-mental harmful skill used on them will be countered. The countered enemy will receive 10 damage. This skill is invisible and ignores invulnerability.",
        descriptionBR:
          "Se usada em um inimigo, por 1 turno, a próxima habilidade ofensiva não mental que ele usar será anulada. Se usada em um aliado, por 1 turno, a próxima habilidade ofensiva não mental usada contra ele será anulada. O inimigo anulado receberá 10 de dano. Esta habilidade é invisível e ignora invulnerabilidade.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/xZERN52.jpg",
        themepic: "https://i.imgur.com/xZERN52.jpg",
      },
      {
        name: "Strategic Withdrawal",
        themeName: "Strategic Withdrawal",
        description:
          "This skill makes Akimichi Chouza (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akimichi Chouza (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/JKHu9Lc.jpg",
        themepic: "https://i.imgur.com/JKHu9Lc.jpg",
      },
    ],
  },
  {
    name: "Hyuuga Hiashi (S)",
    url: "https://i.imgur.com/ZqOqt45.jpg",
    themepic: "https://i.imgur.com/ZqOqt45.jpg",
    description:
      "Head of the Hyuuga clan, and father to both Hinata and Hanabi, Hiashi is a strict, but caring man who would do anything for his clan. In battle, there is no equal when it comes to mastering the Hyuuga clan abilitie",
    descriptionBR:
      "Líder do clã Hyuuga e pai de Hinata e Hanabi, Hiashi é um homem rígido, mas atencioso, que faria qualquer coisa pelo seu clã. Em batalha, não há igual quando se trata de dominar as habilidades do clã Hyuuga.",
    skills: [
      {
        name: "Master Gentle Fist",
        themeName: "Master Gentle Fist",
        description:
          "Hiashi slams one enemy with his fists, dealing 25 damage to them and removing 1 taijutsu or ninjutsu chakra from them. The following turn, one other random enemy, will receive 20 damage; the target of this skill is invisible.",
        descriptionBR:
          "Hiashi golpeia um inimigo com seus punhos, causando 25 de dano e removendo 1 chakra Taijutsu ou Ninjutsu dele. No turno seguinte, outro inimigo aleatório receberá 20 de dano. O alvo desta habilidade fica invisível.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Unique", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/OXOLq9a.jpg",
        themepic: "https://i.imgur.com/OXOLq9a.jpg",
      },
      {
        name: "Master Revolving Heaven",
        themeName: "Master Revolving Heaven",
        description:
          "Hiashi spins, becoming invulnerable for 2 turns, dealing 15 damage to one enemy and 10 to all other enemies each turn.",
        descriptionBR:
          "Hiashi gira, tornando-se invulnerável por 2 turnos, causando 15 de dano a um inimigo e 10 a todos os outros inimigos a cada turno.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Unique", "Action"],
        cooldown: 3,
        url: "https://i.imgur.com/nXwOyt7.jpg",
        themepic: "https://i.imgur.com/nXwOyt7.jpg",
      },
      {
        name: "Eight Trigrams Vacuum Wall Palm",
        themeName: "Eight Trigrams Vacuum Wall Palm",
        description:
          "Hiashi gets ready to blast an enemy's attack back. The next turn, the first enemy to use a new harmful skill on one ally or himself will have that skill reflected back to one random enemy.",
        descriptionBR:
          "Hiashi se prepara para rebater um ataque inimigo. No próximo turno, o primeiro inimigo que usar uma nova habilidade ofensiva em um aliado ou nele mesmo terá essa habilidade refletida para um inimigo aleatório.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/dhKR9Ee.jpg",
        themepic: "https://i.imgur.com/dhKR9Ee.jpg",
      },
      {
        name: "Hiashi Byakugan",
        themeName: "Hiashi Byakugan",
        description:
          "This skill makes Hyuuga Hiashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hyuuga Hiashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/81nCkpb.jpg",
        themepic: "https://i.imgur.com/81nCkpb.jpg",
      },
    ],
  },
  {
    name: "Nara Shikaku (S)",
    url: "https://i.imgur.com/zk8rpMS.png",
    themepic: "https://i.imgur.com/zk8rpMS.png",
    description:
      "The father of Nara Shikamaru, and the head of the Nara clan, Shikaku is a cool-headed Jounin of Konoha who will go to any lengths to protect his friends and family. In battle, Shikaku is merciless, combining his impressive shadow imitation skills with his unparalleled intellect to grab victory for his team.",
    descriptionBR:
      "Pai de Nara Shikamaru e líder do clã Nara, Shikaku é um jounin de Konoha de cabeça fria, que faz de tudo para proteger seus amigos e família. Em batalha, é implacável, combinando suas habilidades de imitação de sombras com uma inteligência incomparável para garantir a vitória de sua equipe.",
    skills: [
      {
        name: "Master Shadow Imitation",
        themeName: "Master Shadow Imitation",
        description:
          "Shikaku grabs an enemy with his shadow, forcing his body to do as he pleases. That enemy will receive 20 damage and then will have their physical and chakra skills stunned for 2 turns. The following turn, this skill will be replaced by 'Shadow Dispersion'.",
        descriptionBR:
          "Shikaku prende um inimigo com sua sombra, forçando seu corpo a obedecer. Esse inimigo receberá 20 de dano e terá suas habilidades Physical e Chakra atordoadas por 2 turnos. No turno seguinte, essa habilidade será substituída por 'Shadow Dispersion'.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/daGBuKS.png",
        themepic: "https://i.imgur.com/daGBuKS.png",
      },
      {
        name: "Black Spider Lily",
        themeName: "Black Spider Lily",
        description:
          "Shikaku extends his shadows out to his enemies. For 3 turns, Shikaku's skills will deal an additional 10 damage to them, and each time they use a new stun skill, then for 3 turns the next time Shikaku stuns that enemy, they will be stunned for 1 additional turn.",
        descriptionBR:
          "Shikaku estende suas sombras até os inimigos. Por 3 turnos, as habilidades de Shikaku causarão 10 de dano adicional a eles e, cada vez que usarem uma nova habilidade de atordoamento, caso sejam atordoados por Shikaku nos próximos 3 turnos, o atordoamento durará 1 turno a mais.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/OTNQw5N.png",
        themepic: "https://i.imgur.com/OTNQw5N.png",
      },
      {
        name: "Problem Analysis",
        themeName: "Problem Analysis",
        description:
          "Shikaku targets himself or one ally for 1 turn, and the first new harmful non-affliction damage skill that is used on them will deal no damage and that ally will gain destructible defense equal to the original damage of that skill. This skill is invisible.",
        descriptionBR:
          "Shikaku protege a si mesmo ou um aliado por 1 turno. A primeira nova habilidade ofensiva de dano não-aflitiva usada contra o alvo não causará dano, e o alvo ganhará defesa destrutível igual ao dano original da habilidade. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/SrDeUzW.png",
        themepic: "https://i.imgur.com/SrDeUzW.png",
      },
      {
        name: "Human Barricade",
        themeName: "Human Barricade",
        description:
          "This skill makes Nara Shikaku (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nara Shikaku (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Nyx7LfT.png",
        themepic: "https://i.imgur.com/Nyx7LfT.png",
      },
      {
        name: "Shadow Dispersion",
        themeName: "Shadow Dispersion",
        description:
          "Nara Shikaku targets all enemies not affected by 'Master Shadow Imitation', stunning their physical and chakra skills for 1 turn and dealing 20 damage to them.",
        descriptionBR:
          "Nara Shikaku atinge todos os inimigos que não estão afetados por 'Master Shadow Imitation', causando 20 de dano e atordoando suas habilidades Physical e Chakra por 1 turno.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/474zyLo.png",
        themepic: "https://i.imgur.com/474zyLo.png",
      },
    ],
  },
  {
    name: "Aburame Torune (S)",
    url: "https://i.imgur.com/LhfhEMW.jpg",
    themepic: "https://i.imgur.com/LhfhEMW.jpg",
    description:
      "Aburame Torune (S) is a member of Anbu Root and the partner of Fu. Torune uses nano sized venomous insects in battle, which is rare even amongst the Aburame clan.",
    descriptionBR:
      "Aburame Torune (S) é membro da Raiz da ANBU e parceiro de Fu. Torune usa insetos venenosos em escala nanométrica na batalha, algo raro até mesmo entre os membros do clã Aburame.",
    skills: [
      {
        name: "Kunai Wave",
        themeName: "Kunai Wave",
        description:
          "Aburame Torune (S) targets 1 enemy, that enemy's skills will cost 1 additional random chakra for 2 turns*. All of that enemy's allies will take 15 damage for 2 turns",
        descriptionBR:
          "Torune mira em 1 inimigo. As habilidades desse inimigo custarão 1 chakra aleatório adicional por 2 turnos*. Todos os aliados desse inimigo receberão 15 de dano por 2 turnos.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Ranged", "Action", "Instant*"],
        cooldown: 1,
        url: "https://i.imgur.com/YJFbctL.jpg",
        themepic: "https://i.imgur.com/YJFbctL.jpg",
      },
      {
        name: "Insect Armor",
        themeName: "Insect Armor",
        description:
          "Torune uses Insect Armor and gains 20 permanent destructible defense. The enemy that destroys this destructible defense will have 'Nano Beetles' applied to them. While Torune has this destructible defense, Nano Beetles will cost 1 random chakra.",
        descriptionBR:
          "Torune usa Armadura de Insetos e ganha 20 de defesa destrutível permanente. O inimigo que destruir essa defesa receberá 'Nano Beetles'. Enquanto Torune tiver essa defesa, 'Nano Beetles' custará 1 chakra aleatório.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Unique", "Affliction*", "__$"],
        cooldown: 2,
        url: "https://i.imgur.com/sMcF55a.jpg",
        themepic: "https://i.imgur.com/sMcF55a.jpg",
      },
      {
        name: "Nano Beetles",
        themeName: "Nano Beetles",
        description:
          "Using Nano Beetles Torune targets 1 enemy. That enemy will be dealt 7 affliction damage for 5 turns. This effect stacks.",
        descriptionBR:
          "Torune usa seus Nano Beetles em 1 inimigo. Esse inimigo sofrerá 7 de dano aflitivo durante 5 turnos. Esse efeito é acumulativo.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/RzRyWtX.jpg",
        themepic: "https://i.imgur.com/RzRyWtX.jpg",
      },
      {
        name: "Torune Retreat",
        themeName: "Torune Retreat",
        description:
          "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Aburame Torune (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/IQ0JfGJ.jpg",
        themepic: "https://i.imgur.com/IQ0JfGJ.jpg",
      },
    ],
  },
  {
    name: "Yamanaka Fu (S)",
    url: "https://i.imgur.com/OTuHCjt.jpg",
    themepic: "https://i.imgur.com/OTuHCjt.jpg",
    description:
      "Yamanaka Fu (S) is a member of the Yamanaka clan and a member of Anbu Root. Fu is a skilled genjutsu user and the partner of Torune.",
    descriptionBR:
      "Yamanaka Fu (S) é um membro do clã Yamanaka e da Anbu Root. Fu é um habilidoso usuário de Genjutsu e parceiro de Torune.",
    skills: [
      {
        name: "Cursed Seal Mind Body Switch",
        themeName: "Cursed Seal Mind Body Switch",
        description:
          "Yamanaka Fu (S) uses Cursed Seal Mind Body Switch on 1 enemy dealing 20 damage. That enemy's mental and ranged skills will be stunned for 1 turn. Tanto Slash will deal 200% damage to the target of this skill for 1 turn.",
        descriptionBR:
          "Yamanaka Fu (S) usa Cursed Seal Mind Body Switch em 1 inimigo causando 20 de dano. As habilidades Mentais e Ranged desse inimigo serão atordoadas por 1 turno. Tanto Slash causará 200% de dano ao alvo desta habilidade por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/YRadD0j.jpg",
        themepic: "https://i.imgur.com/YRadD0j.jpg",
      },
      {
        name: "Scarecrow Puppet",
        themeName: "Scarecrow Puppet",
        description:
          "Yamanaka Fu (S) uses Scarecrow Puppet on himself or an ally. For 1 turn, the first enemy to use a new physical or melee skill on that target will be countered and their skills will be replaced by 'Scarecrow Puppet: Attack'. This skill is invisible and ends when triggered.",
        descriptionBR:
          "Yamanaka Fu (S) usa Scarecrow Puppet em si mesmo ou em um aliado. Por 1 turno, o primeiro inimigo que usar uma nova habilidade Physical ou Melee nesse alvo será atordoado e suas habilidades serão substituídas por 'Scarecrow Puppet: Attack'. Esta habilidade é invisível e termina ao ser ativada.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/tVknrDd.jpg",
        themepic: "https://i.imgur.com/tVknrDd.jpg",
      },
      {
        name: "Tanto Slash",
        themeName: "Tanto Slash",
        description:
          "Using Tanto Slash Fu deals 20 piercing damage to 1 enemy.",
        descriptionBR:
          "Usando Tanto Slash, Fu causa 20 de dano perfurante a 1 inimigo.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/A5Z7f6G.jpg",
        themepic: "https://i.imgur.com/A5Z7f6G.jpg",
      },
      {
        name: "Aggresive Retreat",
        themeName: "Aggresive Retreat",
        description:
          "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Yamanaka Fu (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hf7JCNO.jpg",
        themepic: "https://i.imgur.com/hf7JCNO.jpg",
      },
      {
        name: "Scarecrow Puppet: Attack",
        themeName: "Scarecrow Puppet: Attack",
        description: "This skill deals 15 damage to one enemy.",
        descriptionBR: "Esta habilidade causa 15 de dano a um inimigo.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/F94sK6m.jpeg",
        themepic: "https://i.imgur.com/F94sK6m.jpeg",
      },
    ],
  },
  {
    name: "Shimura Danzo (S)",
    url: "https://i.imgur.com/q35DAVP.png",
    themepic: "https://i.imgur.com/ERroriB.jpeg",
    description:
      "Shimura Danzo (S) is the leader of the hidden root organization in Konoha and one of the village elders. Danzo operates in the shadows dedicated to Konoha no matter the cost.",
    descriptionBR:
      "Shimura Danzo (S) é o líder da organização secreta Root em Konoha e um dos anciãos da vila. Danzo atua nas sombras, dedicado a Konoha a qualquer custo.",
    skills: [
      {
        name: "Izanagi",
        themeName: "Izanagi",
        description:
          "Danzo consumes 2 \"Izanagi's Sharingan\" to activate Izanagi, ignoring all damage dealt to him permanently. If Danzo is affected by 2 new harmful skills, this skill will end and Danzo will be unable to use it for 1 turn. While 'Izanagi' is activated, this skill will be replaced by 'Stolen Kotoamatsukami'.",
        descriptionBR:
          "Danzo consome 2 \"Izanagi's Sharingan\" para ativar Izanagi, ignorando permanentemente todo dano causado a ele. Se Danzo for afetado por 2 novas habilidades ofensivas, esta habilidade terminará e ele não poderá usá-la por 1 turno. Enquanto 'Izanagi' estiver ativo, esta habilidade será substituída por 'Stolen Kotoamatsukami'.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/1RJkCc2.png",
        themepic: "https://i.imgur.com/cPciL6x.jpeg",
      },
      {
        name: "Self-Cursing Seal",
        themeName: "Self-Cursing Seal",
        description:
          "Danzo places a seal mark on an enemy's body, dealing 10 affliction damage to them for 5 turns. If this skill is removed, that enemy will have their harmful skills stunned for 1 turn. This skill stacks.",
        descriptionBR:
          "Danzo coloca um selo no corpo de um inimigo, causando 10 de dano aflitivo por 5 turnos. Se esta habilidade for removida, esse inimigo terá suas habilidades ofensivas atordoadas por 1 turno. Esta habilidade acumula.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/mQ9WSFt.png",
        themepic: "https://i.imgur.com/mQ9WSFt.png",
      },
      {
        name: "Summoning: Baku",
        themeName: "Summoning: Baku",
        description:
          "Danzo summons Baku in the battlefield, dealing 25 piercing damage to one enemy. For 2 turns, that enemy's non-affliction skills will deal 50% less damage.",
        descriptionBR:
          "Danzo invoca Baku no campo de batalha, causando 25 de dano perfurante a um inimigo. Por 2 turnos, as habilidades não aflitivas desse inimigo causarão 50% a menos de dano.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uvk12gs.png",
        themepic: "https://i.imgur.com/LyR3YrO.jpeg",
      },
      {
        name: "Tree Birth Defense",
        themeName: "Tree Birth Defense",
        description:
          "This skill makes Shimura Danzo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shimura Danzo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/NVqN7zo.png",
        themepic: "https://i.imgur.com/Zh19Uvu.jpeg",
      },
      {
        name: "Izanagi's Sharingan",
        themeName: "Izanagi's Sharingan",
        description:
          "Danzo starts the game with 10 Sharingans. Each time Danzo uses 'Izanagi', he will consume 2 Sharingan to ignore all damage dealt to him until 2 new harmful skill are used on him. If Danzo runs out of Sharingans, 'Izanagi' will be replaced by 'Reverse Four Symbols Seal' permanently.",
        descriptionBR:
          "Danzo começa a partida com 10 Sharingans. Cada vez que Danzo usa 'Izanagi', ele consome 2 Sharingans para ignorar todo dano recebido até que 2 novas habilidades ofensivas sejam usadas contra ele. Se Danzo ficar sem Sharingans, 'Izanagi' será substituído permanentemente por 'Reverse Four Symbols Seal'.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/5r8Voh1.png",
        themepic: "https://i.imgur.com/5r8Voh1.png",
      },
      {
        name: "Stolen Kotoamatsukami",
        themeName: "Stolen Kotoamatsukami",
        description:
          "The next time one enemy uses a new harmful skill, they will be countered. The following 2 turns, that enemy will have their harmful skills stunned and this skill will be replaced by the countered skill and will have no cost. This skill cannot be countered, reflected and is invisible.",
        descriptionBR:
          "Na próxima vez que um inimigo usar uma nova habilidade ofensiva, ela será anulada. Pelos 2 turnos seguintes, esse inimigo terá suas habilidades ofensivas anuladas e esta habilidade será substituída pela habilidade anulada, sem custo. Esta habilidade não pode ser anulada, refletida e é invisível.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Mental", "Ranged", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/g5uwng1.png",
        themepic: "https://i.imgur.com/g5uwng1.png",
      },
      {
        name: "Reverse Four Symbols Seal",
        themeName: "Reverse Four Symbols Seal",
        description:
          "Danzo releases 4 symbol from his blood and forms a large black sphere around him, sealing all enemies and dealing 20 affliction damage to them. Afterwards, Danzo takes 10 affliction damage.",
        descriptionBR:
          "Danzo libera 4 símbolos de seu sangue e forma uma grande esfera negra ao seu redor, selando todos os inimigos e causando 20 de dano aflitivo a eles. Em seguida, Danzo recebe 10 de dano aflitivo.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/esli7Zk.png",
        themepic: "https://i.imgur.com/6H1oqiT.jpg",
      },
    ],
  },
  {
    name: "Chiyo (S)",
    url: "https://i.imgur.com/Xwi4eLx.png",
    themepic: "https://i.imgur.com/WNPtn7n.jpg",
    description:
      "The grandmother of Sasori(s) and elder ninja of the Sand Village, Chiyo is a well known and accomplished puppet master and builder.",
    descriptionBR:
      "Avó de Sasori (S) e ninja anciã da Vila da Areia, Chiyo é uma renomada e talentosa mestre de marionetes e construtora.",
    skills: [
      {
        name: "White Secret Attack Rampage",
        themeName: "White Secret Attack Rampage",
        description:
          "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks.",
        descriptionBR:
          "Chiyo directs her puppets to devastate the battlefield, dealing 20 damage to a random enemy for 1 turn. The following turn, a second random enemy will also be dealt 20 damage. The second target is invisible. The next use of 'Sanbou Kyuukai' will deal 5 aditional damage. This skill stacks.",
        energy: ["Random"],
        classes: ["Physical", "Action", "Ranged", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/6rGUR71.png",
        themepic: "https://i.imgur.com/3iDBLhW.jpg",
      },
      {
        name: "Sanbou Kyuukai",
        themeName: "Sanbou Kyuukai",
        description:
          "This skill deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability.",
        descriptionBR:
          "This skill deals 20 piercing damage to one enemy and stuns their non-mental skills for 1 turn. Also for 1 turn, that enemy will receive 5 additional damage from all sources. This skill ignores invulnerability.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/nEG0auz.png",
        themepic: "https://i.imgur.com/61Jr2Nq.jpg",
      },
      {
        name: "Ally Puppetry",
        themeName: "Ally Puppetry",
        description:
          "Chiyo controls one ally for 3 turns. Each turn, that ally will ignore the first physical or chakra non-affliction skill used on them. During this time, their melee skills will deal 25% more damage. The following 2 turns, this skill will be replaced. This skill ends if Chiyo is killed.",
        descriptionBR:
          "Chiyo controls one ally for 3 turns. Each turn, that ally will ignore the first physical or chakra non-affliction skill used on them. During this time, their melee skills will deal 25% more damage. The following 2 turns, this skill will be replaced. This skill ends if Chiyo is killed.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/bMu8gne.png",
        themepic: "https://i.imgur.com/op5ywuv.jpg",
      },
      {
        name: "Chakra Shield",
        themeName: "Chakra Shield",
        description:
          "This skill makes Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/BdXtVD4.png",
        themepic: "https://i.imgur.com/FCTthAl.jpg",
      },
      {
        name: "One's Own Life Reincarnation",
        themeName: "One's Own Life Reincarnation",
        description:
          "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies.",
        descriptionBR:
          "Chiyo selects one ally, giving them all of her current remaining health. Afterwards, Chiyo will instantly die. The chosen ally gains 1 random chakra for the rest of the game. This skill can also be used on dead allies.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/8tkBGN3.png",
      },
    ],
  },
  {
    name: "Kankuro (S)",
    url: "https://i.imgur.com/dj3meeB.png",
    themepic: "https://i.imgur.com/rfyVSqz.jpg",
    description:
      "In the last couple years Kankuro(s) has become a Jounin and has created a new puppet. He is now able to harness three puppets at once and is a more versatile combatant.",
    descriptionBR:
      "Nos últimos anos, Kankuro (S) se tornou um Jounin e criou uma nova marionete. Ele agora é capaz de controlar três marionetes ao mesmo tempo e se tornou um combatente mais versátil.",
    skills: [
      {
        name: "Kuroari Trap",
        themeName: "Kuroari Trap",
        description:
          "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible.",
        descriptionBR:
          "Kankuro traps one enemy for 1 turn. If that enemy uses a new harmful skill, they will be countered and receive 15 additional damage from 'Karasu Knives'. This skill is invisible.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/9FodKEM.png",
        themepic: "https://i.imgur.com/87yPHF9.jpg",
      },
      {
        name: "Karasu Knives",
        themeName: "Karasu Knives",
        description:
          "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'.",
        descriptionBR:
          "Kankuro assaults one enemy with poisoned knives, dealing 25 damage to them and that enemy will take 10 affliction damage the following turn*. For 1 turn, this skill will be replaced by 'Karasu: Finishing Knive'.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/jGcSDIK.png",
        themepic: "https://i.imgur.com/U9xQ2do.jpg",
      },
      {
        name: "Sanshouo Shield",
        themeName: "Sanshouo Shield",
        description:
          "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 25% damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies.",
        descriptionBR:
          "Kankuro uses Sanshouo to block enemy attacks. For 3 turns, Kankuro and his allies gain 25% damage reduction and are immune to affliction damage. During this time, this skill will be replaced by 'Salamander Puppet'. This skill ends if Kankuro dies.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/OXzZKNs.png",
        themepic: "https://i.imgur.com/Is6E0I1.jpg",
      },
      {
        name: "Puppet Distraction",
        themeName: "Puppet Distraction",
        description:
          "This skill makes Kankuro (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kankuro (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/eQgxBJo.png",
        themepic: "https://i.imgur.com/iHmY63E.jpg",
      },
      {
        name: "Karasu: Finishing Knive",
        themeName: "Karasu: Finishing Knive",
        description: "This skill deals 20 piercing damage to one enemy.",
        descriptionBR: "This skill deals 20 piercing damage to one enemy.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/zD2TOYL.png",
      },
      {
        name: "Salamander Puppet",
        themeName: "Salamander Puppet",
        description:
          "Kankuro protects himself or an ally for 1 turn, that ally will gain 50% unpierceable damage. This skill is invisible.",
        descriptionBR:
          "Kankuro protects himself or an ally for 1 turn, that ally will gain 50% unpierceable damage. This skill is invisible.",
        energy: [],
        classes: ["Physical", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/TeoTvDM.png",
        themepic: "https://i.imgur.com/S0yQdqY.png",
      },
    ],
  },
  {
    name: "Kazekage Gaara (S)",
    url: "https://i.imgur.com/TFYxtG7.jpg",
    themepic: "https://i.imgur.com/TFYxtG7.jpg",
    description:
      "After a few short years and much soul-searching, Gaara(s) has risen to be his village's Kazekage. Rather than destroying others he now protects those he cares about to prove his existence.",
    descriptionBR:
      "Após alguns anos e muita reflexão, Gaara(s) se tornou o Kazekage de sua vila. Ao invés de destruir outros, ele agora protege aqueles com quem se importa para provar sua existência.",
    skills: [
      {
        name: "Desert Missile",
        themeName: "Desert Missile",
        description:
          "Using thin ropes of sand Kazekage Gaara hunts down one enemy dealing 10 piercing damage to them. New skills used by the target of this skill will deal 10 less damage for 1 turn.",
        descriptionBR:
          "Usando finas cordas de areia, Kazekage Gaara caça um inimigo causando 10 de dano perfurante. Novas habilidades usadas pelo alvo desta habilidade causarão 10 a menos de dano por 1 turno.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/ei2OVZC.jpg",
        themepic: "https://i.imgur.com/ei2OVZC.jpg",
      },
      {
        name: "Desert Prison",
        themeName: "Desert Prison",
        description:
          "Kazekage Gaara entraps and crushes one enemy in a giant maw of sand stunning their physical and chakra skills for 1 turn and dealing 10 piercing damage to them.",
        descriptionBR:
          "Kazekage Gaara aprisiona e esmaga um inimigo em uma enorme mandíbula de areia, atordoando suas habilidades Physical e Chakra por 1 turno e causando 10 de dano perfurante.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/EpS0551.jpg",
        themepic: "https://i.imgur.com/EpS0551.jpg",
      },
      {
        name: "Sand Summoning",
        themeName: "Sand Summoning",
        description:
          "Gaara and his allies gain 10 destructible defense permanently. Permanently, 'Desert Missile' will deal 15 additional damage and 'Desert Prison' will deal 20 additional damage. This skill can only be used twice.",
        descriptionBR:
          "Gaara e seus aliados ganham 10 de defesa destrutível permanentemente. Permanentemente, 'Desert Missile' causará 15 de dano adicional e 'Desert Prison' causará 20 de dano adicional. Esta habilidade só pode ser usada duas vezes.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Q0SnYi5.jpg",
        themepic: "https://i.imgur.com/Q0SnYi5.jpg",
      },
      {
        name: "Sand Sphere",
        themeName: "Sand Sphere",
        description:
          "This skill makes Kazekage Gaara (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kazekage Gaara (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/EW7NcIO.jpg",
        themepic: "https://i.imgur.com/EW7NcIO.jpg",
      },
    ],
  },
  {
    name: "Temari (S)",
    url: "https://i.imgur.com/LZiu5eN.png",
    themepic: "https://i.imgur.com/1UGVyUE.jpg",
    description:
      "Temari (S) has grown over the years. She is now a Jounin as well as the sister of Kankuro and Gaara. Temari is also the Hidden Sand Village's ambassador to the Hidden Leaf Village.",
    descriptionBR:
      "Temari (S) cresceu ao longo dos anos. Agora é uma Jounin, além de irmã de Kankuro e Gaara. Temari também é a embaixadora da Vila Oculta da Areia para a Vila Oculta da Folha.",
    skills: [
      {
        name: "Fan Increase Moon",
        themeName: "Fan Increase Moon",
        description:
          "Temari opens her fan and reveals a moon. Temari gains 5 points of damage reduction and increase her damage by 5 permanently. This skill stacks and can only be used 3 times.",
        descriptionBR:
          "Temari abre seu leque e revela uma lua. Temari ganha 5 pontos de redução de dano e aumenta seu dano em 5 permanentemente. Esta habilidade acumula e só pode ser usada 3 vezes.",
        energy: [],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/1wTEObW.png",
        themepic: "https://i.imgur.com/gSdZ4K6.jpg",
      },
      {
        name: "Wind Scythe",
        themeName: "Wind Scythe",
        description:
          "Using Wind Scythe Temari (S) deals 20 piercing damage to one enemy.",
        descriptionBR:
          "Usando Wind Scythe, Temari (S) causa 20 de dano perfurante a um inimigo.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/1Dw5I8M.png",
        themepic: "https://i.imgur.com/OI7PA7r.jpg",
      },
      {
        name: "Immense Cutting Whirlwind",
        themeName: "Immense Cutting Whirlwind",
        description:
          "Temari creates an immense whirlwind in the battlefield, dealing 20 damage to all enemies and lowering their non-affliction damage by 10 for 1 turn.",
        descriptionBR:
          "Temari cria um enorme turbilhão no campo de batalha, causando 20 de dano a todos os inimigos e reduzindo o dano não aflitivo deles em 10 por 1 turno.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Lwfgjry.png",
        themepic: "https://i.imgur.com/LaB9yu2.jpg",
      },
      {
        name: "Fan Barrier",
        themeName: "Fan Barrier",
        description:
          "This skill makes Temari (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Temari (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/dIOxpHr.png",
        themepic: "https://i.imgur.com/uDKZsrT.jpg",
      },
    ],
  },
  {
    name: "Maki (S)",
    url: "https://i.imgur.com/7Aokrcx.png",
    themepic: "https://i.imgur.com/rnLrLy3.jpg",
    description:
      "Maki is a kunoichi of the Hidden Sand Village and the student of Pakura. Maki is also a member of the Allied Shinobi Forces' Sealing Squad. Original Pics by: Pain_Alagoano",
    descriptionBR:
      "Maki é uma kunoichi da Vila Oculta da Areia e aluna de Pakura. Maki também é membro do Esquadrão de Selamento das Forças Aliadas Shinobi. Imagens originais por: Pain_Alagoano",
    skills: [
      {
        name: "Cloth Binding",
        themeName: "Cloth Binding",
        description:
          "Maki deals 20 piercing damage to one enemy and stuns their harmful skills. During 'Cloth Sealing', this skill will deal an additional 20 damage. During 'Weighted Net Scroll', this skill will deal an additional 10 damage.",
        descriptionBR:
          "Maki causa 20 de dano perfurante a um inimigo e atordoa as habilidades ofensivas dele. Durante 'Cloth Sealing', esta habilidade causará 20 de dano adicional. Durante 'Weighted Net Scroll', esta habilidade causará 10 de dano adicional.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/WKp753c.png",
        themepic: "https://i.imgur.com/zhrvOzU.jpg",
      },
      {
        name: "Cloth Sealing",
        themeName: "Cloth Sealing",
        description:
          "Maki uses a giant roll of cloth to seal one enemy, stunning their physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Maki usa um enorme rolo de tecido para selar um inimigo, atordoando suas habilidades Physical e Chakra por 1 turno. Esta habilidade ignora invulnerabilidade.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/xCx3O1v.png",
        themepic: "https://i.imgur.com/e5y781K.jpg",
      },
      {
        name: "Weighted Net Scroll",
        themeName: "Weighted Net Scroll",
        description:
          "Maki grants herself 50% damage reduction for 1 turn. During this time, if an enemy uses a new harmful skill on her, they will have the damage of their skills reduced by 50% for 1 turn. This skill is invisible.",
        descriptionBR:
          "Maki garante para si mesma 50% de redução de dano por 1 turno. Durante esse tempo, se um inimigo usar uma nova habilidade ofensiva nela, o dano das habilidades dele será reduzido em 50% por 1 turno. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 2,
        url: "https://i.imgur.com/ZDcqtWH.png",
        themepic: "https://i.imgur.com/oVUgsri.jpg",
      },
      {
        name: "Cloth Shelter",
        themeName: "Cloth Shelter",
        description:
          "This skill makes Maki (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Maki (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/QQ3JUKI.png",
        themepic: "https://i.imgur.com/KoLJaDs.jpg",
      },
    ],
  },
  {
    name: "Uzuki Yugao",
    url: "https://i.imgur.com/mCMFKuP.png",
    themepic: "https://i.imgur.com/DScahbf.jpg",
    description:
      "A member of Konoha's Anbu faction, Yugao was the lover of Gekkou Hayate before his untimely death, and is a hard-working, dedicated, and tender person. Yugao fights using powerful genjutsu-enhanced swordsmanship, and is also proficient in the use of sealing techniques to disable her enemies.",
    descriptionBR:
      "Membro da Anbu de Konoha, Yugao foi amante de Gekkou Hayate antes de sua morte prematura, sendo uma pessoa dedicada, esforçada e gentil. Yugao luta usando uma poderosa esgrima aprimorada por genjutsu, e também é proficiente no uso de técnicas de selamento para incapacitar seus inimigos.",
    skills: [
      {
        name: "Hazy Moon Night",
        themeName: "Hazy Moon Night",
        description:
          "Yugao covers herself in a haze, and strikes one enemy, <Damage>dealing 20 piercing damage<Damage> to them. For 1 turn, if <Invisible>Yugao<Invisible> or an <Invisible>ally<Invisible> <Classes>uses a new skill<Classes> on the target of <SkillName>'Hazy Moon Night'<SkillName>, they will become <Defense>invulnerable<Defense> for 1 turn. This skill triggers once per ally.",
        descriptionBR:
          "Yugao se cobre com uma névoa e atinge um inimigo, <Damage>causando 20 de dano perfurante<Damage> a ele. Por 1 turno, se <Invisible>Yugao<Invisible> ou um <Invisible>aliado<Invisible> <Classes>usar uma nova habilidade<Classes> no alvo de <SkillName>'Hazy Moon Night'<SkillName>, ele se tornará <Defense>invulnerável<Defense> por 1 turno. Essa habilidade é ativada uma vez por aliado.",
        energy: ["Gen"],
        classes: ["Mental", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/IHUyz1z.png",
        themepic: "https://i.imgur.com/rxpEkHD.jpg",
      },
      {
        name: "Crescent Moon Strike",
        themeName: "Crescent Moon Strike",
        description:
          "Yugao performs a graceful sword slash, <Damage>dealing 15 piercing damage<Damage> to one enemy. This skill will <Improvements>deal 15 additional damage<Improvements> if <SkillName>'Hazy Moon Night'<SkillName> was used on the previous turn.",
        descriptionBR:
          "Yugao realiza um elegante corte com sua espada, <Damage>causando 15 de dano perfurante<Damage> a um inimigo. Essa habilidade irá <Improvements>causar 15 de dano adicional<Improvements> se <SkillName>'Hazy Moon Night'<SkillName> foi usada no turno anterior.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/qJupUm4.png",
        themepic: "https://i.imgur.com/4Wyh0Pu.jpg",
      },
      {
        name: "Sealing Technique",
        themeName: "Sealing Technique",
        description:
          "Yugao negates one enemy's abilities, <Damage>dealing 10 affliction damage<Damage> to them. For 2 turns, that enemy will be <Improvements>invulnerable<Improvements> to <Classes>helpful skills<Classes> and their <Classes>harmful skills<Classes> will be <Effects>stunned<Effects>. During this time, they will <Improvements>receive 5 additional damage<Improvements> from <Classes>non-affliction skills<Classes>.",
        descriptionBR:
          "Yugao nega as habilidades de um inimigo, <Damage>causando 10 de dano aflitivo<Damage> a ele. Por 2 turnos, esse inimigo se tornará <Improvements>invulnerável<Improvements> a <Classes>habilidades defensivas<Classes> e suas <Classes>habilidades ofensivas<Classes> serão <Effects>atordoadas<Effects>. Durante esse tempo, ele irá <Improvements>receber 5 de dano adicional<Improvements> de <Classes>habilidades não-aflitivas<Classes>.",
        energy: ["Nin", "Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/bBuPuWp.png",
        themepic: "https://i.imgur.com/NuQUQr5.jpg",
      },
      {
        name: "Yugao Hide",
        themeName: "Yugao Hide",
        description:
          "This skill makes Uzuki Yugao <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uzuki Yugao <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/83oXFJy.png",
        themepic: "https://i.imgur.com/dQPdM2M.jpg",
      },
    ],
  },
  {
    name: "Akatsuchi (S)",
    url: "https://i.imgur.com/L2q69Y1.png",
    themepic: "https://i.imgur.com/Y0WZ2Sl.jpg",
    description:
      "Akatsuchi (S) is a shinobi of the Hidden Rock Village. Akatsuchi is a powerful shinobi who uses brute strength and earth style jutsus in combat.",
    descriptionBR:
      "Akatsuchi (S) é um shinobi da Vila Oculta da Rocha. Akatsuchi é um poderoso shinobi que usa força bruta e jutsus do estilo terra em combate.",
    skills: [
      {
        name: "High Speed Assault",
        themeName: "High Speed Assault",
        description:
          "Using High Speed Assault Akatsuchi (S) deals 25 damage to 1 enemy. The following 3 turns, this skill will cost 1 additional random chakra and will deal 15 additional damage.",
        descriptionBR:
          "Usando High Speed Assault, Akatsuchi (S) causa 25 de dano a 1 inimigo. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 15 de dano adicional.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2exPeCE.png",
        themepic: "https://i.imgur.com/SQpmsxb.jpg",
      },
      {
        name: "Golem",
        themeName: "Golem",
        description:
          "Akatsuchi (S) uses Golem on all enemies dealing 15 damage to them. The following 3 turns, this skill will cost 1 additional random chakra and will deal 10 additional damage.",
        descriptionBR:
          "Akatsuchi (S) usa Golem em todos os inimigos causando 15 de dano neles. Nos 3 turnos seguintes, esta habilidade custará 1 chakra aleatório adicional e causará 10 de dano adicional.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VKb4HTb.png",
        themepic: "https://i.imgur.com/KHMy6Oh.jpg",
      },
      {
        name: "Golem Chakra Devour",
        themeName: "Golem Chakra Devour",
        description:
          "Akatsuchi's Golem devours one enemy's chakra, dealing 10 piercing damage to that enemy. The following 3 turns, Akatsuchi's skills will cost 1 less random chakra. When this skill is used, Akatsuchi gains 15 destructible defense for each stack of 'Golem' and 'High Speed Assault' active on him.",
        descriptionBR:
          "O Golem de Akatsuchi devora o chakra de um inimigo, causando 10 de dano perfurante a esse inimigo. Nos 3 turnos seguintes, as habilidades de Akatsuchi custarão 1 chakra aleatório a menos. Quando esta habilidade é usada, Akatsuchi ganha 15 de defesa destrutível para cada acúmulo de 'Golem' e 'High Speed Assault' ativo nele.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/uzTnqOh.png",
        themepic: "https://i.imgur.com/gskJKDJ.jpg",
      },
      {
        name: "Akatsuchi Retreat",
        themeName: "Akatsuchi Retreat",
        description:
          "This skill makes Akatsuchi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Akatsuchi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tkpVAuU.png",
        themepic: "https://i.imgur.com/eAKi6mY.jpg",
      },
    ],
  },
  {
    name: "Kurotsuchi (S)",
    url: "https://i.imgur.com/yNQx9FH.jpg",
    themepic: "https://i.imgur.com/yNQx9FH.jpg",
    description:
      "Kurotsuchi (S) is a shinobi of the Hidden Rock Village and the Partner of Akatsuchi. She is also the granddaughter of the third Tsuchikage.",
    descriptionBR:
      "Kurotsuchi (S) é uma kunoichi da Vila Oculta da Pedra e parceira de Akatsuchi. Ela também é neta do terceiro Tsuchikage.",
    skills: [
      {
        name: "Lava Quicklime",
        themeName: "Lava Quicklime",
        description:
          "Kurotsuchi uses Lava Release to create a quicklime to attack one enemy, dealing 25 damage to them. For 1 turn, Kurotsuchi gains 50% damage reduction and 'Water Trumpet' will stun for 1 additional turn.",
        descriptionBR:
          "Kurotsuchi usa Liberação de Lava para criar cal viva e atacar um inimigo, causando 25 de dano. Por 1 turno, Kurotsuchi recebe 50% de redução de dano e 'Water Trumpet' irá atordoar por 1 turno adicional.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Zfq46Rm.jpg",
        themepic: "https://i.imgur.com/Zfq46Rm.jpg",
      },
      {
        name: "Water Trumpet",
        themeName: "Water Trumpet",
        description:
          "Using Water Release technique, Kurotsuchi deals 25 damage to one enemy and stuns their physical and chakra skills for 0 turns. For 1 turn, 'Lava Quicklime' will deal 5 additional damage.",
        descriptionBR:
          "Usando a técnica de Liberação de Água, Kurotsuchi causa 25 de dano a um inimigo e atordoa suas habilidades Physical e Chakra por 0 turnos. Por 1 turno, 'Lava Quicklime' causará 5 de dano adicional.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 0,
        url: "https://i.imgur.com/LuC3dSP.jpg",
        themepic: "https://i.imgur.com/LuC3dSP.jpg",
      },
      {
        name: "Earth Spears",
        themeName: "Earth Spears",
        description:
          "Kurotsuchi uses Earth Spears, dealing 20 damage to all enemies. For 1 turn, all enemies affected by this skill will be invulnerable to friendly skills.",
        descriptionBR:
          "Kurotsuchi usa Earth Spears, causando 20 de dano a todos os inimigos. Por 1 turno, todos os inimigos afetados por esta habilidade ficarão invulneráveis a habilidades benéficas.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/i1GD3JE.jpg",
        themepic: "https://i.imgur.com/i1GD3JE.jpg",
      },
      {
        name: "Evasiveness",
        themeName: "Evasiveness",
        description:
          "This skill makes Kurotsuchi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kurotsuchi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/gKSbZ92.jpg",
        themepic: "https://i.imgur.com/gKSbZ92.jpg",
      },
    ],
  },
  {
    name: "Nii Yugito (S)",
    url: "https://i.imgur.com/ISPJbcs.png",
    themepic: "https://i.imgur.com/dQ1My4C.jpeg",
    description:
      "A kunoichi from Kumogakure, Nii Yugito holds within her the two-tailed beast. She has full control over the bijuu Nibi, and is able to transform into it and use its powers to fight.",
    descriptionBR:
      "Uma kunoichi de Kumogakure, Nii Yugito possui a besta de duas caudas dentro de si. Ela tem controle total sobre o bijuu Nibi e é capaz de se transformar nele e usar seus poderes para lutar.",
    skills: [
      {
        name: "Nibi Transformation",
        themeName: "Nibi Transformation",
        description:
          "Yugito gains 5 points of damage reduction and targets all enemies. Every time an enemy uses a new harmful skill, Yugito will deal 5 additional damage for 1 turn. While active, this skill can be used to heal 20 health and grant 50% unpierceable damage reduction for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Yugito ganha 5 pontos de redução de dano e mira em todos os inimigos. Cada vez que um inimigo usa uma nova habilidade prejudicial, Yugito causa 5 pontos de dano adicionais por 1 turno. Enquanto ativa, esta habilidade pode ser usada para curar 20 de vida e conceder 50% de redução de dano intransponível por 1 turno. Esta habilidade ignora invulnerabilidade.",
        energy: [],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/ehIzoqE.png",
        themepic: "https://i.imgur.com/7ljHzHl.jpeg",
      },
      {
        name: "Claw Swipe",
        themeName: "Claw Swipe",
        description:
          "Yugito takes a huge swipe of her claw, dealing 15 damage to one enemy for 2 turns. During this time, that enemy's helpful skills will cost 1 additional random chakra. Requires 'Nibi Transformation'.",
        descriptionBR:
          "Yugito desfere um golpe poderoso com sua garra, causando 15 de dano a um inimigo por 2 turnos. Durante esse tempo, as habilidades úteis desse inimigo custarão 1 chakra aleatório adicional. Requer 'Nibi Transformation'.",
        energy: ["Tai"],
        classes: ["Chakra", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/s7vWIeS.png",
        themepic: "https://i.imgur.com/NxCHg7s.jpeg",
      },
      {
        name: "Spectral Fireball",
        themeName: "Spectral Fireball",
        description:
          "Yugito fires a large fireball from her mouth, dealing 30 piercing damage to one enemy. For 1 turn, that enemy's non-affliction damage will be reduced to a maximum of 25. Requires 'Nibi Transformation'.",
        descriptionBR:
          "Yugito dispara uma grande bola de fogo de sua boca, causando 30 de dano perfurante a um inimigo. Por 1 turno, o dano não aflitivo desse inimigo será reduzido a um máximo de 25. Requer 'Nibi Transformation'.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/8xEGIsC.png",
        themepic: "https://i.imgur.com/rXvXymc.jpeg",
      },
      {
        name: "Rage",
        themeName: "Rage",
        description:
          "This skill makes Nii Yugito (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nii Yugito (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/akLKyX0.png",
        themepic: "https://i.imgur.com/F2LhVVO.jpeg",
      },
    ],
  },
  {
    name: "Killer Bee (S)",
    url: "https://i.imgur.com/LXesv7k.jpg",
    themepic: "https://i.imgur.com/LXesv7k.jpg",
    description:
      "Killer Bee (S) is the jinchuriki from Kumogakure. Bee (S) is referred to as the hero of Kumogakure and possess immense physical strength as well as being an expert swordsmen.",
    descriptionBR:
      "Killer Bee (S) é o jinchuriki de Kumogakure. Bee (S) é conhecido como o herói de Kumogakure e possui imensa força física além de ser um especialista espadachim.",
    skills: [
      {
        name: "Kenjutsu",
        themeName: "Kenjutsu",
        description:
          "Killer Bee (S) uses seven swords to give him an offensive defense. Killer Bee (S) will deal 15 piercing damage to any enemy that uses a new melee skill on him for 4 turns. The following 4 turns, Buzz Saw is improved and deal 10 more damage and this skill is replaced by 'Final Kenjutsu'.",
        descriptionBR:
          "Killer Bee (S) usa sete espadas para criar uma defesa ofensiva. Killer Bee (S) causará 15 de dano perfurante a qualquer inimigo que usar uma nova habilidade Melee nele por 4 turnos. Nos 4 turnos seguintes, Buzz Saw é aprimorado e causará 10 de dano a mais, e esta habilidade será substituída por 'Final Kenjutsu'.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/VFAbcCN.jpg",
        themepic: "https://i.imgur.com/VFAbcCN.jpg",
      },
      {
        name: "Buzz Saw",
        themeName: "Buzz Saw",
        description:
          "Killer Bee (S) uses Buzz Saw on one enemy dealing 20 piercing damage.",
        descriptionBR:
          "Killer Bee (S) usa Buzz Saw em um inimigo, causando 20 de dano perfurante.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/i8ywDo2.jpg",
        themepic: "https://i.imgur.com/i8ywDo2.jpg",
      },
      {
        name: "Chakra Stream",
        themeName: "Chakra Stream",
        description:
          "Killer Bee (S) uses Chakra Stream and will counter the first enemy physical or chakra skills used on him or an ally for 1 turn. The countered enemy will be dealt 20 piercing damage. This skill is invisible.",
        descriptionBR:
          "Killer Bee (S) usa Chakra Stream e irá anular a primeira habilidade Physical ou Chakra de um inimigo usada nele ou em um aliado por 1 turno. O inimigo anulado receberá 20 de dano perfurante. Esta habilidade é invisível.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/9PMa58H.jpg",
        themepic: "https://i.imgur.com/9PMa58H.jpg",
      },
      {
        name: "Strong Defense",
        themeName: "Strong Defense",
        description:
          "This skill makes Killer Bee (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Killer Bee (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/c8mUlYM.jpg",
        themepic: "https://i.imgur.com/c8mUlYM.jpg",
      },
      {
        name: "Final Kenjutsu",
        themeName: "Final Kenjutsu",
        description:
          "Killer Bee (S) executes an enemy with his seven swords, dealing 35 piercing damage to them. This skill ignores invulnerability and can only be used on an enemy that took damage from Killer Bee's other skills on the last turn.",
        descriptionBR:
          "Killer Bee (S) executa um inimigo com suas sete espadas, causando 35 de dano perfurante. Esta habilidade ignora invulnerabilidade e só pode ser usada em um inimigo que tenha recebido dano das outras habilidades de Killer Bee no último turno.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/5cPNd9Q.png",
        themepic: "https://i.imgur.com/a7bAOzr.png",
      },
    ],
  },
  {
    name: "Darui (S)",
    url: "https://i.imgur.com/4zQxemJ.png",
    themepic: "https://i.imgur.com/1m8IRd5.jpg",
    description:
      "Darui (S) is a jounin of the Hidden Cloud Village and the right hand of the Yondaime Raikage. Despite his appearance Darui (S) is a formidable shinobi.",
    descriptionBR:
      "Darui (S) é um jounin da Vila da Nuvem Oculta e a mão direita do Yondaime Raikage. Apesar de sua aparência, Darui (S) é um shinobi formidável.",
    skills: [
      {
        name: "Laser Circus",
        themeName: "Laser Circus",
        description:
          "Darius creates several beams and shoots his opponents, stunning one enemy's harmful skills for 1 turn. Afterwards, all other enemies take 15 piercing damage.",
        descriptionBR:
          "Darui cria diversos feixes e dispara contra seus oponentes, atordoando as habilidades ofensivas de um inimigo por 1 turno. Em seguida, todos os outros inimigos recebem 15 de dano perfurante.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/gnwtJrI.png",
        themepic: "https://i.imgur.com/OZP7Ht2.jpg",
      },
      {
        name: "Electric Water Encampment Wall",
        themeName: "Electric Water Encampment Wall",
        description:
          "Darui targets all enemies for 1 turn, any enemy that uses a new harmful skill will take 5 affliction damage. The following turn, all enemies affected by this skill will recelve 5 additional damage from 'Laser Circus' and 'Black Panther Lightning'. This skill cannot be countered.",
        descriptionBR:
          "Darui mira em todos os inimigos por 1 turno; qualquer inimigo que usar uma nova habilidade ofensiva receberá 5 de dano aflitivo. No turno seguinte, todos os inimigos afetados por esta habilidade receberão 5 de dano adicional de 'Laser Circus' e 'Black Panther Lightning'. Esta habilidade não pode ser anulada.",
        energy: [],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/arWmbIl.png",
        themepic: "https://i.imgur.com/DThqy0t.jpg",
      },
      {
        name: "Black Panther Lightning",
        themeName: "Black Panther Lightning",
        description:
          "Darui generates a black panther lightning from his body and releases it at one enemy, dealing 35 piercing damage to them. For 1 turn, that enemy's skills will have 2 additional cooldown. This skill ignores invulnerability.",
        descriptionBR:
          "Darui gera uma pantera negra de raio a partir do seu corpo e a lança contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 2 de recarga adicional. Esta habilidade ignora invulnerabilidade.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/lbXhosJ.png",
        themepic: "https://i.imgur.com/LaIHZZO.jpg",
      },
      {
        name: "Cleaver Sword Defense",
        themeName: "Cleaver Sword Defense",
        description:
          "This skill makes Darui (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Darui (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/GoWroAB.png",
        themepic: "https://i.imgur.com/qi34t8M.jpg",
      },
    ],
  },
  {
    name: "Omoi (S)",
    url: "https://i.imgur.com/C3s2jdh.png",
    themepic: "https://i.imgur.com/UTXDFLd.jpg",
    description:
      "One of the ninjas in the cloud village, and one of the biggest swordsmen in the village. Omoi is usually concerned, but at the same time, skilled and apprehensive. In addition to good fencing, Omoi is able to execute strikes with the lightning element.",
    descriptionBR:
      "Um dos ninjas da Vila da Nuvem e um dos maiores espadachins da vila. Omoi geralmente é preocupado, mas ao mesmo tempo habilidoso e cauteloso. Além de ser bom na esgrima, Omoi é capaz de executar golpes com o elemento relâmpago",
    skills: [
      {
        name: "Crescent Moon Beheading",
        themeName: "Crescent Moon Beheading",
        description:
          "By using his sword to strike the enemy and liberate his allies, Omoi <Damage>deals 20 piercing damage<Damage> to one enemy and makes them unable to become <Defense>invulnerable<Defense> for 1 turn. Afterwards, all Omoi allies will have all harmful damaging<Classes> skills <Effects>removed<Effects> from them.",
        descriptionBR:
          "Usando sua espada para golpear o inimigo e libertar seus aliados, Omoi <Damage>causa 20 de dano perfurante<Damage> a um inimigo e o impede de se tornar <Defense>invulnerável<Defense> por 1 turno. Em seguida, todos os aliados de Omoi terão todas as <Classes>habilidades prejudiciais de dano<Classes> <Effects>removidas<Effects> deles.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/NSp1GYk.jpg",
        themepic: "https://i.imgur.com/tMfB2rQ.jpg",
      },
      {
        name: "Lightning Chakra Stab",
        themeName: "Lightning Chakra Stab",
        description:
          "Omoi imbues lightning chakra in his sword to immobilize one enemy just in one stab, <Damage>dealing them 20 piercing damage<Damage> and <Effects>stunning<Effects> their <Classes>helpful<Classes> skills. For 1 turn that enemy is also <Defense>invulnerable<Defense> to new <Classes>helpful<Classes> skills.",
        descriptionBR:
          "Omoi envolve sua espada com chakra de relâmpago para imobilizar um inimigo com apenas um golpe, <Damage>causando 20 de dano perfurante<Damage> e <Effects>atordoando<Effects> suas habilidades <Classes>benéficas<Classes>. Por 1 turno, esse inimigo também fica <Defense>invulnerável<Defense> a novas habilidades <Classes>benéficas<Classes>.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/NekhgvG.jpg",
        themepic: "https://i.imgur.com/vMQjvDH.jpg",
      },
      {
        name: "Crescent Moon Reverse Beheading",
        themeName: "Crescent Moon Reverse Beheading",
        description:
          "Omoi uses his reactive kenjutsu to counterattack one enemy. If that enemy <Classes>uses a new harmful damaging<Classes> skill, they will be <Defense>countered<Defense>, will <Damage>take 20 piercing damage<Damage> and will have their <Classes>physical and ranged<Classes> skills <Effects>stunned<Effects>. The target of this skill is <Invisible>invisible<Invisible>.",
        descriptionBR:
          "Omoi usa seu kenjutsu reativo para contra-atacar um inimigo. Se esse inimigo <Classes>usar uma nova habilidade prejudicial de dano<Classes>, ele será <Defense>anulado<Defense>, <Damage>sofrerá 20 de dano perfurante<Damage> e terá suas habilidades <Classes>Physical e Ranged<Classes> <Effects>atordoadas<Effects>. O alvo desta habilidade é <Invisible>invisível<Invisible>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://imgur.com/kHt1Ptt.jpg",
        themepic: "https://i.imgur.com/1PFmnkz.jpg",
      },
      {
        name: "Guard Position",
        themeName: "Guard Position",
        description: "This skill makes Omoi (S) invulnerable for 1 turn.",
        descriptionBR: "This skill makes Omoi (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/pRn7sNb.jpg",
        themepic: "https://i.imgur.com/xxMRdLK.jpg",
      },
    ],
  },
  {
    name: "Shee (S)",
    url: "https://i.imgur.com/RFhdpoD.jpeg",
    themepic: "https://i.imgur.com/ysuVHCo.jpg",
    description:
      "Shee (S) is a jounin of the Hidden Cloud Village and a sensor. Shee is one of the Raikage's most reliable shinobi.",
    descriptionBR:
      "Shee (S) é um jounin da Vila Oculta da Nuvem e um sensor. Ele é um dos shinobi mais confiáveis do Raikage.",
    skills: [
      {
        name: "Sensor Awareness",
        themeName: "Sensor Awareness",
        description:
          "Shee uses his sensor to dectect one enemy's move. For 1 turn, if that enemy uses a new skill they will take 20 piercing damage. During this time, if a new skill or action is used on Shee, he will become invulnerable for 1 turn. The target of this skill is invisible.",
        descriptionBR:
          "Shee usa seu sensor para detectar o movimento de um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade, receberá 20 de dano perfurante. Durante esse tempo, se uma nova habilidade ou ação for usada em Shee, ele se tornará invulnerável por 1 turno. O alvo desta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/SMnft1l.jpeg",
        themepic: "https://i.imgur.com/8addcbg.jpg",
      },
      {
        name: "Ally Heal",
        themeName: "Ally Heal",
        description: "Using Ally Heal Shee (S) heals an ally for 25 health.",
        descriptionBR:
          "Usando Ally Heal, Shee (S) cura um aliado em 25 de vida.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/aJyDdNp.jpeg",
        themepic: "https://i.imgur.com/GjK3VDu.jpg",
      },
      {
        name: "Lightning Illusion Flash",
        themeName: "Lightning Illusion Flash",
        description:
          "Shee (S) uses Lighting Illusion Flash on 1 enemy dealing 35 damage. That enemy will be invulnerable to new friendly skills for 1 turn.",
        descriptionBR:
          "Shee (S) usa Lightning Illusion Flash em 1 inimigo, causando 35 de dano. Esse inimigo ficará invulnerável a novas habilidades benéficas por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/wfXP1XU.jpeg",
        themepic: "https://i.imgur.com/ZO4jVwn.jpg",
      },
      {
        name: "Defensive Reaction",
        themeName: "Defensive Reaction",
        description:
          "This skill makes Shee (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shee (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/5LT9gGR.jpeg",
        themepic: "https://i.imgur.com/0iIHGsI.jpg",
      },
    ],
  },
  {
    name: "Ao (S)",
    url: "https://i.imgur.com/8eZpgiw.jpg",
    themepic: "https://i.imgur.com/8eZpgiw.jpg",
    description:
      "Ao (S) is a hunter-nin of the Hidden Mist Village and a skilled sensor. Ao is a veteran shinobi who has been in many battles, one of his spoils of war is the byakugan he possesses.",
    descriptionBR:
      "Ao (S) é um hunter-nin da Vila Oculta da Névoa e um sensor habilidoso. Ele é um shinobi veterano que participou de muitas batalhas, um dos seus despojos de guerra é o byakugan que possui.",
    skills: [
      {
        name: "Stolen Byakugan",
        themeName: "Stolen Byakugan",
        description:
          "Ao uses his Byakugan on an enemy. For 3 turns, any new invisible skill used by that enemy will be visible and each time they use a new skill they will take 50% more damage from Ranged skills for 1 turn. This skill is invisible and cannot be countered or reflected.",
        descriptionBR:
          "Ao usa seu Byakugan em um inimigo. Por 3 turnos, qualquer nova habilidade invisível usada por esse inimigo será visível e cada vez que usar uma nova habilidade, receberá 50% a mais de dano de habilidades Ranged por 1 turno. Esta habilidade é invisível e não pode ser anulada ou refletida.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 2,
        url: "https://i.imgur.com/SE4MQCu.jpg",
        themepic: "https://i.imgur.com/SE4MQCu.jpg",
      },
      {
        name: "Sensing Barrier",
        themeName: "Sensing Barrier",
        description:
          "Using sensing barrier, Ao deals 20 damage to one enemy. The following turn, that enemy will receive 5 more damage from this skill. During this time, they will be unable to reduce damage or become invulnerable.",
        descriptionBR:
          "Usando sensing barrier, Ao causa 20 de dano a um inimigo. No turno seguinte, esse inimigo receberá 5 de dano adicional dessa habilidade. Durante esse tempo, ele não poderá reduzir dano nem ficar invulnerável.",
        energy: ["Blood"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ij8B1SF.jpg",
        themepic: "https://i.imgur.com/ij8B1SF.jpg",
      },
      {
        name: "Byakugan Seal",
        themeName: "Byakugan Seal",
        description:
          "For 1 turn, the first non mental skill used on Ao (S) will be countered. This skill is invisible the first time it is used and may only be used once. After the following 2 turns, this skill will be re-applied. During this time, if 'Sensing Barrier' is used this skill will be instantly re-applied.",
        descriptionBR:
          "Por 1 turno, a primeira habilidade não mental usada em Ao (S) será anulada. Esta habilidade é invisível na primeira vez que é usada e pode ser usada apenas uma vez. Após os 2 turnos seguintes, esta habilidade será reaplicada. Durante esse tempo, se 'Sensing Barrier' for usada, esta habilidade será reaplicada instantaneamente.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XNSUxsF.jpg",
        themepic: "https://i.imgur.com/XNSUxsF.jpg",
      },
      {
        name: "Reactionary Defense",
        themeName: "Reactionary Defense",
        description:
          "This skill makes Ao (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Ao (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UQa0dlh.jpg",
        themepic: "https://i.imgur.com/UQa0dlh.jpg",
      },
    ],
  },
  {
    name: "Chojuro (S)",
    url: "https://i.imgur.com/WMSVj5I.jpg",
    themepic: "https://i.imgur.com/WMSVj5I.jpg",
    description:
      "Chojuro (S) confidence is building as the war rages one. The longer it lasts the stronger Chojuro (S) becomes.",
    descriptionBR:
      "A confiança de Chojuro (S) cresce enquanto a guerra continua. Quanto mais durar, mais forte Chojuro (S) fica.",
    skills: [
      {
        name: "Hiramekarei Strider",
        themeName: "Hiramekarei Strider",
        description:
          "Using Hiramekarei Strider, Chojuro destroys all enemies' destructible defense and damage reduction and then deals 10 piercing damage to them. The following 2 turns, this skill will cost 1 ninjutsu chakra and may be used to deal 20 piercing damage to one enemy.",
        descriptionBR:
          "Usando Hiramekarei Strider, Chojuro destrói toda defesa destrutível e redução de dano dos inimigos e causa 10 de dano piercing. Nos próximos 2 turnos, esta habilidade custará 1 chakra ninjutsu e poderá causar 20 de dano piercing em um inimigo.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/Nh30zKh.jpg",
        themepic: "https://i.imgur.com/Nh30zKh.jpg",
      },
      {
        name: "Hiramekarei Hammer",
        themeName: "Hiramekarei Hammer",
        description:
          "Chojuro (S) creates a hammer of chakra to attack one enemy, dealing 40 piercing damage to them. If that enemy has any destructible defense or damage reduction, this skill will apply 'Hiramekarei Strider' on them before dealing damage.",
        descriptionBR:
          "Chojuro (S) cria um martelo de chakra para atacar um inimigo, causando 40 de dano piercing. Se o inimigo tiver defesa destrutível ou redução de dano, esta habilidade aplicará 'Hiramekarei Strider' antes de causar dano.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/CSZCwGo.jpg",
        themepic: "https://i.imgur.com/CSZCwGo.jpg",
      },
      {
        name: "Hiramekarei Kenjutsu",
        themeName: "Hiramekarei Kenjutsu",
        description:
          "For 1 turn, all enemy physical or mental skills used on Chojuro (S) will be countered. Any countered enemy will permanently take 10 additional damage from Chojuro (S)'s skills.",
        descriptionBR:
          "Por 1 turno, todas as habilidades Physical ou Mental inimigas usadas contra Chojuro (S) serão anuladas. Qualquer inimigo anulado sofrerá permanentemente 10 de dano adicional das habilidades de Chojuro (S).",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Xei0Rhg.jpg",
        themepic: "https://i.imgur.com/Xei0Rhg.jpg",
      },
      {
        name: "Hiramekarei Defense",
        themeName: "Hiramekarei Defense",
        description:
          "This skill makes Chojuro (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Chojuro (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/by7vCiX.jpg",
        themepic: "https://i.imgur.com/by7vCiX.jpg",
      },
    ],
  },
  {
    name: "Four Tail Kyuubi Naruto (S)",
    url: "https://i.imgur.com/D0nPc8R.png",
    description:
      "After completely giving into his anger and manifesting a fourth tail, Naruto ceases to be himself. In this state, Naruto's own body is completely overtaken by a deep, dense Nine-Tails chakra cloak, and at the cost of huge internal damage, Naruto becomes a mindless monster; a being of pure rage and destruction.",
    descriptionBR:
      "After completely giving into his anger and manifesting a fourth tail, Naruto ceases to be himself. In this state, Naruto's own body is completely overtaken by a deep, dense Nine-Tails chakra cloak, and at the cost of huge internal damage, Naruto becomes a mindless monster; a being of pure rage and destruction.",
    skills: [
      {
        name: "Four Tails Transformation",
        themeName: "Four Tails Transformation",
        description:
          "Naruto gains 15 points of damage reduction and 20 points of destructible defense permanently. During this time, he cannot be stunned. Each turn Naruto uses a new harmful skill, he loses 10 health that cannot kill him. This skill will be replaced by 'Kyuubi Chakra Gather'.",
        descriptionBR:
          "Naruto gains 15 points of damage reduction and 20 points of destructible defense permanently. During this time, he cannot be stunned. Each turn Naruto uses a new harmful skill, he loses 10 health that cannot kill him. This skill will be replaced by 'Kyuubi Chakra Gather'.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/EDgE6DD.png",
      },
      {
        name: "Shockwave Smash",
        themeName: "Shockwave Smash",
        description:
          "Naruto smahes the ground, generating a violent shockwave and dealing 15 piercing damage to all enemies. The following turn, 'Four Tailed Beast Bomb' will cost 1 less random chakra. Requires 'Four Tails Transformation'.",
        descriptionBR:
          "Naruto smahes the ground, generating a violent shockwave and dealing 15 piercing damage to all enemies. The following turn, 'Four Tailed Beast Bomb' will cost 1 less random chakra. Requires 'Four Tails Transformation'.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/YHEn0la.png",
      },
      {
        name: "Four Tailed Beast Bomb",
        themeName: "Four Tailed Beast Bomb",
        description:
          "Naruto releases a massive tailed beast bomb, dealing 50 piercing damage to one enemy. The following turn, 'Shockwave Smash' will deal 5 additional damage. Requires 'Four Tails Transformation'.",
        descriptionBR:
          "Naruto releases a massive tailed beast bomb, dealing 50 piercing damage to one enemy. The following turn, 'Shockwave Smash' will deal 5 additional damage. Requires 'Four Tails Transformation'.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/lZjOpvA.png",
      },
      {
        name: "Kyuubi Chakra Skin",
        themeName: "Kyuubi Chakra Skin",
        description:
          "This skill makes Four Tail Kyuubi Naruto (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Four Tail Kyuubi Naruto (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/HaNdcQd.png",
      },
      {
        name: "Kyuubi Chakra Gather",
        themeName: "Kyuubi Chakra Gather",
        description:
          "Naruto concentrates an immense amount of chakra in his mouth, gaining 10 permanent destructible defense and increasing 'Four Tailed Beast Bomb' damage by 5 permanently. This skill will end when Naruto uses his next new harmful skill. This skill may only stacks 3 times.",
        descriptionBR:
          "Naruto concentrates an immense amount of chakra in his mouth, gaining 10 permanent destructible defense and increasing 'Four Tailed Beast Bomb' damage by 5 permanently. This skill will end when Naruto uses his next new harmful skill. This skill may only stacks 3 times.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/X7aIup4.png",
      },
    ],
  },
  {
    name: "Jiraiya (S)",
    url: "https://i.imgur.com/XE97bxE.jpg",
    themepic: "https://i.imgur.com/XE97bxE.jpg",
    description:
      "Jiraiya (S) is one of the legendary Sannin that were trained by the third Hokage. Also known as the toad sage, he has been Uzumaki Naruto's teacher for the past few years.",
    descriptionBR:
      "Jiraiya (S) é um dos lendários Sannin treinados pelo terceiro Hokage. Também conhecido como o sábio dos sapos, ele tem sido o mestre de Uzumaki Naruto nos últimos anos.",
    skills: [
      {
        name: "Katon Endan",
        themeName: "Katon Endan",
        description:
          "Jiraiya (S) emits a jet of fire from his mouth dealing 20 damage to one enemy. This skill is replaced by 'Toad Oil Projectile' after being used.",
        descriptionBR:
          "Jiraiya (S) emite um jato de fogo pela boca, causando 20 de dano a um inimigo. Esta habilidade é substituída por 'Toad Oil Projectile' após ser usada.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XXJ4UvH.jpg",
        themepic: "https://i.imgur.com/XXJ4UvH.jpg",
      },
      {
        name: "Gamaken Rush",
        themeName: "Gamaken Rush",
        description:
          "Jiraiya (S) summons Gamaken in the battlefield, dealing 25 damage to one enemy and granting him and his allies 15 points of permanent destructible defense. For 1 turn Jiraiya and his allies will deal 5 more damage with non-affliction ranged skills. The following 2 turns this skill will be replaced by 'Gamaken Shield Guard'.",
        descriptionBR:
          "Jiraiya (S) invoca Gamaken no campo de batalha, causando 25 de dano a um inimigo e concedendo a ele e aos aliados 15 pontos de defesa destrutível permanente. Por 1 turno, Jiraiya e seus aliados causarão 5 de dano adicional com habilidades Ranged não aflitivas. Nos 2 turnos seguintes, esta habilidade será substituída por 'Gamaken Shield Guard'.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/QSdoms1.png",
        themepic: "https://i.imgur.com/WxBdot5.png",
      },
      {
        name: "Wild Lion Mane",
        themeName: "Wild Lion Mane",
        description:
          "Jiraiya (S) will protect himself or an ally for 3 turns from enemy physical skills. If an enemy uses a physical melee skill on that character they will take 25 damage*. If an enemy uses a physical ranged skill their physical or melee skills will be stunned 1 turn and take 15 damage*. This skill is invisible.",
        descriptionBR:
          "Jiraiya (S) protegerá a si mesmo ou a um aliado por 3 turnos contra habilidades Physical inimigas. Se um inimigo usar uma habilidade Physical Melee nesse personagem, receberá 25 de dano*. Se usar uma habilidade Physical Ranged , suas habilidades Physical ou Melee serão atordoadas por 1 turno e ele receberá 15 de dano*. Esta habilidade é invisível.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged*", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/29s7Mpl.jpg",
        themepic: "https://i.imgur.com/29s7Mpl.jpg",
      },
      {
        name: "Summoning Gamaken",
        themeName: "Summoning Gamaken",
        description:
          "This skill makes Jiraiya (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Jiraiya (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/iMdoRdI.jpg",
        themepic: "https://i.imgur.com/iMdoRdI.jpg",
      },
      {
        name: "Toad Oil Projectile",
        themeName: "Toad Oil Projectile",
        description:
          "Jiraiya (S) spits a very dense oil at one enemy dealing 10 affliction damage and ending any control skills they are using. If Katon Endan is used on this enemy they will take an additional 10 affliction damage. The effect is permanent and stacks. This skill is replaced by 'Katon Endan' after being used.",
        descriptionBR:
          "Jiraiya (S) cospe um óleo muito denso em um inimigo, causando 10 de dano aflitivo e encerrando quaisquer habilidades de Controle que ele esteja usando. Se Katon Endan for usado neste inimigo, ele receberá 10 de dano aflitivo adicional. O efeito é permanente e acumulativo. Esta habilidade é substituída por 'Katon Endan' após ser usada.",
        energy: ["Random"],
        classes: ["Physical", "Afflitcion", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/gjGEbMs.png",
        themepic: "https://i.imgur.com/gjGEbMs.png",
      },
      {
        name: "Gamaken Shield Guard",
        themeName: "Gamaken Shield Guard",
        description:
          "Jiraiya (S) and his allies become invulnerable to physical skills for 1 turn.",
        descriptionBR:
          "Jiraiya (S) e seus aliados se tornam invulneráveis a habilidades Physical por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/Wkqj4wO.png",
        themepic: "https://i.imgur.com/99U8MUm.jpeg",
      },
    ],
  },
  {
    name: "Sennin Jiraiya (S)",
    url: "https://i.imgur.com/0AZFUyS.jpg",
    themepic: "https://i.imgur.com/0AZFUyS.jpg",
    description:
      "Sennin Jiraiya (S) uses sage chakra to improve his speed, strength, and skills. The only downfall is that it alters his appearance similar to that of a toad and makes him unappealing to women, which makes it a last resort for the pervy sage.",
    descriptionBR:
      "Sennin Jiraiya (S) usa chakra sábio para melhorar sua velocidade, força e habilidades. A única desvantagem é que isso altera sua aparência, tornando-o semelhante a um sapo e o deixando pouco atraente para as mulheres, o que faz dessa técnica um último recurso para o sábio tarado.",
    skills: [
      {
        name: "Bath of Burning Oil",
        themeName: "Bath of Burning Oil",
        description:
          "Using a mixture of wind, oil, and fire, Sennin Jiraiya (S) deals 20 damage and 15 piercing damage to one enemy. For 1 turn counter skills used by that enemy will last 1 turn less.",
        descriptionBR:
          "Usando uma mistura de vento, óleo e fogo, Sennin Jiraiya (S) causa 20 de dano e 15 de dano perfurante a um inimigo. Por 1 turno, habilidades de anular usadas por esse inimigo durarão 1 turno a menos.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DkpKWQU.jpg",
        themepic: "https://i.imgur.com/DkpKWQU.jpg",
      },
      {
        name: "Kebari Senbon",
        themeName: "Kebari Senbon",
        description:
          "Sennin Jiraiya (S) turns his hair into needles and deals 15 damage to all enemies. Sennin Jiraiya (S) will be invulnerable to melee skills for 1 turn.",
        descriptionBR:
          "Sennin Jiraiya (S) transforma seu cabelo em agulhas e causa 15 de dano a todos os inimigos. Sennin Jiraiya (S) ficará invulnerável a habilidades Melee por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/zrgHWDZ.jpg",
        themepic: "https://i.imgur.com/zrgHWDZ.jpg",
      },
      {
        name: "Chou Oodama Rasengan",
        themeName: "Chou Oodama Rasengan",
        description:
          "Creating a massive rasengan, Sennin Jiraiya (S) deals 45 damage to 1 enemy. For 1 turn that enemy cannot reduce damage or become invulnerable.",
        descriptionBR:
          "Criando um rasengan massivo, Sennin Jiraiya (S) causa 45 de dano a um inimigo. Por 1 turno, esse inimigo não pode reduzir o dano nem se tornar invulnerável.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/KCTS7DZ.jpg",
        themepic: "https://i.imgur.com/KCTS7DZ.jpg",
      },
      {
        name: "Arm Block",
        themeName: "Arm Block",
        description:
          "This skill makes Sennin Jiraiya (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sennin Jiraiya (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/LMkh8Pe.jpg",
        themepic: "https://i.imgur.com/LMkh8Pe.jpg",
      },
    ],
  },
  {
    name: "Fukasaku and Shima (S)",
    url: "https://i.imgur.com/oXOirA4.jpg",
    themepic: "https://i.imgur.com/oXOirA4.jpg",
    description:
      "Fukasaku and Shima (S) are known as the two great sage toads of Mount Myoboku. They taught both Jiraiya and Naruto sage jutsu and are each skilled in elemental techniques as well as genjutsu techniques.",
    descriptionBR:
      "Fukasaku e Shima (S) são conhecidos como os dois grandes sapos sábios do Monte Myoboku. Eles ensinaram o jutsu sábio tanto para Jiraiya quanto para Naruto e são habilidosos com técnicas elementares e também com técnicas de genjutsu.",
    skills: [
      {
        name: "Frog Song",
        themeName: "Frog Song",
        description:
          "Fukasaku and Shima (S) use their pattened genjustu to use Frog Song. They target 1 enemy and deal 15 affliction damage for 2 turns. During Toad Confrontation Singing this skill will cost 1 random chakra instead.",
        descriptionBR:
          "Fukasaku e Shima (S) usam seu genjutsu característico para executar o Frog Song. Eles miram em 1 inimigo e causam 15 de dano aflitivo por 2 turnos. Durante Toad Confrontation Singing, esta habilidade custará 1 chakra aleatório em vez disso.",
        energy: ["Gen"],
        classes: ["Mental", "Action", "Ranged", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/NZKucJD.jpg",
        themepic: "https://i.imgur.com/NZKucJD.jpg",
      },
      {
        name: "Sand Dust",
        themeName: "Sand Dust",
        description:
          "Fukasaku and Shima (S) use Sand Dust. All allies will be invulnerable to enemy ranged skills for 1 turn.",
        descriptionBR:
          "Fukasaku e Shima (S) usam Sand Dust. Todos os aliados se tornarão invulneráveis a habilidades Ranged inimigas por 1 turno.",
        energy: ["Nin"],
        classes: ["Physical", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/tvcevTA.jpg",
        themepic: "https://i.imgur.com/tvcevTA.jpg",
      },
      {
        name: "Toad Confrontation Singing",
        themeName: "Toad Confrontation Singing",
        description:
          "Fukasaku and Shima (S) use Toad Confrontation Singing on all enemies dealing 15 damage for 2 turns. If any enemy uses a new skill during Toad Confrontation Singing they will have their mental and ranged skills stunned for 1 turn.",
        descriptionBR:
          "Fukasaku e Shima (S) usam Toad Confrontation Singing em todos os inimigos, causando 15 de dano por 2 turnos. Se qualquer inimigo usar uma nova habilidade durante Toad Confrontation Singing, suas habilidades Mentais e Ranged serão atordoadas por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Control", "Unique", "__$"],
        cooldown: 3,
        url: "https://i.imgur.com/A0eWnDM.jpg",
        themepic: "https://i.imgur.com/A0eWnDM.jpg",
      },
      {
        name: "Frogs Tag Team",
        themeName: "Frogs Tag Team",
        description:
          "This skill makes Fukasaku and Shima (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Fukasaku and Shima (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/iaBGOtU.png",
        themepic: "https://i.imgur.com/azkBW92.jpg",
      },
    ],
  },
  {
    name: "Sennin Naruto (S)",
    url: "https://i.imgur.com/AMLeB3e.jpg",
    themepic: "https://i.imgur.com/AMLeB3e.jpg",
    description:
      "Sennin Naruto (S) has trained on Mount Myoboku with Fukasaku and Shima. Naruto has become one of the most powerful individuals in the ninja world.",
    descriptionBR:
      "Sennin Naruto (S) treinou no Monte Myoboku com Fukasaku e Shima. Naruto se tornou um dos indivíduos mais poderosos do mundo ninja.",
    skills: [
      {
        name: "Frog Kata Kick",
        themeName: "Frog Kata Kick",
        description:
          "Sennin Naruto (S) uses Frog Kata Kick on 1 enemy. That enemy will take 20 damage and have their physical and chakra skills stunned for 1 turn. The following turn this skill becomes 'Rasenshuriken'.",
        descriptionBR:
          "Sennin Naruto (S) usa Frog Kata Kick em 1 inimigo. Esse inimigo receberá 20 de dano e terá suas habilidades Physical e Chakra atordoadas por 1 turno. No turno seguinte, esta habilidade se tornará 'Rasenshuriken'.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/bZvNJMc.jpeg",
        themepic: "https://i.imgur.com/bZvNJMc.jpeg",
      },
      {
        name: "Sage Revitalization",
        themeName: "Sage Revitalization",
        description:
          "Using Sage Revitalization Sennin Naruto (S) replenishes his sage chakra. Sennin Naruto (S) removes all harmful skills from him and heals for 25 health.",
        descriptionBR:
          "Usando Sage Revitalization, Sennin Naruto (S) recarrega seu chakra sábio. Ele remove todas as habilidades ofensivas de si mesmo e cura 25 de vida.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/z4vnCGt.jpeg",
        themepic: "https://i.imgur.com/z4vnCGt.jpeg",
      },
      {
        name: "Natural Energy Assault",
        themeName: "Natural Energy Assault",
        description:
          "Sennin Naruto (S) uses 'Natural Energy Assault' on all enemies. For 1 turn all enemies will be unable to use stun skills or removing/stealing chakra skills. This is a stun effect. This skill becomes 'Rasengan Barrage' for 2 turns.",
        descriptionBR:
          "Sennin Naruto (S) usa 'Natural Energy Assault' em todos os inimigos. Por 1 turno, todos os inimigos não poderão usar habilidades de atordoamento ou de remoção/roubo de chakra. Este é um efeito de atordoamento. Esta habilidade se tornará 'Rasengan Barrage' por 2 turnos.",
        energy: ["Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/9PtPAgm.jpeg",
        themepic: "https://i.imgur.com/9PtPAgm.jpeg",
      },
      {
        name: "Kunai Deflection",
        themeName: "Kunai Deflection",
        description:
          "This skill makes Sennin Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Sennin Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/wj3Fdw1.jpeg",
        themepic: "https://i.imgur.com/wj3Fdw1.jpeg",
      },
      {
        name: "Rasenshuriken",
        themeName: "Rasenshuriken",
        description:
          "Sennin Naruto (S) uses his final attack on 1 enemy. Sennin Naruto (S) destroys their destructible defense and deals 45 piercing damage to that enemy. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Sennin Naruto (S) usa seu ataque final em 1 inimigo. Ele destrói a defesa destrutível do alvo e causa 45 de dano perfurante. Esta habilidade ignora invulnerabilidade e não pode ser anulada ou refletida.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/gM2lgk5.jpeg",
        themepic: "https://i.imgur.com/gM2lgk5.jpeg",
      },
      {
        name: "Rasengan Barrage",
        themeName: "Rasengan Barrage",
        description:
          "Sennin Naruto (S) uses 'Rasengan Barrage'. The following turn one enemy will be dealt 30 damage. During this time, the first enemy to use a new skill on Sennin Naruto will be countered. This is skill is invisible. Becomes 'Natural Energy Assault' when used.",
        descriptionBR:
          "Sennin Naruto (S) usa 'Rasengan Barrage'. No turno seguinte, um inimigo receberá 30 de dano. Durante esse tempo, o primeiro inimigo que usar uma nova habilidade em Naruto será anulado. Esta habilidade é invisível. Torna-se 'Natural Energy Assault' quando usada.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/KJl5Mjy.jpeg",
        themepic: "https://i.imgur.com/KJl5Mjy.jpeg",
      },
    ],
  },
  {
    name: "Orochimaru (S)",
    url: "https://imgur.com/gokjDPg.jpg",
    description:
      "Orochimaru is in the last year of his current body's useful life, so he rushes to take over Sasuke's body. His combat skills remain incredible. He is able to generate and control immense hordes of snakes and also regenerate easily.",
    descriptionBR:
      "Orochimaru is in the last year of his current body's useful life, so he rushes to take over Sasuke's body. His combat skills remain incredible. He is able to generate and control immense hordes of snakes and also regenerate easily.",
    skills: [
      {
        name: "Extensive Kusanagi",
        themeName: "Extensive Kusanagi",
        description:
          "Orochimaru first stuns one enemy non-mental skills for 1 turn, and then steals 10 health from them each turn for 3 turns. During this time, that enemy will receive 5 additional damage from all other affliction skills. This skill cannot stack.",
        descriptionBR:
          "Orochimaru first stuns one enemy non-mental skills for 1 turn, and then steals 10 health from them each turn for 3 turns. During this time, that enemy will receive 5 additional damage from all other affliction skills. This skill cannot stack.",
        energy: ["Tai", "Random"],
        classes: [
          "Physical",
          "Control",
          "Ranged",
          "Harmful",
          "Unique",
          "Affliction",
        ],
        cooldown: 2,
        url: "https://imgur.com/b0jRASm.jpg",
      },
      {
        name: "Snake Horde",
        themeName: "Snake Horde",
        description:
          "Orochimaru deals 20 affliction damage to one enemy, and makes their stunning effects last 1 less turn for 1 turn. During this time, if that enemy uses a new harmful skill, 'Wave of Swords' will be applied on them.",
        descriptionBR:
          "Orochimaru deals 20 affliction damage to one enemy, and makes their stunning effects last 1 less turn for 1 turn. During this time, if that enemy uses a new harmful skill, 'Wave of Swords' will be applied on them.",
        energy: ["Blood"],
        classes: [
          "Physical",
          "Instant",
          "Melee",
          "Harmful",
          "Affliction",
          "Unique",
        ],
        cooldown: 0,
        url: "https://imgur.com/I6RvVdD.jpg",
      },
      {
        name: "Shadow Snake Ultimate",
        themeName: "Shadow Snake Ultimate",
        description:
          "Orochimaru targets one enemy, applying both 'Extensive Kusanagi' and 'Snakes Horde' on them. After that, 'Triple Rashoumon' will also be applied on Orochimaru. This skill cannot be countered.",
        descriptionBR:
          "Orochimaru targets one enemy, applying both 'Extensive Kusanagi' and 'Snakes Horde' on them. After that, 'Triple Rashoumon' will also be applied on Orochimaru. This skill cannot be countered.",
        energy: ["Blood", "Tai", "Random"],
        classes: ["Physical", "Instant", "Melee", "Harmful", "Affliction"],
        cooldown: 4,
        url: "https://imgur.com/PtIp1f0.jpg",
      },
      {
        name: "Fast Skin Replacement",
        themeName: "Fast Skin Replacement",
        description: "This skill makes Orochimaru (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Orochimaru (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/JtGgONH.jpg",
      },
      {
        name: "Triple Rashoumon",
        themeName: "Triple Rashoumon",
        description:
          "When Orochimaru use 'Shadow Snake Ultimate', he gains 20 points of destructible defense that lasts for 3 turns and also ignore stun effects until that defense ends. This skill ignores invulnerability.",
        descriptionBR:
          "When Orochimaru use 'Shadow Snake Ultimate', he gains 20 points of destructible defense that lasts for 3 turns and also ignore stun effects until that defense ends. This skill ignores invulnerability.",
        energy: [],
        classes: ["Physical", "Instant", "Helpful", "Unique"],
        cooldown: 0,
        url: "https://imgur.com/l2tstMX.jpg",
      },
      {
        name: "Wave of Swords",
        themeName: "Wave of Swords",
        description:
          "The enemy affected by this skill will receive 5 affliction damage for 3 turns. During this time, that enemy will be unable to be healed.",
        descriptionBR:
          "The enemy affected by this skill will receive 5 affliction damage for 3 turns. During this time, that enemy will be unable to be healed.",
        energy: [],
        classes: ["Physical", "Instant", "Ranged", "Harmful", "Affliction"],
        cooldown: 0,
        url: "https://imgur.com/Zvn5wtC.jpg",
      },
    ],
  },
  {
    name: "Yakushi Kabuto (S)",
    url: "https://i.imgur.com/lBkxaOw.png",
    themepic: "https://i.imgur.com/3G5JsKo.jpg",
    description:
      "After two years, Kabuto remains Orochimaru's subordinate and Sasori's spy. His medical skills continue to improve, in addition to being able to use his current chakra to attack, Kabuto can use the chakra to heal himself instantly.",
    descriptionBR:
      "Após dois anos, Kabuto continua sendo subordinado de Orochimaru e espião de Sasori. Suas habilidades médicas continuam a melhorar e, além de usar chakra para atacar, Kabuto pode usá-lo para se curar instantaneamente.",
    skills: [
      {
        name: "Charged Mystical Palm",
        themeName: "Charged Mystical Palm",
        description:
          "If used on an enemy: Kabuto heals 5 health, deals 20 piercing damage to one enemy and stuns their stunning skills for 1 turn. <br> If used on himself or an ally: They will heal 20 health, remove all affliction skills from themselves, and ignore stun effects for 1 turn.",
        descriptionBR:
          "Se usada em um inimigo: Kabuto cura 5 de vida, causa 20 de dano perfurante a esse inimigo e atordoa as habilidedes com efeitos atordoantes dele. <br> Se usada em um aliado ou nele mesmo: Cura 20 de vida, remove todas as habilidades Affliction, e faz ignorar efeitos atordoantes por 1 turno.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/qGHoQYR.png",
        themepic: "https://i.imgur.com/wjswo0g.jpg",
      },
      {
        name: "Dead Soul Jutsu",
        themeName: "Dead Soul Jutsu",
        description:
          "Kabuto deals 25 damage to one enemy. For 2 turns, all other enemies will have their healing skills stunned. Permanently, 'Charged Mystical Palm' will increase its damage and heal by 10. This skill cannot be countered.",
        descriptionBR:
          "Kabuto causa 25 de dano a um inimigo. Por 2 turnos, todos os outros inimigos terão suas habilidades de cura atordoadas. Permanentemente, o dano e cura de 'Charged Mystical Palm' serão aumentados em 10. Esta habilidade não pode ser anulada.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/3LOLnbG.png",
        themepic: "https://i.imgur.com/y5oLcPH.jpg",
      },
      {
        name: "Orochimaru Cells Takeover",
        themeName: "Orochimaru Cells Takeover",
        description:
          "Kabuto target himself for 2 turns. During this time, if his health reaches 0, it will be set to 35 and he will gain 2 random chakras and then this skill will end. This skill is invisible until triggered.",
        descriptionBR:
          "Kabuto se prepara por 2 turnos. Durante esse tempo, se sua vida chegar a 0, ela será definida como 35 e ele ganhará 2 chakras aleatórios, encerrando a habilidade. Esta habilidade é invisível até ser ativada.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/OzDQTw0.png",
        themepic: "https://i.imgur.com/CiEtBYK.jpg",
      },
      {
        name: "Kabuto Dodge",
        themeName: "Kabuto Dodge",
        description:
          "This skill makes Yakushi Kabuto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Yakushi Kabuto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/SzVzU5l.png",
        themepic: "https://i.imgur.com/qnugaKg.jpg",
      },
    ],
  },
  {
    name: "Uchiha Sasuke (S)",
    url: "https://i.imgur.com/bQ57WbY.png",
    description:
      "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
    descriptionBR:
      "Uchiha Sasuke (S) has spent the last 2 years training under Orochimaru. He is now an expert swordsman and has immensely developed his lightning element techniques. His demeanor has also grown very cold and he is one of the most dangerous individuals in the ninja world.",
    skills: [
      {
        name: "Chidori Nagashi",
        themeName: "Chidori Nagashi",
        description:
          "Sasuke activates Chidori Nagashi, starting with 0 Lightning stacks. He will gain 1 Lightning stack each turn on the following turns. Sasuke may use his skills to consume all Lightning stacks, dealing 10 piercing damage per stack. Any enemy that uses a new skill on Sasuke will take 10 piercing damage; Cannot be triggered if Sasuke has no Lightning stack; If triggered, Sasuke will lose 1 Lightning stack once that turn.",
        descriptionBR:
          "Sasuke activates Chidori Nagashi, starting with 0 Lightning stacks. He will gain 1 Lightning stack each turn on the following turns. Sasuke may use his skills to consume all Lightning stacks, dealing 10 piercing damage per stack. Any enemy that uses a new skill on Sasuke will take 10 piercing damage; Cannot be triggered if Sasuke has no Lightning stack; If triggered, Sasuke will lose 1 Lightning stack once that turn.",
        energy: ["Random"],
        classes: ["Chakra", "Affliction", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/xB2eYQs.png",
      },
      {
        name: "Lightning Shockwave",
        themeName: "Lightning Shockwave",
        description:
          "Sasuke deals 15 piercing damage to one enemy and 5 piercing damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
        descriptionBR:
          "Sasuke deals 15 piercing damage to one enemy and 5 piercing damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/rhEeID9.png",
      },
      {
        name: "Lightning Blade",
        themeName: "Lightning Blade",
        description:
          "Sasuke deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage and their active cooldowns will be paralyzed.",
        descriptionBR:
          "Sasuke deals 20 piercing damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage and their active cooldowns will be paralyzed.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ZmP3GaM.png",
      },
      {
        name: "Protective Summoning",
        themeName: "Protective Summoning",
        description:
          "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Uchiha Sasuke (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BGGf705.png",
      },
      {
        name: "Passive: Cursed Seal Protection",
        themeName: "Passive: Cursed Seal Protection",
        description:
          "When Sasuke reaches 50 health or less, all harmful afflicttion skills will be removed from him and Sasuke will gain 30 points of destructible defense for 3 turns. The following 3 turns, 'Lightning Shockwave' and 'Lightning Blade' will be replaced by their alternative version.",
        descriptionBR:
          "When Sasuke reaches 50 health or less, all harmful afflicttion skills will be removed from him and Sasuke will gain 30 points of destructible defense for 3 turns. The following 3 turns, 'Lightning Shockwave' and 'Lightning Blade' will be replaced by their alternative version.",
        energy: [],
        classes: ["Passive", "Instant", "_$1", "_$2", "_$3", "_$4"],
        cooldown: 0,
        url: "https://i.imgur.com/KnfrzVt.png",
      },
      {
        name: "Great Dragon Flame Jutsu",
        themeName: "Great Dragon Flame Jutsu",
        description:
          "Sasuke deals 25 affliction damage to one enemy and 15 affliction damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
        descriptionBR:
          "Sasuke deals 25 affliction damage to one enemy and 15 affliction damage to all others. For 1 turn, Sasuke will ignore affliction damage.",
        energy: ["Nin", "Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/XPFh76O.png",
      },
      {
        name: "Flying Corrupt Chidori",
        themeName: "Flying Corrupt Chidori",
        description:
          "Sasuke deals 35 piercing damage to one enemy. For 1 turn, that enemy will deal 20 less non-affliction damage and their active cooldowns will be paralyzed.",
        descriptionBR:
          "Sasuke deals 35 piercing damage to one enemy. For 1 turn, that enemy will deal 20 less non-affliction damage and their active cooldowns will be paralyzed.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/E8pioPB.png",
      },
    ],
  },
  {
    name: "Hozuki Suigetsu (S)",
    url: "https://i.imgur.com/FQbDQSx.jpeg",
    themepic: "https://i.imgur.com/FQbDQSx.jpeg",
    description:
      "Hozuki Suigetsu (S) is a native of Kirigakure who was once a captive of Orochimaru. He is a dangerous individual with unique abilities and now follows Uchiha Sasuke.",
    descriptionBR:
      "Hozuki Suigetsu (S) é um nativo de Kirigakure que já foi prisioneiro de Orochimaru. Ele é um indivíduo perigoso com habilidades únicas e agora segue Uchiha Sasuke.",
    skills: [
      {
        name: "Muscle Expansion",
        themeName: "Muscle Expansion",
        description:
          "Suigetsu (S) expands his muscles with water and attacks with his sword. He deals 20 damage to one enemy and gains 5 destructible defense for 1 turn and 5 permanent destructible defense.",
        descriptionBR:
          "Suigetsu (S) expande seus músculos com água e ataca com sua espada. Ele causa 20 de dano a um inimigo e ganha 5 de defesa destrutível por 1 turno e 5 de defesa destrutível permanente.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/uptTk0X.jpeg",
        themepic: "https://i.imgur.com/uptTk0X.jpeg",
      },
      {
        name: "Hydro Taijutsu",
        themeName: "Hydro Taijutsu",
        description:
          "Suigetsu (S) uses water to launch an extreme taijutsu attack. Suigetsu (S) deals 40 piercing damage to one enemy and he gains 50% damage reduction for 2 turns.",
        descriptionBR:
          "Suigetsu (S) usa água para lançar um ataque extremo de taijutsu. Suigetsu (S) causa 40 de dano perfurante a um inimigo e ganha 50% de redução de dano por 2 turnos.",
        energy: ["Tai", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/xbUlXVC.jpeg",
        themepic: "https://i.imgur.com/xbUlXVC.jpeg",
      },
      {
        name: "Rehydration",
        themeName: "Rehydration",
        description:
          "Suigetsu (S) replenishes his body with water. For 2 turns he is invulnerable to enemy mental skills*, gains 1 random chakra, and 10 permanent destructible defense each turn.",
        descriptionBR:
          "Suigetsu (S) repõe seu corpo com água. Por 2 turnos ele fica invulnerável a habilidades mentais inimigas*, ganha 1 chakra aleatório e 10 de defesa destrutível permanente a cada turno.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Action", "Unique", "Instant*"],
        cooldown: 3,
        url: "https://i.imgur.com/LoaarYd.jpeg",
        themepic: "https://i.imgur.com/LoaarYd.jpeg",
      },
      {
        name: "Zanbato Deflection",
        themeName: "Zanbato Deflection",
        description:
          "This skill makes Hozuki Suigetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hozuki Suigetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BbXa1kC.jpeg",
        themepic: "https://i.imgur.com/BbXa1kC.jpeg",
      },
    ],
  },
  {
    name: "Karin (S)",
    url: "https://i.imgur.com/owwvUwp.jpg",
    themepic: "https://i.imgur.com/owwvUwp.jpg",
    description:
      "Karin (S) is a former subordinate of Orochimaru who oversaw one of his secret laboratories. She is a skilled sensor and master of chakra control who now follows Uchiha Sasuke.",
    descriptionBR:
      "Karin (S) é uma ex-subordinada de Orochimaru que supervisionava um de seus laboratórios secretos. Ela é uma sensora habilidosa e mestre no controle de chakra, e agora segue Uchiha Sasuke.",
    skills: [
      {
        name: "Minds Eye of Kagura",
        themeName: "Minds Eye of Kagura",
        description:
          "Karin (S) predicts one enemy. For 1 turn, if that enemy uses an offensive skill they will be countered and will take 5 more damage from physical and chakra skills for 1 turn; if that enemy uses a friendly skill, their skill costs will increase by 1 random chakra for 2 turns. This skill is invisible.",
        descriptionBR:
          "Karin (S) prevê um inimigo. Por 1 turno, se esse inimigo usar uma habilidade ofensiva, ela será anulada e ele receberá 5 de dano adicional de habilidades Physical e Chakra por 1 turno; se esse inimigo usar uma habilidade aliada, o custo da habilidade aumentará em 1 chakra aleatório por 2 turnos. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Wii6lUN.jpg",
        themepic: "https://i.imgur.com/Wii6lUN.jpg",
      },
      {
        name: "Raging Punch",
        themeName: "Raging Punch",
        description:
          "Karin (S) deals 30 damage to 1 enemy. For 1 turn that enemy will be unable to use stun skills (this is a stun effect). This skill ignores invulnerability.",
        descriptionBR:
          "Karin (S) causa 30 de dano a 1 inimigo. Por 1 turno, esse inimigo não poderá usar habilidades de atordoar (isso é um efeito de atordoamento). Esta habilidade ignora invulnerabilidade.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/OlX4UNQ.jpg",
        themepic: "https://i.imgur.com/OlX4UNQ.jpg",
      },
      {
        name: "Chakra Transfer",
        themeName: "Chakra Transfer",
        description:
          "Karin (S) allows 1 ally to bite her, transferring her chakra to them. That ally will be healed for 30 health and Karin (S) will take 5 affliction damage*.",
        descriptionBR:
          "Karin (S) permite que 1 aliado a morda, transferindo seu chakra para ele. Esse aliado será curado em 30 de vida e Karin (S) receberá 5 de dano aflitivo*.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction*", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/L836ND0.jpg",
        themepic: "https://i.imgur.com/L836ND0.jpg",
      },
      {
        name: "Precipitous Retreat",
        themeName: "Precipitous Retreat",
        description:
          "This skill makes Karin (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Karin (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/NVluVlD.jpg",
        themepic: "https://i.imgur.com/NVluVlD.jpg",
      },
    ],
  },
  {
    name: "Juugo (S)",
    url: "https://i.imgur.com/6ZUMNbR.jpg",
    themepic: "https://i.imgur.com/6ZUMNbR.jpg",
    description:
      "Juugo (S) is the origin of the cursed seal and now follows Sasuke. He can either be a calm natured person or a psychotic lunatic.",
    descriptionBR:
      "Juugo (S) é a origem do selo amaldiçoado e agora segue Sasuke. Ele pode ser uma pessoa de natureza calma ou um lunático psicótico.",
    skills: [
      {
        name: "Compression Blast",
        themeName: "Compression Blast",
        description:
          "Juugo (S) deals 30 damage to 1 enemy and stuns their physical or melee skills for 1 turn. During Killer Impulse this skill will be improved and will cost 2 random chakra.",
        descriptionBR:
          "Juugo (S) causa 30 de dano a 1 inimigo e atordoa suas habilidades Physical ou Melee por 1 turno. Durante Killer Impulse, esta habilidade será melhorada e custará 2 chakras aleatórios.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/QefoNP1.jpg",
        themepic: "https://i.imgur.com/QefoNP1.jpg",
      },
      {
        name: "Killer Impulse",
        themeName: "Killer Impulse",
        description:
          "Juugo (S) enters a killing rage. He gains 75% damage reduction for 3 turns. Three random enemies will take 25 piercing damage each turn once the following 3 turns and 'Compression Blast' will be improved during this time. The selected enemies are invisible. This skill ignores invulnerability.",
        descriptionBR:
          "Juugo (S) entra em uma fúria assassina. Ele ganha 75% de redução de dano por 3 turnos. Três inimigos aleatórios receberão 25 de dano perfurante a cada um dos próximos 3 turnos e 'Compression Blast' será melhorada durante esse tempo. Os inimigos escolhidos ficam invisíveis. Esta habilidade ignora invulnerabilidade.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/Ys6y9Ie.jpg",
        themepic: "https://i.imgur.com/Ys6y9Ie.jpg",
      },
      {
        name: "Fusion",
        themeName: "Fusion",
        description:
          "Juugo (S) heals 1 ally for 25 health and that ally gains 20 destructible defense permanently. Each time this skill is used Juugo (S)'s cooldowns will increase by 1 turn for 4 turns.",
        descriptionBR:
          "Juugo (S) cura 1 aliado em 25 de vida e esse aliado ganha 20 de defesa destrutível permanentemente. Cada vez que esta habilidade for usada, os tempos de recarga de Juugo (S) aumentarão em 1 turno por 4 turnos.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/Ipa5vkc.jpg",
        themepic: "https://i.imgur.com/Ipa5vkc.jpg",
      },
      {
        name: "Isolation",
        themeName: "Isolation",
        description:
          "This skill makes Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/VGPEiRn.jpg",
        themepic: "https://i.imgur.com/YVGPEiRn.jpg",
      },
    ],
  },
  {
    name: "Cursed Seal Juugo (S)",
    url: "https://i.imgur.com/lUw2QGb.png",
    themepic: "https://i.imgur.com/h59hF19.jpg",
    description:
      "Cursed Seal Juugo (S) is fully transformed and no longer recognizable. Becoming a psychotic lunatic Juugo is able to maintain absurd amounts of chakra making him nearly impossible to defeat.",
    descriptionBR:
      "Cursed Seal Juugo (S) está totalmente transformado e irreconhecível. Tornando-se um lunático psicótico, Juugo é capaz de manter quantidades absurdas de chakra, tornando-o quase impossível de ser derrotado.",
    skills: [
      {
        name: "Psychotic Break",
        themeName: "Psychotic Break",
        description:
          "Juugo loses his mind and assaults one enemy, stealing 10 health from them for 3 turns. During this time, if that enemy uses a new harmful skill, Jugoo's skills will be improved and will cost random chakra for 1 turn.",
        descriptionBR:
          "Juugo perde a razão e ataca um inimigo, roubando 10 de vida dele por 3 turnos. Durante esse tempo, se esse inimigo usar uma nova habilidade ofensiva, as habilidades de Juugo serão melhoradas e passarão a custar chakra aleatório por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Action", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/Dhbvf2b.png",
        themepic: "https://i.imgur.com/W0RGXxC.jpg",
      },
      {
        name: "Chakra Cannons",
        themeName: "Chakra Cannons",
        description:
          "Juugo uses his jet booster-like appendages to charge chakra and blast a powerful chakra blast, dealing 45 damage to one enemy. While improved, this skill will cost 2 random chakra.",
        descriptionBR:
          "Juugo usa seus apêndices semelhantes a propulsores para carregar chakra e disparar uma poderosa rajada de chakra, causando 45 de dano a um inimigo. Enquanto estiver melhorada, esta habilidade custará 2 chakras aleatórios.",
        energy: ["Nin", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/CUZX7Z0.png",
        themepic: "https://i.imgur.com/LUjnDPc.jpg",
      },
      {
        name: "Body Absorption",
        themeName: "Body Absorption",
        description:
          "Juugo absorbs one enemy's body, stealing 15 health from them and making that enemy unable to reduce damage or become invulnerable for 2 turns. For 1 turn, Juugo will ignore all harmful effects except damage. While improved, this skill will cost 1 random chakra.",
        descriptionBR:
          "Juugo absorve o corpo de um inimigo, roubando 15 de vida e fazendo com que esse inimigo não possa reduzir dano ou se tornar invulnerável por 2 turnos. Por 1 turno, Juugo ignorará todos os efeitos ofensivos, exceto dano. Enquanto estiver melhorada, esta habilidade custará 1 chakra aleatório.",
        energy: ["Blood"],
        classes: ["Physical", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/SXRkXSo.png",
        themepic: "https://i.imgur.com/ij5e0LH.jpg",
      },
      {
        name: "Juugo Block",
        themeName: "Juugo Block",
        description:
          "This skill makes Cursed Seal Juugo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Cursed Seal Juugo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/lt2qMck.png",
        themepic: "https://i.imgur.com/VGkaSVe.jpg",
      },
    ],
  },
  {
    name: "Mangekyou Sasuke (S)",
    url: "https://i.imgur.com/Q3IFFH5.png",
    themepic: "https://i.imgur.com/VGRjyqG.jpg",
    description:
      "Mangekyou Sasuke (S), Sasuke after defeating his older brother Itachi has gained the mangekyou sharingan. Sasuke is now a member of the Akatsuki, and also the leader of the newly created Team Taka, whose goal is to destroy the Hidden Leaf.",
    descriptionBR:
      "Mangekyou Sasuke (S), após derrotar seu irmão mais velho Itachi, adquiriu o Mangekyou Sharingan. Sasuke agora é membro da Akatsuki e também líder da recém-criada Equipe Taka, cujo objetivo é destruir a Vila da Folha.",
    skills: [
      {
        name: "Amaterasu Wave",
        themeName: "Amaterasu Wave",
        description:
          "Using his Amaterasu in the battlefield, Sasuke deals 12 affliction damage to all enemies for 2 turns. While active, any enemy that does not use a new skill will make 'Amaterasu Wave' last 1 turn longer on them. This skill cannot be used on enemies already affected by it and it cannot be removed.",
        descriptionBR:
          "Usando seu Amaterasu no campo de batalha, Sasuke causa 12 de dano aflitivo a todos os inimigos por 2 turnos. Enquanto estiver ativa, qualquer inimigo que não usar uma nova habilidade fará com que 'Amaterasu Wave' dure 1 turno a mais sobre ele. Esta habilidade não pode ser usada em inimigos já afetados por ela e não pode ser removida.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/EQO9Xwr.png",
        themepic: "https://i.imgur.com/8skqP21.jpeg",
      },
      {
        name: "Enton Amaterasu",
        themeName: "Enton Amaterasu",
        description:
          "Sasuke uses his Amaterasu as a shield on himself for 4 turns, granting him 15 points of destructible defense. During this time, any enemy that uses a new non-mental skill on Sasuke will *receive 5 affliction damage permanently. This skill stacks.",
        descriptionBR:
          "Sasuke usa seu Amaterasu como escudo por 4 turnos, concedendo-lhe 15 pontos de defesa destrutível. Durante esse tempo, qualquer inimigo que usar uma nova habilidade não mental em Sasuke receberá 5 de dano aflitivo permanentemente. Esta habilidade acumula.",
        energy: ["Nin"],
        classes: [
          "Chakra",
          "Ranged",
          "Instant",
          "Unique",
          "Affliction",
          "Harmful",
        ],
        cooldown: 4,
        url: "https://i.imgur.com/ZOECvbm.png",
        themepic: "https://i.imgur.com/F2nA9nH.jpg",
      },
      {
        name: "Dark Genjutsu",
        themeName: "Dark Genjutsu",
        description:
          "Mangekyou Sasuke (S) deals 25 piercing damage to one enemy. That enemy's physical and chakra skills will be stunned for 1 turn.",
        descriptionBR:
          "Mangekyou Sasuke (S) causa 25 de dano perfurante a um inimigo. As habilidades Physical e de Chakra desse inimigo serão atordoadas por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/WvskJD1.png",
        themepic: "https://i.imgur.com/mPKIotw.jpg",
      },
      {
        name: "Hawk Summoning",
        themeName: "Hawk Summoning",
        description:
          "This skill makes Mangekyou Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mangekyou Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/TRvpMVO.jpg",
        themepic: "https://i.imgur.com/TRvpMVO.jpg",
      },
    ],
  },
  {
    name: "Susanoo Sasuke (S)",
    url: "https://i.imgur.com/8EyNW0H.png",
    themepic: "https://i.imgur.com/8EyNW0H.png",
    description:
      "Sasuke takes control of the powerful Susano'o, achieving a high level of strength with an unimaginable impenetrable defense. He can also still use other techniques of his Mangekyo Sharingan.",
    descriptionBR:
      "Sasuke assume o controle do poderoso Susano'o, alcançando um nível elevado de força com uma defesa impenetrável inimaginável. Ele ainda pode usar outras habilidades do seu Mangekyo Sharingan.",
    skills: [
      {
        name: "Sasuke Susano'o",
        themeName: "Sasuke Susano'o",
        description:
          "Using his Susanoo, Sasuke gains 55 points of destructible defense permanent and may use his skills. During this time, this skill is replaced and Sasuke will ignore any effects that destroy destructible defense. When this defense is destroyed, Sasuke will be stunned for 2 turns.",
        descriptionBR:
          "Usando seu Susanoo, Sasuke ganha 55 pontos de defesa destrutível permanente e pode usar suas habilidades. Durante esse tempo, essa habilidade é substituída e Sasuke irá ignorar quaisquer efeitos que destruam defesa destrutível. Quando essa defesa for destruída, Sasuke será atordoado por 2 turnos.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/IvPeIEb.png",
        themepic: "https://i.imgur.com/IvPeIEb.png",
      },
      {
        name: "Susano'o Arrow",
        themeName: "Susano'o Arrow",
        description:
          "Using his Susano'o bow, Sasuke destroys all destructible defense of one enemy and deals 20 piercing damage and an additional 5 damage for each 10 points of destructible defense that 'Susanoo Sasuke' currently has. This skill requires 'Sasuke Susano'o'.",
        descriptionBR:
          "Usando o arco de seu Susano'o, Sasuke destrói toda a defesa destrutível de um inimigo e causa 20 de dano perfurante e 5 de dano adicional para cada 10 pontos de defesa destrutível que 'Susanoo Sasuke' possuir. Esta habilidade requer 'Sasuke Susano'o'.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ts2DJlr.png",
        themepic: "https://i.imgur.com/ts2DJlr.png",
      },
      {
        name: "Spreading Amaterasu",
        themeName: "Spreading Amaterasu",
        description:
          "Susanoo Sasuke deals 2 affliction damage to one enemy permanently. This skill will double its damage everytime that enemy uses a new skill. This skill cannot be removed and it requires 'Sasuke Susano'o'. This skill will have its cooldown reset if the enemy target is killed.",
        descriptionBR:
          "Susanoo Sasuke causa 2 de dano aflitivo a um inimigo permanentemente. Esta habilidade dobrará seu dano toda vez que o inimigo usar uma nova habilidade. Esta habilidade não pode ser removida e requer 'Sasuke Susano'o'. O tempo de recarga será reiniciado se o inimigo for morto.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 5,
        url: "https://i.imgur.com/CrxZrrj.png",
        themepic: "https://i.imgur.com/CrxZrrj.png",
      },
      {
        name: "Mangekyo Insight",
        themeName: "Mangekyo Insight",
        description:
          "This skill makes Susanoo Sasuke (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Susanoo Sasuke (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/f9ZJ3KY.png",
        themepic: "https://i.imgur.com/f9ZJ3KY.png",
      },
      {
        name: "Sasuke Mangekyo Sharingan",
        themeName: "Sasuke Mangekyo Sharingan",
        description:
          "Sasuke activates his Mangekyou Sharingan and gains 25% unpierceable damage reduction until 'Sasuke Susano'o' destructible defense is destroyed. When this skill is used, the cooldown of 'Spreading Amaterasu' is reset.",
        descriptionBR:
          "Sasuke ativa seu Mangekyou Sharingan e ganha 25% de redução de dano inpenetrável até que a defesa destrutível de 'Sasuke Susano'o' seja destruída. Quando esta habilidade for usada, o tempo de recarga de 'Spreading Amaterasu' será reiniciado.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/aoX9e2o.png",
        themepic: "https://i.imgur.com/aoX9e2o.png",
      },
    ],
  },
  {
    name: "Raikage (S)",
    url: "https://i.imgur.com/NwtJF5J.png",
    description:
      "Ay is the fourth Raikage of Hidden Cloud Ninja and supreme leader of the Shinobi Alliance. Son of the Third Raikage, he is also Killer Bee's older brother.",
    descriptionBR:
      "Ay é o quarto Raikage da Vila Oculta da Nuvem e líder supremo da Aliança Shinobi. Filho do Terceiro Raikage, ele também é o irmão mais velho de Killer Bee.",
    skills: [
      {
        name: "Lightning Release Boost",
        themeName: "Lightning Release Boost",
        description:
          "Using Lightning Release to boost his speed and strenght, Ay improves the damage of his attacks by 20 until he uses any of them. During this time Ay gains 10 points of damage reduction. This skill May not be used while in effect, and damage improvement is increased by 5 each time it is used.",
        descriptionBR:
          "Usando Liberação de Relâmpago para aumentar sua velocidade e força, Ay melhora o dano de seus ataques em 20 até usar qualquer um deles. Durante esse tempo, Ay ganha 10 pontos de redução de dano. Essa habilidade Não pode ser usada enquanto estiver ativa, e o aumento de dano é incrementado em 5 a cada uso.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/2We4Iaj.png",
        themepic: "https://i.imgur.com/2We4Iaj.png",
      },
      {
        name: "Liger Bomb",
        themeName: "Liger Bomb",
        description:
          "Ay lifts one enemy in the air and then brutaly smashes their head fist into ground, dealing 30 damage to them and lowering their damage by 10 for 1 turn. The following turn that enemy's physical or chakra skills will be stunned.",
        descriptionBR:
          "Ay ergue um inimigo no ar e brutalmente esmaga sua cabeça contra o chão, causando 30 de dano e reduzindo seu dano em 10 por 1 turno. No turno seguinte, as habilidades Physical ou Chakra desse inimigo serão atordoadas.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/jKeuupD.png",
        themepic: "https://i.imgur.com/jKeuupD.png",
      },
      {
        name: "Lightning Oppression Horizontal",
        themeName: "Lightning Oppression Horizontal",
        description:
          "Ay performs a backhanded horizontal chop againts one enemy, destroying all destructible defense and dealing 20 piercing damage.",
        descriptionBR:
          "Ay desfere um golpe horizontal com as costas da mão contra um inimigo, destruindo toda a defesa destrutível e causando 20 de dano perfurante.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/6Tl1X1K.png",
        themepic: "https://i.imgur.com/6Tl1X1K.png",
      },
      {
        name: "Lightnin Speed",
        themeName: "Lightnin Speed",
        description:
          "This skill makes Raikage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Raikage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/OcYwaIA.png",
        themepic: "https://i.imgur.com/OcYwaIA.png",
      },
    ],
  },
  {
    name: "Mizukage (S)",
    url: "https://i.imgur.com/1WgnEmN.png",
    themepic: "https://i.imgur.com/1WgnEmN.png",
    description:
      "Terumi Mei is the Fifth Mizukage, after the dreadful reign of Yagura Karatachi ended, she became Mizukage and worked tirelessly to reform internal policies and recreate diplomatic relations with other villages",
    descriptionBR:
      "Terumi Mei é a Quinta Mizukage. Após o fim do terrível reinado de Yagura Karatachi, ela se tornou Mizukage e trabalhou incansavelmente para reformar políticas internas e recriar relações diplomáticas com outras vilas.",
    skills: [
      {
        name: "Lava Wall",
        themeName: "Lava Wall",
        description:
          "Terumi Mei Uses lava wall dealing 25 affliction damage to one enemy and stuns their mental and ranged skills for 1 turn. This skill cannot be countered or reflected. During 'Prision Lava Wall' this skill will deal 35 affliction damage and cost one more random chakra.",
        descriptionBR:
          "Terumi Mei usa Muro de Lava, causando 25 de dano aflitivo a um inimigo e o atordoando, impedindo suas habilidades Mentais e Ranged por 1 turno. Esta habilidade não pode ser anulada ou refletida. Durante 'Prision Lava Wall', esta habilidade causará 35 de dano aflitivo e custará um chakra aleatório a mais.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/q55j0xl.png",
        themepic: "https://i.imgur.com/q55j0xl.png",
      },
      {
        name: "Prision Lava Wall",
        themeName: "Prision Lava Wall",
        description:
          "Terumi Mei creates a Prision of Lava dealing 5 affliction damage for 3 turns to all enemies. During this time, each turn a random enemy will become invulnerable to friendly skills. 'Lava Wall' and 'Skilled Mist' is improved during this skill*.",
        descriptionBR:
          "Terumi Mei cria uma Prisão de Lava, causando 5 de dano aflitivo por 3 turnos a todos os inimigos. Durante esse período, a cada turno um inimigo aleatório se tornará invulnerável a habilidades benéficas. 'Lava Wall' e 'Skilled Mist' são aprimoradas durante esta habilidade*.",
        energy: ["Nin"],
        classes: [
          "Chakra",
          "Ranged",
          "Unique",
          "Action",
          "Affliction",
          "Instant*",
        ],
        cooldown: 4,
        url: "https://i.imgur.com/yxgf33E.png",
        themepic: "https://i.imgur.com/yxgf33E.png",
      },
      {
        name: "Skilled Mist",
        themeName: "Skilled Mist",
        description:
          "Terumi Mei uses Skilled Mist to destroy all enemies destructible defense and dealing 15 affliction damage to them for 2 turns. This skill cannot be countered, reflected or removed. During 'Prision Lava Wall' this skill will deals 5 more affliction damage.",
        descriptionBR:
          "Terumi Mei usa Névoa Habilidosa para destruir toda defesa destrutível dos inimigos e causar 15 de dano aflitivo por 2 turnos. Esta habilidade não pode ser anulada, refletida ou removida. Durante 'Prision Lava Wall', esta habilidade causa 5 de dano aflitivo adicional.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Action", "Unique", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/LJbscdA.png",
        themepic: "https://i.imgur.com/LJbscdA.png",
      },
      {
        name: "Fast Evade",
        themeName: "Fast Evade",
        description:
          "This skill makes Mizukage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mizukage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/UZ6Erok.png",
        themepic: "https://i.imgur.com/UZ6Erok.png",
      },
    ],
  },
  {
    name: "Tsuchikage (S)",
    url: "https://i.imgur.com/2TGh48c.png",
    themepic: "https://i.imgur.com/2TGh48c.png",
    description:
      "The Third Tsuchikage of the Hidden Rock Village, Oonoki is an intensely proud and headstrong man, despite his advanced age. An expert in a variety of jutsu, and notably able to fly, Oonoki is renowned for his unique nature transformation, the Dust Release kekkei tota, with which he can outright vaporize his enemies.",
    descriptionBR:
      "Oonoki é o Terceiro Tsuchikage da Vila Oculta da Pedra, um homem extremamente orgulhoso e teimoso, apesar de sua idade avançada. Especialista em diversos jutsus e capaz de voar, Oonoki é renomado por sua transformação de natureza única, a Liberação de Poeira (kekkei tota), com a qual pode vaporizar completamente seus inimigos.",
    skills: [
      {
        name: "Detachment of Primitive World",
        themeName: "Detachment of Primitive World",
        description:
          "Ohnoki isolates an enemy with his dust release, dealing 10 affliction damage to them. For 1 turn, that enemy will be invulnerable to helpful skills and their harmful skills will be stunned. The following turn, this skill will be replaced by 'Dust Implode'.",
        descriptionBR:
          "Ohnoki isola um inimigo com sua liberação de poeira, causando 10 de dano aflitivo. Por 1 turno, esse inimigo ficará invulnerável a habilidades benéficas e suas habilidades ofensivas serão atordoadas. No turno seguinte, esta habilidade será substituída por 'Dust Implode'.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/IRQ1VBv.png",
        themepic: "https://i.imgur.com/IRQ1VBv.png",
      },
      {
        name: "Lightweight Rock Technique",
        themeName: "Lightweight Rock Technique",
        description:
          "Onhoki touches an ally and makes them much lighter. For 2 turns, the cost of their harmful skills will be decreased by 1 random. This skill may not be used an already affected ally.",
        descriptionBR:
          "Ohnoki toca um aliado e o torna muito mais leve. Por 2 turnos, o custo de suas habilidades ofensivas será reduzido em 1 chakra aleatório. Esta habilidade não pode ser usada em um aliado já afetado.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/sq51r2K.png",
        themepic: "https://i.imgur.com/sq51r2K.png",
      },
      {
        name: "Rock Fist",
        themeName: "Rock Fist",
        description:
          "Increasing his striking power with Rock Fist, Ohnoki deals 30 damage to one enemy. Afterwards, Ohnoki gains 15 permanent destructible defense.",
        descriptionBR:
          "Aumentando seu poder de ataque com o Punho de Pedra, Ohnoki causa 30 de dano a um inimigo. Em seguida, Ohnoki ganha 15 de defesa destrutível permanente.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/IubtdOZ.png",
        themepic: "https://i.imgur.com/IubtdOZ.png",
      },
      {
        name: "Effortless Flight",
        themeName: "Effortless Flight",
        description:
          "This skill makes Tsuchikage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tsuchikage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/5ctULD8.png",
        themepic: "https://i.imgur.com/5ctULD8.png",
      },
      {
        name: "Dust Implode",
        themeName: "Dust Implode",
        description:
          "Ohnoki incinerates an enemey trapped by 'Detachment of Primitive World' into mere particles, removing all helpful skills from that enemy and dealing 40 damage to them. This skill cannot be ignored or countered.",
        descriptionBR:
          "Ohnoki incinera um inimigo preso por 'Detachment of Primitive World' em partículas, removendo todas as habilidades aliadas desse inimigo e causando 40 de dano. Esta habilidade não pode ser ignorada ou anulada.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/L9B79qi.png",
        themepic: "https://i.imgur.com/L9B79qi.png",
      },
    ],
  },
  {
    name: "Tsunade (S)",
    url: "https://i.imgur.com/TgVKWQY.png",
    themepic: "https://i.imgur.com/XxemXi0.jpg",
    description:
      "No longer just a Sannin, Tsunade is the new Kage of Konoha, and has taken a large amount of responsibility on her shoulders. Knowing that holding back is no longer an option, Tsunade taps into her seal to gain an impressive power over her foes.",
    descriptionBR:
      "Tsunade não é mais apenas uma Sannin; agora é a nova Kage de Konoha, e assumiu uma grande responsabilidade sobre seus ombros. Sabendo que recuar não é mais uma opção, Tsunade libera o poder do seu selo para obter uma força impressionante contra seus inimigos.",
    skills: [
      {
        name: "Heavenly Spear Kick",
        themeName: "Heavenly Spear Kick",
        description:
          "Tsunade spears one enemy with her foot, destroying all their destructible defense and dealing 20 piercing damage to them. For 1 turn, that enemy's melee skills will deal 50% less damage. While empowered, this skill will deal 40 piercing damage instead.",
        descriptionBR:
          "Tsunade acerta um inimigo com um chute, destruindo toda sua defesa destrutível e causando 20 de dano perfurante. Por 1 turno, as habilidades Melee desse inimigo causarão 50% menos dano. Quando estiver fortalecida, esta habilidade causará 40 de dano perfurante.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/FYabOjw.png",
        themepic: "https://i.imgur.com/HT4dejQ.jpg",
      },
      {
        name: "Enhanced Healing Wave",
        themeName: "Enhanced Healing Wave",
        description:
          "Tsunade pours chakra into one ally, healing them for 30 health. Additionally, that character will heal an additional 10 health for 2 turns. If empowered, this skill will heal 40 health and the secondary effect will last an additional 1 turn.",
        descriptionBR:
          "Tsunade canaliza chakra em um aliado, curando-o em 30 de vida. Além disso, esse personagem curará mais 10 de vida por 2 turnos. Se estiver fortalecida, esta habilidade curará 40 de vida e o efeito secundário durará 1 turno adicional.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/uh03Dqh.png",
        themepic: "https://i.imgur.com/APrwxX5.jpg",
      },
      {
        name: "Tsunade: Strength of a Hundred Seal",
        themeName: "Tsunade: Strength of a Hundred Seal",
        description:
          "Tsunade taps into her seal. If Tsunade has 75 health or less, she will instantly heal 15 health. The next time Tsunade uses a skill, it will be empowered. If this skill is used while empowered, it will heal Tsunade 50 health and grant her 2 random chakra.",
        descriptionBR:
          "Tsunade libera o poder do seu selo. Se ela estiver com 75 de vida ou menos, curará instantaneamente 15 de vida. Na próxima vez que usar uma habilidade, ela será fortalecida. Se esta habilidade for usada enquanto estiver fortalecida, Tsunade curará 50 de vida e receberá 2 chakras aleatórios.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/MWbYl7o.png",
        themepic: "https://i.imgur.com/vmuucvA.jpg",
      },
      {
        name: "Tsunade Protection",
        themeName: "Tsunade Protection",
        description:
          "This skill makes Tsunade (S) <Defense>invulnerable<Defense> for 1 turn. This skill is not affected by <SkillName>'Tsunade: Strength of a Hundred Seal'<SkillName>.",
        descriptionBR:
          "Essa habilidade faz Tsunade (S) <Defense>invulnerável<Defense> por 1 turno. Essa habilidade não é afetada por <SkillName>'Tsunade: Strength of a Hundred Seal'<SkillName>.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7SbfiJG.png",
        themepic: "https://i.imgur.com/s1JpzEd.jpg",
      },
    ],
  },
  {
    name: "Mifune (S)",
    url: "https://i.imgur.com/dU6F330.png",
    themepic: "https://i.imgur.com/dU6F330.png",
    description:
      "Mifune is a samurai and leader of the Land of Iron, and now in the war he is the commander of the fourth division. His unmatched swordsmanship makes him capable of attacking and counterattacking any enemy regardless of how fast their movements are.",
    descriptionBR:
      "Mifune é um samurai e líder da Terra do Ferro, e agora na guerra ele é o comandante da quarta divisão. Sua habilidade incomparável com a espada o torna capaz de atacar e anular qualquer inimigo, independentemente da velocidade de seus movimentos.",
    skills: [
      {
        name: "Samurai Troops",
        themeName: "Samurai Troops",
        description:
          "By commanding his samurai troops, Mifune deals 5 piercing damage to all enemies and makes them deal 5 less non-affliction damage for 1 turn. Also for 1 turn, all Mifune team will deal 5 more damage from melee skills. This skill becomes 'Flash' with a bloodline cost.",
        descriptionBR:
          "Ao comandar suas tropas samurais, Mifune causa 5 de dano perfurante a todos os inimigos e faz com que eles causem 5 de dano a menos com habilidades não aflitivas por 1 turno. Além disso, por 1 turno, toda a equipe de Mifune causará 5 de dano a mais com habilidades Melee. Esta habilidade se torna 'Flash' com custo de Bloodline.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/BTOiy9P.png",
        themepic: "https://i.imgur.com/BTOiy9P.png",
      },
      {
        name: "Iaito",
        themeName: "Iaito",
        description:
          "Reacting one enemy move, Mifune deals them 15 piercing damage and becomes invulnerable from physical skills for 1 turn. This skill becomes 'Flash' with a taijutsu cost.",
        descriptionBR:
          "Reagindo ao movimento de um inimigo, Mifune causa 15 de dano perfurante a ele e se torna invulnerável a habilidades Physical por 1 turno. Esta habilidade se torna 'Flash' com custo de Taijutsu.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/N9z93nK.png",
        themepic: "https://i.imgur.com/N9z93nK.png",
      },
      {
        name: "Raiton Pierce",
        themeName: "Raiton Pierce",
        description:
          "Mifuse uses a fast lightning chakra stab to one enemy, dealing them 15 piercing damage and makes them invulnerable from new helpful skills. This skill becomes 'Flash' with a genjutsu cost.",
        descriptionBR:
          "Mifune utiliza uma espada rápida de chakra relâmpago em um inimigo, causando 15 de dano perfurante e tornando-o invulnerável a novas habilidades benéficas. Esta habilidade se torna 'Flash' com custo de Genjutsu.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/0jU2BHv.png",
        themepic: "https://i.imgur.com/0jU2BHv.png",
      },
      {
        name: "Samurai Guard",
        themeName: "Samurai Guard",
        description:
          "This skill makes Mifune (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Mifune (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/fXaEM5k.png",
        themepic: "https://i.imgur.com/fXaEM5k.png",
      },
      {
        name: "Flash",
        themeName: "Flash",
        description:
          "With his more powerful cut, Mifune deals 30 piercing damage to one enemy and stuns their physical and chakra skills. This skill costs a specific chakra depending on the skill that is replaced by it.",
        descriptionBR:
          "Com um corte mais poderoso, Mifune causa 30 de dano perfurante a um inimigo e atordoa suas habilidades Physical e Chakra. Esta habilidade custa um chakra específico dependendo da habilidade que foi substituída por ela.",
        energy: [],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Harmful"],
        cooldown: 2,
        url: "https://i.imgur.com/g2hH8Tr.png",
        themepic: "https://i.imgur.com/g2hH8Tr.png",
      },
    ],
  },
  {
    name: "Senju Hashirama",
    url: "https://i.imgur.com/bOIy76f.png",
    themepic: "https://i.imgur.com/bOIy76f.png",
    description:
      "A member of the Senju clan, and one of the greatest warriors during the Warring States Period who went on to create Konoha. Even before becoming the Hokage, Hashirama proved his power and ability with his unmatched Wood Release jutsus.",
    descriptionBR:
      "Membro do clã Senju e um dos maiores guerreiros do Período dos Estados Combatentes, Hashirama foi um dos fundadores de Konoha. Mesmo antes de se tornar Hokage, já demonstrava sua força e habilidade com seus incomparáveis jutsus de Liberação de Madeira.",
    skills: [
      {
        name: "Wood Release: Wood Dragon",
        themeName: "Wood Release: Wood Dragon",
        description:
          "Hashirama creates a wooden dragon that drains chakra. For 2 turns, Hashirama will become invulnerable to all chakra skills* and for 2 turns, Hashirama will steal 1 taijutsu or ninjutsu chakra from one enemy.",
        descriptionBR:
          "Hashirama cria um dragão de madeira que drena chakra. Por 2 turnos, ele se torna invulnerável a todas as habilidades Chakra* e rouba 1 chakra Taijutsu ou Ninjutsu de um inimigo por 2 turnos.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/2n7tPEC.png",
        themepic: "https://i.imgur.com/2n7tPEC.png",
      },
      {
        name: "Wood Release: Wood Human",
        themeName: "Wood Release: Wood Human",
        description:
          "Creating a giant statue of a human, for 2 turns, Hashirama will become invulnerable to all physical skills* and for 2 turns, Hashirama will deal 20 damage to one enemy.",
        descriptionBR:
          "Criando uma estátua gigante em forma humana, Hashirama se torna invulnerável a todas as habilidades Physical* por 2 turnos e causa 20 de dano a um inimigo por 2 turnos.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/888TgIS.png",
        themepic: "https://i.imgur.com/888TgIS.png",
      },
      {
        name: "Wood Release: True Thousand Hands",
        themeName: "Wood Release: True Thousand Hands",
        description:
          "Hashirama summons a giant buddha that grants 30 destructible defense to Hashirama and his allies and for 3 turns, if used, 'Wood Release: Wood Dragon' and 'Wood Release: Wood Human' will last 1 additional turn and cost 1 less random chakra.",
        descriptionBR:
          "Hashirama invoca um Buda gigante que concede 30 de defesa destrutível a ele e seus aliados. Por 3 turnos, se utilizadas, as habilidades 'Wood Release: Wood Dragon' e 'Wood Release: Wood Human' durarão 1 turno adicional e custarão 1 chakra Random a menos.",
        energy: ["Blood", "Blood"],
        classes: ["Physical", "Unique", "Instant"],
        cooldown: 5,
        url: "https://i.imgur.com/8b5cPgT.png",
        themepic: "https://i.imgur.com/8b5cPgT.png",
      },
      {
        name: "Sage Knowledge",
        themeName: "Sage Knowledge",
        description:
          "This skill makes Senju Hashirama <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Senju Hashirama <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ab83NlH.png",
        themepic: "https://i.imgur.com/ab83NlH.png",
      },
    ],
  },
  {
    name: "Uchiha Madara",
    url: "https://i.imgur.com/uNZqC39.png",
    themepic: "https://i.imgur.com/uNZqC39.png",
    description:
      "The once leader of the Uchiha clan during the founding of Konoha who unfortunately disagreed with Konoha's kage on how to achieve peace. Madara was one of the few ninjas capable of matching Hashirama's power, with the use of his Mangekyou and Susanoo.",
    descriptionBR:
      "O antigo líder do clã Uchiha durante a fundação de Konoha, que discordava do Hokage sobre como alcançar a paz. Madara foi um dos poucos ninjas capazes de rivalizar com o poder de Hashirama, usando seu Mangekyou e Susanoo.",
    skills: [
      {
        name: "Eternal Mangekyou",
        themeName: "Eternal Mangekyou",
        description:
          "Madara uses his Eternal Mangekyou Sharingan. For 4 turns, all non-affliction damage used against him will be reduced to a maximum of 25. During this time, Madara can use this skill again for no cost to ignore all harmful effects except damage for 1 turn.",
        descriptionBR:
          "Madara ativa seu Eternal Mangekyou Sharingan. Por 4 turnos, todo dano não aflitivo recebido será reduzido para um máximo de 25. Durante esse tempo, Madara pode usar essa habilidade novamente sem custo para ignorar todos os efeitos prejudiciais, exceto dano, por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/qEYeI3g.png",
        themepic: "https://i.imgur.com/qEYeI3g.png",
      },
      {
        name: "Great Fire Annihilation",
        themeName: "Great Fire Annihilation",
        description:
          "Madara immolates the entire battlefield, dealing 10 affliction damage to one enemy and 5 to all others for 3 turns. During this time, if an enemy uses a new helpful skill, they will receive 10 affliction damage. While 'Eternal Mangekyou' is active, this skill is improved and will have no cooldown.",
        descriptionBR:
          "Madara incendeia todo o campo de batalha, causando 10 de dano aflitivo a um inimigo e 5 a todos os outros por 3 turnos. Durante esse tempo, se um inimigo usar uma nova habilidade benéfica, ele receberá 10 de dano aflitivo. Enquanto 'Eternal Mangekyou' estiver ativo, essa habilidade será aprimorada e não terá tempo de recarga.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Action", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/7EHfwj5.png",
        themepic: "https://i.imgur.com/7EHfwj5.png",
      },
      {
        name: "Madara: Susanoo",
        themeName: "Madara: Susanoo",
        description:
          "Madara encases himself in his Susanoo, gaining 70 destructible defense. During this time, this skill will be replaced by 'Armored Susanoo Assault'. Using this skill will reset the stacks of 'Armored Susanoo Assault'.",
        descriptionBR:
          "Madara se envolve em seu Susanoo, ganhando 70 de defesa destrutível. Durante esse tempo, essa habilidade será substituída por 'Armored Susanoo Assault'. Usar esta habilidade reiniciará os acúmulos de 'Armored Susanoo Assault'.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/X7bSGDC.png",
        themepic: "https://i.imgur.com/X7bSGDC.png",
      },
      {
        name: "Emergency Susanoo Defense",
        themeName: "Emergency Susanoo Defense",
        description:
          "This skill makes Uchiha Madara <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Madara <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hsPr2mq.png",
        themepic: "https://i.imgur.com/hsPr2mq.png",
      },
      {
        name: "Armored Susanoo Assault",
        themeName: "Armored Susanoo Assault",
        description:
          "Madara's Susanoo armors up and attacks one enemy with its sword, dealing 30 damage to them and an additional 5 damage for each turn that 'Madara: Susanoo' has been active. This skill cannot be countered.",
        descriptionBR:
          "O Susanoo de Madara se fortalece e ataca um inimigo com sua espada, causando 30 de dano mais 5 adicionais para cada turno em que 'Madara: Susanoo' esteve ativo. Esta habilidade não pode ser anulada.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/hVpzmJO.png",
        themepic: "https://i.imgur.com/hVpzmJO.png",
      },
    ],
  },
  {
    name: "Uchiha Shisui (S)",
    url: "https://i.imgur.com/1VX4Blm.png",
    themepic: "https://i.imgur.com/1VX4Blm.png",
    description:
      "A member of the prestigious Uchiha clan, and the best friend of Uchiha Itachi; Shisui is a highly trained ninja that is utterly devoted to Konoha. Shisui is one of the few known ninjas capable of using one the most powerful genjutsu: Koto Amatsukami.",
    descriptionBR:
      "Um membro do prestigiado clã Uchiha e melhor amigo de Uchiha Itachi, Shisui é um ninja altamente treinado e completamente devoto a Konoha. Shisui é um dos poucos ninjas conhecidos capazes de usar um dos genjutsus mais poderosos: Koto Amatsukami.",
    skills: [
      {
        name: "Shisui: Susanoo",
        themeName: "Shisui: Susanoo",
        description:
          "Shisui activates his still immature Susanoo, <Defense>gaining 45 destructible defense<Defense>. During this time, this skill will be <Effects>replaced<Effects> by <SkillName>'Tsukumo'<SkillName>. Using this skill will <Classes>reset<Classes> the stacks of <SkillName>'Tsukumo'<SkillName>.",
        descriptionBR:
          "Shisui ativa seu Susanoo ainda imaturo, <Defense>recebendo 45 de defesa destrutível<Defense>. Durante esse tempo, esta habilidade será <Effects>substituída<Effects> por <SkillName>'Tsukumo'<SkillName>. Usar esta habilidade <Classes>reiniciará<Classes> os stacks de <SkillName>'Tsukumo'<SkillName>.",
        energy: ["Blood"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/QxRwz1E.png",
        themepic: "https://i.imgur.com/QxRwz1E.png",
      },
      {
        name: "Body Flicker",
        themeName: "Body Flicker",
        description:
          "For 2 turns, if a <Classes>new harmful skill is used<Classes> on Shisui, he will become <Defense>invulnerable<Defense> to all other skills for the <Classes>rest of that turn<Classes> and will <Damage>deal 15 damage<Damage> to the enemy that used the harmful skill. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Por 2 turnos, se <Classes>uma nova habilidade ofensiva<Classes> for usada contra Shisui, ele se tornará <Defense>invulnerável<Defense> a todas as outras habilidades pelo <Classes>restante daquele turno<Classes> e irá <Damage>causar 15 de dano<Damage> ao inimigo que usou a habilidade ofensiva. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/5gNbKHY.png",
        themepic: "https://i.imgur.com/5gNbKHY.png",
      },
      {
        name: "Kotoamatsukami",
        themeName: "Kotoamatsukami",
        description:
          "Shisui activates one of the most powerful genjutsu and targets one enemy. For 1 turn, the first <Classes>harmful skill used<Classes> by that enemy will also be <Effects>applied<Effects> on a <Classes>random member<Classes> of that enemy's team. The following turn, the target will be <Damage>dealt 25 piercing damage<Damage>. <Invisible>This skill is invisible<Invisible> and <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Shisui ativa um dos genjutsus mais poderosos e marca um inimigo. Por 1 turno, a primeira <Classes>habilidade ofensiva usada<Classes> por esse inimigo também será <Effects>aplicada<Effects> a um <Classes>membro aleatório<Classes> do time inimigo. No próximo turno, o alvo irá <Damage>receber 25 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível<Invisible> e <Classes>ignora invulnerabilidade<Classes>.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/9I5NyG6.png",
        themepic: "https://i.imgur.com/9I5NyG6.png",
      },
      {
        name: "Shisui Intercept",
        themeName: "Shisui Intercept",
        description:
          "This skill makes Uchiha Shisui (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Shisui (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/yRilqsE.png",
        themepic: "https://i.imgur.com/yRilqsE.png",
      },
      {
        name: "Tsukumo",
        themeName: "Tsukumo",
        description:
          "Shisui activates his Susanoo's power, sending out a barrage of chakra needles <Damage>dealing 15 damage<Damage> to all enemies and <Effects>reducing<Effects> their <Classes>non-affliction damage<Classes> by 5. For each turn that <SkillName>'Shisui: Susanoo'<SkillName> is activated, the <Effects>damage reducing<Effects> effect will <Improvements>last 1 additional turn<Improvements>.",
        descriptionBR:
          "Shisui ativa o poder do seu Susanoo, lançando uma rajada de agulhas de chakra que irá <Damage>causar 15 de dano<Damage> a todos os inimigos e <Effects>reduzir<Effects> em 5 o <Classes>dano não-aflitivo<Classes> deles. Para cada turno que <SkillName>'Shisui: Susanoo'<SkillName> estiver ativado, o efeito de <Effects>redução de dano<Effects> irá <Improvements>durar 1 turno adicional<Improvements>.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/uDo2Jec.png",
        themepic: "https://i.imgur.com/uDo2Jec.png",
      },
    ],
  },
  {
    name: "Utakata (S)",
    url: "https://i.imgur.com/aJd17zi.png",
    themepic: "https://i.imgur.com/KHKOqwj.jpg",
    description:
      "A missing-nin from the Hidden Mist Village, Utakata is the jinchuuriki host of the Six-Tailed Beast, Saiken, and a kind person, though fairly distant most of the time. In battle, Utakata uses the powers of the Six-Tails to create chakra-based soap bubbles in which he can trap his enemies and slowly asphyxiate them.",
    descriptionBR:
      "Um ninja desaparecido da Vila da Névoa Oculta, Utakata é o hospedeiro jinchuuriki da Besta de Seis Caudas, Saiken, e uma pessoa gentil, embora bastante distante na maior parte do tempo. Em batalha, Utakata usa os poderes da Besta de Seis Caudas para criar bolhas de sabão baseadas em chakra, nas quais pode prender seus inimigos e asfixiá-los lentamente.",
    skills: [
      {
        name: "Soap Bubble",
        themeName: "Soap Bubble",
        description:
          "Utakata <Damage>deals 10 piercing damage<Damage> to one enemy and applies <SkillName>'Bubble Prision'<SkillName> on them. <SkillName>'Bubble Prision'<SkillName> deals 5 unremovable <Damage>affliction damage<Damage> to one enemy, and <Effects>the first time that enemy uses<Effects> a new <Classes>harmful skill<Classes>, Utaka will <Invisible>gain 1 ninjutsu chakra<Invisible>.",
        descriptionBR:
          "Utakata <Damage>causa 10 de dano perfurante<Damage> a um inimigo e aplica <SkillName>'Bubble Prision'<SkillName> nele. <SkillName>'Bubble Prision'<SkillName> causa 5 de <Damage>dano aflitivo<Damage> irremovivel a um inimigo, e a <Effects>primeira vez que esse inimigo usar<Effects> uma nova <Classes>habilidade ofensiva<Classes>, Utakata irá <Invisible>ganhar 1 ninjutsu chakra<Invisible>.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction*", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/6V5wX9J.png",
        themepic: "https://i.imgur.com/6V5wX9J.png",
      },
      {
        name: "Drowning Bubble Jutsu",
        themeName: "Drowning Bubble Jutsu",
        description:
          "Utakata targets all enemies affected by <SkillName>'Bubble Prision'<SkillName> and <Effects>stuns<Effects> their <Classes>non-mental<Classes> skills for 1 turn. These enemies will also <Improvements>receive 5 additional damage<Improvements> from <SkillName>'Bubble Prision'<SkillName> and will <Effects>lose 1 random chakra<Effects> for each stack of <SkillName>'Bubble Prision'<SkillName> on them. Cannot be <Classes>countered<Classes>, <Classes>reflected<Classes> and <Classes>ignores invulnerability<Classes>.",
        descriptionBR:
          "Utakata alveja todos os inimigos afetados pelo <SkillName>'Bubble Prision'<SkillName> e <Effects>atordoa<Effects> suas habilidades <Classes>não mentais<Classes> por 1 turno. Esses inimigos também <Improvements>receberão 5 de dano adicional<Improvements> do <SkillName>'Bubble Prision'<SkillName> e <Effects>perderão 1 chakra aleatório<Effects> para cada aplicação do <SkillName>'Bubble Prision'<SkillName> neles. Esta habilidade não pode ser <Classes>anulada<Classes>, <Classes>refletida<Classes> e <Classes>ignora a invulnerabilidade<Classes>.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/qOH6hYH.png",
        themepic: "https://i.imgur.com/pvQVFfK.jpg",
      },
      {
        name: "Rokubi Transformation",
        themeName: "Rokubi Transformation",
        description:
          "Utakata <Defense>heals<Defense> 10 <Defense>health<Defense> for each time <SkillName>'Soap Bubble'<SkillName> was used. Afterwards, he becomes <Defense>invulnerable<Defense> to <classes>Physical<classes> and <classes>Chakra<classes> skills for 2 turns. This skill removes all stacks from <SkillName>'Soap Bubble'<SkillName>.",
        descriptionBR:
          "Utakata <Defense>cura<Defense> 10 de <Defense>vida<Defense> cada vez que <SkillName>'Soap Bubble'<SkillName> é usada. Depois disso, ele se torna <Defense>invulnerável<Defense> a habilidades <classes>Physical<classes> e <classes>Chakra<classes> por 2 turnos. Esta habilidade remove todos os acúmulos de <SkillName>'Soap Bubble'<SkillName> .",
        energy: ["Blood"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/cqKvfBc.png",
        themepic: "https://i.imgur.com/CAHL3Jq.jpg",
      },
      {
        name: "Bubble Dome",
        themeName: "Bubble Dome",
        description:
          "This skill makes Utakata (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Utakata (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/C4cV4rh.png",
        themepic: "https://i.imgur.com/f3rrofV.jpg",
      },
      {
        name: "Bubble Prision",
        themeName: "Bubble Prision",
        description:
          "This skill <Damage>deals 5 unremovable affliction damage<Damage> to a target permanently. The first time that enemy uses a new <Classes>harmful skill<Classes>, Utakata will <Effects>gain<Effects> 1 ninjutsu chakra and that condition will <Classes>end<Classes>.",
        descriptionBR:
          "Esta habilidade <Damage>causa 5 de dano aflitivo irremovível<Damage> a um alvo permanentemente. Na primeira vez que o inimigo usar uma nova <Classes>habilidade prejudicial<Classes>, Utakata <Effects>ganhará<Effects> 1 de chakra de ninjutsu e essa condição <Classes>terminará<Classes>.",
        energy: [],
        classes: ["Affliction", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/dpO1t3r.png",
        themepic: "https://i.imgur.com/mfJuCtG.jpg",
      },
    ],
  },
  {
    name: "Karatachi Yagura",
    url: "https://i.imgur.com/uuIzkk0.png",
    themepic: "https://i.imgur.com/uuIzkk0.png",
    description:
      'The Fourth Mizukage of the Hidden Mist Village, Yagura is also the jinchuuriki host of the Three-Tailed Beast, Isobu. A tragic character manipulated by "Uchiha Madara" throughout his infamously bloody reign, Yagura uses the Three-Tails\' unique mist and coral-based abilities in battle to efficiently hinder his enemies.',
    descriptionBR:
      'O Quarto Mizukage da Vila da Névoa Oculta, Yagura também é o hospedeiro jinchuuriki da Besta de Três Caudas, Isobu. Um personagem trágico manipulado por "Uchiha Madara" ao longo de seu reinado infame e sangrento, Yagura usa as habilidades únicas da Besta de Três Caudas, baseadas em névoa e coral, em batalha para deter seus inimigos com eficiência.',
    skills: [
      {
        name: "Isobu: Tailed Beast Bomb",
        themeName: "Isobu: Tailed Beast Bomb",
        description:
          "Yagura <Defense>heals<Defense> 5 <Defense>health<Defense> and <Damage>deals 20 damage<Damage> to one enemy. This skill  <Improvements>deals 10 additional damage <Improvements> for every 15 <Defense>extra health it heals<Defense>.",
        descriptionBR:
          "Yagura <Defense>cura<Defense> 5 de <Defense>vida<Defense> e <Damage>causa 20 de dano<Damage> a um inimigo. Esta habilidade <Improvements>causa 10 de dano adicional <Improvements> para <Defense>cada 15 de vida extra que cura<Defense>.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ha118sW.png",
        themepic: "https://i.imgur.com/ha118sW.png",
      },
      {
        name: "Bloodshed",
        themeName: "Bloodshed",
        description:
          "Yagura <Damage>deals 10 piercing damage<Damage> to all enemies. For 2 turns, if an enemy does not use a <Classes>new skill<Classes>, their skills will have <Effects>1 additional cooldown<Effects> for 1 turn, otherwise, <SkillName>'Isobu: Tailed Beast Bomb'<SkillName> will <Improvements>heal 5 additional health permanently<Improvements>. This skill stacks and cannot be <Classes>countered<Classes>.",
        descriptionBR:
          "Yagura <Damage>causa 10 de dano perfurante<Damage> a todos os inimigos. Por 2 turnos, se um inimigo não usar uma <Classes>nova habilidade<Classes>, suas <Effects>habilidades terão 1 de cooldown adicional<Effects> por 1 turno; caso contrário, <SkillName>'Isobu: Tailed Beast Bomb'<SkillName> <Improvements>curará 5 de vida adicionais permanentemente<Improvements>. Esta habilidade acumula e não pode ser <Classes>anulada<Classes>.",
        energy: ["Blood"],
        classes: ["Mental", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/CqRgmjv.png",
        themepic: "https://i.imgur.com/CqRgmjv.png",
      },
      {
        name: "Isobu Transformation",
        themeName: "Isobu Transformation",
        description:
          "For 1 turn, Yagura will <Defense>ignore stun effects<Defense> and <SkillName>'Bloodshed'<SkillName> will <Improvements>cost 1 random chakra<Improvements>. Permanently, everytime Yagura <Classes>uses a new skill<Classes>, he <Defense>will ignore all stun effects<Defense> for 1 turn. During this time, this skill can be used to make <SkillName>'Bloodshed'<SkillName>  cost 1 random chakra for 1 turn. This skill cannot be <Classes>removed<Classes>.",
        descriptionBR:
          "Por 1 turno, Yagura <Defense>ignorará os efeitos de atordoamento<Defense> e <SkillName>'Bloodshed'<SkillName> <Improvements>custará 1 chakra aleatório<Improvements>. Permanentemente, toda vez que Yagura <Classes>usar uma nova habilidade<Classes>, ele <Defense>ignorará todos os efeitos de atordoamento<Defense> por 1 turno. Durante esse tempo, esta habilidade pode ser usada para fazer com que <SkillName>'Bloodshed'<SkillName>  custe 1 chakra aleatório por 1 turno. Esta habilidade não pode ser <Classes>removida.<Classes>",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/6j3AzPS.png",
        themepic: "https://i.imgur.com/6j3AzPS.png",
      },
      {
        name: "Isobu: Chakra Skin",
        themeName: "Isobu: Chakra Skin",
        description:
          "This skill makes Yagura <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Esta habilidade torna Yagura <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/CQCO65m.png",
        themepic: "https://i.imgur.com/CQCO65m.png",
      },
    ],
  },
  {
    name: "Deidara (S)",
    url: "https://i.imgur.com/iAgnmxk.png",
    themepic: "https://i.imgur.com/d3cdtXc.jpg",
    description:
      "An akatsuki former rock ninja partner and apprentice of Sasori. Deidara is quite eccentric when it comes to art. His skill with clay allows him to create explosive sculptures, whether large, medium or small.",
    descriptionBR:
      "Um ex-ninja da Pedra da Akatsuki, parceiro e aprendiz de Sasori. Deidara é bastante excêntrico quando se trata de arte. Sua habilidade com argila permite criar esculturas explosivas, sejam grandes, médias ou pequenas.",
    skills: [
      {
        name: "Clay Molds",
        themeName: "Clay Molds",
        description:
          'For 3 turns, Deidara gains 5 permanent destructible defense and activates "C2" first turn. Second turn he activates "C3". Third turn he activates "C4". Afterwards, this skill is restarted and Deidara gains 1 random chakra.',
        descriptionBR:
          "Por 3 turnos, Deidara ganha 5 de defesa destrutível permanente e ativa 'C2' no primeiro turno. No segundo turno, ele ativa 'C3'. No terceiro turno, ele ativa 'C4'. Depois disso, esta habilidade é reiniciada e Deidara ganha 1 chakra aleatório.",
        energy: [],
        classes: ["Chakra", "Instant", "Helpful", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/16zRKq5.png",
        themepic: "https://i.imgur.com/Gw4LiWm.jpg",
      },
      {
        name: "C3 - Giant Doll",
        themeName: "C3 - Giant Doll",
        description:
          'Deidara deals 15 piercing damage to all enemies. During "C2", this skill deals 5 additional damage. During "C3", this skill deals 10 additional damage and stuns one random enemy\'s harmful skills for 1 turn. During "C4", this skill stuns all enemies\' harmful skills for 1 turn. Requires \'Clay Mold\'.',
        descriptionBR:
          "Deidara causa 15 de dano perfurante a todos os inimigos. Durante 'C2', esta habilidade causa 5 de dano adicional. Durante 'C3', esta habilidade causa 10 de dano adicional e atordoa as habilidades ofensivas de um inimigo aleatório. Durante 'C4', esta habilidade atordoa as habilidades ofensivas de todos os inimigos por 1 turno. Requer 'Clay Mold'.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/3KPFyYt.png",
        themepic: "https://i.imgur.com/n4UNWr6.jpg",
      },
      {
        name: "C2 - Clay Centipede",
        themeName: "C2 - Clay Centipede",
        description:
          'Deidara deals 10 damage to one enemy for 2 turns. The target\'s draining chakra effects will not be applied. If used during "C2", this skill lasts 3 turns. If used during "C3", Deidara becomes invulnerable for 1 turn. During "C4", this skill lasts 1 turn and deals 30 piercing damage. Requires \'Clay Mold\'.',
        descriptionBR:
          "Deidara causa 10 de dano a um inimigo por 2 turnos. Os efeitos de drenagem de chakra do alvo não serão aplicados. Se usado durante 'C2', esta habilidade dura 3 turnos. Se usado durante 'C3', Deidara se torna invulnerável por 1 turno. Durante 'C4', esta habilidade dura 1 turno e causa 30 de dano perfurante. Requer 'Clay Mold'.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/QSRpbul.png",
        themepic: "https://i.imgur.com/QSRpbul.png",
      },
      {
        name: "Aerial Retreat",
        themeName: "Aerial Retreat",
        description:
          "This skill makes Deidara (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Deidara (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/Hno70ML.jpg",
        themepic: "https://imgur.com/Hno70ML.jpg",
      },
    ],
  },
  {
    name: "Hiruko Sasori (S)",
    url: "https://i.imgur.com/T1Da57N.png",
    description:
      "Hiruko is a puppet used by the Akatsuki shinobi, Sasori. Serving as a 'puppet armor', it allowed Sasori to hide inside of it. Hiruko is a human puppet made from the corpse of a renowned shinobi - this puppet is also Sasori's favorite.",
    descriptionBR:
      "Hiruko is a puppet used by the Akatsuki shinobi, Sasori. Serving as a 'puppet armor', it allowed Sasori to hide inside of it. Hiruko is a human puppet made from the corpse of a renowned shinobi - this puppet is also Sasori's favorite.",
    skills: [
      {
        name: "Poisonous Tail Stab",
        themeName: "Poisonous Tail Stab",
        description:
          "Deal 15 Affliction damage to one enemy and apply 'Venom Stack'. This skill will cost 1 random chakra for 1 turn after being used. If the target already has a 'Venom Stack', deal an additional 5 damage per stack and place a 'Venom Stack' on all other enemies.",
        descriptionBR:
          "Deal 15 Affliction damage to one enemy and apply 'Venom Stack'. This skill will cost 1 random chakra for 1 turn after being used. If the target already has a 'Venom Stack', deal an additional 5 damage per stack and place a 'Venom Stack' on all other enemies.",
        energy: ["Tai"],
        classes: ["Physical", "Affliction", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/vgia8DM.png",
      },
      {
        name: "Sand Clone Trap",
        themeName: "Sand Clone Trap",
        description:
          "For 1 turn, Hiruko or an ally ignores all damage dealt. During this turn, each enemy that uses a new skill on them takes 10 affliction damage* and gains 1 'Venom Stack'. This skill is Invisible. This skill ends if Hiruko Dies.",
        descriptionBR:
          "For 1 turn, Hiruko or an ally ignores all damage dealt. During this turn, each enemy that uses a new skill on them takes 10 affliction damage* and gains 1 'Venom Stack'. This skill is Invisible. This skill ends if Hiruko Dies.",
        energy: ["Tai"],
        classes: ["Physical", "Affliction*", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/yPSTj0V.png",
      },
      {
        name: "Puppet Reveal",
        themeName: "Puppet Reveal",
        description:
          "Sasori activates 'Puppet Reveal'. The next time his health reaches 50 or less, he will gain 20 points of destructible defense for 3 turns. During this time, 'Sand Close Trap' and 'Puppet Reveal' will be replaced. This skill is invisible and can only be used once.",
        descriptionBR:
          "Sasori activates 'Puppet Reveal'. The next time his health reaches 50 or less, he will gain 20 points of destructible defense for 3 turns. During this time, 'Sand Close Trap' and 'Puppet Reveal' will be replaced. This skill is invisible and can only be used once.",
        energy: [],
        classes: ["Physical", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/KbDm1wc.png",
      },
      {
        name: "Tail Deflection",
        themeName: "Tail Deflection",
        description:
          "This skill makes Hiruko Sasori (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Hiruko Sasori (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/RJ3tOJE.png",
      },
      {
        name: "Eight Waves of Needles",
        themeName: "Eight Waves of Needles",
        description:
          "Apply 2 'Needle Marks' to all enemies for 2 turns. When an enemy with 'Needle Marks' receive damage from Hiruko or his allies, remove 1 Mark to deal 10 Affliction damage.",
        descriptionBR:
          "Apply 2 'Needle Marks' to all enemies for 2 turns. When an enemy with 'Needle Marks' receive damage from Hiruko or his allies, remove 1 Mark to deal 10 Affliction damage.",
        energy: ["Random"],
        classes: ["Physical", "Affliction", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/8XJIxiX.png",
      },
      {
        name: "Prosthetic Arm Senbon",
        themeName: "Prosthetic Arm Senbon",
        description:
          "Consume all Needle Marks on all enemies: for each Mark removed, that enemy takes 15 Affliction damage and If at-least 5 Marks are consumed in total, Sasori becomes Invulnerable for 1 turn.",
        descriptionBR:
          "Consume all Needle Marks on all enemies: for each Mark removed, that enemy takes 15 Affliction damage and If at-least 5 Marks are consumed in total, Sasori becomes Invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Affliction", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/6OODdlz.png",
      },
      {
        name: "Poison Stack",
        themeName: "Poison Stack",
        description:
          "Venom Stack: The following turn, this enemy receives 5 Affliction damage for 2 turns.",
        descriptionBR:
          "Venom Stack: The following turn, this enemy receives 5 Affliction damage for 2 turns.",
        energy: [],
        classes: ["Chakra", "Affliction", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/tYO3SDh.png",
      },
    ],
  },
  {
    name: "Kisame Body Double (S)",
    url: "https://i.imgur.com/bqqAtVc.jpeg",
    themepic: "https://i.imgur.com/bqqAtVc.jpeg",
    description:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Kisame. The body double is controlled by Kisame but only has a third of his chakra.",
    descriptionBR:
      "Usando uma das técnicas de Pein, um espião da Areia para a Akatsuki é transformado para se parecer com Kisame. O corpo duplo é controlado por Kisame, mas possui apenas um terço de seu chakra.",
    skills: [
      {
        name: "Explosive Water Shock Wave",
        themeName: "Explosive Water Shock Wave",
        description:
          "Kisame Body Double (S) fills the battlefield with water. For 3 turns, all allies including Kisame will lose one less chakra if a chakra removal or stealing skill is used on them. For 3 turns, all enemies who use a skill will have the cooldown of that skill increased by 1 turn.*",
        descriptionBR:
          "Kisame Body Double (S) enche o campo de batalha com água. Por 3 turnos, todos os aliados, incluindo Kisame, perderão 1 chakra a menos se uma habilidade de remoção ou roubo de chakra for usada neles. Por 3 turnos, todos os inimigos que usarem uma habilidade terão o tempo de recarga dessa habilidade aumentado em 1 turno.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Instant", "Ranged", "Affliction"],
        cooldown: 4,
        url: "https://i.imgur.com/zVJTGma.jpeg",
        themepic: "https://i.imgur.com/zVJTGma.jpeg",
      },
      {
        name: "Water Prison Technique",
        themeName: "Water Prison Technique",
        description:
          "Using a bubble of water, Kisame stuns the physical or ranged skills of one enemy for 1 turn. During this time the enemy takes 15 affliction damage* and becomes invulnerable to friendly skills, and Kisame gains 15 points of damage reduction. During Explosive Water Shock Wave this skill costs 1 random chakra.",
        descriptionBR:
          "Usando uma bolha de água, Kisame atordoa as habilidades físicas ou à distância de um inimigo por 1 turno. Durante esse tempo, o inimigo recebe 15 de dano aflitivo* e se torna invulnerável a habilidades aliadas, e Kisame ganha 15 pontos de redução de dano. Durante Onda de Choque de Água Explosiva, esta habilidade custa 1 chakra aleatório.",
        energy: ["Blood"],
        classes: ["Chakra", "Affliction", "Instant", "Melee"],
        cooldown: 1,
        url: "https://i.imgur.com/gmuc252.jpeg",
        themepic: "https://i.imgur.com/gmuc252.jpeg",
      },
      {
        name: "Five Man-Eating Sharks",
        themeName: "Five Man-Eating Sharks",
        description:
          "Kisame Body Double summons five sharks of water who attack one enemy dealing 25 damage for 2 turns. During Explosive Water Shock Wave this skill costs 1 ninjutsu chakra.",
        descriptionBR:
          "O Corpo Duplo de Kisame invoca cinco tubarões de água que atacam um inimigo causando 25 de dano por 2 turnos. Durante Onda de Choque de Água Explosiva, esta habilidade custa 1 chakra de ninjutsu.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Action", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/csZyWj6.jpeg",
        themepic: "https://i.imgur.com/csZyWj6.jpeg",
      },
      {
        name: "Kisame Body Double (S) Water Clone",
        themeName: "Kisame Body Double (S) Water Clone",
        description:
          "This skill makes Kisame Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kisame Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/lRyljhc.jpeg",
        themepic: "https://i.imgur.com/lRyljhc.jpeg",
      },
    ],
  },
  {
    name: "Itachi Body Double (S)",
    url: "https://i.imgur.com/U1zO7L5.jpg",
    themepic: "https://i.imgur.com/U1zO7L5.jpg",
    description:
      "By using one of Pein's techniques a Sand Nin spy for Akatsuki is changed to look like Itachi. The body double is controlled by Itachi but only has a third of his chakra.",
    descriptionBR:
      "Usando uma das técnicas de Pein, um espião da Areia para a Akatsuki é transformado para se parecer com Itachi. O corpo duplo é controlado por Itachi, mas possui apenas um terço de seu chakra.",
    skills: [
      {
        name: "Finger Genjutsu",
        themeName: "Finger Genjutsu",
        description:
          "Itachi affects one enemy with Finger Genjutsu for 1 turn. If the affected enemy uses any skill on Itachi Body Double (S) or his allies that skill will be countered and that enemy will take 10 damage and Itachi Body Double (S) will gain 1 genjutsu chakra. The target of this skill is invisible.",
        descriptionBR:
          "Itachi afeta um inimigo com o Genjutsu do Dedo por 1 turno. Se o inimigo afetado usar qualquer habilidade em Itachi Body Double (S) ou em seus aliados, essa habilidade será anulada, o inimigo receberá 10 de dano e Itachi ganhará 1 chakra de genjutsu. O alvo dessa habilidade é invisível.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/9kA7uYQ.jpg",
        themepic: "https://i.imgur.com/9kA7uYQ.jpg",
      },
      {
        name: "Genjutsu Reversal",
        themeName: "Genjutsu Reversal",
        description:
          "For 2 turns if any enemy uses a skill which is non-unique on Itachi Body Double (S), he will reflect that skill onto the enemy who used it. This skill is invisible.",
        descriptionBR:
          "Por 2 turnos, se qualquer inimigo usar uma habilidade que não seja única em Itachi Body Double (S), ele refletirá essa habilidade de volta no inimigo que a usou. Esta habilidade é invisível.",
        energy: ["Blood", "Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/oif8mlK.jpg",
        themepic: "https://i.imgur.com/oif8mlK.jpg",
      },
      {
        name: "Goukakyuu no Jutsu",
        themeName: "Goukakyuu no Jutsu",
        description:
          "Itachi Body Double (S) creates a large fireball that scorches the battlefield. One enemy takes 20 damage. The following turn all enemies take an additional 10 affliction damage.*",
        descriptionBR:
          "Itachi Body Double (S) cria uma grande bola de fogo que incendeia o campo de batalha. Um inimigo recebe 20 de dano. No turno seguinte, todos os inimigos recebem 10 de dano aflitivo adicional.*",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged", "Affliction*"],
        cooldown: 1,
        url: "https://i.imgur.com/HUCVDhp.jpg",
        themepic: "https://i.imgur.com/HUCVDhp.jpg",
      },
      {
        name: "Illusionary Raven Bunshin",
        themeName: "Illusionary Raven Bunshin",
        description:
          "This skill makes Itachi Body Double (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Itachi Body Double (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/oyzXfwY.jpg",
        themepic: "https://i.imgur.com/oyzXfwY.jpg",
      },
    ],
  },
  {
    name: "Sasori of the Red Sand (S)",
    url: "https://i.imgur.com/zosLJnp.png",
    description:
      "Sasori is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone. ORIGINAL DESIGN: Pavera",
    descriptionBR:
      "Sasori is a senior Akatsuki member and a legendary puppet master. He is even rumored to have defeated an entire nation with puppets alone. ORIGINAL DESIGN: Pavera",
    skills: [
      {
        name: "Thousand Hands",
        themeName: "Thousand Hands",
        description:
          "Using this skill, Sasori deals 10 damage to an enemy for 2 turns and gains 5 points of destructible defense each turn. If 'Poison Gas' is used on the target in the following turn, it will last 1 additional turn.",
        descriptionBR:
          "Using this skill, Sasori deals 10 damage to an enemy for 2 turns and gains 5 points of destructible defense each turn. If 'Poison Gas' is used on the target in the following turn, it will last 1 additional turn.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uH3QQ4A.png",
      },
      {
        name: "Poison Gas",
        themeName: "Poison Gas",
        description:
          "Sasori deals 5 affliction damage to all enemies for 5 turns. During this time, Sasori gains 5 points of destructible defense and any enemy that uses a new harmful skill will be dealt 5 affliction damage. This skill lasts one additional turn on an enemy affected by 'Thousand Hands'. This skill cannot be countered and ends when Sasori is killed.",
        descriptionBR:
          "Sasori deals 5 affliction damage to all enemies for 5 turns. During this time, Sasori gains 5 points of destructible defense and any enemy that uses a new harmful skill will be dealt 5 affliction damage. This skill lasts one additional turn on an enemy affected by 'Thousand Hands'. This skill cannot be countered and ends when Sasori is killed.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 4,
        url: "https://i.imgur.com/rO92pL5.png",
      },
      {
        name: "Iron Sand",
        themeName: "Iron Sand",
        description:
          "Sasori summons the third kazekage's puppet for 3 turns. Each turn, Sasori gains 10 permanent destructible defense and any enemy that uses a new harmful skill on Sasori will take 5 piercing damage. During this time, this skill becomes 'Satetsu Kaiho' and 'Thousand Hands' becomes 'Satetsu Kesshu'.",
        descriptionBR:
          "Sasori summons the third kazekage's puppet for 3 turns. Each turn, Sasori gains 10 permanent destructible defense and any enemy that uses a new harmful skill on Sasori will take 5 piercing damage. During this time, this skill becomes 'Satetsu Kaiho' and 'Thousand Hands' becomes 'Satetsu Kesshu'.",
        energy: ["Blood"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/S86HOEG.png",
      },
      {
        name: "Puppet Protection",
        themeName: "Puppet Protection",
        description: "This skill makes Sasori invulnerable for 1 turn.",
        descriptionBR: "This skill makes Sasori invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/DOMTlX3.png",
      },
      {
        name: "Satetsu Kaiho",
        themeName: "Satetsu Kaiho",
        description:
          "Sasori gathers a great volume of iron san. This skill deals 30 piercing damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable. Afterwards, Sasori gains 15 points of destructible defense for 1 turn.",
        descriptionBR:
          "Sasori gathers a great volume of iron san. This skill deals 30 piercing damage to one enemy. For 2 turns, that enemy will be unable to reduce damage or become invulnerable. Afterwards, Sasori gains 15 points of destructible defense for 1 turn.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/pjprSct.png",
      },
      {
        name: "Satetsu Kesshu",
        themeName: "Satetsu Kesshu",
        description:
          "Sasori creates a giant sphere of branching spikes. This skill deals 25 piercing damage to all enemies. If an enemy's health drops to 10 or lower, they will be killed. This skill cannot be countered or reflected.",
        descriptionBR:
          "Sasori creates a giant sphere of branching spikes. This skill deals 25 piercing damage to all enemies. If an enemy's health drops to 10 or lower, they will be killed. This skill cannot be countered or reflected.",
        energy: ["Blood", "Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/XM4Cwb1.png",
      },
    ],
  },
  {
    name: "True Form Sasori",
    url: "https://i.imgur.com/MohdeE7.png",
    description:
      'Pushed to his limit, Sasori reveals the secret of his eternally young body: he has turned himself into a puppet with a living "core" that now makes up the entirety of his being. Using his own body as a weapon, Sasori also pulls out Chikamatsu\'s legendary Hundred Puppets, rumored to be able to bring down an entire nation.',
    descriptionBR:
      'Pushed to his limit, Sasori reveals the secret of his eternally young body: he has turned himself into a puppet with a living "core" that now makes up the entirety of his being. Using his own body as a weapon, Sasori also pulls out Chikamatsu\'s legendary Hundred Puppets, rumored to be able to bring down an entire nation.',
    skills: [
      {
        name: "Puppet Flamethrower",
        themeName: "Puppet Flamethrower",
        description:
          "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Water Stream Shooters', this skill will have a different effect, dealing 20 affliction damage and stunning harmful skills for 1 turn.",
        descriptionBR:
          "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Water Stream Shooters', this skill will have a different effect, dealing 20 affliction damage and stunning harmful skills for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/CH3tTNq.png",
      },
      {
        name: "Water Stream Shooters",
        themeName: "Water Stream Shooters",
        description:
          "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Puppet Flamethrower', this skill will have a different effect, dealing 30 affliction damage and stunning helpful skills for 1 turn.",
        descriptionBR:
          "Sasori deals 10 affliction damage to one enemy. The following turn, that enemy will be dealt 5 affliction damage permanently. If used on an enemy affected by 'Puppet Flamethrower', this skill will have a different effect, dealing 30 affliction damage and stunning helpful skills for 1 turn.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.ibb.co/t8VQn6p/cmCK08m.png",
      },
      {
        name: "Red Secret Technique: 100 Puppets",
        themeName: "Red Secret Technique: 100 Puppets",
        description:
          "Sasori uses the Red Secret Technique, summoning hundred puppets and gaining 50 points of destructible defense. Permanently, all enemies will be dealt 15 piercing damage each turn. This skill will end if Sasori successfully receives damage.",
        descriptionBR:
          "Sasori uses the Red Secret Technique, summoning hundred puppets and gaining 50 points of destructible defense. Permanently, all enemies will be dealt 15 piercing damage each turn. This skill will end if Sasori successfully receives damage.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/7xw6S3R.png",
      },
      {
        name: "Magnificent Pose",
        themeName: "Magnificent Pose",
        description:
          "This skill makes True Form Sasori <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz True Form Sasori <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/WXfmN2D.png",
      },
    ],
  },
  {
    name: "Hidan (S)",
    url: "https://i.imgur.com/BsRLXW8.jpg",
    themepic: "https://i.imgur.com/BsRLXW8.jpg",
    description:
      "Hidan(s) is a member of Akatsuki and a worshiper of the obscure god Jashin. He is apparently immortal and has perhaps the foulest mouth of the entire criminal organization.",
    descriptionBR:
      "Hidan (S) é um membro da Akatsuki e um adorador do obscuro deus Jashin. Ele é aparentemente imortal e talvez tenha a boca mais suja de toda a organização criminosa.",
    skills: [
      {
        name: "Reaping Scythe",
        themeName: "Reaping Scythe",
        description:
          "Hidan (S) attacks one enemy with his scythe dealing 15 damage to them and he gains 10 permanent destructible defense. 'Curse of Jashin' may be used on the targeted enemy the following turn. This skill cannot be used on an enemy affected by 'Curse of Jashin'.",
        descriptionBR:
          "Hidan (S) ataca um inimigo com sua foice causando 15 de dano e ganha 10 de defesa destrutível permanente. 'Curse of Jashin' poderá ser usada no inimigo atingido no turno seguinte. Esta habilidade não pode ser usada em um inimigo afetado por 'Curse of Jashin'.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/MjUnVzm.jpg",
        themepic: "https://i.imgur.com/MjUnVzm.jpg",
      },
      {
        name: "Curse of Jashin",
        themeName: "Curse of Jashin",
        description:
          "Hidan curses an enemy. For 2 turns, all harmful skills used on Hidan will be reflected upon the cursed enemy. During this time, 'Impale' may be used. This skill ignores invulnerability and cannot be countered or reflected.",
        descriptionBR:
          "Hidan amaldiçoa um inimigo. Por 2 turnos, todas as habilidades ofensivas usadas em Hidan serão refletidas no inimigo amaldiçoado. Durante esse tempo, 'Impale' poderá ser usada. Esta habilidade ignora invulnerabilidade e não pode ser anulada ou refletida.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Action", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xXLYmTW.jpg",
        themepic: "https://i.imgur.com/xXLYmTW.jpg",
      },
      {
        name: "Impale",
        themeName: "Impale",
        description:
          "Hidan (S) impales himself with a large metal spike dealing 40 piercing damage to one enemy currently the target of 'Curse of Jashin' and removes 1 bloodline or ninjutsu chakra from them. This skill ignores invulnerability.",
        descriptionBR:
          "Hidan (S) empala a si mesmo com uma grande lança de metal, causando 40 de dano perfurante a um inimigo atualmente afetado por 'Curse of Jashin' e remove 1 chakra bloodline ou ninjutsu desse inimigo. Esta habilidade ignora invulnerabilidade.",
        energy: ["Tai"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/k9okawc.jpg",
        themepic: "https://i.imgur.com/k9okawc.jpg",
      },
      {
        name: "Immortality",
        themeName: "Immortality",
        description:
          "This skill makes Hidan (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Hidan (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/t2PRUAx.jpg",
        themepic: "https://i.imgur.com/t2PRUAx.jpg",
      },
    ],
  },
  {
    name: "Kakuzu (S)",
    url: "https://i.imgur.com/XjrR5fI.jpg",
    themepic: "https://i.imgur.com/XjrR5fI.jpg",
    description:
      "A missing-nin of mysterious talents and a member of Akatsuki, Kakuzu(s) is certainly older than he appears. He seems to only be concerned with money and the bounties which provide him with it.",
    descriptionBR:
      "Um ninja renegado de talentos misteriosos e membro da Akatsuki, Kakuzu (S) é certamente mais velho do que aparenta. Ele parece se importar apenas com dinheiro e as recompensas que o fornecem.",
    skills: [
      {
        name: "Fuuton Atsugai",
        themeName: "Fuuton Atsugai",
        description:
          "Fuuton Atsugai deals 30 damage to one enemy and stuns their chakra and ranged skills for 1 turn. Becomes 'Katon Zukokku' after being used for 1 turn. 'Katon Zukokku' deals 15 affliction damage to all enemies for 1 bloodline chakra.",
        descriptionBR:
          "Fuuton Atsugai causa 30 de dano a um inimigo e atordoa suas habilidades de chakra e ranged por 1 turno. Torna-se 'Katon Zukokku' após ser usada por 1 turno. 'Katon Zukokku' causa 15 de dano aflitivo a todos os inimigos por 1 chakra bloodline.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/xnnPjNp.jpg",
        themepic: "https://i.imgur.com/xnnPjNp.jpg",
      },
      {
        name: "Raiton Gian",
        themeName: "Raiton Gian",
        description:
          "Raiton Gian deals 30 piercing damage to one enemy. Becomes 'Inferno Gust' after being used for 1 turn. 'Inferno Gust' deals 40 damage to one enemy and 15 to all other enemies for 1 bloodline and ninjutsu chakra.",
        descriptionBR:
          "Raiton Gian causa 30 de dano perfurante a um inimigo. Torna-se 'Inferno Gust' após ser usada por 1 turno. 'Inferno Gust' causa 40 de dano a um inimigo e 15 a todos os outros inimigos por  1 chakra bloodline e ninjutsu.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/XqDsue7.jpg",
        themepic: "https://i.imgur.com/XqDsue7.jpg",
      },
      {
        name: "Heart Steal",
        themeName: "Heart Steal",
        description:
          "Using his tendrils Kakuzu rips the heart out of one enemy and makes it his own. Kakuzu instantly kills that enemy and he heals 35 health if successful. This skill can only be used on an enemy at or below 25 health.",
        descriptionBR:
          "Usando seus tentáculos, Kakuzu arranca o coração de um inimigo e o torna seu. Kakuzu mata instantaneamente esse inimigo e cura 35 de vida se for bem-sucedido. Esta habilidade só pode ser usada em um inimigo com 25 de vida ou menos.",
        energy: ["Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/au3l9TW.jpg",
        themepic: "https://i.imgur.com/au3l9TW.jpg",
      },
      {
        name: "Iron Skin Technique",
        themeName: "Iron Skin Technique",
        description:
          "This skill makes Kakuzu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Kakuzu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/h5FVWmK.jpg",
        themepic: "https://i.imgur.com/h5FVWmK.jpg",
      },
      {
        name: "Katon Zukokku",
        themeName: "Katon Zukokku",
        description: "Katon Zukokku deals 15 affliction damage to all enemies.",
        descriptionBR:
          "Katon Zukokku causa 15 de dano aflitivo a todos os inimigos.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/1x2XnXN.png",
      },
      {
        name: "Inferno Gust",
        themeName: "Inferno Gust",
        description:
          "Inferno gust deal 40 damage to one enemy and 15 to all other enemies.",
        descriptionBR:
          "Inferno Gust causa 40 de dano a um inimigo e 15 a todos os outros inimigos.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/MTuMhez.jpg",
      },
    ],
  },
  {
    name: "Uchiha Itachi (S)",
    url: "https://i.imgur.com/YKP5Zef.jpg",
    themepic: "https://i.imgur.com/YKP5Zef.jpg",
    description:
      "Uchiha Itachi (S) is a member of Akatsuki, and the brother of Uchiha Sasuke. He has mastered the sharingan completely.",
    descriptionBR:
      "Uchiha Itachi (S) é um membro da Akatsuki e irmão de Uchiha Sasuke. Ele dominou completamente o sharingan.",
    skills: [
      {
        name: "Amaterasu Field",
        themeName: "Amaterasu Field",
        description:
          "Itachi creates a field around his team using Amaterasu. For 1 turn, any enemy that uses a new skill on Itachi (S) or his allies will be dealt 5 affliction damage permanently*. This skill is invisible.",
        descriptionBR:
          "Itachi cria um campo ao redor de sua equipe usando Amaterasu. Por 1 turno, qualquer inimigo que usar uma nova habilidade em Itachi (S) ou em seus aliados receberá 5 de dano aflitivo permanentemente*. Esta habilidade é invisível.",
        energy: ["Nin"],
        classes: ["Chakra", "Affliction", "Ranged*", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/2AS9EMK.png",
        themepic: "https://i.imgur.com/pdoEvM9.jpg",
      },
      {
        name: "Crow Genjutsu",
        themeName: "Crow Genjutsu",
        description:
          "Itachi places a genjutsu on one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered. If successfully, the countered enemy's skills will cost 1 additional random chakra until they use a new skill. This skill is invisible.",
        descriptionBR:
          "Itachi coloca um genjutsu em um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva, ela será anulada. Se for bem-sucedido, as habilidades do inimigo anulado custarão 1 chakra aleatório adicional até que ele use uma nova habilidade. Esta habilidade é invisível.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/elSVDBR.png",
        themepic: "https://i.imgur.com/FtKA5ka.jpg",
      },
      {
        name: "Mastered Mangekyou Sharingan",
        themeName: "Mastered Mangekyou Sharingan",
        description:
          "Itachi uses his mastered mangekyou sharingan to deceive an enemy. For 1 turn, the first new skill used by that enemy will be reflected to a random different enemy. This skill is invisible and ignores invulnerability.",
        descriptionBR:
          "Itachi usa seu mangekyou sharingan dominado para enganar um inimigo. Por 1 turno, a primeira nova habilidade usada por esse inimigo será refletida para um inimigo aleatório diferente. Esta habilidade é invisível e ignora invulnerabilidade.",
        energy: ["Blood", "Random"],
        classes: ["Mental", "Instant", "Ranged", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/0Pgy8yM.png",
        themepic: "https://i.imgur.com/6U45M5N.jpeg",
      },
      {
        name: "Clone Genjutsu",
        themeName: "Maneuvering Dodge",
        description:
          "This skill makes Uchiha Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Uchiha Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/hQfYhTZ.png",
        themepic: "https://i.imgur.com/8fAbySh.jpg",
      },
    ],
  },
  {
    name: "Susanoo Itachi (S)",
    url: "https://i.imgur.com/aAWBnUX.png",
    themepic: "https://i.imgur.com/tibUpcz.png",
    description:
      "After using Amaterasu and Tsukuyomi, Itachi awakened his triumph, Susanoo, and became even stronger, both defensively with his Yata Mirror and offensively with his Totsuka Sword capable of sealing an opponent.",
    descriptionBR:
      "Após usar Amaterasu e Tsukuyomi, Itachi despertou seu triunfo, Susanoo, e ficou ainda mais forte, tanto defensivamente com seu Espelho Yata quanto ofensivamente com sua Espada Totsuka capaz de selar um oponente.",
    skills: [
      {
        name: "Susanoo Activation",
        themeName: "Susanoo Activation",
        description:
          "Uchiha Itachi activates Susanoo, and he takes 5 affliction damage*. Each turn he gains 5 permanent stacking destructible defense and his skills become usable for the rest of the game. This skill cannot be used while it's active.",
        descriptionBR:
          "Uchiha Itachi ativa Susanoo e sofre 5 de dano aflitivo*. A cada turno ele ganha 5 de defesa destrutível permanente que acumula e suas habilidades ficam utilizáveis pelo resto do jogo. Esta habilidade não pode ser usada enquanto estiver ativa.",
        energy: ["Random"],
        classes: ["Chakra", "Affliction*", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/CCYvnwu.png",
        themepic: "https://i.imgur.com/ilwO1mf.jpg",
      },
      {
        name: "Totsuka Sword",
        themeName: "Totsuka Sword",
        description:
          "Itachi uses the legendary blade of Susanoo, dealing 30 piercing damage to one enemy and removing 1 non-genjutsu chakra from them. This skill requires 'Susanoo Activation'.'",
        descriptionBR:
          "Itachi usa a lâmina lendária do Susanoo, causando 30 de dano perfurante a um inimigo e removendo 1 chakra que não seja genjutsu dele. Esta habilidade requer 'Susanoo Activation'.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/Fsm5S2F.png",
        themepic: "https://i.imgur.com/n0KqcDN.png",
      },
      {
        name: "Yata Mirror",
        themeName: "Yata Mirror",
        description:
          "Using the legendary shield of Susanoo, Itachi (S) ignores all harmful effects used on him for 1 turn. Any enemy that uses a new skill on him will have the cost of their skills increased by 1 random chakra for 1 turn. This skill is invisible and requires 'Susanoo Activation'.",
        descriptionBR:
          "Usando o lendário escudo do Susanoo, Itachi (S) ignora todos os efeitos nocivos aplicados a ele por 1 turno. Qualquer inimigo que usar uma nova habilidade contra ele terá o custo de suas habilidades aumentado em 1 chakra aleatório por 1 turno. Esta habilidade é invisível e requer 'Susanoo Activation'.",
        energy: ["Gen"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/4BpmN0l.png",
        themepic: "https://i.imgur.com/ytZ2m07.png",
      },
      {
        name: "Susanoo Defense",
        themeName: "Susanoo Defense",
        description:
          "This skill makes Susanoo Itachi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Susanoo Itachi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/KZFSkLv.png",
        themepic: "https://i.imgur.com/KZFSkLv.png",
      },
    ],
  },
  {
    name: "Konan (S)",
    url: "https://i.imgur.com/V7BSQFp.jpg",
    themepic: "https://i.imgur.com/V7BSQFp.jpg",
    description:
      "Konan (S) is a member of Akatsuki and a master of origami ninjutsu, earning her the title God's Angel in Amegakure. Able to turn her body into thick sheets of paper, she is capable of multiple forms of attack.",
    descriptionBR:
      "Konan (S) é uma membro da Akatsuki e mestre do origami ninjutsu, ganhando o título de Anjo de Deus em Amegakure. Capaz de transformar seu corpo em grossas folhas de papel, ela é capaz de realizar múltiplas formas de ataque.",
    skills: [
      {
        name: "Sword of Paper",
        themeName: "Sword of Paper",
        description:
          "Using a sword made of paper, Konan (S) <Damage>deals 25 piercing damage<Damage> to 1 enemy.",
        descriptionBR:
          "Usando uma espada feita de papel, Konan (S) <Damage>causa 25 de dano<Damage> perfurante a 1 inimigo.",
        energy: ["Blood"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VdkYoFg.jpg",
        themepic: "https://i.imgur.com/VdkYoFg.jpg",
      },
      {
        name: "Origami Blanket",
        themeName: "Origami Blanket",
        description:
          "Konan (S) covers one enemy in paper. For 2 turns that enemy has their <Classes>harmful<Classes> skills <Effects>stunned<Effects>, will be <Defense>invulnerable<Defense> to all new <Classes>helpful<Classes> skills, and <Damage>takes 15 damage<Damage> each turn. During this time, <SkillName>'Sword of Paper'<SkillName> will <Improvements>deal an additional 10 damage<Improvements> to that enemy.",
        descriptionBR:
          "Konan (S) cobre um inimigo com papel. Por 2 turnos, esse inimigo terá suas habilidades <Classes>ofensivas<Classes> <Effects>atordoadas<Effects>, ficará <Defense>invulnerável<Defense> a todas as novas habilidades <Classes>benéficas<Classes> e <Damage>receberá 15 de dano<Damage> por turno. Durante esse tempo, <SkillName>'Sword of Paper'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> a esse inimigo.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Ranged", "Action", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/MIliKrv.jpg",
        themepic: "https://i.imgur.com/MIliKrv.jpg",
      },
      {
        name: "Dance Of The Shikigami",
        themeName: "Dance Of The Shikigami",
        description:
          "Konan (S) uses Dance Of The Shikigami dealing 25 damage to one enemy and <Damage>25 damage<Damage> to a random different enemy.",
        descriptionBR:
          "Konan (S) usa a Dança do Shikigami <Damage>causando 25 de dano<Damage> a um inimigo e <Damage>25 de dano<Damage> a um inimigo aleatório diferente.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/mBWvj54.jpg",
        themepic: "https://i.imgur.com/mBWvj54.jpg",
      },
      {
        name: "Onmyoji Dodge",
        themeName: "Onmyoji Dodge",
        description:
          "This skill makes Konan (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Konan (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/grDDbcd.jpg",
        themepic: "https://i.imgur.com/grDDbcd.jpg",
      },
    ],
  },
  {
    name: "Nagato (S)",
    url: "https://i.imgur.com/PEZ7ucJ.jpg",
    themepic: "https://i.imgur.com/PEZ7ucJ.jpg",
    description:
      "Nagato is the leader of Akatsuki and is also known as Pein. He is in control of the six paths of Pein and was a former student of Jiraiya. Nagato possess the rinnegan and may be the strongest ninja in the shinobi world.",
    descriptionBR:
      "Nagato é o líder da Akatsuki e também é conhecido como Pein. Ele controla os seis caminhos de Pein e foi um ex-aluno de Jiraiya. Nagato possui o rinnegan e pode ser o ninja mais forte do mundo shinobi.",
    skills: [
      {
        name: "Demonic Statue Summoning",
        themeName: "Demonic Statue Summoning",
        description:
          "Nagato (S) targets all enemies and <Damage>deals 20 damage <Damage>to them. Nagato will gain 10 permanent <Defense>destructible defense<Defense>. The following turn, <SkillName>'Etheral Dragon'<SkillName> will <Improvements>deal an additional 10 damage<Improvements> to enemies <Improvements>affected<Improvements> by this skill.",
        descriptionBR:
          "Nagato (S) atinge todos os inimigos e <Damage>causa 20 de dano<Damage> a eles. Nagato ganhará 10 de <Defense>defesa destrutível<Defense> permanente. No turno seguinte, <SkillName>'Etheral Dragon'<SkillName> <Improvements>causará 10 de dano adicional<Improvements> aos inimigos <Improvements>afetados<Improvements> por esta habilidade.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/x9FTMms.jpg",
        themepic: "https://i.imgur.com/x9FTMms.jpg",
      },
      {
        name: "Etheral Dragon",
        themeName: "Etheral Dragon",
        description:
          "Using Etheral Dragon, Nagato <Damage>deals 25 damage<Damage> to one enemy. The following turn, <SkillName>'Demonic Statue Summoning'<SkillName> will be <Improvements>improved <Improvements>and will <Improvements>cost 2 random chakra <Improvements>instead.",
        descriptionBR:
          "Usando Etheral Dragon, Nagato <Damage>causa 25 de dano a um inimigo<Damage>. No turno seguinte, <SkillName>'Demonic Statue Summoning'<SkillName> será <Improvements>melhorada<Improvements> e <Improvements>custará 2 chakras aleatórios<Improvements>.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/frO4zbf.jpg",
        themepic: "https://i.imgur.com/frO4zbf.jpg",
      },
      {
        name: "Samsara of Heavenly Life",
        themeName: "Samsara of Heavenly Life",
        description:
          "Nagato (S) uses Samsara of Heavenly Life to heal all allies for <Defense>30 health<Defense>. Any <Classes>dead<Classes> ally on Nagato's team will be <Classes>revived<Classes> back to <Defense>30 health<Defense> and will become <Defense>invulnerable<Defense> for 1 turn. Nagato will lose <Defense>50 health<Defense>* for each <Classes>ally revived<Classes> by this skill.",
        descriptionBR:
          "Nagato (S) usa Samsara of Heavenly Life para curar todos os aliados em <Defense>30 de vida<Defense>. Qualquer aliado <Classes>morto<Classes> na equipe de Nagato será <Classes>revivido<Classes> com <Defense>30 de vida<Defense>. e ficará <Defense>invulnerável<Defense> por 1 turno. Nagato perderá <Defense>50 de vida<Defense>* para cada <Classes>aliado revivido<Classes> por esta habilidade.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Instant", "Unique", "Affliction*"],
        cooldown: 9,
        url: "https://i.imgur.com/WRssnUP.jpg",
        themepic: "https://i.imgur.com/WRssnUP.jpg",
      },
      {
        name: "Bansho Block",
        themeName: "Bansho Block",
        description:
          "This skill makes Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ZvysjIj.jpg",
        themepic: "https://i.imgur.com/ZvysjIj.jpg",
      },
    ],
  },
  {
    name: "Animal Path Pein (S)",
    url: "https://i.imgur.com/8ryFroR.jpg",
    themepic: "https://i.imgur.com/8ryFroR.jpg",
    description:
      "Animal Path Pein (S) is one of the six paths of Pein. This Path is able to summon a variety of different beasts for different purposes.",
    descriptionBR:
      "Animal Path Pein (S) é um dos seis caminhos de Pein. Este caminho é capaz de invocar uma variedade de bestas diferentes para diversos propósitos.",
    skills: [
      {
        name: "Cerberus Hydra",
        themeName: "Cerberus Hydra",
        description:
          "Animal Path Pein summons a giant multiple headed dog that deals 30 damage to one enemy. The following 2 turns any enemy that uses a skill will be dealt 15 piercing damage.",
        descriptionBR:
          "Animal Path Pein invoca um cão gigante de várias cabeças que causa 30 de dano a um inimigo. Pelos 2 turnos seguintes, qualquer inimigo que usar uma habilidade receberá 15 de dano perfurante.",
        energy: ["Blood", "Nin"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/Wo05Giy.jpg",
        themepic: "https://i.imgur.com/Wo05Giy.jpg",
      },
      {
        name: "Drill Bird",
        themeName: "Drill Bird",
        description:
          "Animal Path Pein summons a giant drill-beaked bird to assault one enemy, dealing 15 damage to them for 3 turns. A random different enemy will also take 15 damage for 3 turns.",
        descriptionBR:
          "Animal Path Pein invoca um pássaro gigante com bico perfurante para atacar um inimigo, causando 15 de dano por 3 turnos. Um inimigo aleatório diferente também receberá 15 de dano por 3 turnos.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 4,
        url: "https://i.imgur.com/0utvW5A.jpg",
        themepic: "https://i.imgur.com/0utvW5A.jpg",
      },
      {
        name: "Invisible Chameleon",
        themeName: "Invisible Chameleon",
        description:
          "Animal Path Pein summons a chameleon that is able to become invisible to hide himself. For 4 turns Animal Path Pein will ignore enemy stun effects and gains 50% damage reduction.",
        descriptionBR:
          "Animal Path Pein invoca um camaleão que consegue se tornar invisível para se esconder. Por 4 turnos, Animal Path Pein irá ignorar efeitos de atordoamento inimigos e receberá 50% de redução de dano.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/1JrdMnL.jpg",
        themepic: "https://i.imgur.com/1JrdMnL.jpg",
      },
      {
        name: "Panda Defense",
        themeName: "Panda Defense",
        description:
          "This skill makes Animal Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Animal Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FR1oFXS.jpg",
        themepic: "https://i.imgur.com/FR1oFXS.jpg",
      },
    ],
  },
  {
    name: "Asura Path Pein (S)",
    url: "https://i.imgur.com/b73xnTa.jpg",
    themepic: "https://i.imgur.com/b73xnTa.jpg",
    description:
      "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
    descriptionBR:
      "Asura Path Pein (S) is one of the six paths of Pein. His body style is similar to a puppet filled with hidden weapons.",
    skills: [
      {
        name: "Chakra Burst",
        themeName: "Chakra Burst",
        description:
          "Asura uses Chakra Burst on one enemy making them unable to reduce damage or become invulnerable and dealing 20 damage to them for 1 turn. Damage dealt to Asura will be reduced by 25% for 1 turn and any enemy that uses a new skill on Asura will take 10 damage. Becomes 'Crown Shockwave' when used.",
        descriptionBR:
          "Asura usa Chakra Burst em um inimigo, impedindo-o de reduzir dano ou se tornar invulnerável, causando 20 de dano por 1 turno. O dano causado a Asura será reduzido em 25% por 1 turno e qualquer inimigo que usar uma nova habilidade em Asura receberá 10 de dano. Torna-se 'Crown Shockwave' após o uso.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/qC4Q7SQ.jpg",
      },
      {
        name: "Cluster Bombs",
        themeName: "Cluster Bombs",
        description:
          "Asura Path Pein (S) uses Cluster Bombs on all enemies dealing 10 piercing damage. For 1 turn any enemy that uses a new harmful physical or chakra skill will be dealt 10 piercing damage.",
        descriptionBR:
          "Asura Path Pein (S) usa Cluster Bombs em todos os inimigos, causando 10 de dano perfurante. Por 1 turno, qualquer inimigo que usar uma nova habilidade ofensiva que seja Physical ou Chakra receberá 10 de dano perfurante.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/TOErXJO.jpg",
        themepic: "https://i.imgur.com/TOErXJO.jpg",
      },
      {
        name: "Heat Seeker",
        themeName: "Heat Seeker",
        description:
          "Asura Path Pein (S) uses Heat Seeker on one enemy. That enemy will take 20 piercing damage when Asura path Pein (S) dies.This skill is invisible until triggered. This skill stacks.",
        descriptionBR:
          "Asura Path Pein (S) usa Heat Seeker em um inimigo. Esse inimigo receberá 20 de dano perfurante quando Asura Path Pein (S) morrer. Esta habilidade é invisível até ser ativada. Esta habilidade acumula.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/qkIwe7q.jpg",
        themepic: "https://i.imgur.com/qkIwe7q.jpg",
      },
      {
        name: "High Speed Reaction",
        themeName: "High Speed Reaction",
        description:
          "This skill makes Asura Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Asura Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/OIuNcgA.jpg",
        themepic: "https://i.imgur.com/OIuNcgA.jpg",
      },
      {
        name: "Crown Shockwave",
        themeName: "Crown Shockwave",
        description:
          "Asura Path Pein (S) deals 20 damage to all enemies. This skill becomes 'Chakra Burst' after being used.",
        descriptionBR:
          "Asura Path Pein (S) causa 20 de dano a todos os inimigos. Esta habilidade se torna 'Chakra Burst' após ser usada.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Instant", "Unique", "Ranged"],
        cooldown: 0,
        url: "https://i.imgur.com/xt8a6Zf.png",
        themepic: "https://i.imgur.com/xt8a6Zf.png",
      },
    ],
  },
  {
    name: "Human Path Pein (S)",
    url: "https://i.imgur.com/v8CSEiq.jpg",
    themepic: "https://i.imgur.com/v8CSEiq.jpg",
    description:
      "Human Path Pein (S) is one of the six paths of Pein. This path is a mind reader and gathers intel for the other paths.",
    descriptionBR:
      "Human Path Pein (S) é um dos seis caminhos de Pein. Este caminho é um leitor de mentes e coleta informações para os outros caminhos.",
    skills: [
      {
        name: "Mind Invasion",
        themeName: "Mind Invasion",
        description:
          "Human Path Pein (S) uses Mind Invasion on one enemy. That enemy will be <Damage>dealt 20 piercing damage<Damage> and have their <Effects>chakra and mental<Effects> skills stunned for 1 turn. Soul Steal may be used on the target the following turn.",
        descriptionBR:
          "Human Path Pein (S) usa Mind Invasion em um inimigo. Esse inimigo <Damage>receberá 20 de dano perfurante<Damage> e terá suas habilidades de chakra e mentais atordoadas por 1 turno. Soul Steal poderá ser usada nesse alvo no turno seguinte.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/QJdx50b.jpg",
        themepic: "https://i.imgur.com/QJdx50b.jpg",
      },
      {
        name: "Soul Steal",
        themeName: "Soul Steal",
        description:
          "Human Path Pein (S) uses Soul Steal on an enemy effected by Mind Invasion. That enemy will lose 50% of their health. If used on an enemy and that enemy drops to 20 or less health that enemy will be killed. This skill cannot be countered or reflected.",
        descriptionBR:
          "Human Path Pein (S) usa Soul Steal em um inimigo afetado por Mind Invasion. Esse inimigo perderá 50% de sua vida. Se for usado em um inimigo e ele estiver com 20 ou menos de vida, será morto. Esta habilidade não pode ser anulada ou refletida.",
        energy: ["Tai", "Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/fA7SGdq.jpg",
      },
      {
        name: "Sneak Attack",
        themeName: "Sneak Attack",
        description:
          "Human Path Pein (S) launches a sneak attack dealing 25 piercing damage to one enemy. This skill ignores invulnerability.",
        descriptionBR:
          "Human Path Pein (S) realiza um ataque furtivo, causando 25 de dano perfurante a um inimigo. Esta habilidade ignora invulnerabilidade.",
        energy: ["Tai"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/sA5Hq3L.jpg",
      },
      {
        name: "Rinnegan Awareness",
        themeName: "Rinnegan Awareness",
        description:
          "This skill makes Human Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Human Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/vlbggxC.jpg",
      },
    ],
  },
  {
    name: "Preta Path Pein (S)",
    url: "https://i.imgur.com/kvUIdzR.jpg",
    themepic: "https://i.imgur.com/kvUIdzR.jpg",
    description:
      "Preta Path Pein (S) is one of the six paths of Pein. This path is able to nulify jutsus and is used mostly for defensive tactics.",
    descriptionBR:
      "Preta Path Pein (S) é um dos seis caminhos de Pein. Esse caminho é capaz de anular jutsus e é usado principalmente para táticas defensivas.",
    skills: [
      {
        name: "Energy Shield",
        themeName: "Energy Shield",
        description:
          "Preta Path (S) uses Energy Shield on one enemy <Effects>removing 1 bloodline or Genjutsu chakra<Effects>. That enemy will be <Damage>dealt 25 piercing damage<Damage>.",
        descriptionBR:
          "Preta Path (S) usa Energy Shield em um inimigo, <Effects>removendo 1 chakra Bloodline ou Genjutsu<Effects>. Esse inimigo <Damage>receberá 25 de dano<Damage> perfurante.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Instant", "Ranged", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/aSF7Q2O.jpg",
        themepic: "https://i.imgur.com/aSF7Q2O.jpg",
      },
      {
        name: "Rinnegan Absorption",
        themeName: "Rinnegan Absorption",
        description:
          "Preta Path Pein (S) uses Rinnegan Absorption to protect himself. All <Defense>damage dealt<Defense> on Preta Path Pein (S) will be <Defense>ignored<Defense> and any enemy that uses a <Classes>new damaging harmful skill<Classes> on him will <Effects>lose chakra equal<Effects> the <Effects>chakra cost of the skill used (except Random Chakra)<Effects>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Preta Path Pein (S) usa Rinnegan Absorption para se proteger. Todo o <Defense>dano causado<Defense> a Preta Path Pein (S) será <Defense>ignorado<Defense> e qualquer inimigo que usar uma <Classes>nova habilidade ofensiva de dano<Classes> nele <Effects>perderá chakra igual<Effects> ao <Effects>custo da habilidade usada (exceto Chakra Aleatório)<Effects>. <Invisible>Esta habilidade é invisível<Invisible>.",
        energy: ["Nin", "Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/n1Rd3Tt.jpg",
        themepic: "https://i.imgur.com/n1Rd3Tt.jpg",
      },
      {
        name: "Chakra Pin",
        themeName: "Chakra Pin",
        description:
          "Using Chakra Pin Preta Path Pein (S) <Effects>stuns<Effects> one enemy's <Classes>physical or melee<Classes> skills. Preta Path Pein (S) will <Effects>steal 1 bloodline or genjutsu chakra<Effects>.",
        descriptionBR:
          "Usando Chakra Pin, Preta Path Pein (S) irá <Effects>atordoar<Effects> as habilidades <Classes>Physical ou Melee<Classes> de um inimigo. Preta Path Pein (S) <Effects>roubará 1 chakra Bloodline ou Genjutsu<Effects>.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/RyzGOhN.jpg",
        themepic: "https://i.imgur.com/RyzGOhN.jpg",
      },
      {
        name: "Agile Dodge",
        themeName: "Agile Dodge",
        description:
          "This skill makes Preta Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Preta Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9RZKQtI.jpg",
        themepic: "https://i.imgur.com/9RZKQtI.jpg",
      },
    ],
  },
  {
    name: "Naraka Path Pein (S)",
    url: "https://i.imgur.com/JMaDKFI.jpg",
    themepic: "https://i.imgur.com/JMaDKFI.jpg",
    description:
      "Naraka Path Pein (S) is one of the six paths of Pein. This path is able to interrogate it's enemies at will. Naraka Path Pein (S) can also give life as well as take it.",
    descriptionBR:
      "Naraka Path Pein (S) é um dos seis caminhos de Pein. Esse caminho é capaz de interrogar seus inimigos à vontade. Naraka Path Pein (S) também pode dar vida assim como tirá-la.",
    skills: [
      {
        name: "Outer Path",
        themeName: "Outer Path",
        description:
          "Naraka Path Pein (S) summons the Outer Path and <Damage>dealing 12 damage<Damage> to all enemies for 3 turns. <SkillName>'Judgement'<SkillName> can be used during this skill.",
        descriptionBR:
          "Naraka Path Pein (S) invoca o Outer Path <Damage>causando 12 de dano<Damage> a todos os inimigos por 3 turnos. <SkillName>'Judgement'<SkillName> pode ser usado durante esta habilidade.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Action", "Ranged", "Unique", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/RyWxFYA.jpg",
        themepic: "https://i.imgur.com/RyWxFYA.jpg",
      },
      {
        name: "Judgement",
        themeName: "Judgement",
        description:
          "Naraka passes Judgement on one enemy when <SkillName>'Outer Path'<SkillName> is being used. Naraka will <Damage>steal 20 health<Damage> from that enemy* and for 1 turn they will <Defense>ignore<Defense> <Defense>healing<Defense> effects.",
        descriptionBR:
          "Naraka aplica Judgement em um inimigo enquanto <SkillName>'Outer Path'<SkillName> está sendo usado. Naraka <Damage>roubará 20 de vida<Damage> desse inimigo* e por 1 turno ele <Defense>ignorará<Defense> efeitos de <Defense>cura<Defense>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Melee", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/q4L8qST.jpg",
        themepic: "https://i.imgur.com/q4L8qST.jpg",
      },
      {
        name: "Rejuvenation",
        themeName: "Rejuvenation",
        description:
          "Naraka Path Pein (S) uses Rejuvenation on himself or an ally. That character will be <Defense>healed<Defense> for <Defense>25 health<Defense>.",
        descriptionBR:
          "Naraka Path Pein (S) usa Rejuvenation nele mesmo ou em um aliado. Esse personagem será <Defense>curado<Defense> em <Defense>25 de vida<Defense>.",
        energy: ["Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/qd4Qxag.jpg",
        themepic: "https://i.imgur.com/qd4Qxag.jpg",
      },
      {
        name: "Chakra Rod Deflection",
        themeName: "Chakra Rod Deflection",
        description:
          "This skill makes Naraka Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Naraka Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/Y94AV55.jpg",
        themepic: "https://i.imgur.com/Y94AV55.jpg",
      },
    ],
  },
  {
    name: "Deva Path Pein (S)",
    url: "https://i.imgur.com/FwxsVNS.jpg",
    themepic: "https://i.imgur.com/FwxsVNS.jpg",
    description:
      "Deva Path Pein (S) is one of the six paths of Pein. This path is able to use itself as the epicenter of magnetism to attract or repel all objects. This path holds the most power and is the main force in battle for Pein.",
    descriptionBR:
      "Deva Path Pein (S) é um dos seis caminhos de Pein. Esse caminho é capaz de usar a si mesmo como epicentro do magnetismo para atrair ou repelir todos os objetos. Esse caminho possui o maior poder e é a força principal de Pein em batalha.",
    skills: [
      {
        name: "Chakra Rod",
        themeName: "Chakra Rod",
        description:
          "Deva Path Pein (S) targets one enemy and uses Chakra Rod. When that enemy uses a new skill they will be dealt 15 piercing damage and Deva will steal 1 bloodline or ninjutsu chakra from them. This skill is invisible until triggered. This skill stacks.",
        descriptionBR:
          "Deva Path Pein (S) mira em um inimigo e usa Chakra Rod. Quando esse inimigo usar uma nova habilidade, receberá 15 de dano perfurante e Deva roubará 1 chakra Bloodline ou Ninjutsu dele. Esta habilidade é invisível até ser ativada e acumula.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/1GjmoKo.jpg",
        themepic: "https://i.imgur.com/1GjmoKo.jpg",
      },
      {
        name: "Violent Water Wave",
        themeName: "Violent Water Wave",
        description:
          "Deva Path Pein (S) uses Violent Water Wave on all enemies. For 1 turn all enemies chakra or ranged skills will cost 1 additional random chakra. Deva Path Pein (S) gains 50% damage reduction during this skill. This skill becomes 'Chibaku Tensei' for 2 turns.",
        descriptionBR:
          "Deva Path Pein (S) usa Violent Water Wave em todos os inimigos. Por 1 turno, todas as habilidades chakra ou Ranged dos inimigos custarão 1 chakra aleatório adicional. Deva Path Pein (S) recebe 50% de redução de dano durante esta habilidade. Esta habilidade se torna 'Chibaku Tensei' por 2 turnos.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant", "Ranged"],
        cooldown: 1,
        url: "https://i.imgur.com/s02MnAZ.jpg",
        themepic: "https://i.imgur.com/s02MnAZ.jpg",
      },
      {
        name: "Universal Pull",
        themeName: "Universal Pull",
        description:
          "Deva Path Pein (S) uses Universal Pull on one enemy for 1 turn. If that enemy uses a new harmful phsyical or chakra skill they will be countered, will take 20 damage and will deal 10 less non-affliction damage for 1 turn. This skill is invisible and becomes 'Shinra Tensei' for 2 turns.",
        descriptionBR:
          "Deva Path Pein (S) usa Universal Pull em um inimigo por 1 turno. Se esse inimigo usar uma nova habilidade ofensiva Physical ou Chakra, será anulado, receberá 20 de dano e causará 10 a menos de dano não aflitivo por 1 turno. Esta habilidade é invisível e se torna 'Shinra Tensei' por 2 turnos.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/9wvswDP.jpg",
        themepic: "https://i.imgur.com/9wvswDP.jpg",
      },
      {
        name: "Rinnegan Pressure",
        themeName: "Rinnegan Pressure",
        description:
          "This skill makes Deva Path Pein (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Deva Path Pein (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/WrmDvAJ.png",
      },
      {
        name: "Shinra Tensei",
        themeName: "Shinra Tensei",
        description:
          "Deva Path Pein (S) uses 'Shinra Tensei' to deal 30 damage to all enemies. For 1 turn Deva Path Pein (S) will become invulnerable. This skill becomes 'Universal Pull' when used.",
        descriptionBR:
          "Deva Path Pein (S) usa 'Shinra Tensei' para causar 30 de dano a todos os inimigos. Por 1 turno, Deva Path Pein (S) ficará invulnerável. Esta habilidade se torna 'Universal Pull' ao ser usada.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/kUlhI9a.jpg",
      },
      {
        name: "Chibaku Tensei",
        themeName: "Chibaku Tensei",
        description:
          "Using his ultimate jutsu Deva Path Pein (S) deals 30 damage to all enemies. For 1 turn damage dealt by the enemy team will be reduced by 5. This skill cannot be countered and becomes 'Violent Water Wave' when used.",
        descriptionBR:
          "Usando seu jutsu supremo, Deva Path Pein (S) causa 30 de dano a todos os inimigos. Por 1 turno, o dano causado pela equipe inimiga será reduzido em 5. Esta habilidade não pode ser anulada e se torna 'Violent Water Wave' ao ser usada.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DlrmdJ2.jpg",
      },
    ],
  },
  {
    name: "Zetsu (S)",
    url: "https://i.imgur.com/daklazj.png",
    themepic: "https://i.imgur.com/H4Vo7mE.jpeg",
    description:
      "Zetsu (S) is intent to follow Tobi's orders. With his abilities he will be trouble for anyone that comes across him.",
    descriptionBR:
      "Zetsu (S) está determinado a seguir as ordens de Tobi. Com suas habilidades, ele será um problema para qualquer um que cruzar seu caminho.",
    skills: [
      {
        name: "Spore Technique",
        themeName: "Spore Technique",
        description:
          "Zetsu plants spore clones into an ally, granting them 10 permanent destructible defense and making them ignore all harmful non-damage effects until this destructible defense is destroyed. When it's destroyed, that ally will gain 1 random chakra. This skill is invisible.",
        descriptionBR:
          "Zetsu planta esporos em um aliado, concedendo a ele 10 de defesa destrutível permanente e fazendo-o ignorar todos os efeitos nocivos que não causem dano até que essa defesa seja destruída. Quando destruída, esse aliado ganhará 1 chakra aleatório. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NvIcUVB.png",
        themepic: "https://i.imgur.com/OQSwb1O.jpeg",
      },
      {
        name: "Wood Release Roots",
        themeName: "Wood Release Roots",
        description:
          "Zetsu manipulates wood roots and attacks an enemy from below, dealing 30 piercing damage and stunning that enemy's physical and chakra skills for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Zetsu manipula raízes de madeira e ataca um inimigo por baixo, causando 30 de dano perfurante e atordoando as habilidades physical e chakra desse inimigo por 1 turno. Esta habilidade ignora invulnerabilidade.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aErdKWP.png",
        themepic: "https://i.imgur.com/xwFBctW.jpeg",
      },
      {
        name: "Parasite Clone Trap",
        themeName: "Parasite Clone Trap",
        description:
          "Zetsu targets one enemy, reducing their non-affliction damage by 10 permanently. If that enemy uses a new skill, that skill will be copied and 'Parasite Clone Trap' will end. This skill will be replaced by the copied skill for 1 turn. This skill is invisible.",
        descriptionBR:
          "Zetsu mira em um inimigo, reduzindo permanentemente o dano não-aflitivo dele em 10. Se esse inimigo usar uma nova habilidade, ela será copiada e 'Parasite Clone Trap' terminará. Esta habilidade será substituída pela habilidade copiada por 1 turno. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/NmLDNO3.png",
        themepic: "https://i.imgur.com/6WQrzMk.jpeg",
      },
      {
        name: "Zetsu Split",
        themeName: "Zetsu Split",
        description:
          "This skill makes Zetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Zetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/5G2uYVn.png",
        themepic: "https://i.imgur.com/Flt9k2w.jpeg",
      },
    ],
  },
  {
    name: "Tobi (S)",
    url: "https://i.imgur.com/nPxJzrx.png",
    themepic: "https://i.imgur.com/hA7PlWT.jpg",
    description:
      "Tobi is the leader of Akatsuki, as well as an Uchiha. He possesses dimensional skills, being able to suck his targets into his dimension or use the Uchihas' forbidden techniques.",
    descriptionBR:
      "Tobi é o líder da Akatsuki, além de um Uchiha. Ele possui habilidades dimensionais, podendo sugar seus alvos para sua dimensão ou usar as técnicas proibidas dos Uchiha.",
    skills: [
      {
        name: "Kamui",
        themeName: "Kamui",
        description:
          "Using Kamui Tobi (S) deals 20 piercing damage to one enemy. For 2 turns Tobi will become invulnerable to that enemy's skills. If used on an enemy that Tobi is already invulnerable to, this skill will instead deal 25 piercing damage. This skill ignores invulnerability.",
        descriptionBR:
          "Usando Kamui, Tobi (S) causa 20 de dano perfurante a um inimigo. Por 2 turnos, Tobi ficará invulnerável às habilidades desse inimigo. Se usado em um inimigo ao qual Tobi já está invulnerável, essa habilidade causará 25 de dano perfurante. Esta habilidade ignora invulnerabilidade.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/lNfprXb.png",
        themepic: "https://i.imgur.com/eKgYJFp.jpg",
      },
      {
        name: "Tobi Sharingan",
        themeName: "Tobi Sharingan",
        description:
          "Tobi (S) uses his Sharingan. For 3 turns Tobi gains 20% unpierceable damage reduction and will ignore stun effects. During this time Kamui deals 10 more damage and this skill will be replaced by 'Hidden Izanagi'. When this skill is used 70% of Tobi's current health will be stored.",
        descriptionBR:
          "Tobi (S) ativa seu Sharingan. Por 3 turnos, Tobi recebe 20% de redução de dano que não pode ser perfurado e ignorará efeitos de stun. Durante esse tempo, Kamui causará 10 de dano a mais e esta habilidade será substituída por 'Hidden Izanagi'. Ao usar esta habilidade, 70% da saúde atual de Tobi será armazenada.",
        energy: ["Blood"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/eKymPHu.png",
        themepic: "https://i.imgur.com/Uzo8Kjq.jpg",
      },
      {
        name: "Kamui Rescue",
        themeName: "Kamui Rescue",
        description:
          "Tobi uses his Kamui to make a rescue on an ally. That ally will become invulnerable for 1 turn. During 'Tobi Sharingan' this skill will be improved and will remove all harmful skills from the protected ally. This skill ignores invulnerability.",
        descriptionBR:
          "Tobi usa seu Kamui para resgatar um aliado. Esse aliado ficará invulnerável por 1 turno. Durante 'Tobi Sharingan', esta habilidade será aprimorada e removerá todas as habilidades prejudiciais do aliado protegido. Esta habilidade ignora invulnerabilidade.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/xZz5Q1s.png",
        themepic: "https://i.imgur.com/ZXUTr8B.jpeg",
      },
      {
        name: "Uchiha Perception",
        themeName: "Uchiha Perception",
        description:
          "This skill makes Tobi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Tobi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/XDM7lNC.png",
        themepic: "https://i.imgur.com/7pfuIB4.jpg",
      },
      {
        name: "Hidden Izanagi",
        themeName: "Hidden Izanagi",
        description:
          "Tobi (S) uses Hidden Izanagi. After 1 turn Tobi's health will return to the health value stored by 'Tobi Sharingan'. This skill is invisible and can only be used once. This skill will be activated even if Tobi is killed.",
        descriptionBR:
          "Tobi (S) usa Hidden Izanagi. Após 1 turno, a saúde de Tobi voltará ao valor armazenado pelo 'Tobi Sharingan'. Esta habilidade é invisível e só pode ser usada uma vez. Esta habilidade será ativada mesmo que Tobi seja morto.",
        energy: ["Blood", "Blood", "Random"],
        classes: ["Mental", "Unique", "Ranged*", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/0a4phiY.png",
        themepic: "https://i.imgur.com/Ib3zwxh.jpg",
      },
    ],
  },
  {
    name: "Konan of the Rain (S)",
    url: "https://i.imgur.com/7rPLcCd.png",
    themepic: "https://i.imgur.com/ehf9Q2m.jpg",
    description:
      "Konan of the Rain (S) has returned to the Hidden Rain village. Now that Uzumaki Nagato is dead she is aligned with Uzumaki Naruto and his quest for peace.",
    descriptionBR:
      "Konan da Chuva (S) retornou para a Vila da Chuva Oculta. Agora que Uzumaki Nagato está morto, ela está alinhada com Uzumaki Naruto e sua busca pela paz.",
    skills: [
      {
        name: "Paper Chakram",
        themeName: "Paper Chakram",
        description:
          "Konan forms and fires a paper chakram towards an enemy, dealing 35 piercing damage to them. For 1 turn, Konan's skills will cost 1 less random chakra.",
        descriptionBR:
          "Konan forma e lança um chakram de papel contra um inimigo, causando 35 de dano perfurante. Por 1 turno, as habilidades de Konan custarão 1 chakra aleatório a menos.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/moOl9NJ.png",
        themepic: "https://i.imgur.com/SXu4tDw.jpg",
      },
      {
        name: "Paper Ocean: Chasm Trap",
        themeName: "Paper Ocean: Chasm Trap",
        description:
          "Konan traps all enemies in a chasm of the ocean made of a million papers. For 3 turns, all non-affliction damage will be reduced to a maximum of 25. During this time, this skill will be replaced and each time it successfully reduces an enemy's non-affliction damage, Konan will gain 1 random charka.",
        descriptionBR:
          "Konan prende todos os inimigos em um abismo oceânico feito de um milhão de papéis. Por 3 turnos, todo dano não aflitivo será reduzido a no máximo 25. Durante esse tempo, essa habilidade será substituída e toda vez que ela reduzir com sucesso o dano não-aflitivo de um inimigo, Konan irá ganhar 1 chakra aleatório.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/o4eBv3L.png",
        themepic: "https://i.imgur.com/RSIOoJ4.jpg",
      },
      {
        name: "Explosive Papers Barrage",
        themeName: "Explosive Papers Barrage",
        description:
          "Konan rushes toward an enemy and ambushes them with multiple explosive papers, stunning their skills for 3 turns and dealing 15 damage to them each turn.",
        descriptionBR:
          "Konan investe contra um inimigo e o embosca com vários papéis explosivos, atordoando suas habilidades por 3 turnos e causando 15 de dano a cada turno.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/pD2zBl1.png",
        themepic: "https://i.imgur.com/pD2zBl1.png",
      },
      {
        name: "The Bridge to the Peace",
        themeName: "The Bridge to the Peace",
        description:
          "This skill makes Konan of the Rain (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Konan of the Rain (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/fvd160N.jpg",
        themepic: "https://i.imgur.com/fvd160N.jpg",
      },
      {
        name: "Paper Ocean: Explosive Papers Detonate",
        themeName: "Paper Ocean: Explosive Papers Detonate",
        description:
          "Konan detonates all the millions of explosive papers, crushing all enemies trapped by 'Paper Ocean: Chasm Trap', and dealing 20 damage to them and stunning their skills for 2 turns.",
        descriptionBR:
          "Konan detona todos os milhões de papéis explosivos, esmagando todos os inimigos presos por 'Paper Ocean: Chasm Trap', causando 20 de dano e atordoando suas habilidades por 2 turnos.",
        energy: ["Blood", "Gen", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/GKnsQUx.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Naruto (S)",
    url: "https://i.imgur.com/VlK9BfK.png",
    themepic: "https://i.imgur.com/f7GnGqe.jpeg",
    description:
      "Having gained complete control of all of the kyuubi's chakra, Naruto will be sure to rampage over every battlefield he comes across.",
    descriptionBR:
      "Tendo conquistado controle total sobre todo o chakra da kyuubi, Naruto certamente devastará qualquer campo de batalha que cruzar.",
    skills: [
      {
        name: "Rasengan Riot",
        themeName: "Rasengan Riot",
        description:
          "By forming multiple Rasengan over his head, Naruto deals 30 damage to one enemy. A random teammate of that enemy will also be dealt 10 damage. The following turn, this skill will be replaced by 'Planetary Rasengan'.",
        descriptionBR:
          "Formando múltiplos Rasengan sobre sua cabeça, Naruto causa 30 de dano a um inimigo. Um aliado aleatório desse inimigo também receberá 10 de dano. No turno seguinte, essa habilidade será substituída por 'Planetary Rasengan'.",
        energy: ["Random", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/JYezdNf.png",
        themepic: "https://i.imgur.com/ZWbrPFi.jpeg",
      },
      {
        name: "Rasenkyugan",
        themeName: "Rasenkyugan",
        description:
          "Naruto grabs multiple enemies and smashes them into a giant Rasengan, dealing 15 damage to all enemies for 1 turn. This skill will deal an additional 5 damage when it's used. The following turn, this skill will be replaced by 'Mini-Bijuudama'.",
        descriptionBR:
          "Naruto agarra múltiplos inimigos e os arremessa contra um Rasengan gigante, causando 15 de dano a todos os inimigos por 1 turno. Essa habilidade causará 5 de dano adicional ao ser usada. No turno seguinte, essa habilidade será substituída por 'Mini-Bijuudama'.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/VVSwYL8.png",
        themepic: "https://i.imgur.com/HV116ds.jpeg",
      },
      {
        name: "Summoning: Mayhem",
        themeName: "Summoning: Mayhem",
        description:
          "Naruto summons Mayhem in the battlefield. For 1 turn, the first harmful skill used on Naruto will be countered. The countered enemy will receive 15 additional damage from 'Mini Rasenshuriken'. The following turn, this skill will be replaced by 'Mini-Rasenshuriken'. This skill is invisible.",
        descriptionBR:
          "Naruto invoca o Caos no campo de batalha. Por 1 turno, a primeira habilidade ofensiva usada em Naruto será anulada. O inimigo anulado receberá 15 de dano adicional de 'Mini Rasenshuriken'. No turno seguinte, essa habilidade será substituída por 'Mini-Rasenshuriken'. Essa habilidade é invisível.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/Z3CcFWD.png",
        themepic: "https://i.imgur.com/KpYikeo.jpeg",
      },
      {
        name: "Supersonic Speed",
        themeName: "Supersonic Speed",
        description:
          "This skill makes Shinobi Alliance Naruto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Naruto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/9y1zBGg.png",
        themepic: "https://i.imgur.com/VunsQUO.jpeg",
      },
      {
        name: "Planetary Rasengan",
        themeName: "Planetary Rasengan",
        description:
          "Naruto forms a big Rasengan surrounded by other Rasengans, targeting one enemy and dealing 35 damage to them. If this skill kills that enemy, Naruto will deal 10 additional damage for 2 turns and will be unable to be killed during this time.",
        descriptionBR:
          "Naruto forma um grande Rasengan cercado por outros Rasengans, mirando em um inimigo e causando 35 de dano. Se essa habilidade eliminar o inimigo, Naruto causará 10 de dano adicional por 2 turnos e não poderá ser morto durante esse tempo.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/wV3yPye.png",
        themepic: "https://i.imgur.com/eTE5d7S.jpeg",
      },
      {
        name: "Mini-Bijuudama",
        themeName: "Mini-Bijuudama",
        description:
          "By compressing chakra, Naruto creates a miniature of Bijuudama and deals 35 affliction damage to one enemy. For 1 turn, that enemy's skills will deal 10 less non-affliction damage and the cost of their skills will be increased by 1 random chakra.",
        descriptionBR:
          "Ao comprimir chakra, Naruto cria uma miniatura da Bijuudama e causa 35 de dano aflitivo a um inimigo. Por 1 turno, as habilidades desse inimigo causarão 10 a menos de dano não aflitivo e o custo de suas habilidades será aumentado em 1 chakra aleatório.",
        energy: ["Nin", "Blood"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/YsfPSVu.png",
        themepic: "https://i.imgur.com/dsOSnt8.jpeg",
      },
      {
        name: "Mini-Rasenshuriken",
        themeName: "Mini-Rasenshuriken",
        description:
          "Naruto targets one enemy, destroying their destructible defense and dealing 15 piercing damage to them. This skill cannot be countered or reflected.",
        descriptionBR:
          "Naruto mira em um inimigo, destruindo sua defesa destrutível e causando 15 de dano perfurante. Essa habilidade não pode ser anulada nem refletida.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/yAY1DDM.png",
        themepic: "https://i.imgur.com/M1UPFQQ.jpeg",
      },
    ],
  },
  {
    name: "Shinobi Alliance Sakura (S)",
    url: "https://i.imgur.com/jvCtfmp.png",
    themepic: "https://i.imgur.com/jvCtfmp.png",
    description:
      "With her extensive training under Tsunade for the last two and a half years, Sakura has gained a greater understanding of healing and the human body. While Sakura's physical strength and healing prowess have both increased, her greatest ability is a powerful chakra storing seal taught to her by Tsunade.",
    descriptionBR:
      "Com seu extenso treinamento sob Tsunade nos últimos dois anos e meio, Sakura adquiriu um maior entendimento sobre cura e o corpo humano. Embora sua força física e capacidade de cura tenham aumentado, sua maior habilidade é um poderoso selo de armazenamento de chakra ensinado por Tsunade.",
    skills: [
      {
        name: "Empowered Devasting Punch",
        themeName: "Empowered Devasting Punch",
        description:
          "Amplifying her strength, Sakura deals 20 damage to one enemy and 5 damage to all others. While 'Strength of a Hundred Seal' is active, this skill will deal 35 damage to one enemy, and 10 to all others.",
        descriptionBR:
          "Amplificando sua força, Sakura causa 20 de dano a um inimigo e 5 de dano a todos os outros. Enquanto 'Strength of a Hundred Seal' estiver ativo, essa habilidade irá causar 35 de dano a um inimigo e 10 de dano a todos os outros.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/MvwbbW5.png",
        themepic: "https://i.imgur.com/MvwbbW5.png",
      },
      {
        name: "Superior Healing",
        themeName: "Superior Healing",
        description:
          "With her superior healing skills, Sakura heals half of one ally's missing health, rounded down, and removes all enemy affliction effects from them. While 'Strength of a Hundred Seal' is active, this skill will cost 1 random and have no cooldown.",
        descriptionBR:
          "Com suas habilidades superiores de cura, Sakura restaura metade da vida perdida de um aliado, arredondando para baixo, e remove todos os efeitos de dano aflitivo inimigos dele. Enquanto 'Strength of a Hundred Seal' estiver ativa, essa habilidade irá custar 1 chakra aleatório e não terá cooldown.",
        energy: ["Nin"],
        classes: ["Chakra", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/G5ldCer.png",
        themepic: "https://i.imgur.com/G5ldCer.png",
      },
      {
        name: "Strength of a Hundred Seal",
        themeName: "Strength of a Hundred Seal",
        description:
          "Sakura gains 3 Seals. During this time, each time Sakura uses a skill other than her invulnerability, she will use up 1 Seal. While 'Strength of a Hundred Seal' is active, Sakura can use this skill again for no cost to restore 25 health and remove all harmful effects on her.",
        descriptionBR:
          "Sakura ganha 3 Selos. Durante esse tempo, sempre que usar uma habilidade que não seja sua invulnerabilidade, ela consumirá 1 Selo. Enquanto 'Strength of a Hundred Seal' estiver ativa, Sakura pode usar essa habilidade novamente sem custo para restaurar 25 de vida e remover todos os efeitos ofensivos sobre si.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/TBI5NVw.png",
        themepic: "https://i.imgur.com/TBI5NVw.png",
      },
      {
        name: "Summoning: Katsuyu",
        themeName: "Summoning: Katsuyu",
        description:
          "This skill makes Shinobi Alliance Sakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Sakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/LTqSBP2.png",
        themepic: "https://i.imgur.com/LTqSBP2.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Sai (S)",
    url: "https://i.imgur.com/pDe8wDr.png",
    themepic: "https://i.imgur.com/pDe8wDr.png",
    description:
      "Sai became capable of using a wider variety of techniques after improving his skills with his animal paintings. Besides that, Sai carries with him his powerful Sealing Technique.",
    descriptionBR:
      "Sai se tornou capaz de usar uma variedade maior de técnicas após aprimorar suas habilidades com suas pinturas de animais. Além disso, Sai carrega consigo sua poderosa Técnica de Selamento.",
    skills: [
      {
        name: "Tiger Vision Staring Bullet",
        themeName: "Tiger Vision Staring Bullet",
        description:
          "By using this sealing technique, Sai stuns one enemy's harmful skills permanently and deals 25 damage to them each turn. If that enemy uses a new skill, this skill will end and Sai gains 1 genjutsu chakra. This skill ends if Sai is killed.",
        descriptionBR:
          "Usando essa técnica de selamento, Sai atordoa permanentemente as habilidades ofensivas de um inimigo e causa 25 de dano a ele a cada turno. Se esse inimigo usar uma nova habilidade, esta habilidade terminará e Sai ganhará 1 chakra de Genjutsu. Esta habilidade termina se Sai for morto.",
        energy: ["Gen", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/rlHMnoA.png",
        themepic: "https://i.imgur.com/rlHMnoA.png",
      },
      {
        name: "Great Beast Painting: Kamikaze Birds",
        themeName: "Great Beast Painting: Kamikaze Birds",
        description:
          "Sai makes one enemy receive 5 additional damage from non-affliction skills* and deals them 10 piercing damage to them each turn permanently. If that enemy uses a new skill, they will take 20 piercing damage and then this skill will end. This skil ends if Sai is killed.",
        descriptionBR:
          "Sai faz com que um inimigo receba 5 de dano adicional de habilidades não-Affliction* e causa 10 de dano perfurante a ele a cada turno permanentemente. Se esse inimigo usar uma nova habilidade, ele receberá 20 de dano perfurante e essa habilidade terminará. Esta habilidade termina se Sai for morto.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Action", "Unique", "Instant*"],
        cooldown: 0,
        url: "https://i.imgur.com/rhBP4y8.png",
        themepic: "https://i.imgur.com/rhBP4y8.png",
      },
      {
        name: "Great Beast Painting: Ink Warriors",
        themeName: "Great Beast Painting: Ink Warriors",
        description:
          "Sai grants one ally and himself 20 points of destructible defense. If that ally's destructible defense is destroyed, 'Great Beast Painting: Kamikaze Birds' will have no cost for 1 turn. If Sai destructible defense is destroyed, 'Tiger Vision Staring Bullet' will cost 1 random chakra for 1 turn.",
        descriptionBR:
          "Sai concede a si mesmo e a um aliado 20 pontos de defesa destrutível. Se a defesa destrutível desse aliado for destruída, 'Great Beast Painting: Kamikaze Birds' não terá custo por 1 turno. Se a defesa destrutível de Sai for destruída, 'Tiger Vision Staring Bullet' custará 1 chakra aleatório por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant", "_$1", "_$2", "_$3"],
        cooldown: 3,
        url: "https://i.imgur.com/EIXhkHV.png",
        themepic: "https://i.imgur.com/EIXhkHV.png",
      },
      {
        name: "Sai Kunai Parry",
        themeName: "Sai Kunai Parry",
        description:
          "This skill makes Shinobi Alliance Sai (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Sai (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8dtdZfr.png",
        themepic: "https://i.imgur.com/8dtdZfr.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Kakashi (S)",
    url: "https://i.imgur.com/7cckycu.png",
    themepic: "https://i.imgur.com/7cckycu.png",
    description:
      "Kakashi, as one of the squad leaders, goes to war alongside all the ninjas. Now, he uses everything at his disposal to win. Besides himself, Kakashi can rely on his allies.",
    descriptionBR:
      "Kakashi, como um dos líderes de esquadrão, vai à guerra ao lado de todos os ninjas. Agora, ele usa tudo ao seu dispor para vencer. Além de si mesmo, Kakashi pode contar com seus aliados.",
    skills: [
      {
        name: "Lightning Beast Fang",
        themeName: "Lightning Beast Fang",
        description:
          "Kakashi forms his raikiri into a lightning dog, controlling it and dealing 25 piercing damage to one enemy. If this skill successfully dealt damage to the enemy, their skills will be stunned for 1 turn. The following turn, this skill will be replaced by 'Finishing Raikiri'.",
        descriptionBR:
          "Kakashi molda seu raikiri em um cão de relâmpago, controlando-o e causando 25 de dano perfurante a um inimigo. Se esta habilidade causar dano com sucesso ao inimigo, as habilidades dele serão atordoadas por 1 turno. No turno seguinte, esta habilidade será substituída por 'Finishing Raikiri'.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "stun"],
        cooldown: 0,
        url: "https://i.imgur.com/07efvor.png",
        themepic: "https://i.imgur.com/07efvor.png",
      },
      {
        name: "Kakashi Kamui",
        themeName: "Kakashi Kamui",
        description:
          "If used on an enemy, they will receive 40 piercing damage and for 1 turn the cost of their skills will be increased by 1 random. If used on an ally, all harmful effects on them will be removed and they will become invulnerable for 1 turn. This skill ignores invulnerability.",
        descriptionBR:
          "Se usada em um inimigo, ele receberá 40 de dano perfurante e por 1 turno o custo de suas habilidades será aumentado em 1 chakra aleatório. Se usada em um aliado, todos os efeitos prejudiciais nele serão removidos e ele se tornará invulnerável por 1 turno. Esta habilidade ignora invulnerabilidade.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/46CCve7.png",
        themepic: "https://i.imgur.com/46CCve7.png",
      },
      {
        name: "Tatic Sharingan",
        themeName: "Tatic Sharingan",
        description:
          "For 3 turns, Kakashi and his team will have the cooldown of their skills reduced by 1 for 3 turns. The following 3 turns, the first new non-unique skill, that does not require preparation, used by one enemy will be copied and will replace this skill for 1 turn. This skill is invisible.",
        descriptionBR:
          "Por 3 turnos, Kakashi e seu time terão o tempo de recarga de suas habilidades reduzido em 1. Nos 3 turnos seguintes, a primeira nova habilidade não única, que não requer preparação, usada por um inimigo será copiada e substituirá esta habilidade por 1 turno. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/0oxXtCx.png",
        themepic: "https://i.imgur.com/0oxXtCx.png",
      },
      {
        name: "Earth Release: Earth-Style Wall",
        themeName: "Earth Release: Earth-Style Wall",
        description:
          "This skill makes Shinobi Alliance Kakashi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Kakashi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/xzD5v3I.png",
        themepic: "https://i.imgur.com/xzD5v3I.png",
      },
      {
        name: "Finishing Raikiri",
        themeName: "Finishing Raikiri",
        description:
          "Kakashi moves to finish off an enemy, dealing 35 piercing damage to one enemy. This skill will deal an additional 10 damage to that enemy if they are stunned or if 'Lightning Beast Fang' was used on them the previous turn.",
        descriptionBR:
          "Kakashi parte para finalizar um inimigo, causando 35 de dano perfurante a ele. Esta habilidade causará 10 de dano adicional se o inimigo estiver atordoado ou se 'Lightning Beast Fang' tiver sido usada nele no turno anterior.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/ITGCcaa.png",
        themepic: "https://i.imgur.com/ITGCcaa.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Shikamaru (S)",
    url: "https://i.imgur.com/fVgHpUK.png",
    themepic: "https://i.imgur.com/fVgHpUK.png",
    description:
      "Shikamaru, now in the war. He remains a good and talented ninja, using his shadows more effectively, in addition to using the help of his allies very well, and forcing his enemies to help him too.",
    descriptionBR:
      "Shikamaru, agora na guerra. Continua sendo um ninja talentoso, usando suas sombras de forma mais eficaz, além de contar bem com a ajuda de seus aliados e até forçar seus inimigos a ajudá-lo.",
    skills: [
      {
        name: "Continuous Shadow Sewing",
        themeName: "Continuous Shadow Sewing",
        description:
          "Shikamaru deals 30 piercing damage to one enemy, stuns their physical and ranged skills. If that enemy doesn't use any new skill, they will take more 15 piercing damage. During 'Tatical Range Increase' this skill deal 15 more damage.",
        descriptionBR:
          "Shikamaru causa 30 de dano perfurante a um inimigo e atordoa suas habilidades physical e ranged. Se esse inimigo não usar nenhuma nova habilidade, ele receberá mais 15 de dano perfurante. Durante 'Tatical Range Increase', esta habilidade causará 15 de dano a mais.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/aLnt17m.png",
        themepic: "https://i.imgur.com/aLnt17m.png",
      },
      {
        name: "Tatical Range Increase",
        themeName: "Tatical Range Increase",
        description:
          "For 1 turn, Shikamaru will ignore all damage dealt and will target all enemies. During this time, the enemies that use a new skill will be able to be target of 'Tatical Shadow Bind' for 1 turn. This skill becomes 'Tatical Shadow Bind' for 1 turn and is invisible.",
        descriptionBR:
          "Por 1 turno, Shikamaru ignorará todos os danos recebidos e poderá atingir todos os inimigos. Durante esse tempo, os inimigos que usarem uma nova habilidade poderão ser alvos de 'Tatical Shadow Bind' por 1 turno. Esta habilidade se torna 'Tatical Shadow Bind' por 1 turno e é invisível.",
        energy: ["Tai"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/PNq9tnn.png",
        themepic: "https://i.imgur.com/PNq9tnn.png",
      },
      {
        name: "Ally Shadow Control",
        themeName: "Ally Shadow Control",
        description:
          "Shikamaru target one ally for 3 turns, making their skills have 1 cooldown decreased, and if Shikamaru uses a new skill that ally will become invulnerable to damage skills for 1 turn.",
        descriptionBR:
          "Shikamaru seleciona um aliado por 3 turnos, fazendo com que as habilidades dele tenham 1 turno a menos de recarga. Se Shikamaru usar uma nova habilidade, esse aliado se tornará invulnerável a habilidades de dano por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/73Vhlng.png",
        themepic: "https://i.imgur.com/73Vhlng.png",
      },
      {
        name: "Hide and Thinking",
        themeName: "Hide and Thinking",
        description:
          "This skill makes Shinobi Alliance Shikamaru (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Shikamaru (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/pPAXCWL.png",
        themepic: "https://i.imgur.com/pPAXCWL.png",
      },
      {
        name: "Tatical Shadow Bind",
        themeName: "Tatical Shadow Bind",
        description:
          "Shikamaru deals 30 damage to all enemies affected by 'Tatical Range Increase', and for 2 turns stuns their physical and chakra skills.",
        descriptionBR:
          "Shikamaru causa 30 de dano a todos os inimigos afetados por 'Tatical Range Increase' e atordoa por 2 turnos suas habilidades physical e chakra.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Control"],
        cooldown: 1,
        url: "https://i.imgur.com/vnSogry.png",
        themepic: "https://i.imgur.com/vnSogry.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Chouji (S)",
    url: "https://i.imgur.com/ZnJky3h.png",
    themepic: "https://i.imgur.com/ZnJky3h.png",
    description:
      "After nearly three years, Chouji has developed in both strength and size, mastering the Akimichi clan techniques. No longer does Chouji need the Akimichi pills to tap into his true strength, instead, he merely needs to control his chakra and become a force to reckon with.",
    descriptionBR:
      "Após quase três anos, Chouji evoluiu tanto em força quanto em tamanho, dominando as técnicas do clã Akimichi. Agora, não precisa mais das pílulas Akimichi para alcançar sua verdadeira força, bastando controlar seu chakra para se tornar uma força a ser temida.",
    skills: [
      {
        name: "Butterfly Bullet Bombing",
        themeName: "Butterfly Bullet Bombing",
        description:
          "Chouji slams his fist into an enemy's face, first ignoring all harmful effects other than chakra cost changes for 1 turn and then dealing 30 damage to one enemy. This skill cannot be countered or reflected and Chouji's skills will cost 2 additional random chakra afterwards.",
        descriptionBR:
          "Chouji acerta o rosto de um inimigo com um soco, primeiro ignorando todos os efeitos prejudiciais (exceto mudanças no custo de chakra) por 1 turno e depois causando 30 de dano. Esta habilidade não pode ser anulada ou refletida, e as habilidades de Chouji custarão 2 chakra aleatórios a mais em seguida.",
        energy: ["Tai", "Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/HTFxUzW.png",
        themepic: "https://i.imgur.com/HTFxUzW.png",
      },
      {
        name: "Human Bullet Tank",
        themeName: "Human Bullet Tank",
        description:
          "Chouji rolls over one enemy for 2 turns, dealing 15 damage to them. During this time, Chouji will counter all new physical and chakra skills used on him.* This skill will increase the cost of Chouji's skills by 1 random chakra each turn.",
        descriptionBR:
          "Chouji rola sobre um inimigo por 2 turnos, causando 15 de dano por turno. Durante esse tempo, ele anulará todas as novas habilidades physical e chakra usadas contra ele.* Esta habilidade aumentará o custo das habilidades de Chouji em 1 chakra aleatório por turno.",
        energy: ["Blood", "Random", "Random"],
        classes: ["Physical", "Melee", "Action", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/M6ojTSg.png",
        themepic: "https://i.imgur.com/M6ojTSg.png",
      },
      {
        name: "Butterfly Control",
        themeName: "Butterfly Control",
        description:
          "Using his new found control, Chouji taps into even more power. This skill will be replaced by 'Super-Punch'. Each turn, the existing cost of Chouji's skills will be decreased by 1 random chakra.",
        descriptionBR:
          "Usando seu novo controle, Chouji libera ainda mais poder. Esta habilidade será substituída por 'Super-Punch'. A cada turno, o custo atual das habilidades de Chouji será reduzido em 1 chakra aleatório.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/80bFCaV.png",
        themepic: "https://i.imgur.com/80bFCaV.png",
      },
      {
        name: "Butterfly Block",
        themeName: "Butterfly Block",
        description:
          "This skill makes Shinobi Alliance Chouji (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Chouji (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/88638R1.png",
        themepic: "https://i.imgur.com/88638R1.png",
      },
      {
        name: "Super-Punch",
        themeName: "Super-Punch",
        description:
          "Chouji punches an enemy down with a fistful of chakra, removing all Harmfull effects on him and then dealing 30 damage to one enemy, this skill cannot be countered or reflected and chouji skills cost 2 additional random chakras afterwards.",
        descriptionBR:
          "Chouji soca um inimigo com chakra concentrado, removendo todos os efeitos negativos dele mesmo e causando 30 de dano. Esta habilidade não pode ser anulada ou refletida, e as habilidades de Chouji custarão 2 chakras aleatórios a mais em seguida.",
        energy: ["Nin", "Random", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/CZimKdS.png",
        themepic: "https://i.imgur.com/CZimKdS.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Ino (S)",
    url: "https://i.imgur.com/QO2cH82.png",
    themepic: "https://i.imgur.com/QO2cH82.png",
    description:
      "Not one to be left behind, Ino has trained non-stop to improve her abilities and teamwork. With her improved techniques, Ino can not only control her enemies, but her allies too all while seeing everything on the battlefield.",
    descriptionBR:
      "Ino não queria ficar para trás, então treinou incansavelmente para aprimorar suas habilidades e trabalho em equipe. Com suas técnicas melhoradas, ela pode controlar não apenas seus inimigos, mas também seus aliados, enquanto observa tudo no campo de batalha.",
    skills: [
      {
        name: "Mind Body Switch Interference",
        themeName: "Mind Body Switch Interference",
        description:
          "Ino prepares to interfere with one enemy for 1 turn. The following turn, that enemy will receive 15 damage and if that enemy uses a new harmful skill, they will be countered and this skill will be replaced by that skill for 1 turn. This skill is invisible and can copy all skills.",
        descriptionBR:
          "Ino se prepara para interferir em um inimigo por 1 turno. No turno seguinte, esse inimigo receberá 15 de dano e, se usar uma nova habilidade prejudicial, será anulado e esta habilidade será substituída pela habilidade usada por 1 turno. Esta habilidade é invisível e pode copiar qualquer habilidade.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/TMRliKS.png",
        themepic: "https://i.imgur.com/TMRliKS.png",
      },
      {
        name: "Enhanced Proxy Surveillance",
        themeName: "Enhanced Proxy Surveillance",
        description:
          "For 3 turns all damage reduction and destructible defense effects all enemies use will be reduced by 15, percentage damage reduction will be reduced by 50% and Ino will know when and where any skill is used. This skill can't be countered, reflected and is invisible.",
        descriptionBR:
          "Por 3 turnos, todos os efeitos de redução de dano e defesa destrutível usados pelos inimigos serão reduzidos em 15, e as reduções de dano em porcentagem serão reduzidas em 50%. Ino também saberá quando e onde qualquer habilidade for usada. Esta habilidade não pode ser anulada, refletida e é invisível.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/3PFyj5Q.png",
        themepic: "https://i.imgur.com/3PFyj5Q.png",
      },
      {
        name: "Mind Clone Switch",
        themeName: "Mind Clone Switch",
        description:
          "Ino enters the mind of both of her allies, making their bodies fight on regardless of their state. For 2 turns, both of Ino's allies will ignore all harmful effects other than damage and chakra cost changes. This skill is invisible and will end if Ino dies.",
        descriptionBR:
          "Ino entra na mente de seus dois aliados, fazendo com que seus corpos continuem lutando independentemente de sua condição. Por 2 turnos, ambos os aliados de Ino ignorarão todos os efeitos prejudiciais, exceto dano e alterações no custo de chakra. Esta habilidade é invisível e terminará se Ino morrer.",
        energy: ["Gen"],
        classes: ["Mental", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/XG8euoA.png",
        themepic: "https://i.imgur.com/XG8euoA.png",
      },
      {
        name: "Ino Dodge",
        themeName: "Ino Dodge",
        description:
          "This skill makes Shinobi Alliance Ino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Ino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tvbIXcC.png",
        themepic: "https://i.imgur.com/tvbIXcC.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Shino (S)",
    url: "https://i.imgur.com/7Dh50WS.png",
    themepic: "https://i.imgur.com/7Dh50WS.png",
    description:
      "Shino evolves, enhancing his intellect and his Aburame clan abilities. Shino remains calm and, at the same time, cold. His parasites can now destroy any layer, enemy, or defense, and he can also use them as a defense at any moment.",
    descriptionBR:
      "Shino evolui, aprimorando seu intelecto e suas habilidades do clã Aburame. Shino permanece calmo e, ao mesmo tempo, frio. Seus parasitas agora podem destruir qualquer camada, inimigo ou defesa, e ele também pode usá-los como defesa a qualquer momento.",
    skills: [
      {
        name: "Insect Assault",
        themeName: "Insect Assault",
        description:
          "Shino deals 15 affliction damage to one enemy. That enemy will lose 1 taijutsu or genjutsu chakra if they're being currently affected by an affliction damage skill. The following 2 turns, this skill will deal 20 affliction damage and will cost 1 bloodline chakra; This improvement doesn't stack.",
        descriptionBR:
          "Shino causa 15 de dano aflitivo a um inimigo. Esse inimigo perderá 1 chakra taijutsu ou genjutsu se estiver atualmente afetado por uma habilidade de dano aflitivo. Nos próximos 2 turnos, essa habilidade causará 20 de dano aflitivo e custará 1 chakra bloodline; Essa melhoria não acumula.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/bhP59yW.png",
        themepic: "https://i.imgur.com/bhP59yW.png",
      },
      {
        name: "Insect Coffin",
        themeName: "Insect Coffin",
        description:
          "Shino surrounds one enemy with insects, dealing 15 affliction damage to them for 3 turns. During this time, that enemy will be unable to reduce damage or become invulnerable* and if Shino or an ally uses a new skill on that enemy, they will heal 15 health*.",
        descriptionBR:
          "Shino cerca um inimigo com insetos, causando 15 de dano aflitivo por 3 turnos. Durante esse tempo, esse inimigo não poderá reduzir dano nem ficar invulnerável* e, se Shino ou um aliado usar uma nova habilidade nesse inimigo, ele se curará em 15 de vida*.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Instant*", "Affliction"],
        cooldown: 3,
        url: "https://i.imgur.com/nyuyOdq.png",
        themepic: "https://i.imgur.com/nyuyOdq.png",
      },
      {
        name: "Bug Barrier",
        themeName: "Bug Barrier",
        description:
          "Shino creates a massive barrier of bugs to defend his team. For 1 turn, Shino and his allies will heal 15 health and will gain 15 points of destructible defense.",
        descriptionBR:
          "Shino cria uma barreira massiva de insetos para defender sua equipe. Por 1 turno, Shino e seus aliados se curarão em 15 de vida e ganharão 15 pontos de defesa destrutível.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/IZreCOO.png",
        themepic: "https://i.imgur.com/IZreCOO.png",
      },
      {
        name: "Hidden Insects",
        themeName: "Hidden Insects",
        description:
          "This skill makes Shinobi Alliance Shino (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Shino (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/pRM7rEi.png",
        themepic: "https://i.imgur.com/pRM7rEi.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Hinata (S)",
    url: "https://i.imgur.com/Dnxsrpq.png",
    themepic: "https://i.imgur.com/Dnxsrpq.png",
    description:
      "Hinata will also take part in the war. Together with her allies, she will destroy any enemy that tries to attack using her new technique, Gentle Step Twin Lion Fists, along with her Byakugan.",
    descriptionBR:
      "Hinata também participará da guerra. Junto com seus aliados, ela destruirá qualquer inimigo que tentar atacar usando sua nova técnica, Golpes Gêmeos do Leão Passo Suave, junto com seu Byakugan.",
    skills: [
      {
        name: "Sixty-Four Palms",
        themeName: "Sixty-Four Palms",
        description:
          "Hinata delivers a series of attacks to one enemy, dealing 10 affliction damage to them and removing all stacks of 'Byakugan: Enhanced Vision' from them. During 'Byakugan: Enhanced Vision', if the target uses a new harmful skill, 'Chakra Lion Attack' will be applied on them.",
        descriptionBR:
          "Hinata desfere uma série de ataques em um inimigo, causando 10 de dano aflitivo e removendo todas os acúmulos de 'Byakugan: Enhanced Vision' dele. Durante 'Byakugan: Enhanced Vision', se o alvo usar uma nova habilidade ofensiva, 'Chakra Lion Attack' será aplicado nele.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/CLqNirF.png",
        themepic: "https://i.imgur.com/CLqNirF.png",
      },
      {
        name: "Gentle Step Twin Lion Fists",
        themeName: "Gentle Step Twin Lion Fists",
        description:
          "Hinata creates 2 lions. The next 2 times any enemy uses a new harmful skill, 'Chakra Lion Attack' will be applied on them dealing 30 damage instead and Hinata will lose 1 lion. During 'Byakugan: Enhanced Vision' this skill will create 3 lions. This skill cannot be used while active and will end if Hinata is killed.",
        descriptionBR:
          "Hinata cria 2 leões. As próximas 2 vezes que qualquer inimigo usar uma nova habilidade ofensiva, 'Chakra Lion Attack' será aplicado nele causando 30 de dano, e Hinata perderá 1 leão. Durante 'Byakugan: Enhanced Vision', essa habilidade criará 3 leões. Essa habilidade não pode ser usada enquanto estiver ativa e terminará se Hinata for morta.",
        energy: ["Blood", "Nin"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/tOKsmOK.png",
        themepic: "https://i.imgur.com/tOKsmOK.png",
      },
      {
        name: "Byakugan: Enhanced Vision",
        themeName: "Byakugan: Enhanced Vision",
        description:
          "Hinata takes advantage of her Byakugan and its enhanced vision, improving her skills for 3 turns. During this time, any enemy that uses a new harmful skill will receive 5 additional damage from 'Sixty-Four Palms' permanently. This skill cannot be countered and it ends if Hinata is killed.",
        descriptionBR:
          "Hinata aproveita seu Byakugan e sua visão aprimorada, melhorando suas habilidades por 3 turnos. Durante esse tempo, qualquer inimigo que usar uma nova habilidade ofensiva receberá 5 de dano adicional de 'Sixty-Four Palms' permanentemente. Essa habilidade não pode ser anulada e termina se Hinata for morta.",
        energy: [],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/gCtDlPI.png",
        themepic: "https://i.imgur.com/gCtDlPI.png",
      },
      {
        name: "Byakugan: Focus",
        themeName: "Byakugan: Focus",
        description:
          "This skill makes Shinobi Alliance Hinata (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Hinata (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/h0HY5xh.png",
        themepic: "https://i.imgur.com/h0HY5xh.png",
      },
      {
        name: "Chakra Lion Attack",
        themeName: "Chakra Lion Attack",
        description:
          "The target of this skill will recelve 20 damage and will lose 1 non-bloodline chakra. If this skill is triggered by 'Gentle Step Twin Lion Fists', the target will be dealt 30 damage instead.",
        descriptionBR:
          "O alvo desta habilidade receberá 20 de dano e perderá 1 chakra não-bloodline. Se esta habilidade for acionada por 'Gentle Step Twin Lion Fists', o alvo receberá 30 de dano em vez disso.",
        energy: [],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/YRF47Yp.png",
        themepic: "https://i.imgur.com/YRF47Yp.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Kiba (S)",
    url: "https://i.imgur.com/qjdViGn.png",
    themepic: "https://i.imgur.com/qjdViGn.png",
    description:
      "Now in the war, Kiba is one of the most powerful close-range combatants. Utilizing the vast arsenal of the Inuzuka clan, Kiba can combat even colossal enemies with Akamaru and their tornado fang.",
    descriptionBR:
      "Agora na guerra, Kiba é um dos combatentes de curta distância mais poderosos. Utilizando o vasto arsenal do clã Inuzuka, Kiba pode enfrentar até mesmo inimigos colossais com Akamaru e seu tornado fang.",
    skills: [
      {
        name: "Tornado Fang",
        themeName: "Tornado Fang",
        description:
          "Kiba deals 30 piercing damage to one enemy and makes them deal 10 less non-affliction damage for 1 turn. During 'Three Headed Wolf' this skill deal 10 additional damage.",
        descriptionBR:
          "Kiba causa 30 de dano perfurante a um inimigo e faz com que ele cause 10 de dano não aflitivo a menos por 1 turno. Durante 'Three Headed Wolf', esta habilidade causa 10 de dano adicional.",
        energy: ["Tai", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/MI5CB8Q.png",
        themepic: "https://i.imgur.com/MI5CB8Q.png",
      },
      {
        name: "Three Headed Wolf",
        themeName: "Three Headed Wolf",
        description:
          "Kiba removes all physical and chakra harmful skills on his team, and for 3 turns, targets all enemies. During this time, the enemies that use a new harmful skill will take 5 piercing damage and will receive 5 additional damage from physical melee skills permanently. This skill is replaced by 'Tail Rotating Fang'.",
        descriptionBR:
          "Kiba remove todas as habilidades ofensivas do tipo Physical e Chakra do seu time, e por 3 turnos, atinge todos os inimigos. Durante esse tempo, inimigos que usarem uma nova habilidade ofensiva receberão 5 de dano perfurante e tomarão permanentemente 5 de dano adicional de habilidades physical que sejam melee. Esta habilidade é substituída por 'Tail Rotating Fang'.",
        energy: ["Tai", "Blood"],
        classes: ["Physical", "Melee", "Instant", "Unique", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/8gU92l0.png",
        themepic: "https://i.imgur.com/8gU92l0.png",
      },
      {
        name: "Man Animal Tatics",
        themeName: "Man Animal Tatics",
        description:
          "Kiba and one ally will deal 5 additional damage from non-affliction skills for 2 turns. During this time, everytime a new enemy harmful skill is used on them, their skills will cost one random chakra less for 1 turn.",
        descriptionBR:
          "Kiba e um aliado causarão 5 de dano adicional com habilidades não aflitivas por 2 turnos. Durante esse tempo, sempre que uma nova habilidade ofensiva inimiga for usada neles, suas habilidades custarão 1 chakra aleatório a menos por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 2,
        url: "https://i.imgur.com/atgU87q.png",
        themepic: "https://i.imgur.com/atgU87q.png",
      },
      {
        name: "Kiba Block",
        themeName: "Kiba Block",
        description:
          "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
        descriptionBR:
          "This skill makes Shinobi War Kiba (S) invulnerable for 1 turn.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://i.imgur.com/HV9AzM6.png",
        themepic: "https://i.imgur.com/HV9AzM6.png",
      },
      {
        name: "Tail Rotating Fang",
        themeName: "Tail Rotating Fang",
        description:
          "Kiba deals 45 piercing damage to one enemy and becomes invulnerable to physical skills. Permanently, both Kiba and that enemy will deal 5 less physical damage.",
        descriptionBR:
          "Kiba causa 45 de dano perfurante a um inimigo e torna-se invulnerável a habilidades do tipo Physical. Permanentemente, tanto Kiba quanto o inimigo causarão 5 de dano Physical a menos.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 0,
        url: "https://i.imgur.com/STBBoKZ.png",
        themepic: "https://i.imgur.com/STBBoKZ.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Gaara (S)",
    url: "https://i.imgur.com/LgN8ClX.png",
    themepic: "https://i.imgur.com/LgN8ClX.png",
    description:
      "Despite his youth and inexperience, the young Kazekage is made Commander-in-Chief of the Shinobi Alliance at the outbreak of the Fourth Shinobi World War. Fearlessly carrying this great responsibility, Gaara is ready to prove himself to the world, empowered by the loving spirit of his mother hidden within his sand.",
    descriptionBR:
      "Apesar de sua juventude e inexperiência, o jovem Kazekage é nomeado Comandante Supremo da Aliança Shinobi com o início da Quarta Grande Guerra Ninja. Carregando essa grande responsabilidade sem medo, Gaara está pronto para se provar ao mundo, fortalecido pelo espírito amoroso de sua mãe oculto em sua areia.",
    skills: [
      {
        name: "Sand Binding Prison",
        themeName: "Sand Binding Prison",
        description:
          "Gaara <Damage>deals 30 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>non-mental skills<Classes> for 1 turn. During <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName>, this skill will <Improvements>deal 10 additional damage<Improvements>. During <SkillName>'Mother's Absolute Defense'<SkillName>, this skill's <Effects>stunning effect<Effects> will <Improvements>last 1 additional turn<Improvements>.",
        descriptionBR:
          "Gaara <Damage>causa 30 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as <Classes>habilidades não-mental<Classes> dele por 1 turno. Durante <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName>, essa habilidade irá <Improvements>causar 10 de dano adicional<Improvements>. Durante <SkillName>'Mother's Absolute Defense'<SkillName>, o <Effects>efeito de atordoamento<Effects> dessa habilidade irá <Improvements>durar 1 turno adicional<Improvements>.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uF7Wicm.png",
        themepic: "https://i.imgur.com/uF7Wicm.png",
      },
      {
        name: "Desert Layered Imperial Funeral Seal",
        themeName: "Desert Layered Imperial Funeral Seal",
        description:
          "Gaara <Damage>deals 15 piercing damage<Damage> to all enemies. For 2 turns, any enemy that <Classes>uses a new harmful skill<Classes> will be <Damage>dealt 5 piercing damage<Damage>. This skill <Invisible>ends<Invisible> if <SkillName>'Mother's Absolute Defense'<SkillName> is used.",
        descriptionBR:
          "Gaara <Damage>causa 15 de dano perfurante<Damage> a todos os inimigos. Por 2 turnos, qualquer inimigo que <Classes>usar uma nova habilidade ofensiva<Classes> irá <Damage>receber 5 de dano perfurante<Damage>. Essa habilidade <Invisible>termina<Invisible> se <SkillName>'Mother's Absolute Defense'<SkillName> for usada.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/JchmOml.png",
        themepic: "https://i.imgur.com/JchmOml.png",
      },
      {
        name: "Mother's Absolute Defense",
        themeName: "Mother's Absolute Defense",
        description:
          "Gaara grants his team <Defense>15 permanent destructible defense<Defense>. For 2 turns, if Gaara or an ally <Classes>is targeted by a new harmful skill<Classes>, they will <Defense>gain 5 permanent destructible defense<Defense>. This skill <Invisible>ends<Invisible> if <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName> is used.",
        descriptionBR:
          "Gaara concede à sua equipe <Defense>15 de defesa destrutível permanente<Defense>. Por 2 turnos, se Gaara ou um aliado <Classes>for alvo de uma nova habilidade ofensiva<Classes>, eles <Defense>irão ganhar 5 de defesa destrutível<Defense> permanente. Essa habilidade <Invisible>termina<Invisible> se <SkillName>'Desert Layered Imperial Funeral Seal'<SkillName> for usada.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 3,
        url: "https://i.imgur.com/ul7CqtD.png",
        themepic: "https://i.imgur.com/ul7CqtD.png",
      },
      {
        name: "Sand Wall",
        themeName: "Sand Wall",
        description:
          "This skill makes Shinobi Alliance Gaara (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Gaara (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/FFiJvY1.png",
        themepic: "https://i.imgur.com/FFiJvY1.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Temari (S)",
    url: "https://i.imgur.com/gCW8OWG.png",
    themepic: "https://i.imgur.com/gCW8OWG.png",
    description:
      "At the outset of the Fourth Shinobi World War, Temari is placed in the Fourth Division. Although Gaara is officially in command of the division and Shikamaru is in Gaara's proxy, Temari is the one who leads the division on the battlefield, including personally commanding the division's Wind Release combat unit.",
    descriptionBR:
      "No início da Quarta Grande Guerra Ninja, Temari é colocada na Quarta Divisão. Embora Gaara seja oficialmente o comandante da divisão e Shikamaru atue como seu substituto, é Temari quem lidera a divisão no campo de batalha, incluindo o comando direto da unidade de combate com Liberação de Vento.",
    skills: [
      {
        name: "Third Moon Unleash",
        themeName: "Third Moon Unleash",
        description:
          "Temari unleashes her fan with all three moons revealed. For 4 turns, Temari's skilLs will <Improvements>cost 1 less random chakra<Improvements>. During this time, any enemy that <Classes>uses a new skill on Temari<Classes> will <Improvements>receive 5 additional damage<Improvements> from her permanently.",
        descriptionBR:
          "Temari libera seu leque com as três luas reveladas. Por 4 turnos, as habilidades de Temari terão o <Improvements>custo reduzido em 1 chakra aleatório<Improvements>. Durante esse tempo, qualquer inimigo que <Classes>usar uma nova habilidade em Temari<Classes> irá <Improvements>receber 5 de dano adicional<Improvements> permanentemente das habilidades dela.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/pkik6W0.png",
        themepic: "https://i.imgur.com/pkik6W0.png",
      },
      {
        name: "Temari Air Slash",
        themeName: "Temari Air Slash",
        description:
          "Temari sweeps her fan to create a slicing current of wind. For 1 turn, Temari becomes <Defense>invulnerable<Defense> to <Classes>non-mental skills<Classes>, <Damage>deals 15 piercing damage<Damage> to one enemy and <Effects>stuns<Effects> their skills. The following turn, that enemy will <Damage>be dealt 15 damage<Damage>.",
        descriptionBR:
          "Temari varre seu leque para criar uma corrente de vento cortante. Por 1 turno, Temari se torna <Defense>invulnerável<Defense> a <Classes>habilidades não-Mental<Classes>, <Damage>causa 15 de dano perfurante<Damage> a um inimigo e <Effects>atordoa<Effects> as habilidades dele. No próximo turno, esse inimigo irá <Damage>receber 15 de dano<Damage>.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Action"],
        cooldown: 1,
        url: "https://i.imgur.com/Dg0om1m.png",
        themepic: "https://i.imgur.com/Dg0om1m.png",
      },
      {
        name: "Summoning: Kamatari",
        themeName: "Summoning: Kamatari",
        description:
          "Summoning Kamatari, Temari <Damage>deals 40 piercing damage<Damage> to one enemy. After used, if the <Classes>target of this skill is killed<Classes>, Temari <Effects>gains 1 random chakra<Effects>.",
        descriptionBR:
          "Invocando Kamatari, Temari <Damage>causa 40 de dano perfurante<Damage> a um inimigo. Após o uso, se o <Classes>alvo dessa habilidade for morto<Classes>, Temari <Effects>ganha 1 chakras aleatórios<Effects>.",
        energy: ["Random", "Random", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/BPoMd3i.png",
        themepic: "https://i.imgur.com/BPoMd3i.png",
      },
      {
        name: "Fan Heavy Block",
        themeName: "Fan Heavy Block",
        description:
          "This skill makes Shinobi Alliance Temari (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Temari (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/BZkHN4g.png",
        themepic: "https://i.imgur.com/BZkHN4g.png",
      },
    ],
  },
  {
    name: "Shinobi Alliance Kankuro (S)",
    url: "https://i.imgur.com/mwNUU2i.png",
    themepic: "https://i.imgur.com/mwNUU2i.png",
    description:
      "During the Fourth Shinobi World War, Kankurou is put in charge of the Surprise Attack Division, leading his squad as a guerrilla unit. Heading into the war, Kankurou greatly expanded his arsenal, adding the puppets of Sasori and his parents, and will fight using all his weapons in perfect tandem with each other.",
    descriptionBR:
      "Durante a Quarta Guerra Mundial Shinobi, Kankurou é colocado no comando da Divisão de Ataque Surpresa, liderando seu esquadrão como uma unidade de guerrilha. Indo para a guerra, Kankurou expandiu enormemente seu arsenal, adicionando as marionetes de Sasori e de seus pais, e irá lutar usando todas as suas armas em perfeita harmonia umas com as outras.",
    skills: [
      {
        name: "Kankuro: Puppet Mastery",
        themeName: "Kankuro: Puppet Mastery",
        description:
          "Kankuro prepares his puppets, <Defense>gaining 25 unpierceable damager reduction<Defense>. If Kankuro is <Classes>targeted<Classes> by a <Classes>new harmful non-affliction damaging skill<Classes>, he will <Effects>lose<Effects> 5 <Defense>points of damage reduction<Defense> from this skill. If used while active, it will be <Effects>re-aplied<Effects>.",
        descriptionBR:
          "Kankurou prepara suas marionetes, <Defense>ganhando 25 pontos de redução de dano impenetrável<Defense>. Se Kankurou <Classes>for alvo<Classes> de uma <Classes>nova habilidade ofensiva não-affliction que cause dano<Classes>, ele irá <Effects>perder<Effects> 5 <Defense>pontos de redução de dano<Defense> dessa habilidade. Se usada enquanto estiver ativa, essa habilidade será <Effects>reaplicada<Effects>.",
        energy: [],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/P8xtAYw.png",
        themepic: "https://i.imgur.com/P8xtAYw.png",
      },
      {
        name: "Puppet Manipulation: Sasori",
        themeName: "Puppet Manipulation: Sasori",
        description:
          "Kankuro targets all enemies, <Damage>dealing damage<Damage> to them equal the <Invisible>amount of damage reduction points<Invisible> that <SkillName>'Kankuro: Puppet Mastery'<SkillName> currently has. If <SkillName>'Kankuro: Puppet Mastery'<SkillName> has 15 points of damage reduction or less, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Kankurou atinge todos os inimigos, <Damage>causando dano<Damage> a eles igual à <Invisible>quantidade de pontos de redução de dano<Invisible> que <SkillName>'Kankuro: Puppet Mastery'<SkillName> possui no momento. Se <SkillName>'Kankuro: Puppet Mastery'<SkillName> tiver 15 pontos de redução de dano ou menos, essa habilidade irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/TzVDSc7.png",
        themepic: "https://i.imgur.com/TzVDSc7.png",
      },
      {
        name: "Puppet Manipulation: Father and Mother",
        themeName: "Puppet Manipulation: Father and Mother",
        description:
          "Kankuro protects himself or an ally, <Defense>granting them 10 destructible defense<Defense> for each <Invisible>5 points of damage reduction<Invisible> that <SkillName>'Kankuro: Puppet Mastery'<SkillName> currently has. If <SkillName>'Kankuro: Puppet Mastery'<SkillName> has 15 points of damage reduction or less, this skill will <Improvements>cost 1 less random chakra<Improvements>.",
        descriptionBR:
          "Kankurou protege a si mesmo ou um aliado, <Defense>concedendo a eles 10 de defesa destrutível<Defense> para cada <Invisible>5 pontos de redução de dano<Invisible> que <SkillName>'Kankurou: Puppet Mastery'<SkillName> possui no momento. Se <SkillName>'Kankurou: Puppet Mastery'<SkillName> tiver 15 pontos de redução de dano ou menos, essa habilidade irá <Improvements>custar 1 chakra aleatório a menos<Improvements>.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/m4YyqL8.png",
        themepic: "https://i.imgur.com/m4YyqL8.png",
      },
      {
        name: "Kankuro Sealing Technique",
        themeName: "Kankuro Sealing Technique",
        description:
          "This skill makes Shinobi Alliance Kankuro (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Shinobi Alliance Kankuro (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/tp9rMsp.png",
        themepic: "https://i.imgur.com/tp9rMsp.png",
      },
    ],
  },
  {
    name: "Edo Tensei Deidara (S)",
    url: "https://i.imgur.com/7aBMAQ1.jpg",
    themepic: "https://i.imgur.com/7aBMAQ1.jpg",
    description:
      "Edo Tensei Deidara (S) has been revived and is immediately sent out to battle. Fighting on the front lines is nothing new to this old soul.",
    descriptionBR:
      "Edo Tensei Deidara (S) foi revivido e imediatamente enviado para a batalha. Lutar na linha de frente não é novidade para essa alma antiga.",
    skills: [
      {
        name: "Katsu!",
        themeName: "Katsu!",
        description:
          "Deidara detonates all his bombs creating a great explosion, first becoming invulnerable for 1 turn and after dealing 5 piercing damage to all enemies. Afterwards, all stacks from Deidara's skills will be removed. This skill cannot be countered.",
        descriptionBR:
          "Deidara detona todas as suas bombas criando uma grande explosão, primeiro tornando-se invulnerável por 1 turno e depois causando 5 de dano perfurante a todos os inimigos. Após isso, todos os stacks das habilidades de Deidara serão removidos. Esta habilidade não pode ser anulada.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 4,
        url: "https://i.imgur.com/FxYBog1.png",
        themepic: "https://i.imgur.com/yLmDgWl.jpg",
      },
      {
        name: "Bat Bombs",
        themeName: "Bat Bombs",
        description:
          "Deidara deals 10 affliction damage to all enemies. Permanently, 'Katsu!' will deal 5 additional damage to them. For 1 turn, any enemy that uses a new skill will receive 15 additional damage instead from 'Katsu!'. The following turn, 'Jellyfish Explosives' will deal 5 additional damage.",
        descriptionBR:
          "Deidara causa 10 de dano de affliction a todos os inimigos. Permanentemente, 'Katsu!' causará 5 de dano adicional a eles. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá 15 de dano adicional de 'Katsu!'. No turno seguinte, 'Jellyfish Explosives' causará 5 de dano adicional.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/uUJNeJC.png",
        themepic: "https://i.imgur.com/bZvIupg.jpg",
      },
      {
        name: "Jellyfish Explosives",
        themeName: "Jellyfish Explosives",
        description:
          "Deidara deals 20 piercing damage to one enemy. Permanently, 'Katsu!' will deal 10 additional damage to that enemy. For 1 turn, any enemy that uses a new skill will permanently receive 10 additional damage from 'Katsu!'. The following turn, 'Bat Bombs' will deal 5 additional damage.",
        descriptionBR:
          "Deidara causa 20 de dano perfurante a um inimigo. Permanentemente, 'Katsu!' causará 10 de dano adicional a esse inimigo. Por 1 turno, qualquer inimigo que usar uma nova habilidade receberá permanentemente 10 de dano adicional de 'Katsu!'. No turno seguinte, 'Bat Bombs' causará 5 de dano adicional.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/jLHzVyh.png",
        themepic: "https://i.imgur.com/vBOcgIc.png",
      },
      {
        name: "Chakra Clay Trap",
        themeName: "Chakra Clay Trap",
        description:
          "Deidara creates a trap to one enemy. For 1 turn, if that enemy uses a new harmful skill they will be countered and will take 20 piercing damage. Permanently, the countered enemy will receive 10 additional damage from 'Katsu!'. The target of this skill is invisible.",
        descriptionBR:
          "Deidara cria uma armadilha para um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade prejudicial, será anulado e receberá 20 de dano perfurante. Permanentemente, o inimigo anulado receberá 10 de dano adicional de 'Katsu!'. O alvo desta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/x8ZtRYB.png",
        themepic: "https://i.imgur.com/743nDDs.jpg",
      },
    ],
  },
  {
    name: "Edo Tensei Pakura (S)",
    url: "https://i.imgur.com/Zj6R1e2.png",
    themepic: "https://i.imgur.com/inTQagM.jpeg",
    description:
      "Edo Tensei Pakura (S) was a revered shinobi of the Hidden Sand in the past. So much so that she was revived against her will to participate in the fourth shinobi world war.",
    descriptionBR:
      "Edo Tensei Pakura (S) foi uma shinobi reverenciada da Areia no passado. Tanto que foi revivida contra sua vontade para participar da Quarta Grande Guerra Ninja.",
    skills: [
      {
        name: "Scorch Release",
        themeName: "Scorch Release",
        description:
          "Pakura deals 20 affliction damage to one enemy and makes them unable to be healed for 1 turn.",
        descriptionBR:
          "Pakura causa 20 de dano de affliction a um inimigo e o impede de ser curado por 1 turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/9Zxln8E.png",
        themepic: "https://i.imgur.com/MylI1i9.jpeg",
      },
      {
        name: "Searing Combat",
        themeName: "Searing Combat",
        description:
          "Pakura deals 5 affliction damage to all enemies for 3 turns. During this time, all enemies that use a new harmful skill will take 5 affliction damage and 'Scorch Release' will deal 10 additional damage on them.",
        descriptionBR:
          "Pakura causa 5 de dano de affliction a todos os inimigos por 3 turnos. Durante esse tempo, todos os inimigos que usarem uma nova habilidade prejudicial receberão 5 de dano de affliction e 'Scorch Release' causará 10 de dano adicional neles.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Action", "Affliction", "*Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/EN0ePFo.png",
        themepic: "https://i.imgur.com/k7mzADU.jpeg",
      },
      {
        name: "Steaming Murder",
        themeName: "Steaming Murder",
        description:
          "Pakura deals 35 affliction damage to one enemy and stuns their helpful skills. The following turn, all other Pakura's harmful skills will cost random chakras instead.",
        descriptionBR:
          "Pakura causa 35 de dano de affliction a um inimigo e impede as habilidades úteis dele. No turno seguinte, todas as outras habilidades prejudiciais da Pakura custarão chakras aleatórios.",
        energy: ["Blood", "Gen"],
        classes: ["Chakra", "Melee", "Affliction", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/wNevSbP.png",
        themepic: "https://i.imgur.com/zIGQlyG.jpeg",
      },
      {
        name: "Experienced Defense",
        themeName: "Experienced Defense",
        description:
          "This skill makes Edo Tensei Pakura (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Pakura (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/MJxeXU7.png",
        themepic: "https://i.imgur.com/kj011Cn.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Sasori (S)",
    url: "https://i.imgur.com/Bt9kHE5.png",
    themepic: "https://i.imgur.com/gjSaoTn.jpeg",
    description:
      "Edo Tensei Sasori (S) has been resurrected in the ageless body that he had always wanted during his life. He is sent out to the battlefield in Akatsuki's ambush squad.",
    descriptionBR:
      "Edo Tensei Sasori (S) foi ressuscitado no corpo imortal que sempre desejou em vida. Ele é enviado ao campo de batalha como parte do esquadrão de emboscada da Akatsuki.",
    skills: [
      {
        name: "Chakra Threads",
        themeName: "Chakra Threads",
        description:
          "Sasori manipulates his puppets, gaining 20 points of destructible defense for 3 turns. During this time, 'Puppet Manipulation' deals 5 additional damage and 'Chakra Threads: Puppet Trap' will reflect all harmful skills instead.",
        descriptionBR:
          "Sasori manipula suas marionetes, ganhando 20 pontos de defesa destrutível por 3 turnos. Durante esse tempo, 'Puppet Manipulation' causa 5 de dano adicional e 'Chakra Threads: Puppet Trap' irá refletir todas as habilidades ofensivas.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/mqcph2e.png",
        themepic: "https://i.imgur.com/4PAaZLw.jpeg",
      },
      {
        name: "Puppet Manipulation",
        themeName: "Puppet Manipulation",
        description:
          "Edo Tensei Sasori deals 15 damage to one enemy. For 1 turn, that enemy will deal 10 less non-affliction damage. If the health of that enemy drops to 35 or below, their physical and chakra skills will be stunned for 1 turn.",
        descriptionBR:
          "Edo Tensei Sasori causa 15 de dano a um inimigo. Por 1 turno, esse inimigo causará 10 de dano não aflitivo a menos. Se a vida desse inimigo cair para 35 ou menos, suas habilidades do tipo Physical e Chakra serão atordoadas por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/fAirmNS.png",
        themepic: "https://i.imgur.com/fCSI0BI.jpeg",
      },
      {
        name: "Chakra Threads: Puppet Trap",
        themeName: "Chakra Threads: Puppet Trap",
        description:
          "Edo Tensei Sasori targets one ally for 1 turn. The first harmful skill used on that ally will be reflected upon the enemy. This skill is invisible.",
        descriptionBR:
          "Edo Tensei Sasori seleciona um aliado por 1 turno. A primeira habilidade ofensiva usada nesse aliado será refletida contra o inimigo. Esta habilidade é invisível.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/rzc7HRf.png",
        themepic: "https://i.imgur.com/RCJ0ZqT.jpeg",
      },
      {
        name: "Falling Guard",
        themeName: "Falling Guard",
        description:
          "This skill makes Edo Tensei Sasori (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Sasori (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/g0bcv0N.png",
        themepic: "https://i.imgur.com/uPfNAaY.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Haku (S)",
    url: "https://i.imgur.com/KEsUR4g.png",
    themepic: "https://i.imgur.com/ghrInUQ.jpeg",
    description:
      "Edo Tensei Haku (S) is not sure why he is among the living again but his dream of protecting Zabuza pushes him to go all out.",
    descriptionBR:
      "Edo Tensei Haku (S) não entende por que está entre os vivos novamente, mas seu sonho de proteger Zabuza o motiva a lutar com tudo.",
    skills: [
      {
        name: "Silent Piercing Murder",
        themeName: "Silent Piercing Murder",
        description:
          "Haku deals 20 piercing damage to one enemy for 2 turns. For 1 turn, that enemy will lose 1 bloodline or ninjutsu chakra.",
        descriptionBR:
          "Haku causa 20 de dano perfurante a um inimigo por 2 turnos. Por 1 turno, esse inimigo perderá 1 chakra do tipo Bloodline ou Ninjutsu.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Action", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/nAjrelw.png",
        themepic: "https://i.imgur.com/lyL7WPM.jpeg",
      },
      {
        name: "Cristal Ice Mirrors Execution",
        themeName: "Cristal Ice Mirrors Execution",
        description:
          "Haku deals 20 damage to one enemy. For 1 turn, if this enemy uses a new harmful non-mental skill, that skill will be reflected onto another random enemy. If no skill is reflected, Haku will steal 1 bloodline chakra from that enemy.",
        descriptionBR:
          "Haku causa 20 de dano a um inimigo. Por 1 turno, se esse inimigo usar uma nova habilidade ofensiva que não seja do tipo Mental, ela será refletida em outro inimigo aleatório. Se nenhuma habilidade for refletida, Haku roubará 1 chakra do tipo Bloodline desse inimigo.",
        energy: ["Nin", "Random"],
        classes: ["Physical", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/T49eIJw.png",
        themepic: "https://i.imgur.com/CN1BJ2N.jpeg",
      },
      {
        name: "Low Temperature Enhancement",
        themeName: "Low Temperature Enhancement",
        description:
          "Haku grants himself 15 destructible defense for 2 turns. The following 2 turns, he will deal 5 additional damage and each turn that he does not use a new skill, he will gain 1 random chakra.",
        descriptionBR:
          "Haku concede a si mesmo 15 de defesa destrutível por 2 turnos. Nos 2 turnos seguintes, ele causará 5 de dano adicional e, a cada turno em que não usar uma nova habilidade, ganhará 1 chakra aleatório.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 3,
        url: "https://i.imgur.com/qrBbo3F.png",
        themepic: "https://i.imgur.com/W9pbuWv.jpeg",
      },
      {
        name: "ET Haku Block",
        themeName: "ET Haku Block",
        description:
          "This skill makes Edo Tensei Haku (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Haku (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/7B9yDd4.png",
        themepic: "https://i.imgur.com/Dj4tGya.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Zabuza (S)",
    url: "https://i.imgur.com/SaKz2Cx.png",
    themepic: "https://i.imgur.com/0wgEii4.jpeg",
    description:
      "Edo Tensei Zabuza (S) has been summoned from the dead against his will. His unique abilities will surely be put to use on the battlefield. Pics by: Pain_Alagoano",
    descriptionBR:
      "Edo Tensei Zabuza (S) foi invocado dos mortos contra sua vontade. Suas habilidades únicas certamente serão usadas no campo de batalha. Imagens por: Pain_Alagoano",
    skills: [
      {
        name: "Demon Shroud",
        themeName: "Demon Shroud",
        description:
          "Zabuza emantes shroud putting pressure in the battlefield. For 1 turn, all enemies will have the cost of their harmful skills increased by 1 random chakra. Afterwards, any enemy affected by this skill will receive 5 additional damage from Zabuza's skills permanently. This effect stacks.",
        descriptionBR:
          "Zabuza emana uma névoa demoníaca, pressionando o campo de batalha. Por 1 turno, todos os inimigos terão o custo de suas habilidades ofensivas aumentado em 1 chakra aleatório. Depois disso, qualquer inimigo afetado por essa habilidade receberá 5 de dano adicional permanentemente das habilidades de Zabuza. Este efeito acumula.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/8mcKt3L.png",
        themepic: "https://i.imgur.com/aX2UgZh.jpeg",
      },
      {
        name: "Executioner Strike",
        themeName: "Executioner Strike",
        description:
          "Zabuza executes one enemy dealing 20 piercing damage to them. For 1 turn, that enemy's skills will have 1 additional cooldown.",
        descriptionBR:
          "Zabuza executa um inimigo, causando 20 de dano perfurante. Por 1 turno, as habilidades desse inimigo terão 1 de recarga adicional.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/TvRUgQZ.png",
        themepic: "https://i.imgur.com/NWMkwvr.jpeg",
      },
      {
        name: "Executioner Blade Absorption",
        themeName: "Executioner Blade Absorption",
        description:
          "Zabuza steals 10 health from one enemy and for 1 turn, that enemy's harmful skills will cost 1 additional bloodline chakra.",
        descriptionBR:
          "Zabuza rouba 10 de vida de um inimigo e, por 1 turno, as habilidades ofensivas desse inimigo custarão 1 chakra do tipo Bloodline adicional.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/3qGEtxx.png",
        themepic: "https://i.imgur.com/RdgBMPg.jpeg",
      },
      {
        name: "Demon Insight",
        themeName: "Demon Insight",
        description:
          "This skill makes Edo Tensei Zabuza (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Zabuza (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/maezWad.png",
        themepic: "https://i.imgur.com/60lCMY8.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Mangetsu (S)",
    url: "https://i.imgur.com/4QcN9uF.png",
    themepic: "https://i.imgur.com/4QcN9uF.png",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Mangetsu was widely feared as the 'Second Coming of the Demon'. The older brother of Suigetsu, Mangetsu primarily used the Twin Sword, Hiramekarei, though he was famously a master of all seven blades.",
    descriptionBR:
      "Reanimado por Kabuto durante a Quarta Guerra Ninja como um dos Sete Espadachins da Névoa, Mangetsu era amplamente temido como a 'Segunda Vinda do Demônio'. Irmão mais velho de Suigetsu, Mangetsu usava principalmente a Espada Gêmea, Hiramekarei, embora fosse notoriamente mestre das sete lâminas.",
    skills: [
      {
        name: "Hydrification Technique",
        themeName: "Hydrification Technique",
        description:
          "ET Mangetsu steals 20 health points from one enemy. For 1 turn, a random skill class will be chosen, and ET Mangetsu will ignore all enemy skills of that class, or none if no class is chosen.",
        descriptionBR:
          "ET Mangetsu rouba 20 de vida de um inimigo. Por 1 turno, uma classe de habilidade aleatória será escolhida, e ET Mangetsu ignorará todas as habilidades inimigas dessa classe, ou nenhuma se nenhuma classe for escolhida.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Melee", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/71NAFSG.png",
        themepic: "https://i.imgur.com/71NAFSG.png",
      },
      {
        name: "Impure World Regeneration",
        themeName: "Impure World Regeneration",
        description:
          "When this skill is used, ET Mangetsu will heal 2 health every turn for the rest of the game. This skill stacks and may only be used 5 times.",
        descriptionBR:
          "Quando esta habilidade for usada, ET Mangetsu irá recuperar 2 de vida a cada turno até o fim da partida. Este efeito acumula e pode ser usado no máximo 5 vezes.",
        energy: [],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/TqVLDTW.png",
        themepic: "https://i.imgur.com/TqVLDTW.png",
      },
      {
        name: "Mist Sword Summoning",
        themeName: "Mist Sword Summoning",
        description:
          "Mangetsu randomly summons one of the Seven Swords, granting 'Hydrification Technique' a random unique effect every turn. Hiramekarei: Steals 10 additional health. / Kubikiribocho: Grants 10 permanent destructible defense. / Sameheada: Steals 1 random chakra from the target. / Nuibari: Stuns non-mental skills for 1 turn. / Shibuki: Deals 5 permanent affliction damage. / Kabutowari: Destroys destructible defense and deals 15 piercing damage. / Kiba: Deals 20 affliction damage to all other enemies.",
        descriptionBR:
          "Mangetsu invoca aleatoriamente uma das Sete Espadas, concedendo um efeito único e aleatório à 'Hydrification Technique' a cada turno. Hiramekarei: Rouba 10 de vida adicional. / Kubikiribocho: Concede 10 de defesa destrutível permanente. / Samehada: Rouba 1 chakra aleatório do inimigo. / Nuibari: Atordoa habilidades não-mentais por 1 turno. / Shibuki: Causa 5 de dano dano aflitivo permanente. / Kabutowari: Destrói a defesa destrutível e causa 15 de dano perfurante. / Kiba: Causa 20 de dano aflitivo a todos os outros inimigos.",
        energy: [],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/vU96NVd.png",
        themepic: "https://i.imgur.com/vU96NVd.png",
      },
      {
        name: "Mangetsu Block",
        themeName: "Mangetsu Block",
        description:
          "This skill makes Edo Tensei Mangetsu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Mangetsu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/8CTkW7A.png",
        themepic: "https://i.imgur.com/8CTkW7A.png",
      },
    ],
  },
  {
    name: "Edo Tensei Jinpachi (S)",
    url: "https://i.imgur.com/ljV9Yzu.png",
    themepic: "https://i.imgur.com/gVl3IrH.jpeg",
    description:
      "Edo Tensei Jinpachi (S) is one of the previous Seven Swordsmen of the Mist and a particularly cruel individual.",
    descriptionBR:
      "Edo Tensei Jinpachi (S) é um dos antigos Sete Espadachins da Névoa e um indivíduo particularmente cruel.",
    skills: [
      {
        name: "Explosive Tag Primer",
        themeName: "Explosive Tag Primer",
        description:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 15 chakra piercing damage* to the target. If an enemy destroys the defense of this skill, they will take 15 piercing damage* and this skill will end.",
        descriptionBR:
          "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 15 de dano perfurante de chakra ao alvo. Se um inimigo destruir essa defesa, ele receberá 15 de dano perfurante e essa habilidade será encerrada.",
        energy: [],
        classes: ["Chakra", "Instant", "Melee*"],
        cooldown: 2,
        url: "https://i.imgur.com/Ko68Yvv.png",
        themepic: "https://i.imgur.com/njQvHSS.jpeg",
      },
      {
        name: "Silent Explosion",
        themeName: "Silent Explosion",
        description:
          "Jinpachi deals 20 piercing damage to one enemy and reduces their non-affliction damage by 5 for 1 turn. If 'Explosive Tag Primer' is used on the last turn, this skill will cost 1 additional random chakra for 1 turn.",
        descriptionBR:
          "Jinpachi causa 20 de dano perfurante a um inimigo e reduz o dano de habilidades não-aflitivas dele em 5 por 1 turno. Se 'Explosive Tag Primer' tiver sido usada no último turno, esta habilidade custará 1 chakra aleatório adicional por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/RKv7ubV.png",
        themepic: "https://i.imgur.com/k2QzVrR.jpeg",
      },
      {
        name: "Shibuki Explosion Chain",
        themeName: "Shibuki Explosion Chain",
        description:
          "ET Jinpachi gains 10 permanent destructible defense. The next use of 'Silent Explosion' will deal 10 permanent affliction damage* to the target. If an enemy destroys the defense of this skill, they will take 10 affliction damage* permanently and this skill will end.",
        descriptionBR:
          "ET Jinpachi ganha 10 de defesa destrutível permanente. O próximo uso de 'Silent Explosion' causará 10 de dano por aflição permanente ao alvo. Se um inimigo destruir essa defesa, ele receberá 10 de dano por aflição permanente e essa habilidade será encerrada.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Melee*", "Affliction"],
        cooldown: 2,
        url: "https://i.imgur.com/DdGU68F.png",
        themepic: "https://i.imgur.com/Ql0LU9O.jpeg",
      },
      {
        name: "Shibuki Defense",
        themeName: "Shibuki Defense",
        description:
          "This skill makes Edo Tensei Jinpachi (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Jinpachi (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/rmCtifZ.png",
        themepic: "https://i.imgur.com/i1qz9Lx.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Jinin (S)",
    url: "https://i.imgur.com/e8llxor.png",
    themepic: "https://i.imgur.com/fooqHWN.jpeg",
    description:
      "Edo Tensei Jinin (S) is a former member of the seven swordsman of the mist. Using his sword Kabutowari he will demonstrate the power of the previous generation on the battlefield.",
    descriptionBR:
      "Edo Tensei Jinin (S) é um antigo membro dos Sete Espadachins da Névoa. Usando sua espada Kabutowari, ele demonstrará o poder da geração anterior no campo de batalha.",
    skills: [
      {
        name: "Silent Killing Axe",
        themeName: "Silent Killing Axe",
        description:
          "ET Jinin deals 20 piercing damage to one enemy and marks them for 2 turns. While marked, they will be unable to reduce damage or become invulnerable. If the target is marked by 'Silent Killing Hammer', it's duration is extended by 1 turn.",
        descriptionBR:
          "ET Jinin causa 20 de dano perfurante a um inimigo e o marca por 2 turnos. Enquanto marcado, esse inimigo não poderá reduzir dano ou se tornar invulnerável. Se o alvo estiver marcado por 'Silent Killing Hammer', sua duração será estendida em 1 turno.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/lPSrqRk.png",
        themepic: "https://i.imgur.com/aXLk720.jpeg",
      },
      {
        name: "Silent Killing Hammer",
        themeName: "Silent Killing Hammer",
        description:
          "ET Jinin deals 20 damage to one enemy, stuns their non-mental skills and markes them for 1 turn. While marked, they will receive 5 additional damage from ET Jinin's skills and will ignore counters and reflects. If the target is marked by 'Silent Killing Axe', it's duration is extended by 1 turn.",
        descriptionBR:
          "ET Jinin causa 20 de dano a um inimigo, atordoa suas habilidades não mentais e o marca por 1 turno. Enquanto marcado, ele receberá 5 de dano adicional das habilidades de Jinin e ignorará habilidades de anular e refletir. Se o alvo estiver marcado por 'Silent Killing Axe', sua duração será estendida em 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/vGy1eyq.png",
        themepic: "https://i.imgur.com/Lngu7kz.jpeg",
      },
      {
        name: "Axe & Hammer Smash",
        themeName: "Axe & Hammer Smash",
        description:
          "ET Jinin deals 30 damage to one enemy. Before dealing damage, if they are marked by 'Silent Killing Axe', this will destroy destructible defense. If marked by 'Silent Killing Hammer', this will convert any damage reduction into additional non-affliction damage received instead. If marked by both, this deals an additional 10 damage and stuns them for 1 turn.",
        descriptionBR:
          "ET Jinin causa 30 de dano a um inimigo. Antes de causar o dano, se o alvo estiver marcado por 'Silent Killing Axe', sua defesa destrutível será destruída. Se estiver marcado por 'Silent Killing Hammer', qualquer redução de dano será convertida em dano adicional não aflitivo. Se estiver marcado por ambos, esta habilidade causará 10 de dano extra e atordoará o inimigo por 1 turno.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/DzoBZvG.png",
        themepic: "https://i.imgur.com/ejoev4G.jpeg",
      },
      {
        name: "Skilled Evasion",
        themeName: "Skilled Evasion",
        description:
          "This skill makes Edo Tensei Jinin (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Jinin (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/URUFtuo.png",
        themepic: "https://i.imgur.com/DSEYUaU.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Ameyuri (S)",
    url: "https://i.imgur.com/XegsPjQ.png",
    themepic: "https://i.imgur.com/AopmM72.jpeg",
    description:
      "Edo Tensei Ameyuri (S) has been summoned from the dead to participate in the fourth ninja war. She wields the dual sharpest swords ever made.",
    descriptionBR:
      "Edo Tensei Ameyuri (S) foi invocada dos mortos para participar da Quarta Guerra Ninja. Ela empunha as espadas duplas mais afiadas já criadas.",
    skills: [
      {
        name: "Silent Dual Sword Rampage",
        themeName: "Silent Dual Sword Rampage",
        description:
          "Imbuing her swords with lightining, Ameyuri deals 20 piercing damage to one enemy. For 2 turns, that enemy's cooldown will be paralyzed. This effect doesn't stack.",
        descriptionBR:
          "Imbuindo suas espadas com eletricidade, Ameyuri causa 20 de dano perfurante a um inimigo. Por 2 turnos, o tempo de recarga desse inimigo será paralisado. Este efeito não acumula.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/JLk9lyT.png",
        themepic: "https://i.imgur.com/z87oWmR.jpeg",
      },
      {
        name: "Lightning Rain",
        themeName: "Lightning Rain",
        description:
          "Ameyuri sends bolts of lightning to electrocute her targets, dealing 35 piercing damage to one enemy and 15 to all others. For 1 turn, all enemies will have their skills cooldown increased by 1. This skill deals 10 additional damage to enemies with their cooldowns paralyzed.",
        descriptionBR:
          "Ameyuri lança raios para eletrocutar seus alvos, causando 35 de dano perfurante a um inimigo e 15 a todos os outros. Por 1 turno, todos os inimigos terão o tempo de recarga de suas habilidades aumentado em 1. Esta habilidade causa 10 de dano adicional a inimigos com seus tempos de recarga paralisados.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/AMoKcaC.png",
        themepic: "https://i.imgur.com/BJICrNV.jpeg",
      },
      {
        name: "Lightning Flow Trap",
        themeName: "Lightning Flow Trap",
        description:
          "Ameyuri surrounds each of her enemies with lightning. For 1 turns, all enemies will have their cooldowns increased by 1 and any enemy that does not use a new skill will receive 10 additional damage from Ameyuri's skills for 1 turn. This skill will last 1 additional turn permanently.",
        descriptionBR:
          "Ameyuri envolve todos os seus inimigos com eletricidade. Por 1 turno, todos os inimigos terão seus tempos de recarga aumentados em 1, e qualquer inimigo que não usar uma nova habilidade receberá 10 de dano adicional das habilidades de Ameyuri por 1 turno. Esta habilidade durará 1 turno adicional permanentemente.",
        energy: ["Random"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/w2tQkSk.png",
        themepic: "https://i.imgur.com/fuZ65SO.jpeg",
      },
      {
        name: "Ameyuri Block",
        themeName: "Ameyuri Block",
        description:
          "This skill makes Edo Tensei Ameyuri (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Ameyuri (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/761Gsef.png",
        themepic: "https://i.imgur.com/9Tn4vVU.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Fuguki (S)",
    url: "https://i.imgur.com/5QPz0DC.png",
    themepic: "https://i.imgur.com/AOe4zUG.jpeg",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War as one of the Seven Swordsmen of the Mist, Fuguki used to wield the Shark-Skin Blade, Samehada. A merciless man of few morals, Fuguki uniquely fights using his magnificent mane of red hair as a weapon, dynamically manipulating it to dominate his enemies.",
    descriptionBR:
      "Reanimado por Kabuto durante a Quarta Guerra Mundial Shinobi como um dos Sete Espadachins da Névoa, Fuguki costumava empunhar a Lâmina Pele de Tubarão, Samehada. Um homem implacável e sem muitos escrúpulos, Fuguki luta de forma única usando sua magnífica cabeleira vermelha como arma, manipulando-a dinamicamente para dominar seus inimigos.",
    skills: [
      {
        name: "Hair Needle Senbon",
        themeName: "Hair Needle Senbon",
        description:
          "ET Fuguki deals 20 piercing damage to one enemy. For 1 turn, any enemy that uses a new skill on ET Fuguki or his allies will gain a stack of 'Hair Spikes'; This skill may only grant 1 stack to an enemy per turn.",
        descriptionBR:
          "ET Fuguki causa 20 de dano perfurante a um inimigo. Por 1 turno, qualquer inimigo que use uma nova habilidade em Fuguki ou seus aliados receberá um acúmulo de 'Hair Spikes'; Esta habilidade só pode conceder 1 acúmulo por inimigo por turno.",
        energy: ["Nin"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 0,
        url: "https://i.imgur.com/QWVYyRL.png",
        themepic: "https://i.imgur.com/gcS6pe7.jpeg",
      },
      {
        name: "Hardened Spikes",
        themeName: "Hardened Spikes",
        description:
          "ET Fuguki instantly applies a stack of 'Hair Spikes' to the enemy team, and his team gains 15 points of destructible defense for 2 turns. During this time, any enemy that destroys this destructible defense will gain a stack of 'Hair Spikes'.",
        descriptionBR:
          "ET Fuguki aplica instantaneamente um acúmulo de 'Hair Spikes' na equipe inimiga, e sua equipe recebe 15 pontos de defesa destrutível por 2 turnos. Durante esse tempo, qualquer inimigo que destruir essa defesa receberá um acúmulo de 'Hair Spikes'.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 3,
        url: "https://i.imgur.com/I0vV2sI.png",
        themepic: "https://i.imgur.com/zSd5Drv.jpeg",
      },
      {
        name: "Ranged Supression",
        themeName: "Ranged Supression",
        description:
          "For 3 turns, one enemy will be dealt 5 piercing damage, granting them a stack of 'Hair Spikes' each turn, and the other enemies will be dealt 5 piercing damage every turn. During this time, any enemy that uses a new harmful skill will gain a stack of 'Hair Spikes'. This skill ends if Fuguki dies.",
        descriptionBR:
          "Por 3 turnos, um inimigo receberá 5 de dano perfurante, ganhando um acúmulo de 'Hair Spikes' a cada turno, enquanto os outros inimigos receberão 5 de dano perfurante por turno. Durante esse tempo, qualquer inimigo que usar uma nova habilidade ofensiva receberá um acúmulo de 'Hair Spikes'. Esta habilidade termina se Fuguki morrer.",
        energy: ["Nin", "Nin"],
        classes: ["Physical", "Ranged", "Instant", "$_"],
        cooldown: 5,
        url: "https://i.imgur.com/Km3oKEK.png",
        themepic: "https://i.imgur.com/wqLHby8.jpeg",
      },
      {
        name: "Spiked Hair Defense",
        themeName: "Spiked Hair Defense",
        description:
          "This skill makes Edo Tensei Fuguki (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Fuguki (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/YCfhpVw.png",
        themepic: "https://i.imgur.com/JJNhTCz.jpeg",
      },
      {
        name: "Hair Spikes",
        themeName: "Hair Spikes",
        description:
          "An enemy affected by this skill will be dealt 2 piercing damage every turn for the rest of the game. During this time, that enemy will receive 5 additional damage from 'Hair Needle Senbon'. This skill stacks.",
        descriptionBR:
          "Um inimigo afetado por esta habilidade receberá 2 de dano perfurante a cada turno pelo resto da partida. Durante esse tempo, esse inimigo receberá 5 de dano adicional de 'Hair Needle Senbon'. Esta habilidade acumula.",
        energy: [],
        classes: ["Physical", "Ranged", "Instant", "Affliction"],
        cooldown: 0,
        url: "https://i.imgur.com/B29O0L1.png",
        themepic: "https://i.imgur.com/lzvls15.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Chiyo (S)",
    url: "https://i.imgur.com/Mh9GsDq.png",
    themepic: "https://i.imgur.com/imMa3Bj.jpeg",
    description:
      "Edo Tensei Chiyo (S) has been summoned back from the afterlife. She may not like it but she will do her best to help her opponents out with information while she is forced to fight.",
    descriptionBR:
      "Edo Tensei Chiyo (S) foi invocada de volta do além. Ela pode não gostar disso, mas fará o seu melhor para ajudar até mesmo seus oponentes com informações enquanto é forçada a lutar.",
    skills: [
      {
        name: "White Secret Technique Ten Puppets",
        themeName: "White Secret Technique Ten Puppets",
        description:
          "Chiyo assaults her enemies using the ten puppets, <Effects>stunning<Effects> one enemy's <Classes>physical and ranged<Classes> skills for 1 turn. Afterwards, one random enemy will be <Damage>dealt 20 damage<Damage> for 2 turns.",
        descriptionBR:
          "Chiyo ataca seus inimigos com os Dez Fantoches, <Effects>atordoando<Effects> as habilidades <Classes>physical e ranged<Classes> de um inimigo por 1 turno. Em seguida, um inimigo aleatório <Damage>receberá 20 de dano<Damage> por 2 turnos.",
        energy: ["Random", "Random"],
        classes: ["Physical", "Ranged", "Unique", "Action"],
        cooldown: 2,
        url: "https://i.imgur.com/y4LZSrI.png",
        themepic: "https://i.imgur.com/2cmisDT.jpeg",
      },
      {
        name: "Possum",
        themeName: "Possum",
        description:
          "Chiyo plays possum on one enemy and targets them. For 1 turn, if that enemy uses a <Classes>new harmful skill<Classes>, they will be <Defense>countered<Defense>. If successfully, that enemy will be <Damage>dealt 20 damage<Damage> and will have their <Classes>physical and melee<Classes> skills <Effects>stunned<Effects> for 1 turn. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Chiyo finge estar vulnerável contra um inimigo e o marca. Por 1 turno, se esse inimigo usar uma <Classes>nova habilidade ofensiva<Classes>, ele será <Defense>anulado<Defense>. Se for bem-sucedido, esse inimigo <Damage>receberá 20 de dano<Damage> e terá suas habilidades <Classes>physical e melee<Classes> <Effects>atordoadas<Effects> por 1 turno. <Invisible>Esta habilidade é invisível<Invisible>.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/DouGpB2.png",
        themepic: "https://i.imgur.com/UYOJrNJ.jpeg",
      },
      {
        name: "White Secret Art Illusion",
        themeName: "White Secret Art Illusion",
        description:
          "Edo Tensei Chiyo (S) targets one enemy <Damage>dealing 25 damage<Damage> to them. For 1 turn, Edo Tensei Chiyo (S) will <Defense>ignore harmful<Defense> <Classes>non-ranged<Classes> skills.",
        descriptionBR:
          "Edo Tensei Chiyo (S) <Damage>causa 25 de dano<Damage> a um inimigo. Por 1 turno, ela irá <Defense>ignorar habilidades ofensivas<Defense> que não sejam <Classes>Ranged<Classes>.",
        energy: ["Gen"],
        classes: ["Physical", "Ranged", "Unique", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/R9UxzZB.png",
        themepic: "https://i.imgur.com/0a5tqJP.jpeg",
      },
      {
        name: "Chiyo Evade",
        themeName: "Chiyo Evade",
        description:
          "This skill makes Edo Tensei Chiyo (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Chiyo (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/t7wpJ7e.png",
        themepic: "https://i.imgur.com/guuzAYX.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Hanzo (S)",
    url: "https://i.imgur.com/LyOKYz1.png",
    themepic: "https://i.imgur.com/xZhKz3O.jpeg",
    description:
      "Edo Tensei Hanzo (S) has been summoned back from the dead in the middle of a battlefield and he is not happy about it. Edo Hanzo (S) will engage anyone that crosses his path as he did when he was alive.",
    descriptionBR:
      "Edo Tensei Hanzo (S) foi invocado de volta dos mortos no meio de um campo de batalha e não está nada feliz com isso. Ele enfrentará qualquer um que cruzar seu caminho, como fazia em vida.",
    skills: [
      {
        name: "Poison Sickle",
        themeName: "Poison Sickle",
        description:
          "Hanzo <Damage>deals 10 physical damage<Damage> and <Damage>10 affliction damage<Damage> to one enemy. For 1 turn, if that enemy <Classes>uses a new harmful skill<Classes>, they <Damage>take 10 damage<Damage>.",
        descriptionBR:
          "Hanzo <Damage>causa 10 de dano normal<Damage> e <Damage>10 de dano aflitivo<Damage> a um inimigo. Por 1 turno, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ele irá <Damage>receber 10 de dano<Damage>.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/VGTBWCW.png",
        themepic: "https://i.imgur.com/mpVzlLe.jpeg",
      },
      {
        name: "Salamander Swallow",
        themeName: "Salamander Swallow",
        description:
          "Hanzo targets one enemy for 1 turn. The next <Classes>harmful non-mental skill<Classes> used by that enemy will have its <Damage>non-damaged<Damage> effects not <Defense>applied<Defense> and the duration of the <Effects>skill reduced<Effects> by 1 turn. If triggered, the target <Damage>takes 20 affliction damage<Damage>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Hanzo mira em um inimigo por 1 turno. A próxima <Classes>habilidade não mental ofensiva<Classes> usada por esse inimigo terá seus efeitos <Damage>não relacionados a dano<Damage> não <Defense>aplicados<Defense> e sua <Effects>duração reduzida<Effects> em 1 turno. Se for ativada, o alvo <Damage>receberá 20 de dano por aflição<Damage>. <Invisible>Esta habilidade é invisível<Invisible>.",
        energy: ["Blood"],
        classes: ["Physical", "Ranged", "Instant", "Affliction", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/hKnUMec.png",
        themepic: "https://i.imgur.com/ANazfqo.jpeg",
      },
      {
        name: "Venom Sac",
        themeName: "Venom Sac",
        description:
          "For 1 turn, Hanzo gains 50% <Defense>unpierceable damage reduction<Defense> and <Defense>ignores affliction damage<Defense>. During this time, any enemy that <Classes>uses a new skill on him<Classes> will be *<Damage>dealt 5 affliction damage<Damage> for 3 turns. <Invisible>This skill is invisible<Invisible> until first <Effects>triggered<Effects>.",
        descriptionBR:
          "Por 1 turno, Hanzo recebe 50% de <Defense>redução de dano impenetravel<Defense> e <Defense>ignora dano por aflição<Defense>. Durante esse tempo, qualquer inimigo que <Classes>usar uma nova habilidade nele<Classes> <Damage>sofrerá 5 de dano por aflição<Damage> durante 3 turnos. <Invisible>Esta habilidade é invisível<Invisible> até ser <Effects>ativada<Effects> pela primeira vez.",
        energy: ["Random"],
        classes: ["Physical", "Instant", "*Affliction", "$_1", "$_2"],
        cooldown: 3,
        url: "https://i.imgur.com/dgvAeZf.png",
        themepic: "https://i.imgur.com/dgvAeZf.png",
      },
      {
        name: "Ibuse Guard",
        themeName: "Ibuse Guard",
        description:
          "This skill makes Hanzo <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Esta habilidade torna Hanzo <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/sPSjHBW.png",
        themepic: "https://i.imgur.com/I7cfI4o.jpeg",
      },
      {
        name: "Passive: Contaminated Battlefield",
        themeName: "Passive: Contaminated Battlefield",
        description:
          "At the start of the game, the battlefield becomes Toxic for all characters until Hanzo <Classes>dies<Classes>. While Toxic is active: <br><Defense>Healing effects<Defense> and <Defense>destructible defense<Defense> will be <Defense>ignored<Defense> by all characters. <br>Any character that becomes <Defense>invulnerable<Defense> takes <Damage>3 permanent affliction damage<Damage>. This passive cannot be <Classes>ignored<Classes>",
        descriptionBR:
          "No início da partida, o campo de batalha se torna Tóxico para todos os personagens até que Hanzo <Classes>morra<Classes>. Enquanto Tóxico estiver ativo: <br><Defense>Efeitos de cura<Defense> e <Defense>defesa destrutível<Defense> serão <Defense>ignorados<Defense> por todos os personagens. <br>Qualquer personagem que se torne <Defense>invulnerável<Defense> receberá <Damage>3 de dano aflitivo permanente<Damage>. This passive cannot be <Classes>ignored<Classes>",
        energy: [],
        classes: ["Chakra", "Instant", "Affliction", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/IzfrdBG.png",
        themepic: "https://i.imgur.com/IzfrdBG.png",
      },
    ],
  },
  {
    name: "Edo Tensei Nagato (S)",
    url: "https://i.imgur.com/SoFPHt8.png",
    themepic: "https://i.imgur.com/t5kBMZt.jpeg",
    description:
      "Edo Tensei Nagato (S) has been summoned to do battle. He is fully aware of the fact that he is being controlled again as he was while he was living.",
    descriptionBR:
      "Edo Tensei Nagato (S) foi invocado para lutar. Ele está totalmente ciente do fato de que está sendo controlado novamente, assim como era quando estava vivo.",
    skills: [
      {
        name: "Human Path",
        themeName: "Human Path",
        description:
          "Nagato draws out the lifeforce of an enemy, <Damage>stealing 10 health<Damage> and <Damage>dealing 20 damage<Damage>. That enemy's <Classes>offensive<Classes> skills will be <Effects>stunned<Effects>for 1 turn.",
        descriptionBR:
          "Nagato extrai a força vital de um inimigo, <Damage>roubando 10 de vida<Damage> e <Damage>causando 20 de dano<Damage>. As habilidades <Classes>ofensivas<Classes> desse inimigo serão <Effects>atordoadas<Effects> por 1 turno.",
        energy: ["Gen", "Random"],
        classes: ["Mental", "Melee", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/vlYNLAb.png",
        themepic: "https://i.imgur.com/ZxpOu6O.jpeg",
      },
      {
        name: "Preta Path",
        themeName: "Preta Path",
        description:
          "Nagato drains an enemy's energy, <Damage>stealing 10 health points<Damage> and <Effects>removing 1 taijutsu or ninjutsu chakra<Effects> from their chakra <Effects>pool<Effects>.",
        descriptionBR:
          "Nagato drena a energia de um inimigo, <Damage>roubando 10 pontos de vida<Damage> e <Effects>removendo 1 taijutsu ou ninjutsu chakra<Effects> da <Effects>reserva<Effects> de chakra dele.",
        energy: ["Blood"],
        classes: ["Chakra", "Melee", "Unique", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/VFpdMPm.png",
        themepic: "https://i.imgur.com/1QFzoZy.jpeg",
      },
      {
        name: "Animal Path",
        themeName: "Animal Path",
        description:
          "Nagato summons various animals and creatures, <Damage>dealing 10 damage<Damage> to all enemies for 2 turns. The following 2 turns, any enemy that uses a <Classes>new skill<Classes> on Edo Tensei Nagato will be *<Damage>dealt 10 piercing damage<Damage>.",
        descriptionBR:
          "Nagato invoca diversos animais e criaturas, <Damage>causando 10 de dano<Damage> a todos os inimigos por 2 turnos. Nos 2 turnos seguintes, qualquer inimigo que usar uma <Classes>nova habilidade<Classes> em Edo Tensei Nagato <Damage>receberá *10 de dano perfurante<Damage>.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Ranged", "Unique", "Action", "*Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/bEnVUtF.png",
        themepic: "https://i.imgur.com/3sYv8Zv.jpeg",
      },
      {
        name: "Naraka Path",
        themeName: "Naraka Path",
        description:
          "This skill makes Edo Tensei Nagato (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Nagato (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Unique", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/dZTXSyj.png",
        themepic: "https://i.imgur.com/tPKjoPn.jpeg",
      },
    ],
  },
  {
    name: "ET Sandaime Raikage (S)",
    url: "https://i.imgur.com/D5phctx.png",
    themepic: "https://i.imgur.com/HHTI3Ig.jpeg",
    description:
      "Edo Tensei Sandaime Raikage (S) is not pleased to be back among the living and forced to do battle. He does however have faith that the new generation of shinobi can defeat him and his peers.",
    descriptionBR:
      "Edo Tensei Sandaime Raikage (S) não está satisfeito por estar de volta entre os vivos e ser forçado a lutar. No entanto, ele tem fé de que a nova geração de shinobi pode derrotá-lo, assim como seus companheiros.",
    skills: [
      {
        name: "Four Finger Nukite",
        themeName: "Four Finger Nukite",
        description:
          "Edo Tensei Sandaime Raikage (S) uses Four Finger Nukite on one enemy <Damage>dealing 25 piercing damage<Damage>*. Edo Tensei Sandaime Raikage (S) gains 25% <Defense>damage reduction<Defense> permanently when this skill is used. This skill becomes <SkillName>'Three Finger Nukite'<SkillName> permanently when used.",
        descriptionBR:
          "Edo Tensei Sandaime Raikage (S) usa Four Finger Nukite em um inimigo, <Damage>causando 25 de dano perfurante<Damage>*. Edo Tensei Sandaime Raikage (S) ganha 25% de <Defense>redução de dano<Defense> permanentemente ao usar esta habilidade. Esta habilidade se torna <SkillName>'Three Finger Nukite'<SkillName> permanentemente após ser usada.",
        energy: ["Nin"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/WSNxhnV.png",
        themepic: "https://i.imgur.com/HE6ZAGm.jpeg",
      },
      {
        name: "Lightning Release Shockwave",
        themeName: "Lightning Release Shockwave",
        description:
          "Using Lightning Release Shockwave Edo Tensei Sandaime Raikage (S) targets one enemy <Damage>dealing 30 damage<Damage>. One random enemy will be <Damage>dealt 30 damage<Damage> that <Effects>ignores invulnerability<Effects>.",
        descriptionBR:
          "Usando Lightning Release Shockwave, Edo Tensei Sandaime Raikage (S) atinge um inimigo <Damage>causando 30 de dano<Damage>. Um inimigo aleatório <Damage>receberá 30 de dano<Damage> que <Effects>ignora invulnerabilidade<Effects>.",
        energy: ["Nin", "Random"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/fLVG8pR.png",
        themepic: "https://i.imgur.com/uVLJCEu.jpeg",
      },
      {
        name: "One Finger Nukite Spear",
        themeName: "One Finger Nukite Spear",
        description:
          "Edo Tensei Sandaime Raikage (S) uses One Finger Nukite Spear on one enemy <Damage>dealing 50 piercing damage<Damage>. This skill <Classes>cannot be countered<Classes> or <Classes>reflected<Classes>.",
        descriptionBR:
          "Edo Tensei Sandaime Raikage (S) usa One Finger Nukite Spear em um inimigo, <Damage>causando 50 de dano perfurante<Damage>. Esta <Classes>habilidade não pode ser anulada<Classes> ou <Classes>refletida<Classes>.",
        energy: ["Tai", "Nin"],
        classes: ["Chakra", "Melee", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/3ZbkkbG.png",
        themepic: "https://i.imgur.com/sXaJXvU.jpeg",
      },
      {
        name: "Immense Speed",
        themeName: "Immense Speed",
        description:
          "This skill makes ET Sandaime Raikage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz ET Sandaime Raikage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Physical", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/ceyfxM4.png",
        themepic: "https://i.imgur.com/XoyBCeS.jpeg",
      },
      {
        name: "Three Finger Nukite",
        themeName: "Three Finger Nukite",
        description:
          "Using Three Finger Nukite Edo Tensei Sandaime Raikage (S) gains 50% <Defense>damage reduction<Defense> permanently. <SkillName>'One Finger Nukite Spear'<SkillName> can be used on all enemies permanently when this skill is used. This skill can only be used once and <Classes>cannot be removed<Classes>.",
        descriptionBR:
          "Ao usar Three Finger Nukite, Edo Tensei Sandaime Raikage (S) ganha 50% de <Defense>redução de dano<Defense> permanentemente. <SkillName>'One Finger Nukite Spear'<SkillName> pode ser usada em todos os inimigos permanentemente ao usar esta habilidade. Esta habilidade só pode ser usada uma vez e <Classes>não pode ser removida<Classes>.",
        energy: [],
        classes: ["Chakra", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/PU4qYK7.jpeg",
        themepic: "https://i.imgur.com/PU4qYK7.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Muu (S)",
    url: "https://i.imgur.com/Ms96j1y.png",
    themepic: "https://i.imgur.com/Lkta2Ln.jpeg",
    description:
      "Muu, the Second Tsuchikage, was revived against his will to fight. He is a skilled spy, capable of infiltrating the battlefield undetected, in addition to his Kekkei Touta, the atomic detachment, capable of turning enemies into dust in a matter of moments.",
    descriptionBR:
      "Muu, o Segundo Tsuchikage, foi revivido contra sua vontade para lutar. Ele é um espião habilidoso, capaz de se infiltrar no campo de batalha sem ser detectado, além de possuir o Kekkei Touta, o desmembramento atômico, capaz de transformar inimigos em pó em questão de segundos.",
    skills: [
      {
        name: "Fission",
        themeName: "Fission",
        description:
          "ET Muu grant himself or one ally 50% of <Defense>unpierceable damage reduction points<Defense> for 1 turn. During this turn, any enemy that <Classes>uses a new skill<Classes> on that ally <Improvements>will receive 5 additional damage<Improvements> from <Classes>non-affliction<Classes> skills permanently. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "ET Muu concede a si mesmo ou a um aliado 50% de <Defense>pontos de redução de dano impenetrável<Defense> por 1 turno. Durante este turno, qualquer inimigo que <Classes>usar uma nova habilidade<Classes> nesse aliado <Improvements>receberá 5 de dano adicional<Improvements> de <Classes>habilidades não aflitivas<Classes> permanentemente. <Invisible>Esta habilidade é invisível<Invisible>.",
        energy: ["Gen"],
        classes: ["Chakra", "Instant", "Helpful", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/IDYuApM.png",
        themepic: "https://i.imgur.com/xx98qYj.jpeg",
      },
      {
        name: "Atomic Detachment",
        themeName: "Atomic Detachment",
        description:
          "ET Muu <Damage>deals 20 damage<Damage> to one enemy and an additional <Damage>15 piercing damage<Damage> the first turn and <Damage>10 piercing damage<Damage> the following turn. During this time, that enemy's skills <Effects>will cost 1 additional random chakra<Effects>. This skill <Classes>ends<Classes> if that enemy uses a <Classes>new skill<Classes>.",
        descriptionBR:
          "ET Muu <Damage>causa 20 de dano<Damage> a um inimigo e <Damage>15 de dano perfurante<Damage> adicional no primeiro turno e <Damage>10 de dano perfurante<Damage> no turno seguinte. Durante esse tempo, as habilidades desse inimigo <Effects>custarão 1 chakra aleatório adicional<Effects>. Esta habilidade <Classes>termina<Classes> se esse inimigo usar uma <Classes>nova habilidade<Classes>.",
        energy: ["Gen", "Random"],
        classes: ["Chakra", "Ranged", "Instant", "Harmful", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/rUORWDd.png",
        themepic: "https://i.imgur.com/zVcppMr.jpeg",
      },
      {
        name: "Chameleon Covering",
        themeName: "Chameleon Covering",
        description:
          "ET Muu makes himself or one ally <Defense>ignore all harmful effects except damage<Defense> for 1 turn. If the protected character receive a new <Classes>harmful<Classes> skill, <SkillName>'Atomic Detachment1<SkillName> will <Improvements>cost 2 random chakra<Improvements> for 1 turn. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "ET Muu faz com que ele mesmo ou um aliado <Defense>ignore todos os efeitos ofensivos exceto dano<Defense> por 1 turno. Se o personagem protegido receber uma nova habilidade <Classes>ofensiva<Classes>, <SkillName>'Atomic Detachment'<SkillName> <Improvements>custará 2 chakras aleatórios<Improvements> por 1 turno. <Invisible>Esta habilidade é invisível<Invisible>.",
        energy: [],
        classes: ["Chakra", "Instant", "Helpful", "Unique"],
        cooldown: 2,
        url: "https://i.imgur.com/ssBY4vX.png",
        themepic: "https://i.imgur.com/oA1fheL.jpeg",
      },
      {
        name: "Sensorial Awareness",
        themeName: "Sensorial Awareness",
        description:
          "This skill makes Edo Tensei Muu (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Muu (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant", "Helpful"],
        cooldown: 4,
        url: "https://imgur.com/tFwLc31.jpg",
        themepic: "https://i.imgur.com/n2SpI4X.jpeg",
      },
    ],
  },
  {
    name: "ET Nidaime Mizukage (S)",
    url: "https://i.imgur.com/cvp50Gp.png",
    themepic: "https://i.imgur.com/TTLjdBC.jpeg",
    description:
      "Edo Tensei Nidaime Mizukage (S) has been resurrected against his will to do battle. He does not want to hurt anyone but he is interested in the potential of the new generation. He will test their limits with his own skill.",
    descriptionBR:
      "Edo Tensei Nidaime Mizukage (S) foi ressuscitado contra sua vontade de lutar. Ele não quer machucar ninguém, mas está interessado no potencial da nova geração. Ele testará seus limites com suas próprias habilidades.",
    skills: [
      {
        name: "Major Summoning: Giant Clam",
        themeName: "Major Summoning: Giant Clam",
        description:
          "Gengetsu summons a huge clam that exudes illsory mist, granting his team 30 points of <Defense>destructible defense<Defense> for 3 turns. Each turn, a random member of his team becoms a mirage, <Defense>ignoring<Defense> the <Classes>first harmful skill<Classes> used on them for 1 turn; The target is <Invisible>invisible<Invisible>. This skill <Classes>ends<Classes> if Gengetsu is <Classes>killed<Classes>.",
        descriptionBR:
          "Gengetsu invoca um molusco enorme que exala uma névoa ilusória, concedendo à sua equipe 30 <Defense>pontos de defesa destrutível<Defense> por 3 turnos. A cada turno, um membro aleatório da sua equipe se torna uma miragem, <Defense>ignorando<Defense> a <Classes>primeira habilidade prejudicial<Classes> usada nele por 1 turno; o alvo fica <Invisible>invisível<Invisible>. Esta habilidade <Classes>termina<Classes> se Gengetsu for <Classes>morto<Classes>.",
        energy: ["Nin", "Gen", "Random"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/2NRqFoY.png",
        themepic: "https://i.imgur.com/BHmhqL4.jpeg",
      },
      {
        name: "Hozuki Water Gun",
        themeName: "Hozuki Water Gun",
        description:
          "Gengetsu fires a drop of water like a bullet at one enemy, <Damage>dealing 20 piercing damage<Damage> to them. If that enemy's <Defense>health<Defense> drops to 10 or less, they will be <Classes>killed<Classes>. During <SkillName>'Major Summoning: Giant Clam'<SkillName>, this skill will <Improvements>deal 5 additional damage<Improvements> and wll kill enemy if they health drop 15 or less.",
        descriptionBR:
          "Gengetsu dispara uma gota d'água como uma bala em um inimigo, causando <Damage>20 de dano perfurante<Damage>. Se a <Defense>vida<Defense> do inimigo cair para 10 ou menos, ele será <Classes>morto<Classes>. Durante <SkillName>'Major Summoning: Giant Clam'<SkillName>, esta habilidade causará <Improvements>5 de dano adicional<Improvements> e matara o inimigo se ele tiver 15 ou menos de vida.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Unique", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/bUL5aby.png",
        themepic: "https://i.imgur.com/evGj1lY.jpeg",
      },
      {
        name: "Steam Imp",
        themeName: "Steam Imp",
        description:
          "For 1 turn, Gengetsu makes his team <Defense>ignore all stun effects<Defense>. If targetable, all enemies will be <Damage>dealt 10 affliction damage<Damage>. During <SkillName>'Major Summoning: Giant Clam'<SkillName>, this skill <Improvements>will last 1 additional turn<Improvements>.",
        descriptionBR:
          "Por 1 turno, Gengetsu faz com que sua equipe <Defense>ignore todos os efeitos de atordoamento<Defense>. Se puder alvejar, todos os inimigos <Damage>receberão 10 de dano por aflição<Damage>. Durante <SkillName>'Major Summoning: Giant Clam'<SkillName>, esta habilidade<Improvements>durará 1 turno adicional<Improvements>.",
        energy: ["Gen"],
        classes: ["Chakra", "Ranged", "Unique", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/72ocNVF.png",
        themepic: "https://i.imgur.com/Hz3iVyN.jpeg",
      },
      {
        name: "Genjutsu Defense",
        themeName: "Genjutsu Defense",
        description:
          "This skill makes ET Nidaime Mizukage (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz ET Nidaime Mizukage (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/LDH7bxz.png",
        themepic: "https://i.imgur.com/QkWKR9I.jpeg",
      },
      {
        name: "Mirage",
        themeName: "Mirage",
        description:
          "While <SkillName>'Major Summoning: Giant Clam'<SkillName> is active, this skill will be applied to a random member of Gengetsu's team. For 1 turn, the target will <Defense>ignore<Defense> the <Classes>first harmful skill<Classes> used on them. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Enquanto <SkillName>'Major Summoning: Giant Clam'<SkillName> estiver ativa, esta habilidade será aplicada a um membro aleatório da equipe de Gengetsu. Por 1 turno, o alvo irá <Defense>ignorar<Defense> a <Classes>primeira habilidade ofensiva<Classes> usada nele. <Invisible>Esta habilidade é invisível<Invisible>",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/8qD6CUW.png",
        themepic: "https://i.imgur.com/njodPbX.jpeg",
      },
    ],
  },
  {
    name: "Edo Tensei Itachi (S)",
    url: "https://i.imgur.com/Diw5QwE.png",
    themepic: "https://i.imgur.com/Diw5QwE.png",
    description:
      "One of the five past Akatsuki members reanimated by Kabuto during the Fourth Shinobi World War, Itachi sees this as an opportunity to pursue his true goals and set things right with Naruto and Sasuke. Freeing himself from Kabuto's shackles, Itachi unleashes the full power of the Uchiha with his deathless body.",
    descriptionBR:
      "Um dos cinco antigos membros da Akatsuki reanimados por Kabuto durante a Quarta Grande Guerra Ninja, Itachi vê isso como uma oportunidade para perseguir seus verdadeiros objetivos e acertar as contas com Naruto e Sasuke. Libertando-se das correntes de Kabuto, Itachi libera todo o poder dos Uchiha com seu corpo imortal.",
    skills: [
      {
        name: "Itachi Mangekyou Sharingan",
        themeName: "Itachi Mangekyou Sharingan",
        description:
          "Itachi becomes invulnerable, enhancing <SkillName>'Mastered Amaterasu'<SkillName> and <SkillName>'Mastered Tsukuyomi'<SkillName>, <Improvements>increasing their cooldowns by 2<Improvements> and <Improvements>doubling their costs<Improvements>, and also enabling <SkillName>'Izanami'<SkillName> to be used. Itachi will <Damage>lose 15 health<Damage>* each turn, ignore <Effects>healing<Effects>, and may use this skill again for no cost to cancel it.",
        descriptionBR:
          "Itachi se torna invulnerável, aprimorando <SkillName>'Mastered Amaterasu'<SkillName> e <SkillName>'Mastered Tsukuyomi'<SkillName>, <Improvements>aumentando seus cooldowns em 2<Improvements> e <Improvements>dobrando seus custo<Improvements>s, além de permitir o uso de <SkillName>'Izanami'<SkillName>. Itachi irá <Damage>perder 15 de vida<Damage>* por turno, irá ignorar <Effects>cura<Effects> e poderá usar essa habilidade novamente sem custo para cancelá-la.",
        energy: ["Blood"],
        classes: ["Mental", "Instant", "Unique", "Affliction*"],
        cooldown: 0,
        url: "https://i.imgur.com/uDwhjPw.png",
        themepic: "https://i.imgur.com/uDwhjPw.png",
      },
      {
        name: "Mastered Amaterasu",
        themeName: "Mastered Amaterasu",
        description:
          "Itachi burns one enemy with his flames, <Damage>dealing 15 affliction damage<Damage> to them and each following turn, they will <Damage>receive 5 affliction damage<Damage> a turn. This skill does not stack. During <SkillName>'Itachi Mangekyou Sharingan'<SkillName>, this skill will <Improvements>target all enemies<Improvements> and <Improvements>deal double damage<Improvements>. This skill will end if Itachi dies.",
        descriptionBR:
          "Itachi queima um inimigo com suas chamas, <Damage>causando 15 de dano aflitivo<Damage> a ele e, a cada turno seguinte, ele irá <Damage>receber 5 de dano aflitivo<Damage> por turno. Essa habilidade não acumula. Durante <SkillName>'Itachi Mangekyou Sharingan'<SkillName>, essa habilidade irá <Improvements>atingir todos os inimigos<Improvements> e <Improvements>causar o dobro de dano<Improvements>. Essa habilidade termina se Itachi morrer.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/nm11dNQ.png",
        themepic: "https://i.imgur.com/nm11dNQ.png",
      },
      {
        name: "Mastered Tsukuyomi",
        themeName: "Mastered Tsukuyomi",
        description:
          "Itachi mentally tortures one enemy for 3 days and nights in a matter of seconds, <Damage>dealing 20 damage<Damage> to them and <Effects>stunning<Effects> them for 1 turn. During <SkillName>'Itachi Mangekyou Sharingan'<SkillName>, this skill will <Improvements>last 3 turns<Improvements>.",
        descriptionBR:
          "Itachi tortura mentalmente um inimigo por 3 dias e noites em questão de segundos, <Damage>causando 20 de dano<Damage> a ele e <Effects>atordoando-o<Effects> por 1 turno. Durante <SkillName>'Itachi Mangekyou Sharingan'<SkillName>, essa habilidade irá <Improvements>durar 3 turnos<Improvements>.",
        energy: ["Gen"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/RJxIqlm.png",
        themepic: "https://i.imgur.com/RJxIqlm.png",
      },
      {
        name: "Edo Tensei Susanoo",
        themeName: "Edo Tensei Susanoo",
        description:
          "Using his Susanoo, Itachi becomes <Defense>invulnerable<Defense> for 1 turn, and <Defense>gains 10 destructible defense<Defense> for <Classes>each 20 health he has lost<Classes>. While Itachi has this defense, this skill becomes <SkillName>'Itachi Susanoo: Yasaka Magatama'<SkillName>. This skill <Effects>ends<Effects> during <SkillName>'Itachi Mangekyou Sharingan'<SkillName> and becomes <SkillName>'Izanami'<SkillName>. ",
        descriptionBR:
          "Usando seu Susanoo, Itachi se torna <Defense>invulnerável<Defense> por 1 turno e <Defense>ganha 10 de defesa destrutível<Defense> para <Classes>cada 20 de vida que ele perdeu<Classes>. Enquanto Itachi tiver essa defesa, essa habilidade se torna <SkillName>'Itachi Susanoo: Yasaka Magatama'<SkillName>. Essa habilidade <Effects>termina<Effects> durante <SkillName>'Itachi Mangekyou Sharingan'<SkillName> e se torna <SkillName>'Izanami'<SkillName>.",
        energy: ["Random"],
        classes: ["Chakra", "Instant", "Unique"],
        cooldown: 5,
        url: "https://i.imgur.com/shC2QMt.png",
        themepic: "https://i.imgur.com/shC2QMt.png",
      },
      {
        name: "Itachi Susanoo: Yasaka Magatama",
        themeName: "Itachi Susanoo: Yasaka Magatama",
        description:
          "Itachi unleashes his strongest long-range technique, <Damage>dealing piercing damage<Damage> to an enemy equal to the current <Classes>amount of destructible defense<Classes> that <SkillName>'Edo Tensei Susanoo'<SkillName> currently has. Afterwards, <SkillName>'Edo Tensei Susanoo'<SkillName> will be <Effects>removed<Effects>.",
        descriptionBR:
          "Itachi libera sua técnica de longo alcance mais poderosa, causando dano perfurante igual à atual <Classes>quantidade de defesa destrutível<Classes> de <SkillName>'Edo Tensei Susanoo'<SkillName> a um inimigo. Em seguida, <SkillName>'Edo Tensei Susanoo'<SkillName> será <Effects>removido<Effects>.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 0,
        url: "https://i.imgur.com/ojDBnzb.png",
        themepic: "https://i.imgur.com/ojDBnzb.png",
      },
      {
        name: "Izanami",
        themeName: "Izanami",
        description:
          "Itachi puts an enemy into a mental loop for 3 turns. Each time that enemy <Classes>uses a new skill<Classes>, they will be <Defense>countered<Defense>, and if that enemy <Classes>does not use a new skill<Classes>, <SkillName>'Izanami'<SkillName> duration will be <Improvements>extended<Improvements> by 1 turn. This skill cannot be <Invisible>removed<Invisible>, <Invisible>countered <Invisible>or <Invisible>reflected<Invisible> and may <Classes>affect uncounterable skills<Classes>.",
        descriptionBR:
          "Itachi coloca um inimigo em um ciclo mental por 3 turnos. Toda vez que esse inimigo <Classes>usar uma nova habilidade<Classes>, ela será <Defense>anulada<Defense>, e se esse inimigo <Classes>não usar uma nova habilidade<Classes>, a duração de <SkillName>'Izanami'<SkillName> será <Improvements>estendida<Improvements> em 1 turno. Essa habilidade não pode ser <Invisible>removida<Invisible>, <Invisible>anulada<Invisible> ou <Invisible>refletida<Invisible> e pode <Classes>afetar habilidades que não podem ser anuladas<Classes>.",
        energy: ["Blood", "Blood"],
        classes: ["Mental", "Ranged", "Instant", "Unique"],
        cooldown: 9,
        url: "https://i.imgur.com/XWy6O2o.png",
        themepic: "https://i.imgur.com/XWy6O2o.png",
      },
    ],
  },
  {
    name: "Edo Tensei Yota (S)",
    url: "https://i.imgur.com/CgXEKRN.png",
    themepic: "https://i.imgur.com/CgXEKRN.png",
    description:
      "A young child from a nomadic clan, Yota died at an early age, but was revived through Edo Tensei by Orochimaru and kept alive for years as a test subject. A curious, naïve, and sensitive boy, Yota can manipulate the weather around himself, and is deployed by Kabuto to fight in the Fourth Shinobi World War.",
    descriptionBR:
      "Uma jovem criança de um clã nômade, Yota morreu ainda muito novo, mas foi revivido pelo Edo Tensei de Orochimaru e mantido vivo por anos como cobaia. Um garoto curioso, ingênuo e sensível, Yota é capaz de manipular o clima ao seu redor, sendo enviado por Kabuto para lutar na Quarta Guerra Mundial Ninja.",
    skills: [
      {
        name: "Weather Manipulation Rain: Water Wave",
        themeName: "Weather Manipulation Rain: Water Wave",
        description:
          "Yota cries, and a sudden wave crashes down on a random enemy, <Damage>dealing 15 damage<Damage> to them, and after <Classes>targets 0 random enemies<Classes>, <Damage>dealing 15 damage<Damage> to each one of them. This skill will <Improvements>target 1 additional random enemy<Improvements> for each <SkillName>'Rain Stack'<SkillName> that Yota <Effects>has<Effects>. Afterwards, Yota gains 1 <SkillName>'Rain Stack'<SkillName>.",
        descriptionBR:
          "Yota chora, e uma onda repentina despenca sobre um inimigo aleatório, <Damage>causando 15 de dano<Damage> a ele, e depois <Classes>atinge 0 inimigos aleatórios<Classes>, <Damage>causando 15 de dano<Damage> a cada um deles. Esta habilidade irá <Improvements>atingir 1 inimigo aleatório adicional<Improvements> para cada <SkillName>'Rain Stack'<SkillName> que Yota <Effects>possuir<Effects>. Em seguida, Yota ganha 1 <SkillName>'Rain Stack'<SkillName>.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/DfmBvYh.png",
        themepic: "https://i.imgur.com/DfmBvYh.png",
      },
      {
        name: "Weather Manipulation Rain: Water Spheres",
        themeName: "Weather Manipulation Rain: Water Spheres",
        description:
          "Yota <Defense>gains 15 points of damage reduction<Defense>* and <Damage>deals 10 damage<Damage> to all enemies for 2 turns. Each turn, <Effects>Yota cries<Effects> and gains 1 <SkillName>'Rain Stack'<SkillName>. During this time, If <Classes>Yota is stunned<Classes>, he will <Effects>cry<Effects> even more, gaining 1 additional <SkillName>'Rain Stack'<SkillName> and <Defense>healing 10 health<Defense>.",
        descriptionBR:
          "Yota <Defense>ganha 15 pontos de redução de dano<Defense>* e <Damage>causa 10 de dan<Damage>o a todos os inimigos por 2 turnos. A cada turno, <Effects>Yota chora<Effects> e ganha 1 <SkillName>'Rain Stack'<SkillName>. Durante esse tempo, se <Classes>Yota for atordoado<Classes>, ele <Effects>chorará<Effects> ainda mais, ganhando 1 <SkillName>'Rain Stack'<SkillName> adicional e <Defense>curando 10 de vida<Defense>.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Ranged", "Action", "Instant*"],
        cooldown: 2,
        url: "https://i.imgur.com/yxaP0DL.png",
        themepic: "https://i.imgur.com/yxaP0DL.png",
      },
      {
        name: "Wather Manipulation Lightning",
        themeName: "Wather Manipulation Lightning",
        description:
          "Yota sends a devastating lightning strike to obliterate all enemies, <Damage>dealing 10 affliction damage<Damage> to them for each <SkillName>'Rain Stack'<SkillName> Yota currently has.",
        descriptionBR:
          "Yota envia um devastador raio para aniquilar todos os inimigo, <Damage>causando 10 de dano aflitivo<Damage> a eles para cada <SkillName>'Rain Stack'<SkillName> que Yota possui atualmente.",
        energy: ["Blood", "Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 4,
        url: "https://i.imgur.com/QsFoxa8.png",
        themepic: "https://i.imgur.com/QsFoxa8.png",
      },
      {
        name: "Yota is happy don't bother him",
        themeName: "Yota is happy don't bother him",
        description:
          "This skill makes Edo Tensei Yota (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Yota (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/YgrzO7k.png",
        themepic: "https://i.imgur.com/YgrzO7k.png",
      },
      {
        name: "Rain Stack",
        themeName: "Rain Stack",
        description:
          "Each time Yota cries, he intensifies the rain on the battlefield, gaining 1 Rain Stack and enhancing her skills.",
        descriptionBR:
          "Toda vez que Yota chora, ele intensifica a chuva no campo de batalha, ganhando 1 Rain Stack e fortalecendo suas habilidades.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/BjIbSuX.png",
        themepic: "https://i.imgur.com/BjIbSuX.png",
      },
    ],
  },
  {
    name: "White Snake Kabuto (S)",
    url: "https://i.imgur.com/5BT5OxV.png",
    themepic: "https://i.imgur.com/5BT5OxV.png",
    description:
      "Following Orochimaru's death at the hands of Sasuke, Kabuto got access to his master's DNA, implanting it in his body and eventually gaining many freakish, snake-like features. In his new form, Kabuto allies himself with Tobi to wage war on the shinobi world, controlling the Edo Tensei forces from the shadows.",
    descriptionBR:
      "Após a morte de Orochimaru pelas mãos de Sasuke, Kabuto teve acesso ao DNA de seu mestre, implantando-o em seu próprio corpo e eventualmente adquirindo várias características bizarras semelhantes às de uma cobra. Em sua nova forma, Kabuto se alia a Tobi para travar guerra contra o mundo shinobi, controlando as forças do Edo Tensei nas sombras.",
    skills: [
      {
        name: "Snake Coil",
        themeName: "Snake Coil",
        description:
          "Kabuto uses his snake to coil around an enemy's body, <Damage>dealing 10 affliction damage<Damage> to them permanently. During this time, if that enemy <Classes>uses a new harmful skill<Classes>, Kabuto will <Defense>heal 10 health<Defense>. This skill stacks but will <Effects>end<Effects> if <Effects>used on a different enemy<Effects> or <Effects>if Kabuto is killed<Effects>.",
        descriptionBR:
          "Kabuto usa sua cobra para se enrolar ao redor de um inimigo, <Damage>causando 10 de dano aflitivo<Damage> a ele permanentemente. Durante esse tempo, se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, Kabuto irá <Defense>curar 10 de vida<Defense>. Essa habilidade acumula, mas <Effects>termina<Effects> se for <Effects>usada em um inimigo diferente<Effects> ou <Effects>Kabuto morrer<Effects>.",
        energy: ["Gen"],
        classes: ["Physical", "Melee", "Instant", "Unique", "Affliction", "$_"],
        cooldown: 1,
        url: "https://i.imgur.com/RpxvvTS.png",
        themepic: "https://i.imgur.com/RpxvvTS.png",
      },
      {
        name: "Edo Tensei Technique",
        themeName: "Edo Tensei Technique",
        description:
          "Kabuto <Damage>deals 25 affliction damage<Damage> to one enemy and <Effects>stuns<Effects> their <Classes>harmful skills<Classes> for 1 turn. If <Classes>that enemy is killed<Classes> in this turn, they will become an <Invisible>Edo Tensei<Invisible> and will <Effects>replace<Effects> one of Kabuto's allies <Classes>if they die<Classes> or <Classes>if they are currently dead<Classes>, returning them to <Defense>35 health<Defense>. This effect triggers once per game.",
        descriptionBR:
          "Kabuto <Damage>causa 25 de dano aflitivo<Damage> a um inimigo e <Effects>atordoa<Effects> as <Classes>habilidades ofensivas<Classes> dele por 1 turno. Se <Classes>esse inimigo for morto<Classes> nesse turno, ele se tornará um <Invisible>Edo Tensei<Invisible> e irá <Effects>substituir<Effects> um dos aliados de Kabuto <Classes>se eles morrerem<Classes> ou <Classes>se já estiverem mortos<Classes>, retornando com <Defense>35 de vida<Defense>. Esse efeito é ativado uma vez por partida.",
        energy: ["Blood", "Random"],
        classes: ["Chakra", "Melee", "Instant", "Unique", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/ZGjSk8L.png",
        themepic: "https://i.imgur.com/ZGjSk8L.png",
      },
      {
        name: "Edo Tensei Summoning: Akatsuki",
        themeName: "Edo Tensei Summoning: Akatsuki",
        description:
          "Kabuto <Defense>gains 60 points of destructible defense<Defense>, and <Effects>replaces<Effects> his skills by the alternate version <Defense>until it is destroyed<Defense>.",
        descriptionBR:
          "Kabuto <Defense>ganha 60 pontos de defesa destrutível<Defense> e <Effects>substitui<Effects> suas habilidades pela versão alternativa <Defense>até que a defesa seja destruída<Defense>.",
        energy: ["Blood", "Gen"],
        classes: ["Mental", "Instant", "Unique"],
        cooldown: 6,
        url: "https://i.imgur.com/MthPEc2.png",
        themepic: "https://i.imgur.com/MthPEc2.png",
      },
      {
        name: "White Snake Awakening",
        themeName: "White Snake Awakening",
        description:
          "This skill makes White Snake Kabuto (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz White Snake Kabuto (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/VsAnPho.png",
        themepic: "https://i.imgur.com/VsAnPho.png",
      },
      {
        name: "Edo Tensei: Clay Clone",
        themeName: "Edo Tensei: Clay Clone",
        description:
          "Kabuto targets one enemy for 1 turn. If that enemy <Classes>uses a new harmful skill<Classes>, they will be <Defense>countered<Defense> and will be <Damage>dealt 20 piercing damage<Damage>. <Invisible>This skill is invisible<Invisible>.",
        descriptionBR:
          "Kabuto marca um inimigo por 1 turno. Se esse inimigo <Classes>usar uma nova habilidade ofensiva<Classes>, ela será <Defense>anulada<Defense> e ele irá <Damage>receber 20 de dano perfurante<Damage>. <Invisible>Essa habilidade é invisível<Invisible>.",
        energy: ["Nin"],
        classes: ["Chakra", "Ranged", "Instant"],
        cooldown: 2,
        url: "https://i.imgur.com/Qxicvxf.png",
        themepic: "https://i.imgur.com/Qxicvxf.png",
      },
      {
        name: "Edo Tensei: Totsuka Blade",
        themeName: "Edo Tensei: Totsuka Blade",
        description:
          "Kabuto <Damage>deals 20 piercing damage<Damage> to one enemy and <Effects>removes 1 bloodline or genjutsu<Effects> from them.",
        descriptionBR:
          "Kabuto <Damage>causa 20 de dano perfurante<Damage> a um inimigo e <Effects>remove 1 bloodline ou genjutsu chakra<Effects> dele.",
        energy: ["Tai"],
        classes: ["Chakra", "Melee", "Instant"],
        cooldown: 1,
        url: "https://i.imgur.com/26upARf.png",
        themepic: "https://i.imgur.com/26upARf.png",
      },
      {
        name: "Edo Tensei: Flame Mask",
        themeName: "Edo Tensei: Flame Mask",
        description:
          "Kabuto <Damage>deals 20 affliction damage<Damage> to one enemy and <Effects>stuns their helpful skills<Effects> for 1 turn.",
        descriptionBR:
          "Kabuto <Damage>causa 20 de dano aflitivo<Damage> a um inimigo e <Effects>atordoa as habilidades defensivas<Effects> dele por 1 turno.",
        energy: ["Blood"],
        classes: ["Chakra", "Ranged", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/8bGrQGJ.png",
        themepic: "https://i.imgur.com/8bGrQGJ.png",
      },
      {
        name: "Edo Tensei: Human Path",
        themeName: "Edo Tensei: Human Path",
        description:
          "Kabuto <Damage>steals 20 health<Damage> from one enemy and <Effects>stuns their harmful skills<Effects> for 1 turn.",
        descriptionBR:
          "Kabuto <Damage>rouba 20 de vida<Damage> de um inimigo e <Effects>atordoa as habilidades ofensivas<Effects> dele por 1 turno.",
        energy: ["Gen"],
        classes: ["Mental", "Melee", "Instant", "Affliction"],
        cooldown: 1,
        url: "https://i.imgur.com/P0LmdlZ.png",
        themepic: "https://i.imgur.com/P0LmdlZ.png",
      },
    ],
  },
  {
    name: "Edo Tensei Fuu (S)",
    url: "https://i.imgur.com/wHgj9Re.png",
    themepic: "https://i.imgur.com/wHgj9Re.png",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War, Fuu has had the Seven-Tails, Choumei, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Fuu is under his full control, skillfully utilizing the Seven-Tails' various insect abilities.",
    descriptionBR:
      "Reanimada por Kabuto durante a Quarta Guerra Mundial Ninja, Fuu teve o Sete-Caudas, Choumei, selado de volta dentro de si. Tendo sido transformada em um dos novos Seis Caminhos da Dor de Tobi, junto com os outros jinchuuriki caídos, Fuu está sob seu controle total, utilizando habilmente as várias habilidades inseticidas do Sete-Caudas.",
    skills: [
      {
        name: "Majestic Sting",
        themeName: "Majestic Sting",
        description:
          "Fuu <Damage>deals 15 damage<Damage> to one enemy. The following turn, that enemy will <Improvements>receive 10 additional damage<Improvements> from Fuu's skills.",
        descriptionBR:
          "Fuu <Damage>causa 15 de dano<Damage> a um inimigo. No turno seguinte, esse inimigo <Improvements>receberá 10 de dano adicional<Improvements> das habilidades de Fuu.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/JrP4P5i.png",
        themepic: "https://i.imgur.com/JrP4P5i.png",
      },
      {
        name: "Nanabi: Flying Assault",
        themeName: "Nanabi: Flying Assault",
        description:
          "Fuu becomes <Defense>invulnerable<Defense> for 1 turn and <Damage>deals 30 damage<Damage> to one enemy <Classes>ignoring invulnerability<Classes>.",
        descriptionBR:
          "Fuu se torna <Defense>invulnerável<Defense> por 1 turno e <Damage>causa 30 de dano<Damage> a um inimigo, <Classes>ignorando a invulnerabilidade<Classes>.",
        energy: ["Blood", "Random"],
        classes: ["Physical", "Melee", "Instant", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/VsbR0Ol.png",
        themepic: "https://i.imgur.com/VsbR0Ol.png",
      },
      {
        name: "Scale Powder Blinding Attack",
        themeName: "Scale Powder Blinding Attack",
        description:
          "Fuu <Damage>deals 10 piercing damage<Damage> to one enemy and makes them unable to <Defense>reduce damage<Defense> or <Defense>become invulnerable<Defense> for 1 turn. The following turn, that enemy <Damage>will take another 10 damage<Damage> and will be <Effects>stunned<Effects> for 1 turn.",
        descriptionBR:
          "Fuu <Damage>causa 10 de dano perfurante<Damage> a um inimigo e o torna incapaz de <Defense>reduzir o dano<Defense> ou <Defense>invulnerável<Defense> por 1 turno. No turno seguinte, esse inimigo <Damage>sofrerá mais 10 de dano<Damage> e ficará <Effects>atordoado<Effects> por 1 turno.",
        energy: ["Random"],
        classes: ["Chakra", "Ranged", "Control", "Unique"],
        cooldown: 1,
        url: "https://i.imgur.com/Mjx7mLO.png",
        themepic: "https://i.imgur.com/Mjx7mLO.png",
      },
      {
        name: "Fuu: Rinnegan Awareness",
        themeName: "Fuu: Rinnegan Awareness",
        description:
          "This skill may be used to cast the last skill used by Fuu, <Improvements>costing random chakra<Improvements> and <Improvements>dealing 5 additional damage<Improvements>. Afterwards, the original version of the casted skill will be unable to be used by Fuu for 1 turn.",
        descriptionBR:
          "Esta habilidade pode ser usada para conjurar a última habilidade usada por Fuu, <Improvements>sem custo<Improvements> e <Improvements>causando 5 de dano adicional<Improvements>. Depois disso, a versão original da habilidade usada não poderá ser usada por Fuu por 1 turno.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/wT5hUPK.png",
        themepic: "https://i.imgur.com/wT5hUPK.png",
      },
    ],
  },
  {
    name: "Edo Tensei Yugito (S)",
    url: "https://i.imgur.com/MhobEGS.png",
    themepic: "https://i.imgur.com/MhobEGS.png",
    description:
      "Reanimated by Kabuto during the Fourth Shinobi World War, Yugito has had the Two-Tails, Matatabi, sealed back inside her. Having been made into one of Tobi's new Six Paths of Pain along with the other fallen jinchuuriki, Yugito is under his full control, fighting her foes using the Two-Tails' fiery feline powers.",
    descriptionBR:
      "Reanimada por Kabuto durante a Quarta Guerra Mundial Ninja, Yugito teve o Duas-Caudas, Matatabi, selado de volta dentro de si. Transformada em um dos novos Seis Caminhos da Dor de Tobi, junto com os outros jinchuuriki caídos, Yugito está sob seu controle total, lutando contra seus inimigos usando os poderes felinos do Duas-Caudas.",
    skills: [
      {
        name: "Cat Claws",
        themeName: "Cat Claws",
        description:
          "Yugito <Damage>deals 15 damage<Damage> to one enemy and <Effects>stuns<Effects> their non-mental skills for 1 turn.",
        descriptionBR:
          "Yugito <Damage>causa 15 de dano<Damage> a um inimigo e <Effects>atordoa<Effects> suas habilidades non-Mental por 1 turno.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/ryp6AZy.png",
        themepic: "https://i.imgur.com/ryp6AZy.png",
      },
      {
        name: "Fiery Mouse Hairball",
        themeName: "Fiery Mouse Hairball",
        description:
          "Yugito <Damage>deals 15 damage<Damage> to one enemy and <Effects>removes 1 taijutsu chakra<Effects> from them.",
        descriptionBR:
          "Yugito <Damage>causa 15 de dano<Damage> a um inimigo e<Effects> remove 1 taijutsu chakra<Effects> dele.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/P2Ija8U.png",
        themepic: "https://i.imgur.com/P2Ija8U.png",
      },
      {
        name: "Nibi: Rage Punch",
        themeName: "Nibi: Rage Punch",
        description:
          "Yugito <Effects>destroys<Effects> all <Effects>destructible defense<Effects> of one enemy, <Damage>deals 15 piercing damage<Damage> to them and <Effects>kills<Effects> them if their <Defense>health<Defense> drops to 10 or less.",
        descriptionBR:
          "Yugito <Effects>destrói<Effects> toda a <Effects>defesa destrutível<Effects> de um inimigo, <Damage>causa 15 de dano perfurante<Damage> e o <Effects>mata<Effects> se sua <Defense>vida<Defense> cair para 10 ou menos.",
        energy: ["Tai"],
        classes: ["Physical", "Melee", "Instant", "Harmful"],
        cooldown: 1,
        url: "https://i.imgur.com/im9yIgr.png",
        themepic: "https://i.imgur.com/im9yIgr.png",
      },
      {
        name: "Yugito: Rinnegan Awareness",
        themeName: "Yugito: Rinnegan Awareness",
        description:
          "This skill makes Edo Tensei Yugito (S) <Defense>invulnerable<Defense> for 1 turn.",
        descriptionBR:
          "Essa habilidade faz Edo Tensei Yugito (S) <Defense>invulnerável<Defense> por 1 turno.",
        energy: ["Random"],
        classes: ["Mental", "Instant"],
        cooldown: 4,
        url: "https://i.imgur.com/72rXM4t.png",
        themepic: "https://i.imgur.com/72rXM4t.png",
      },
      {
        name: "Passive: Nibi Awakening",
        themeName: "Passive: Nibi Awakening",
        description:
          "Every time Yugito uses a <Classes>new harmful skill<Classes>, she <Improvements>gains 10 additional damage<Improvements>, stacking until she stops using new harmful skills. If Yugito passes 2 turns without using a new harmful skill, her skills will cost 1 random chakra for 1 turn. The bonus damage may only stack up to a maximum of 30.",
        descriptionBR:
          "Cada vez que Yugito usa uma nova <Classes>habilidade prejudicial<Classes>, ela <Improvements>ganha 10 de dano adicional<Improvements>, acumulando até que ela pare de usar novas habilidades prejudiciais. Se Yugito passar 2 turnos sem usar uma nova habilidade prejudicial, suas habilidades irão custar 1 random por 1 turno. O dano extra só poderá ser acumulado a um máximo de 30.",
        energy: [],
        classes: ["Mental", "Instant"],
        cooldown: 0,
        url: "https://i.imgur.com/KvEkWpM.png",
        themepic: "https://i.imgur.com/KvEkWpM.png",
      },
    ],
  },
];
