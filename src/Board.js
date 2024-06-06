import React, { Component } from 'react';
import Axios from 'axios';
import './Board.css'
import Tile from './Tile.js';
import { useParams } from "react-router-dom";
import tile_backing from "./tile_backing.png";

function withParams(Component) {
  return props => <Component {...props} params={useParams()} />;
}

class Board extends Component{
    constructor(props) {
        super(props);
        this.state = {
            ddragonVersion: "12.13.1",
            champions: [
              {
                'Index': '1',
                'Name': 'Bulbasaur'
              },
              {
                'Index': '2',
                'Name': 'Ivysaur'
              },
              {
                'Index': '3',
                'Name': 'Venusaur'
              },
              {
                'Index': '4',
                'Name': 'Charmander'
              },
              {
                'Index': '5',
                'Name': 'Charmeleon'
              },
              {
                'Index': '6',
                'Name': 'Charizard'
              },
              {
                'Index': '7',
                'Name': 'Squirtle'
              },
              {
                'Index': '8',
                'Name': 'Wartortle'
              },
              {
                'Index': '9',
                'Name': 'Blastoise'
              },
              {
                'Index': '10',
                'Name': 'Caterpie'
              },
              {
                'Index': '11',
                'Name': 'Metapod'
              },
              {
                'Index': '12',
                'Name': 'Butterfree'
              },
              {
                'Index': '13',
                'Name': 'Weedle'
              },
              {
                'Index': '14',
                'Name': 'Kakuna'
              },
              {
                'Index': '15',
                'Name': 'Beedrill'
              },
              {
                'Index': '16',
                'Name': 'Pidgey'
              },
              {
                'Index': '17',
                'Name': 'Pidgeotto'
              },
              {
                'Index': '18',
                'Name': 'Pidgeot'
              },
              {
                'Index': '19',
                'Name': 'Rattata'
              },
              {
                'Index': '20',
                'Name': 'Raticate'
              },
              {
                'Index': '21',
                'Name': 'Spearow'
              },
              {
                'Index': '22',
                'Name': 'Fearow'
              },
              {
                'Index': '23',
                'Name': 'Ekans'
              },
              {
                'Index': '24',
                'Name': 'Arbok'
              },
              {
                'Index': '25',
                'Name': 'Pikachu'
              },
              {
                'Index': '26',
                'Name': 'Raichu'
              },
              {
                'Index': '27',
                'Name': 'Sandshrew'
              },
              {
                'Index': '28',
                'Name': 'Sandslash'
              },
              {
                'Index': '29',
                'Name': 'Nidoran♀'
              },
              {
                'Index': '30',
                'Name': 'Nidorina'
              },
              {
                'Index': '31',
                'Name': 'Nidoqueen'
              },
              {
                'Index': '32',
                'Name': 'Nidoran♂'
              },
              {
                'Index': '33',
                'Name': 'Nidorino'
              },
              {
                'Index': '34',
                'Name': 'Nidoking'
              },
              {
                'Index': '35',
                'Name': 'Clefairy'
              },
              {
                'Index': '36',
                'Name': 'Clefable'
              },
              {
                'Index': '37',
                'Name': 'Vulpix'
              },
              {
                'Index': '38',
                'Name': 'Ninetales'
              },
              {
                'Index': '39',
                'Name': 'Jigglypuff'
              },
              {
                'Index': '40',
                'Name': 'Wigglytuff'
              },
              {
                'Index': '41',
                'Name': 'Zubat'
              },
              {
                'Index': '42',
                'Name': 'Golbat'
              },
              {
                'Index': '43',
                'Name': 'Oddish'
              },
              {
                'Index': '44',
                'Name': 'Gloom'
              },
              {
                'Index': '45',
                'Name': 'Vileplume'
              },
              {
                'Index': '46',
                'Name': 'Paras'
              },
              {
                'Index': '47',
                'Name': 'Parasect'
              },
              {
                'Index': '48',
                'Name': 'Venonat'
              },
              {
                'Index': '49',
                'Name': 'Venomoth'
              },
              {
                'Index': '50',
                'Name': 'Diglett'
              },
              {
                'Index': '51',
                'Name': 'Dugtrio'
              },
              {
                'Index': '52',
                'Name': 'Meowth'
              },
              {
                'Index': '53',
                'Name': 'Persian'
              },
              {
                'Index': '54',
                'Name': 'Psyduck'
              },
              {
                'Index': '55',
                'Name': 'Golduck'
              },
              {
                'Index': '56',
                'Name': 'Mankey'
              },
              {
                'Index': '57',
                'Name': 'Primeape'
              },
              {
                'Index': '58',
                'Name': 'Growlithe'
              },
              {
                'Index': '59',
                'Name': 'Arcanine'
              },
              {
                'Index': '60',
                'Name': 'Poliwag'
              },
              {
                'Index': '61',
                'Name': 'Poliwhirl'
              },
              {
                'Index': '62',
                'Name': 'Poliwrath'
              },
              {
                'Index': '63',
                'Name': 'Abra'
              },
              {
                'Index': '64',
                'Name': 'Kadabra'
              },
              {
                'Index': '65',
                'Name': 'Alakazam'
              },
              {
                'Index': '66',
                'Name': 'Machop'
              },
              {
                'Index': '67',
                'Name': 'Machoke'
              },
              {
                'Index': '68',
                'Name': 'Machamp'
              },
              {
                'Index': '69',
                'Name': 'Bellsprout'
              },
              {
                'Index': '70',
                'Name': 'Weepinbell'
              },
              {
                'Index': '71',
                'Name': 'Victreebel'
              },
              {
                'Index': '72',
                'Name': 'Tentacool'
              },
              {
                'Index': '73',
                'Name': 'Tentacruel'
              },
              {
                'Index': '74',
                'Name': 'Geodude'
              },
              {
                'Index': '75',
                'Name': 'Graveler'
              },
              {
                'Index': '76',
                'Name': 'Golem'
              },
              {
                'Index': '77',
                'Name': 'Ponyta'
              },
              {
                'Index': '78',
                'Name': 'Rapidash'
              },
              {
                'Index': '79',
                'Name': 'Slowpoke'
              },
              {
                'Index': '80',
                'Name': 'Slowbro'
              },
              {
                'Index': '81',
                'Name': 'Magnemite'
              },
              {
                'Index': '82',
                'Name': 'Magneton'
              },
              {
                'Index': '83',
                'Name': 'Farfetch\'d'
              },
              {
                'Index': '84',
                'Name': 'Doduo'
              },
              {
                'Index': '85',
                'Name': 'Dodrio'
              },
              {
                'Index': '86',
                'Name': 'Seel'
              },
              {
                'Index': '87',
                'Name': 'Dewgong'
              },
              {
                'Index': '88',
                'Name': 'Grimer'
              },
              {
                'Index': '89',
                'Name': 'Muk'
              },
              {
                'Index': '90',
                'Name': 'Shellder'
              },
              {
                'Index': '91',
                'Name': 'Cloyster'
              },
              {
                'Index': '92',
                'Name': 'Gastly'
              },
              {
                'Index': '93',
                'Name': 'Haunter'
              },
              {
                'Index': '94',
                'Name': 'Gengar'
              },
              {
                'Index': '95',
                'Name': 'Onix'
              },
              {
                'Index': '96',
                'Name': 'Drowzee'
              },
              {
                'Index': '97',
                'Name': 'Hypno'
              },
              {
                'Index': '98',
                'Name': 'Krabby'
              },
              {
                'Index': '99',
                'Name': 'Kingler'
              },
              {
                'Index': '100',
                'Name': 'Voltorb'
              },
              {
                'Index': '101',
                'Name': 'Electrode'
              },
              {
                'Index': '102',
                'Name': 'Exeggcute'
              },
              {
                'Index': '103',
                'Name': 'Exeggutor'
              },
              {
                'Index': '104',
                'Name': 'Cubone'
              },
              {
                'Index': '105',
                'Name': 'Marowak'
              },
              {
                'Index': '106',
                'Name': 'Hitmonlee'
              },
              {
                'Index': '107',
                'Name': 'Hitmonchan'
              },
              {
                'Index': '108',
                'Name': 'Lickitung'
              },
              {
                'Index': '109',
                'Name': 'Koffing'
              },
              {
                'Index': '110',
                'Name': 'Weezing'
              },
              {
                'Index': '111',
                'Name': 'Rhyhorn'
              },
              {
                'Index': '112',
                'Name': 'Rhydon'
              },
              {
                'Index': '113',
                'Name': 'Chansey'
              },
              {
                'Index': '114',
                'Name': 'Tangela'
              },
              {
                'Index': '115',
                'Name': 'Kangaskhan'
              },
              {
                'Index': '116',
                'Name': 'Horsea'
              },
              {
                'Index': '117',
                'Name': 'Seadra'
              },
              {
                'Index': '118',
                'Name': 'Goldeen'
              },
              {
                'Index': '119',
                'Name': 'Seaking'
              },
              {
                'Index': '120',
                'Name': 'Staryu'
              },
              {
                'Index': '121',
                'Name': 'Starmie'
              },
              {
                'Index': '122',
                'Name': 'Mr. Mime'
              },
              {
                'Index': '123',
                'Name': 'Scyther'
              },
              {
                'Index': '124',
                'Name': 'Jynx'
              },
              {
                'Index': '125',
                'Name': 'Electabuzz'
              },
              {
                'Index': '126',
                'Name': 'Magmar'
              },
              {
                'Index': '127',
                'Name': 'Pinsir'
              },
              {
                'Index': '128',
                'Name': 'Tauros'
              },
              {
                'Index': '129',
                'Name': 'Magikarp'
              },
              {
                'Index': '130',
                'Name': 'Gyarados'
              },
              {
                'Index': '131',
                'Name': 'Lapras'
              },
              {
                'Index': '132',
                'Name': 'Ditto'
              },
              {
                'Index': '133',
                'Name': 'Eevee'
              },
              {
                'Index': '134',
                'Name': 'Vaporeon'
              },
              {
                'Index': '135',
                'Name': 'Jolteon'
              },
              {
                'Index': '136',
                'Name': 'Flareon'
              },
              {
                'Index': '137',
                'Name': 'Porygon'
              },
              {
                'Index': '138',
                'Name': 'Omanyte'
              },
              {
                'Index': '139',
                'Name': 'Omastar'
              },
              {
                'Index': '140',
                'Name': 'Kabuto'
              },
              {
                'Index': '141',
                'Name': 'Kabutops'
              },
              {
                'Index': '142',
                'Name': 'Aerodactyl'
              },
              {
                'Index': '143',
                'Name': 'Snorlax'
              },
              {
                'Index': '144',
                'Name': 'Articuno'
              },
              {
                'Index': '145',
                'Name': 'Zapdos'
              },
              {
                'Index': '146',
                'Name': 'Moltres'
              },
              {
                'Index': '147',
                'Name': 'Dratini'
              },
              {
                'Index': '148',
                'Name': 'Dragonair'
              },
              {
                'Index': '149',
                'Name': 'Dragonite'
              },
              {
                'Index': '150',
                'Name': 'Mewtwo'
              },
              {
                'Index': '151',
                'Name': 'Mew'
              },
              {
                'Index': '152',
                'Name': 'Chikorita'
              },
              {
                'Index': '153',
                'Name': 'Bayleef'
              },
              {
                'Index': '154',
                'Name': 'Meganium'
              },
              {
                'Index': '155',
                'Name': 'Cyndaquil'
              },
              {
                'Index': '156',
                'Name': 'Quilava'
              },
              {
                'Index': '157',
                'Name': 'Typhlosion'
              },
              {
                'Index': '158',
                'Name': 'Totodile'
              },
              {
                'Index': '159',
                'Name': 'Croconaw'
              },
              {
                'Index': '160',
                'Name': 'Feraligatr'
              },
              {
                'Index': '161',
                'Name': 'Sentret'
              },
              {
                'Index': '162',
                'Name': 'Furret'
              },
              {
                'Index': '163',
                'Name': 'Hoothoot'
              },
              {
                'Index': '164',
                'Name': 'Noctowl'
              },
              {
                'Index': '165',
                'Name': 'Ledyba'
              },
              {
                'Index': '166',
                'Name': 'Ledian'
              },
              {
                'Index': '167',
                'Name': 'Spinarak'
              },
              {
                'Index': '168',
                'Name': 'Ariados'
              },
              {
                'Index': '169',
                'Name': 'Crobat'
              },
              {
                'Index': '170',
                'Name': 'Chinchou'
              },
              {
                'Index': '171',
                'Name': 'Lanturn'
              },
              {
                'Index': '172',
                'Name': 'Pichu'
              },
              {
                'Index': '173',
                'Name': 'Cleffa'
              },
              {
                'Index': '174',
                'Name': 'Igglybuff'
              },
              {
                'Index': '175',
                'Name': 'Togepi'
              },
              {
                'Index': '176',
                'Name': 'Togetic'
              },
              {
                'Index': '177',
                'Name': 'Natu'
              },
              {
                'Index': '178',
                'Name': 'Xatu'
              },
              {
                'Index': '179',
                'Name': 'Mareep'
              },
              {
                'Index': '180',
                'Name': 'Flaaffy'
              },
              {
                'Index': '181',
                'Name': 'Ampharos'
              },
              {
                'Index': '182',
                'Name': 'Bellossom'
              },
              {
                'Index': '183',
                'Name': 'Marill'
              },
              {
                'Index': '184',
                'Name': 'Azumarill'
              },
              {
                'Index': '185',
                'Name': 'Sudowoodo'
              },
              {
                'Index': '186',
                'Name': 'Politoed'
              },
              {
                'Index': '187',
                'Name': 'Hoppip'
              },
              {
                'Index': '188',
                'Name': 'Skiploom'
              },
              {
                'Index': '189',
                'Name': 'Jumpluff'
              },
              {
                'Index': '190',
                'Name': 'Aipom'
              },
              {
                'Index': '191',
                'Name': 'Sunkern'
              },
              {
                'Index': '192',
                'Name': 'Sunflora'
              },
              {
                'Index': '193',
                'Name': 'Yanma'
              },
              {
                'Index': '194',
                'Name': 'Wooper'
              },
              {
                'Index': '195',
                'Name': 'Quagsire'
              },
              {
                'Index': '196',
                'Name': 'Espeon'
              },
              {
                'Index': '197',
                'Name': 'Umbreon'
              },
              {
                'Index': '198',
                'Name': 'Murkrow'
              },
              {
                'Index': '199',
                'Name': 'Slowking'
              },
              {
                'Index': '200',
                'Name': 'Misdreavus'
              },
              {
                'Index': '201',
                'Name': 'Unown'
              },
              {
                'Index': '202',
                'Name': 'Wobbuffet'
              },
              {
                'Index': '203',
                'Name': 'Girafarig'
              },
              {
                'Index': '204',
                'Name': 'Pineco'
              },
              {
                'Index': '205',
                'Name': 'Forretress'
              },
              {
                'Index': '206',
                'Name': 'Dunsparce'
              },
              {
                'Index': '207',
                'Name': 'Gligar'
              },
              {
                'Index': '208',
                'Name': 'Steelix'
              },
              {
                'Index': '209',
                'Name': 'Snubbull'
              },
              {
                'Index': '210',
                'Name': 'Granbull'
              },
              {
                'Index': '211',
                'Name': 'Qwilfish'
              },
              {
                'Index': '212',
                'Name': 'Scizor'
              },
              {
                'Index': '213',
                'Name': 'Shuckle'
              },
              {
                'Index': '214',
                'Name': 'Heracross'
              },
              {
                'Index': '215',
                'Name': 'Sneasel'
              },
              {
                'Index': '216',
                'Name': 'Teddiursa'
              },
              {
                'Index': '217',
                'Name': 'Ursaring'
              },
              {
                'Index': '218',
                'Name': 'Slugma'
              },
              {
                'Index': '219',
                'Name': 'Magcargo'
              },
              {
                'Index': '220',
                'Name': 'Swinub'
              },
              {
                'Index': '221',
                'Name': 'Piloswine'
              },
              {
                'Index': '222',
                'Name': 'Corsola'
              },
              {
                'Index': '223',
                'Name': 'Remoraid'
              },
              {
                'Index': '224',
                'Name': 'Octillery'
              },
              {
                'Index': '225',
                'Name': 'Delibird'
              },
              {
                'Index': '226',
                'Name': 'Mantine'
              },
              {
                'Index': '227',
                'Name': 'Skarmory'
              },
              {
                'Index': '228',
                'Name': 'Houndour'
              },
              {
                'Index': '229',
                'Name': 'Houndoom'
              },
              {
                'Index': '230',
                'Name': 'Kingdra'
              },
              {
                'Index': '231',
                'Name': 'Phanpy'
              },
              {
                'Index': '232',
                'Name': 'Donphan'
              },
              {
                'Index': '233',
                'Name': 'Porygon2'
              },
              {
                'Index': '234',
                'Name': 'Stantler'
              },
              {
                'Index': '235',
                'Name': 'Smeargle'
              },
              {
                'Index': '236',
                'Name': 'Tyrogue'
              },
              {
                'Index': '237',
                'Name': 'Hitmontop'
              },
              {
                'Index': '238',
                'Name': 'Smoochum'
              },
              {
                'Index': '239',
                'Name': 'Elekid'
              },
              {
                'Index': '240',
                'Name': 'Magby'
              },
              {
                'Index': '241',
                'Name': 'Miltank'
              },
              {
                'Index': '242',
                'Name': 'Blissey'
              },
              {
                'Index': '243',
                'Name': 'Raikou'
              },
              {
                'Index': '244',
                'Name': 'Entei'
              },
              {
                'Index': '245',
                'Name': 'Suicune'
              },
              {
                'Index': '246',
                'Name': 'Larvitar'
              },
              {
                'Index': '247',
                'Name': 'Pupitar'
              },
              {
                'Index': '248',
                'Name': 'Tyranitar'
              },
              {
                'Index': '249',
                'Name': 'Lugia'
              },
              {
                'Index': '250',
                'Name': 'Ho-oh'
              },
              {
                'Index': '251',
                'Name': 'Celebi'
              },
              {
                'Index': '252',
                'Name': 'Treecko'
              },
              {
                'Index': '253',
                'Name': 'Grovyle'
              },
              {
                'Index': '254',
                'Name': 'Sceptile'
              },
              {
                'Index': '255',
                'Name': 'Torchic'
              },
              {
                'Index': '256',
                'Name': 'Combusken'
              },
              {
                'Index': '257',
                'Name': 'Blaziken'
              },
              {
                'Index': '258',
                'Name': 'Mudkip'
              },
              {
                'Index': '259',
                'Name': 'Marshtomp'
              },
              {
                'Index': '260',
                'Name': 'Swampert'
              },
              {
                'Index': '261',
                'Name': 'Poochyena'
              },
              {
                'Index': '262',
                'Name': 'Mightyena'
              },
              {
                'Index': '263',
                'Name': 'Zigzagoon'
              },
              {
                'Index': '264',
                'Name': 'Linoone'
              },
              {
                'Index': '265',
                'Name': 'Wurmple'
              },
              {
                'Index': '266',
                'Name': 'Silcoon'
              },
              {
                'Index': '267',
                'Name': 'Beautifly'
              },
              {
                'Index': '268',
                'Name': 'Cascoon'
              },
              {
                'Index': '269',
                'Name': 'Dustox'
              },
              {
                'Index': '270',
                'Name': 'Lotad'
              },
              {
                'Index': '271',
                'Name': 'Lombre'
              },
              {
                'Index': '272',
                'Name': 'Ludicolo'
              },
              {
                'Index': '273',
                'Name': 'Seedot'
              },
              {
                'Index': '274',
                'Name': 'Nuzleaf'
              },
              {
                'Index': '275',
                'Name': 'Shiftry'
              },
              {
                'Index': '276',
                'Name': 'Taillow'
              },
              {
                'Index': '277',
                'Name': 'Swellow'
              },
              {
                'Index': '278',
                'Name': 'Wingull'
              },
              {
                'Index': '279',
                'Name': 'Pelipper'
              },
              {
                'Index': '280',
                'Name': 'Ralts'
              },
              {
                'Index': '281',
                'Name': 'Kirlia'
              },
              {
                'Index': '282',
                'Name': 'Gardevoir'
              },
              {
                'Index': '283',
                'Name': 'Surskit'
              },
              {
                'Index': '284',
                'Name': 'Masquerain'
              },
              {
                'Index': '285',
                'Name': 'Shroomish'
              },
              {
                'Index': '286',
                'Name': 'Breloom'
              },
              {
                'Index': '287',
                'Name': 'Slakoth'
              },
              {
                'Index': '288',
                'Name': 'Vigoroth'
              },
              {
                'Index': '289',
                'Name': 'Slaking'
              },
              {
                'Index': '290',
                'Name': 'Nincada'
              },
              {
                'Index': '291',
                'Name': 'Ninjask'
              },
              {
                'Index': '292',
                'Name': 'Shedinja'
              },
              {
                'Index': '293',
                'Name': 'Whismur'
              },
              {
                'Index': '294',
                'Name': 'Loudred'
              },
              {
                'Index': '295',
                'Name': 'Exploud'
              },
              {
                'Index': '296',
                'Name': 'Makuhita'
              },
              {
                'Index': '297',
                'Name': 'Hariyama'
              },
              {
                'Index': '298',
                'Name': 'Azurill'
              },
              {
                'Index': '299',
                'Name': 'Nosepass'
              },
              {
                'Index': '300',
                'Name': 'Skitty'
              },
              {
                'Index': '301',
                'Name': 'Delcatty'
              },
              {
                'Index': '302',
                'Name': 'Sableye'
              },
              {
                'Index': '303',
                'Name': 'Mawile'
              },
              {
                'Index': '304',
                'Name': 'Aron'
              },
              {
                'Index': '305',
                'Name': 'Lairon'
              },
              {
                'Index': '306',
                'Name': 'Aggron'
              },
              {
                'Index': '307',
                'Name': 'Meditite'
              },
              {
                'Index': '308',
                'Name': 'Medicham'
              },
              {
                'Index': '309',
                'Name': 'Electrike'
              },
              {
                'Index': '310',
                'Name': 'Manectric'
              },
              {
                'Index': '311',
                'Name': 'Plusle'
              },
              {
                'Index': '312',
                'Name': 'Minun'
              },
              {
                'Index': '313',
                'Name': 'Volbeat'
              },
              {
                'Index': '314',
                'Name': 'Illumise'
              },
              {
                'Index': '315',
                'Name': 'Roselia'
              },
              {
                'Index': '316',
                'Name': 'Gulpin'
              },
              {
                'Index': '317',
                'Name': 'Swalot'
              },
              {
                'Index': '318',
                'Name': 'Carvanha'
              },
              {
                'Index': '319',
                'Name': 'Sharpedo'
              },
              {
                'Index': '320',
                'Name': 'Wailmer'
              },
              {
                'Index': '321',
                'Name': 'Wailord'
              },
              {
                'Index': '322',
                'Name': 'Numel'
              },
              {
                'Index': '323',
                'Name': 'Camerupt'
              },
              {
                'Index': '324',
                'Name': 'Torkoal'
              },
              {
                'Index': '325',
                'Name': 'Spoink'
              },
              {
                'Index': '326',
                'Name': 'Grumpig'
              },
              {
                'Index': '327',
                'Name': 'Spinda'
              },
              {
                'Index': '328',
                'Name': 'Trapinch'
              },
              {
                'Index': '329',
                'Name': 'Vibrava'
              },
              {
                'Index': '330',
                'Name': 'Flygon'
              },
              {
                'Index': '331',
                'Name': 'Cacnea'
              },
              {
                'Index': '332',
                'Name': 'Cacturne'
              },
              {
                'Index': '333',
                'Name': 'Swablu'
              },
              {
                'Index': '334',
                'Name': 'Altaria'
              },
              {
                'Index': '335',
                'Name': 'Zangoose'
              },
              {
                'Index': '336',
                'Name': 'Seviper'
              },
              {
                'Index': '337',
                'Name': 'Lunatone'
              },
              {
                'Index': '338',
                'Name': 'Solrock'
              },
              {
                'Index': '339',
                'Name': 'Barboach'
              },
              {
                'Index': '340',
                'Name': 'Whiscash'
              },
              {
                'Index': '341',
                'Name': 'Corphish'
              },
              {
                'Index': '342',
                'Name': 'Crawdaunt'
              },
              {
                'Index': '343',
                'Name': 'Baltoy'
              },
              {
                'Index': '344',
                'Name': 'Claydol'
              },
              {
                'Index': '345',
                'Name': 'Lileep'
              },
              {
                'Index': '346',
                'Name': 'Cradily'
              },
              {
                'Index': '347',
                'Name': 'Anorith'
              },
              {
                'Index': '348',
                'Name': 'Armaldo'
              },
              {
                'Index': '349',
                'Name': 'Feebas'
              },
              {
                'Index': '350',
                'Name': 'Milotic'
              },
              {
                'Index': '351',
                'Name': 'Castform'
              },
              {
                'Index': '352',
                'Name': 'Kecleon'
              },
              {
                'Index': '353',
                'Name': 'Shuppet'
              },
              {
                'Index': '354',
                'Name': 'Banette'
              },
              {
                'Index': '355',
                'Name': 'Duskull'
              },
              {
                'Index': '356',
                'Name': 'Dusclops'
              },
              {
                'Index': '357',
                'Name': 'Tropius'
              },
              {
                'Index': '358',
                'Name': 'Chimecho'
              },
              {
                'Index': '359',
                'Name': 'Absol'
              },
              {
                'Index': '360',
                'Name': 'Wynaut'
              },
              {
                'Index': '361',
                'Name': 'Snorunt'
              },
              {
                'Index': '362',
                'Name': 'Glalie'
              },
              {
                'Index': '363',
                'Name': 'Spheal'
              },
              {
                'Index': '364',
                'Name': 'Sealeo'
              },
              {
                'Index': '365',
                'Name': 'Walrein'
              },
              {
                'Index': '366',
                'Name': 'Clamperl'
              },
              {
                'Index': '367',
                'Name': 'Huntail'
              },
              {
                'Index': '368',
                'Name': 'Gorebyss'
              },
              {
                'Index': '369',
                'Name': 'Relicanth'
              },
              {
                'Index': '370',
                'Name': 'Luvdisc'
              },
              {
                'Index': '371',
                'Name': 'Bagon'
              },
              {
                'Index': '372',
                'Name': 'Shelgon'
              },
              {
                'Index': '373',
                'Name': 'Salamence'
              },
              {
                'Index': '374',
                'Name': 'Beldum'
              },
              {
                'Index': '375',
                'Name': 'Metang'
              },
              {
                'Index': '376',
                'Name': 'Metagross'
              },
              {
                'Index': '377',
                'Name': 'Regirock'
              },
              {
                'Index': '378',
                'Name': 'Regice'
              },
              {
                'Index': '379',
                'Name': 'Registeel'
              },
              {
                'Index': '380',
                'Name': 'Latias'
              },
              {
                'Index': '381',
                'Name': 'Latios'
              },
              {
                'Index': '382',
                'Name': 'Kyogre'
              },
              {
                'Index': '383',
                'Name': 'Groudon'
              },
              {
                'Index': '384',
                'Name': 'Rayquaza'
              },
              {
                'Index': '385',
                'Name': 'Jirachi'
              },
              {
                'Index': '386',
                'Name': 'Deoxys'
              },
              {
                'Index': '387',
                'Name': 'Turtwig'
              },
              {
                'Index': '388',
                'Name': 'Grotle'
              },
              {
                'Index': '389',
                'Name': 'Torterra'
              },
              {
                'Index': '390',
                'Name': 'Chimchar'
              },
              {
                'Index': '391',
                'Name': 'Monferno'
              },
              {
                'Index': '392',
                'Name': 'Infernape'
              },
              {
                'Index': '393',
                'Name': 'Piplup'
              },
              {
                'Index': '394',
                'Name': 'Prinplup'
              },
              {
                'Index': '395',
                'Name': 'Empoleon'
              },
              {
                'Index': '396',
                'Name': 'Starly'
              },
              {
                'Index': '397',
                'Name': 'Staravia'
              },
              {
                'Index': '398',
                'Name': 'Staraptor'
              },
              {
                'Index': '399',
                'Name': 'Bidoof'
              },
              {
                'Index': '400',
                'Name': 'Bibarel'
              },
              {
                'Index': '401',
                'Name': 'Kricketot'
              },
              {
                'Index': '402',
                'Name': 'Kricketune'
              },
              {
                'Index': '403',
                'Name': 'Shinx'
              },
              {
                'Index': '404',
                'Name': 'Luxio'
              },
              {
                'Index': '405',
                'Name': 'Luxray'
              },
              {
                'Index': '406',
                'Name': 'Budew'
              },
              {
                'Index': '407',
                'Name': 'Roserade'
              },
              {
                'Index': '408',
                'Name': 'Cranidos'
              },
              {
                'Index': '409',
                'Name': 'Rampardos'
              },
              {
                'Index': '410',
                'Name': 'Shieldon'
              },
              {
                'Index': '411',
                'Name': 'Bastiodon'
              },
              {
                'Index': '412',
                'Name': 'Burmy'
              },
              {
                'Index': '413',
                'Name': 'Wormadam'
              },
              {
                'Index': '414',
                'Name': 'Mothim'
              },
              {
                'Index': '415',
                'Name': 'Combee'
              },
              {
                'Index': '416',
                'Name': 'Vespiquen'
              },
              {
                'Index': '417',
                'Name': 'Pachirisu'
              },
              {
                'Index': '418',
                'Name': 'Buizel'
              },
              {
                'Index': '419',
                'Name': 'Floatzel'
              },
              {
                'Index': '420',
                'Name': 'Cherubi'
              },
              {
                'Index': '421',
                'Name': 'Cherrim'
              },
              {
                'Index': '422',
                'Name': 'Shellos'
              },
              {
                'Index': '423',
                'Name': 'Gastrodon'
              },
              {
                'Index': '424',
                'Name': 'Ambipom'
              },
              {
                'Index': '425',
                'Name': 'Drifloon'
              },
              {
                'Index': '426',
                'Name': 'Drifblim'
              },
              {
                'Index': '427',
                'Name': 'Buneary'
              },
              {
                'Index': '428',
                'Name': 'Lopunny'
              },
              {
                'Index': '429',
                'Name': 'Mismagius'
              },
              {
                'Index': '430',
                'Name': 'Honchkrow'
              },
              {
                'Index': '431',
                'Name': 'Glameow'
              },
              {
                'Index': '432',
                'Name': 'Purugly'
              },
              {
                'Index': '433',
                'Name': 'Chingling'
              },
              {
                'Index': '434',
                'Name': 'Stunky'
              },
              {
                'Index': '435',
                'Name': 'Skuntank'
              },
              {
                'Index': '436',
                'Name': 'Bronzor'
              },
              {
                'Index': '437',
                'Name': 'Bronzong'
              },
              {
                'Index': '438',
                'Name': 'Bonsly'
              },
              {
                'Index': '439',
                'Name': 'Mime Jr.'
              },
              {
                'Index': '440',
                'Name': 'Happiny'
              },
              {
                'Index': '441',
                'Name': 'Chatot'
              },
              {
                'Index': '442',
                'Name': 'Spiritomb'
              },
              {
                'Index': '443',
                'Name': 'Gible'
              },
              {
                'Index': '444',
                'Name': 'Gabite'
              },
              {
                'Index': '445',
                'Name': 'Garchomp'
              },
              {
                'Index': '446',
                'Name': 'Munchlax'
              },
              {
                'Index': '447',
                'Name': 'Riolu'
              },
              {
                'Index': '448',
                'Name': 'Lucario'
              },
              {
                'Index': '449',
                'Name': 'Hippopotas'
              },
              {
                'Index': '450',
                'Name': 'Hippowdon'
              },
              {
                'Index': '451',
                'Name': 'Skorupi'
              },
              {
                'Index': '452',
                'Name': 'Drapion'
              },
              {
                'Index': '453',
                'Name': 'Croagunk'
              },
              {
                'Index': '454',
                'Name': 'Toxicroak'
              },
              {
                'Index': '455',
                'Name': 'Carnivine'
              },
              {
                'Index': '456',
                'Name': 'Finneon'
              },
              {
                'Index': '457',
                'Name': 'Lumineon'
              },
              {
                'Index': '458',
                'Name': 'Mantyke'
              },
              {
                'Index': '459',
                'Name': 'Snover'
              },
              {
                'Index': '460',
                'Name': 'Abomasnow'
              },
              {
                'Index': '461',
                'Name': 'Weavile'
              },
              {
                'Index': '462',
                'Name': 'Magnezone'
              },
              {
                'Index': '463',
                'Name': 'Lickilicky'
              },
              {
                'Index': '464',
                'Name': 'Rhyperior'
              },
              {
                'Index': '465',
                'Name': 'Tangrowth'
              },
              {
                'Index': '466',
                'Name': 'Electivire'
              },
              {
                'Index': '467',
                'Name': 'Magmortar'
              },
              {
                'Index': '468',
                'Name': 'Togekiss'
              },
              {
                'Index': '469',
                'Name': 'Yanmega'
              },
              {
                'Index': '470',
                'Name': 'Leafeon'
              },
              {
                'Index': '471',
                'Name': 'Glaceon'
              },
              {
                'Index': '472',
                'Name': 'Gliscor'
              },
              {
                'Index': '473',
                'Name': 'Mamoswine'
              },
              {
                'Index': '474',
                'Name': 'Porygon-Z'
              },
              {
                'Index': '475',
                'Name': 'Gallade'
              },
              {
                'Index': '476',
                'Name': 'Probopass'
              },
              {
                'Index': '477',
                'Name': 'Dusknoir'
              },
              {
                'Index': '478',
                'Name': 'Froslass'
              },
              {
                'Index': '479',
                'Name': 'Rotom'
              },
              {
                'Index': '480',
                'Name': 'Uxie'
              },
              {
                'Index': '481',
                'Name': 'Mesprit'
              },
              {
                'Index': '482',
                'Name': 'Azelf'
              },
              {
                'Index': '483',
                'Name': 'Dialga'
              },
              {
                'Index': '484',
                'Name': 'Palkia'
              },
              {
                'Index': '485',
                'Name': 'Heatran'
              },
              {
                'Index': '486',
                'Name': 'Regigigas'
              },
              {
                'Index': '487',
                'Name': 'Giratina'
              },
              {
                'Index': '488',
                'Name': 'Cresselia'
              },
              {
                'Index': '489',
                'Name': 'Phione'
              },
              {
                'Index': '490',
                'Name': 'Manaphy'
              },
              {
                'Index': '491',
                'Name': 'Darkrai'
              },
              {
                'Index': '492',
                'Name': 'Shaymin'
              },
              {
                'Index': '493',
                'Name': 'Arceus'
              },
              {
                'Index': '494',
                'Name': 'Victini'
              },
              {
                'Index': '495',
                'Name': 'Snivy'
              },
              {
                'Index': '496',
                'Name': 'Servine'
              },
              {
                'Index': '497',
                'Name': 'Serperior'
              },
              {
                'Index': '498',
                'Name': 'Tepig'
              },
              {
                'Index': '499',
                'Name': 'Pignite'
              },
              {
                'Index': '500',
                'Name': 'Emboar'
              },
              {
                'Index': '501',
                'Name': 'Oshawott'
              },
              {
                'Index': '502',
                'Name': 'Dewott'
              },
              {
                'Index': '503',
                'Name': 'Samurott'
              },
              {
                'Index': '504',
                'Name': 'Patrat'
              },
              {
                'Index': '505',
                'Name': 'Watchog'
              },
              {
                'Index': '506',
                'Name': 'Lillipup'
              },
              {
                'Index': '507',
                'Name': 'Herdier'
              },
              {
                'Index': '508',
                'Name': 'Stoutland'
              },
              {
                'Index': '509',
                'Name': 'Purrloin'
              },
              {
                'Index': '510',
                'Name': 'Liepard'
              },
              {
                'Index': '511',
                'Name': 'Pansage'
              },
              {
                'Index': '512',
                'Name': 'Simisage'
              },
              {
                'Index': '513',
                'Name': 'Pansear'
              },
              {
                'Index': '514',
                'Name': 'Simisear'
              },
              {
                'Index': '515',
                'Name': 'Panpour'
              },
              {
                'Index': '516',
                'Name': 'Simipour'
              },
              {
                'Index': '517',
                'Name': 'Munna'
              },
              {
                'Index': '518',
                'Name': 'Musharna'
              },
              {
                'Index': '519',
                'Name': 'Pidove'
              },
              {
                'Index': '520',
                'Name': 'Tranquill'
              },
              {
                'Index': '521',
                'Name': 'Unfezant'
              },
              {
                'Index': '522',
                'Name': 'Blitzle'
              },
              {
                'Index': '523',
                'Name': 'Zebstrika'
              },
              {
                'Index': '524',
                'Name': 'Roggenrola'
              },
              {
                'Index': '525',
                'Name': 'Boldore'
              },
              {
                'Index': '526',
                'Name': 'Gigalith'
              },
              {
                'Index': '527',
                'Name': 'Woobat'
              },
              {
                'Index': '528',
                'Name': 'Swoobat'
              },
              {
                'Index': '529',
                'Name': 'Drilbur'
              },
              {
                'Index': '530',
                'Name': 'Excadrill'
              },
              {
                'Index': '531',
                'Name': 'Audino'
              },
              {
                'Index': '532',
                'Name': 'Timburr'
              },
              {
                'Index': '533',
                'Name': 'Gurdurr'
              },
              {
                'Index': '534',
                'Name': 'Conkeldurr'
              },
              {
                'Index': '535',
                'Name': 'Tympole'
              },
              {
                'Index': '536',
                'Name': 'Palpitoad'
              },
              {
                'Index': '537',
                'Name': 'Seismitoad'
              },
              {
                'Index': '538',
                'Name': 'Throh'
              },
              {
                'Index': '539',
                'Name': 'Sawk'
              },
              {
                'Index': '540',
                'Name': 'Sewaddle'
              },
              {
                'Index': '541',
                'Name': 'Swadloon'
              },
              {
                'Index': '542',
                'Name': 'Leavanny'
              },
              {
                'Index': '543',
                'Name': 'Venipede'
              },
              {
                'Index': '544',
                'Name': 'Whirlipede'
              },
              {
                'Index': '545',
                'Name': 'Scolipede'
              },
              {
                'Index': '546',
                'Name': 'Cottonee'
              },
              {
                'Index': '547',
                'Name': 'Whimsicott'
              },
              {
                'Index': '548',
                'Name': 'Petilil'
              },
              {
                'Index': '549',
                'Name': 'Lilligant'
              },
              {
                'Index': '550',
                'Name': 'Basculin'
              },
              {
                'Index': '551',
                'Name': 'Sandile'
              },
              {
                'Index': '552',
                'Name': 'Krokorok'
              },
              {
                'Index': '553',
                'Name': 'Krookodile'
              },
              {
                'Index': '554',
                'Name': 'Darumaka'
              },
              {
                'Index': '555',
                'Name': 'Darmanitan'
              },
              {
                'Index': '556',
                'Name': 'Maractus'
              },
              {
                'Index': '557',
                'Name': 'Dwebble'
              },
              {
                'Index': '558',
                'Name': 'Crustle'
              },
              {
                'Index': '559',
                'Name': 'Scraggy'
              },
              {
                'Index': '560',
                'Name': 'Scrafty'
              },
              {
                'Index': '561',
                'Name': 'Sigilyph'
              },
              {
                'Index': '562',
                'Name': 'Yamask'
              },
              {
                'Index': '563',
                'Name': 'Cofagrigus'
              },
              {
                'Index': '564',
                'Name': 'Tirtouga'
              },
              {
                'Index': '565',
                'Name': 'Carracosta'
              },
              {
                'Index': '566',
                'Name': 'Archen'
              },
              {
                'Index': '567',
                'Name': 'Archeops'
              },
              {
                'Index': '568',
                'Name': 'Trubbish'
              },
              {
                'Index': '569',
                'Name': 'Garbodor'
              },
              {
                'Index': '570',
                'Name': 'Zorua'
              },
              {
                'Index': '571',
                'Name': 'Zoroark'
              },
              {
                'Index': '572',
                'Name': 'Minccino'
              },
              {
                'Index': '573',
                'Name': 'Cinccino'
              },
              {
                'Index': '574',
                'Name': 'Gothita'
              },
              {
                'Index': '575',
                'Name': 'Gothorita'
              },
              {
                'Index': '576',
                'Name': 'Gothitelle'
              },
              {
                'Index': '577',
                'Name': 'Solosis'
              },
              {
                'Index': '578',
                'Name': 'Duosion'
              },
              {
                'Index': '579',
                'Name': 'Reuniclus'
              },
              {
                'Index': '580',
                'Name': 'Ducklett'
              },
              {
                'Index': '581',
                'Name': 'Swanna'
              },
              {
                'Index': '582',
                'Name': 'Vanillite'
              },
              {
                'Index': '583',
                'Name': 'Vanillish'
              },
              {
                'Index': '584',
                'Name': 'Vanilluxe'
              },
              {
                'Index': '585',
                'Name': 'Deerling'
              },
              {
                'Index': '586',
                'Name': 'Sawsbuck'
              },
              {
                'Index': '587',
                'Name': 'Emolga'
              },
              {
                'Index': '588',
                'Name': 'Karrablast'
              },
              {
                'Index': '589',
                'Name': 'Escavalier'
              },
              {
                'Index': '590',
                'Name': 'Foongus'
              },
              {
                'Index': '591',
                'Name': 'Amoonguss'
              },
              {
                'Index': '592',
                'Name': 'Frillish'
              },
              {
                'Index': '593',
                'Name': 'Jellicent'
              },
              {
                'Index': '594',
                'Name': 'Alomomola'
              },
              {
                'Index': '595',
                'Name': 'Joltik'
              },
              {
                'Index': '596',
                'Name': 'Galvantula'
              },
              {
                'Index': '597',
                'Name': 'Ferroseed'
              },
              {
                'Index': '598',
                'Name': 'Ferrothorn'
              },
              {
                'Index': '599',
                'Name': 'Klink'
              },
              {
                'Index': '600',
                'Name': 'Klang'
              },
              {
                'Index': '601',
                'Name': 'Klinklang'
              },
              {
                'Index': '602',
                'Name': 'Tynamo'
              },
              {
                'Index': '603',
                'Name': 'Eelektrik'
              },
              {
                'Index': '604',
                'Name': 'Eelektross'
              },
              {
                'Index': '605',
                'Name': 'Elgyem'
              },
              {
                'Index': '606',
                'Name': 'Beheeyem'
              },
              {
                'Index': '607',
                'Name': 'Litwick'
              },
              {
                'Index': '608',
                'Name': 'Lampent'
              },
              {
                'Index': '609',
                'Name': 'Chandelure'
              },
              {
                'Index': '610',
                'Name': 'Axew'
              },
              {
                'Index': '611',
                'Name': 'Fraxure'
              },
              {
                'Index': '612',
                'Name': 'Haxorus'
              },
              {
                'Index': '613',
                'Name': 'Cubchoo'
              },
              {
                'Index': '614',
                'Name': 'Beartic'
              },
              {
                'Index': '615',
                'Name': 'Cryogonal'
              },
              {
                'Index': '616',
                'Name': 'Shelmet'
              },
              {
                'Index': '617',
                'Name': 'Accelgor'
              },
              {
                'Index': '618',
                'Name': 'Stunfisk'
              },
              {
                'Index': '619',
                'Name': 'Mienfoo'
              },
              {
                'Index': '620',
                'Name': 'Mienshao'
              },
              {
                'Index': '621',
                'Name': 'Druddigon'
              },
              {
                'Index': '622',
                'Name': 'Golett'
              },
              {
                'Index': '623',
                'Name': 'Golurk'
              },
              {
                'Index': '624',
                'Name': 'Pawniard'
              },
              {
                'Index': '625',
                'Name': 'Bisharp'
              },
              {
                'Index': '626',
                'Name': 'Bouffalant'
              },
              {
                'Index': '627',
                'Name': 'Rufflet'
              },
              {
                'Index': '628',
                'Name': 'Braviary'
              },
              {
                'Index': '629',
                'Name': 'Vullaby'
              },
              {
                'Index': '630',
                'Name': 'Mandibuzz'
              },
              {
                'Index': '631',
                'Name': 'Heatmor'
              },
              {
                'Index': '632',
                'Name': 'Durant'
              },
              {
                'Index': '633',
                'Name': 'Deino'
              },
              {
                'Index': '634',
                'Name': 'Zweilous'
              },
              {
                'Index': '635',
                'Name': 'Hydreigon'
              },
              {
                'Index': '636',
                'Name': 'Larvesta'
              },
              {
                'Index': '637',
                'Name': 'Volcarona'
              },
              {
                'Index': '638',
                'Name': 'Cobalion'
              },
              {
                'Index': '639',
                'Name': 'Terrakion'
              },
              {
                'Index': '640',
                'Name': 'Virizion'
              },
              {
                'Index': '641',
                'Name': 'Tornadus'
              },
              {
                'Index': '642',
                'Name': 'Thundurus'
              },
              {
                'Index': '643',
                'Name': 'Reshiram'
              },
              {
                'Index': '644',
                'Name': 'Zekrom'
              },
              {
                'Index': '645',
                'Name': 'Landorus'
              },
              {
                'Index': '646',
                'Name': 'Kyurem'
              },
              {
                'Index': '647',
                'Name': 'Keldeo'
              },
              {
                'Index': '648',
                'Name': 'Meloetta'
              },
              {
                'Index': '649',
                'Name': 'Genesect'
              },
              {
                'Index': '650',
                'Name': 'Chespin'
              },
              {
                'Index': '651',
                'Name': 'Quilladin'
              },
              {
                'Index': '652',
                'Name': 'Chesnaught'
              },
              {
                'Index': '653',
                'Name': 'Fennekin'
              },
              {
                'Index': '654',
                'Name': 'Braixen'
              },
              {
                'Index': '655',
                'Name': 'Delphox'
              },
              {
                'Index': '656',
                'Name': 'Froakie'
              },
              {
                'Index': '657',
                'Name': 'Frogadier'
              },
              {
                'Index': '658',
                'Name': 'Greninja'
              },
              {
                'Index': '659',
                'Name': 'Bunnelby'
              },
              {
                'Index': '660',
                'Name': 'Diggersby'
              },
              {
                'Index': '661',
                'Name': 'Fletchling'
              },
              {
                'Index': '662',
                'Name': 'Fletchinder'
              },
              {
                'Index': '663',
                'Name': 'Talonflame'
              },
              {
                'Index': '664',
                'Name': 'Scatterbug'
              },
              {
                'Index': '665',
                'Name': 'Spewpa'
              },
              {
                'Index': '666',
                'Name': 'Vivillon'
              },
              {
                'Index': '667',
                'Name': 'Litleo'
              },
              {
                'Index': '668',
                'Name': 'Pyroar'
              },
              {
                'Index': '669',
                'Name': 'Flabébé'
              },
              {
                'Index': '670',
                'Name': 'Floette'
              },
              {
                'Index': '671',
                'Name': 'Florges'
              },
              {
                'Index': '672',
                'Name': 'Skiddo'
              },
              {
                'Index': '673',
                'Name': 'Gogoat'
              },
              {
                'Index': '674',
                'Name': 'Pancham'
              },
              {
                'Index': '675',
                'Name': 'Pangoro'
              },
              {
                'Index': '676',
                'Name': 'Furfrou'
              },
              {
                'Index': '677',
                'Name': 'Espurr'
              },
              {
                'Index': '678',
                'Name': 'Meowstic'
              },
              {
                'Index': '679',
                'Name': 'Honedge'
              },
              {
                'Index': '680',
                'Name': 'Doublade'
              },
              {
                'Index': '681',
                'Name': 'Aegislash'
              },
              {
                'Index': '682',
                'Name': 'Spritzee'
              },
              {
                'Index': '683',
                'Name': 'Aromatisse'
              },
              {
                'Index': '684',
                'Name': 'Swirlix'
              },
              {
                'Index': '685',
                'Name': 'Slurpuff'
              },
              {
                'Index': '686',
                'Name': 'Inkay'
              },
              {
                'Index': '687',
                'Name': 'Malamar'
              },
              {
                'Index': '688',
                'Name': 'Binacle'
              },
              {
                'Index': '689',
                'Name': 'Barbaracle'
              },
              {
                'Index': '690',
                'Name': 'Skrelp'
              },
              {
                'Index': '691',
                'Name': 'Dragalge'
              },
              {
                'Index': '692',
                'Name': 'Clauncher'
              },
              {
                'Index': '693',
                'Name': 'Clawitzer'
              },
              {
                'Index': '694',
                'Name': 'Helioptile'
              },
              {
                'Index': '695',
                'Name': 'Heliolisk'
              },
              {
                'Index': '696',
                'Name': 'Tyrunt'
              },
              {
                'Index': '697',
                'Name': 'Tyrantrum'
              },
              {
                'Index': '698',
                'Name': 'Amaura'
              },
              {
                'Index': '699',
                'Name': 'Aurorus'
              },
              {
                'Index': '700',
                'Name': 'Sylveon'
              },
              {
                'Index': '701',
                'Name': 'Hawlucha'
              },
              {
                'Index': '702',
                'Name': 'Dedenne'
              },
              {
                'Index': '703',
                'Name': 'Carbink'
              },
              {
                'Index': '704',
                'Name': 'Goomy'
              },
              {
                'Index': '705',
                'Name': 'Sliggoo'
              },
              {
                'Index': '706',
                'Name': 'Goodra'
              },
              {
                'Index': '707',
                'Name': 'Klefki'
              },
              {
                'Index': '708',
                'Name': 'Phantump'
              },
              {
                'Index': '709',
                'Name': 'Trevenant'
              },
              {
                'Index': '710',
                'Name': 'Pumpkaboo'
              },
              {
                'Index': '711',
                'Name': 'Gourgeist'
              },
              {
                'Index': '712',
                'Name': 'Bergmite'
              },
              {
                'Index': '713',
                'Name': 'Avalugg'
              },
              {
                'Index': '714',
                'Name': 'Noibat'
              },
              {
                'Index': '715',
                'Name': 'Noivern'
              },
              {
                'Index': '716',
                'Name': 'Xerneas'
              },
              {
                'Index': '717',
                'Name': 'Yveltal'
              },
              {
                'Index': '718',
                'Name': 'Zygarde'
              },
              {
                'Index': '719',
                'Name': 'Diancie'
              },
              {
                'Index': '720',
                'Name': 'Hoopa'
              },
              {
                'Index': '721',
                'Name': 'Volcanion'
              },
              {
                'Index': '722',
                'Name': 'Rowlet'
              },
              {
                'Index': '723',
                'Name': 'Dartrix'
              },
              {
                'Index': '724',
                'Name': 'Decidueye'
              },
              {
                'Index': '725',
                'Name': 'Litten'
              },
              {
                'Index': '726',
                'Name': 'Torracat'
              },
              {
                'Index': '727',
                'Name': 'Incineroar'
              },
              {
                'Index': '728',
                'Name': 'Popplio'
              },
              {
                'Index': '729',
                'Name': 'Brionne'
              },
              {
                'Index': '730',
                'Name': 'Primarina'
              },
              {
                'Index': '731',
                'Name': 'Pikipek'
              },
              {
                'Index': '732',
                'Name': 'Trumbeak'
              },
              {
                'Index': '733',
                'Name': 'Toucannon'
              },
              {
                'Index': '734',
                'Name': 'Yungoos'
              },
              {
                'Index': '735',
                'Name': 'Gumshoos'
              },
              {
                'Index': '736',
                'Name': 'Grubbin'
              },
              {
                'Index': '737',
                'Name': 'Charjabug'
              },
              {
                'Index': '738',
                'Name': 'Vikavolt'
              },
              {
                'Index': '739',
                'Name': 'Crabrawler'
              },
              {
                'Index': '740',
                'Name': 'Crabominable'
              },
              {
                'Index': '741',
                'Name': 'Oricorio'
              },
              {
                'Index': '742',
                'Name': 'Cutiefly'
              },
              {
                'Index': '743',
                'Name': 'Ribombee'
              },
              {
                'Index': '744',
                'Name': 'Rockruff'
              },
              {
                'Index': '745',
                'Name': 'Lycanroc'
              },
              {
                'Index': '746',
                'Name': 'Wishiwashi'
              },
              {
                'Index': '747',
                'Name': 'Mareanie'
              },
              {
                'Index': '748',
                'Name': 'Toxapex'
              },
              {
                'Index': '749',
                'Name': 'Mudbray'
              },
              {
                'Index': '750',
                'Name': 'Mudsdale'
              },
              {
                'Index': '751',
                'Name': 'Dewpider'
              },
              {
                'Index': '752',
                'Name': 'Araquanid'
              },
              {
                'Index': '753',
                'Name': 'Fomantis'
              },
              {
                'Index': '754',
                'Name': 'Lurantis'
              },
              {
                'Index': '755',
                'Name': 'Morelull'
              },
              {
                'Index': '756',
                'Name': 'Shiinotic'
              },
              {
                'Index': '757',
                'Name': 'Salandit'
              },
              {
                'Index': '758',
                'Name': 'Salazzle'
              },
              {
                'Index': '759',
                'Name': 'Stufful'
              },
              {
                'Index': '760',
                'Name': 'Bewear'
              },
              {
                'Index': '761',
                'Name': 'Bounsweet'
              },
              {
                'Index': '762',
                'Name': 'Steenee'
              },
              {
                'Index': '763',
                'Name': 'Tsareena'
              },
              {
                'Index': '764',
                'Name': 'Comfey'
              },
              {
                'Index': '765',
                'Name': 'Oranguru'
              },
              {
                'Index': '766',
                'Name': 'Passimian'
              },
              {
                'Index': '767',
                'Name': 'Wimpod'
              },
              {
                'Index': '768',
                'Name': 'Golisopod'
              },
              {
                'Index': '769',
                'Name': 'Sandygast'
              },
              {
                'Index': '770',
                'Name': 'Palossand'
              },
              {
                'Index': '771',
                'Name': 'Pyukumuku'
              },
              {
                'Index': '772',
                'Name': 'Type: Null'
              },
              {
                'Index': '773',
                'Name': 'Silvally'
              },
              {
                'Index': '774',
                'Name': 'Minior'
              },
              {
                'Index': '775',
                'Name': 'Komala'
              },
              {
                'Index': '776',
                'Name': 'Turtonator'
              },
              {
                'Index': '777',
                'Name': 'Togedemaru'
              },
              {
                'Index': '778',
                'Name': 'Mimikyu'
              },
              {
                'Index': '779',
                'Name': 'Bruxish'
              },
              {
                'Index': '780',
                'Name': 'Drampa'
              },
              {
                'Index': '781',
                'Name': 'Dhelmise'
              },
              {
                'Index': '782',
                'Name': 'Jangmo-o'
              },
              {
                'Index': '783',
                'Name': 'Hakamo-o'
              },
              {
                'Index': '784',
                'Name': 'Kommo-o'
              },
              {
                'Index': '785',
                'Name': 'Tapu Koko'
              },
              {
                'Index': '786',
                'Name': 'Tapu Lele'
              },
              {
                'Index': '787',
                'Name': 'Tapu Bulu'
              },
              {
                'Index': '788',
                'Name': 'Tapu Fini'
              },
              {
                'Index': '789',
                'Name': 'Cosmog'
              },
              {
                'Index': '790',
                'Name': 'Cosmoem'
              },
              {
                'Index': '791',
                'Name': 'Solgaleo'
              },
              {
                'Index': '792',
                'Name': 'Lunala'
              },
              {
                'Index': '793',
                'Name': 'Nihilego'
              },
              {
                'Index': '794',
                'Name': 'Buzzwole'
              },
              {
                'Index': '795',
                'Name': 'Pheromosa'
              },
              {
                'Index': '796',
                'Name': 'Xurkitree'
              },
              {
                'Index': '797',
                'Name': 'Celesteela'
              },
              {
                'Index': '798',
                'Name': 'Kartana'
              },
              {
                'Index': '799',
                'Name': 'Guzzlord'
              },
              {
                'Index': '800',
                'Name': 'Necrozma'
              },
              {
                'Index': '801',
                'Name': 'Magearna'
              },
              {
                'Index': '802',
                'Name': 'Marshadow'
              },
              {
                'Index': '803',
                'Name': 'Poipole'
              },
              {
                'Index': '804',
                'Name': 'Naganadel'
              },
              {
                'Index': '805',
                'Name': 'Stakataka'
              },
              {
                'Index': '806',
                'Name': 'Blacephalon'
              },
              {
                'Index': '807',
                'Name': 'Zeraora'
              },
              {
                'Index': '808',
                'Name': 'Meltan'
              },
              {
                'Index': '809',
                'Name': 'Melmetal'
              },
              {
                'Index': '810',
                'Name': 'Grookey'
              },
              {
                'Index': '811',
                'Name': 'Thwackey'
              },
              {
                'Index': '812',
                'Name': 'Rillaboom'
              },
              {
                'Index': '813',
                'Name': 'Scorbunny'
              },
              {
                'Index': '814',
                'Name': 'Raboot'
              },
              {
                'Index': '815',
                'Name': 'Cinderace'
              },
              {
                'Index': '816',
                'Name': 'Sobble'
              },
              {
                'Index': '817',
                'Name': 'Drizzile'
              },
              {
                'Index': '818',
                'Name': 'Inteleon'
              },
              {
                'Index': '819',
                'Name': 'Skwovet'
              },
              {
                'Index': '820',
                'Name': 'Greedent'
              },
              {
                'Index': '821',
                'Name': 'Rookidee'
              },
              {
                'Index': '822',
                'Name': 'Corvisquire'
              },
              {
                'Index': '823',
                'Name': 'Corviknight'
              },
              {
                'Index': '824',
                'Name': 'Blipbug'
              },
              {
                'Index': '825',
                'Name': 'Dottler'
              },
              {
                'Index': '826',
                'Name': 'Orbeetle'
              },
              {
                'Index': '827',
                'Name': 'Nickit'
              },
              {
                'Index': '828',
                'Name': 'Thievul'
              },
              {
                'Index': '829',
                'Name': 'Gossifleur'
              },
              {
                'Index': '830',
                'Name': 'Eldegoss'
              },
              {
                'Index': '831',
                'Name': 'Wooloo'
              },
              {
                'Index': '832',
                'Name': 'Dubwool'
              },
              {
                'Index': '833',
                'Name': 'Chewtle'
              },
              {
                'Index': '834',
                'Name': 'Drednaw'
              },
              {
                'Index': '835',
                'Name': 'Yamper'
              },
              {
                'Index': '836',
                'Name': 'Boltund'
              },
              {
                'Index': '837',
                'Name': 'Rolycoly'
              },
              {
                'Index': '838',
                'Name': 'Carkol'
              },
              {
                'Index': '839',
                'Name': 'Coalossal'
              },
              {
                'Index': '840',
                'Name': 'Applin'
              },
              {
                'Index': '841',
                'Name': 'Flapple'
              },
              {
                'Index': '842',
                'Name': 'Appletun'
              },
              {
                'Index': '843',
                'Name': 'Silicobra'
              },
              {
                'Index': '844',
                'Name': 'Sandaconda'
              },
              {
                'Index': '845',
                'Name': 'Cramorant'
              },
              {
                'Index': '846',
                'Name': 'Arrokuda'
              },
              {
                'Index': '847',
                'Name': 'Barraskewda'
              },
              {
                'Index': '848',
                'Name': 'Toxel'
              },
              {
                'Index': '849',
                'Name': 'Toxtricity'
              },
              {
                'Index': '850',
                'Name': 'Sizzlipede'
              },
              {
                'Index': '851',
                'Name': 'Centiskorch'
              },
              {
                'Index': '852',
                'Name': 'Clobbopus'
              },
              {
                'Index': '853',
                'Name': 'Grapploct'
              },
              {
                'Index': '854',
                'Name': 'Sinistea'
              },
              {
                'Index': '855',
                'Name': 'Polteageist'
              },
              {
                'Index': '856',
                'Name': 'Hatenna'
              },
              {
                'Index': '857',
                'Name': 'Hattrem'
              },
              {
                'Index': '858',
                'Name': 'Hatterene'
              },
              {
                'Index': '859',
                'Name': 'Impidimp'
              },
              {
                'Index': '860',
                'Name': 'Morgrem'
              },
              {
                'Index': '861',
                'Name': 'Grimmsnarl'
              },
              {
                'Index': '862',
                'Name': 'Obstagoon'
              },
              {
                'Index': '863',
                'Name': 'Perrserker'
              },
              {
                'Index': '864',
                'Name': 'Cursola'
              },
              {
                'Index': '865',
                'Name': 'Sirfetch\'d'
              },
              {
                'Index': '866',
                'Name': 'Mr. Rime'
              },
              {
                'Index': '867',
                'Name': 'Runerigus'
              },
              {
                'Index': '868',
                'Name': 'Milcery'
              },
              {
                'Index': '869',
                'Name': 'Alcremie'
              },
              {
                'Index': '870',
                'Name': 'Falinks'
              },
              {
                'Index': '871',
                'Name': 'Pincurchin'
              },
              {
                'Index': '872',
                'Name': 'Snom'
              },
              {
                'Index': '873',
                'Name': 'Frosmoth'
              },
              {
                'Index': '874',
                'Name': 'Stonjourner'
              },
              {
                'Index': '875',
                'Name': 'Eiscue'
              },
              {
                'Index': '876',
                'Name': 'Indeedee'
              },
              {
                'Index': '877',
                'Name': 'Morpeko'
              },
              {
                'Index': '878',
                'Name': 'Cufant'
              },
              {
                'Index': '879',
                'Name': 'Copperajah'
              },
              {
                'Index': '880',
                'Name': 'Dracozolt'
              },
              {
                'Index': '881',
                'Name': 'Arctozolt'
              },
              {
                'Index': '882',
                'Name': 'Dracovish'
              },
              {
                'Index': '883',
                'Name': 'Arctovish'
              },
              {
                'Index': '884',
                'Name': 'Duraludon'
              },
              {
                'Index': '885',
                'Name': 'Dreepy'
              },
              {
                'Index': '886',
                'Name': 'Drakloak'
              },
              {
                'Index': '887',
                'Name': 'Dragapult'
              },
              {
                'Index': '888',
                'Name': 'Zacian'
              },
              {
                'Index': '889',
                'Name': 'Zamazenta'
              },
              {
                'Index': '890',
                'Name': 'Eternatus'
              },
              {
                'Index': '891',
                'Name': 'Kubfu'
              },
              {
                'Index': '892',
                'Name': 'Urshifu'
              },
              {
                'Index': '893',
                'Name': 'Zarude'
              },
              {
                'Index': '894',
                'Name': 'Regieleki'
              },
              {
                'Index': '895',
                'Name': 'Regidrago'
              },
              {
                'Index': '896',
                'Name': 'Glastrier'
              },
              {
                'Index': '897',
                'Name': 'Spectrier'
              },
              {
                'Index': '898',
                'Name': 'Calyrex'
              },
              {
                'Index': '899',
                'Name': 'Wyrdeer'
              },
              {
                'Index': '900',
                'Name': 'Kleavor'
              },
              {
                'Index': '901',
                'Name': 'Ursaluna'
              },
              {
                'Index': '902',
                'Name': 'Basculegion'
              },
              {
                'Index': '903',
                'Name': 'Sneasler'
              },
              {
                'Index': '904',
                'Name': 'Overqwil'
              },
              {
                'Index': '905',
                'Name': 'Enamorus'
              },
              {
                'Index': '906',
                'Name': 'Sprigatito'
              },
              {
                'Index': '907',
                'Name': 'Floragato'
              },
              {
                'Index': '908',
                'Name': 'Meowscarada'
              },
              {
                'Index': '909',
                'Name': 'Fuecoco'
              },
              {
                'Index': '910',
                'Name': 'Crocalor'
              },
              {
                'Index': '911',
                'Name': 'Skeledirge'
              },
              {
                'Index': '912',
                'Name': 'Quaxly'
              },
              {
                'Index': '913',
                'Name': 'Quaxwell'
              },
              {
                'Index': '914',
                'Name': 'Quaquaval'
              },
              {
                'Index': '915',
                'Name': 'Lechonk'
              },
              {
                'Index': '916',
                'Name': 'Oinkologne'
              },
              {
                'Index': '917',
                'Name': 'Tarountula'
              },
              {
                'Index': '918',
                'Name': 'Spidops'
              },
              {
                'Index': '919',
                'Name': 'Nymble'
              },
              {
                'Index': '920',
                'Name': 'Lokix'
              },
              {
                'Index': '921',
                'Name': 'Pawmi'
              },
              {
                'Index': '922',
                'Name': 'Pawmo'
              },
              {
                'Index': '923',
                'Name': 'Pawmot'
              },
              {
                'Index': '924',
                'Name': 'Tandemaus'
              },
              {
                'Index': '925',
                'Name': 'Maushold'
              },
              {
                'Index': '926',
                'Name': 'Fidough'
              },
              {
                'Index': '927',
                'Name': 'Dachsbun'
              },
              {
                'Index': '928',
                'Name': 'Smoliv'
              },
              {
                'Index': '929',
                'Name': 'Dolliv'
              },
              {
                'Index': '930',
                'Name': 'Arboliva'
              },
              {
                'Index': '931',
                'Name': 'Squawkabilly'
              },
              {
                'Index': '932',
                'Name': 'Nacli'
              },
              {
                'Index': '933',
                'Name': 'Naclstack'
              },
              {
                'Index': '934',
                'Name': 'Garganacl'
              },
              {
                'Index': '935',
                'Name': 'Charcadet'
              },
              {
                'Index': '936',
                'Name': 'Armarouge'
              },
              {
                'Index': '937',
                'Name': 'Ceruledge'
              },
              {
                'Index': '938',
                'Name': 'Tadbulb'
              },
              {
                'Index': '939',
                'Name': 'Bellibolt'
              },
              {
                'Index': '940',
                'Name': 'Wattrel'
              },
              {
                'Index': '941',
                'Name': 'Kilowattrel'
              },
              {
                'Index': '942',
                'Name': 'Maschiff'
              },
              {
                'Index': '943',
                'Name': 'Mabosstiff'
              },
              {
                'Index': '944',
                'Name': 'Shroodle'
              },
              {
                'Index': '945',
                'Name': 'Grafaiai'
              },
              {
                'Index': '946',
                'Name': 'Bramblin'
              },
              {
                'Index': '947',
                'Name': 'Brambleghast'
              },
              {
                'Index': '948',
                'Name': 'Toedscool'
              },
              {
                'Index': '949',
                'Name': 'Toedscruel'
              },
              {
                'Index': '950',
                'Name': 'Klawf'
              },
              {
                'Index': '951',
                'Name': 'Capsakid'
              },
              {
                'Index': '952',
                'Name': 'Scovillain'
              },
              {
                'Index': '953',
                'Name': 'Rellor'
              },
              {
                'Index': '954',
                'Name': 'Rabsca'
              },
              {
                'Index': '955',
                'Name': 'Flittle'
              },
              {
                'Index': '956',
                'Name': 'Espathra'
              },
              {
                'Index': '957',
                'Name': 'Tinkatink'
              },
              {
                'Index': '958',
                'Name': 'Tinkatuff'
              },
              {
                'Index': '959',
                'Name': 'Tinkaton'
              },
              {
                'Index': '960',
                'Name': 'Wiglett'
              },
              {
                'Index': '961',
                'Name': 'Wugtrio'
              },
              {
                'Index': '962',
                'Name': 'Bombirdier'
              },
              {
                'Index': '963',
                'Name': 'Finizen'
              },
              {
                'Index': '964',
                'Name': 'Palafin'
              },
              {
                'Index': '965',
                'Name': 'Varoom'
              },
              {
                'Index': '966',
                'Name': 'Revavroom'
              },
              {
                'Index': '967',
                'Name': 'Cyclizar'
              },
              {
                'Index': '968',
                'Name': 'Orthworm'
              },
              {
                'Index': '969',
                'Name': 'Glimmet'
              },
              {
                'Index': '970',
                'Name': 'Glimmora'
              },
              {
                'Index': '971',
                'Name': 'Greavard'
              },
              {
                'Index': '972',
                'Name': 'Houndstone'
              },
              {
                'Index': '973',
                'Name': 'Flamigo'
              },
              {
                'Index': '974',
                'Name': 'Cetoddle'
              },
              {
                'Index': '975',
                'Name': 'Cetitan'
              },
              {
                'Index': '976',
                'Name': 'Veluza'
              },
              {
                'Index': '977',
                'Name': 'Dondozo'
              },
              {
                'Index': '978',
                'Name': 'Tatsugiri'
              },
              {
                'Index': '979',
                'Name': 'Annihilape'
              },
              {
                'Index': '980',
                'Name': 'Clodsire'
              },
              {
                'Index': '981',
                'Name': 'Farigiraf'
              },
              {
                'Index': '982',
                'Name': 'Dudunsparce'
              },
              {
                'Index': '983',
                'Name': 'Kingambit'
              },
              {
                'Index': '984',
                'Name': 'Great Tusk'
              },
              {
                'Index': '985',
                'Name': 'Scream Tail'
              },
              {
                'Index': '986',
                'Name': 'Brute Bonnet'
              },
              {
                'Index': '987',
                'Name': 'Flutter Mane'
              },
              {
                'Index': '988',
                'Name': 'Slither Wing'
              },
              {
                'Index': '989',
                'Name': 'Sandy Shocks'
              },
              {
                'Index': '990',
                'Name': 'Iron Treads'
              },
              {
                'Index': '991',
                'Name': 'Iron Bundle'
              },
              {
                'Index': '992',
                'Name': 'Iron Hands'
              },
              {
                'Index': '993',
                'Name': 'Iron Jugulis'
              },
              {
                'Index': '994',
                'Name': 'Iron Moth'
              },
              {
                'Index': '995',
                'Name': 'Iron Thorns'
              },
              {
                'Index': '996',
                'Name': 'Frigibax'
              },
              {
                'Index': '997',
                'Name': 'Arctibax'
              },
              {
                'Index': '998',
                'Name': 'Baxcalibur'
              },
              {
                'Index': '999',
                'Name': 'Gimmighoul'
              },
              {
                'Index': '1000',
                'Name': 'Gholdengo'
              },
              {
                'Index': '1001',
                'Name': 'Wo-Chien'
              },
              {
                'Index': '1002',
                'Name': 'Chien-Pao'
              },
              {
                'Index': '1003',
                'Name': 'Ting-Lu'
              },
              {
                'Index': '1004',
                'Name': 'Chi-Yu'
              },
              {
                'Index': '1005',
                'Name': 'Roaring Moon'
              },
              {
                'Index': '1006',
                'Name': 'Iron Valiant'
              },
              {
                'Index': '1007',
                'Name': 'Koraidon'
              },
              {
                'Index': '1008',
                'Name': 'Miraidon'
              },
              {
                'Index': '1009',
                'Name': 'Walking Wake'
              },
              {
                'Index': '1010',
                'Name': 'Iron Leaves'
              },
              {
                'Index': '1011',
                'Name': 'Dipplin'
              },
              {
                'Index': '1012',
                'Name': 'Poltchageist'
              },
              {
                'Index': '1013',
                'Name': 'Sinistcha'
              },
              {
                'Index': '1014',
                'Name': 'Okidogi'
              },
              {
                'Index': '1015',
                'Name': 'Munkidori'
              },
              {
                'Index': '1016',
                'Name': 'Fezandipiti'
              },
              {
                'Index': '1017',
                'Name': 'Ogerpon'
              },
              {
                'Index': '1018',
                'Name': 'Archaludon'
              },
              {
                'Index': '1019',
                'Name': 'Hydrapple'
              },
              {
                'Index': '1020',
                'Name': 'Gouging Fire'
              },
              {
                'Index': '1021',
                'Name': 'Raging Bolt'
              },
              {
                'Index': '1022',
                'Name': 'Iron Boulder'
              },
              {
                'Index': '1023',
                'Name': 'Iron Crown'
              },
              {
                'Index': '1024',
                'Name': 'Terapagos'
              },
              {
                'Index': '1025',
                'Name': 'Pecharunt'
              }
            ],
            baseCdnUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/",
            championsToShow: 36,
            championIndicesToUse: [],
            championIndicesBatches: [[]],
            yourChampion: {
                id: "",
                name: "",
                portrait: "",
            },
            showHowToPlay: false,
        };
    }

    getChampionSplash = (championId, skinIndex) => {
        const url = `${this.state.baseCdnUrl}${championId}.png`; // (0 means default skin)
        return url;
    }
    
    getChampionLoadingScreenImage = (championId, skinIndex) => {
        const url = `${this.state.baseCdnUrl}${championId}.png`; // (0 means default skin)
        return url;
    }
    
    getChampionPortrait = (championId) => {
        const url = `${this.state.baseCdnUrl}${championId}.png`;
        return url;
    }

    getRandomChampion = () => {
        const rand_int = Math.floor(Math.random() * this.state.championIndicesToUse.length);
        const selected_champion_index = this.state.championIndicesToUse[rand_int];
        const selected_champion = this.state.champions[selected_champion_index];
        this.setState({
            yourChampion: {
                id: selected_champion.id,
                name: selected_champion.name,
                portrait: this.getChampionPortrait(selected_champion.id),
            }
        })
    }

    finishLoadingBoard = () => {
        this.batchChampionsForWindowSize();
        this.getRandomChampion();
    }

    batchChampionsForWindowSize = () => {
        function spliceIntoChunks(arr, chunkSize) {
            const res = [];
            while (arr.length > 0) {
                const chunk = arr.splice(0, chunkSize);
                res.push(chunk);
            }
            return res;
        }
        const TILE_WIDTH = 120 + 10 // 120px for the champion portrait, 10px for the margin
        const tilesPerRow = Math.floor(window.innerWidth / TILE_WIDTH);
        const championIndicesToUseCopy = Array.from(this.state.championIndicesToUse);
        const championIndicesBatches = spliceIntoChunks(championIndicesToUseCopy, tilesPerRow);
        this.setState({championIndicesBatches: championIndicesBatches});
    }

    shuffleArray = (array) => {
        let shuffledArray = array
            .map(value => ({value, sort: Math.random()}))
            .sort((a, b) => a.sort - b.sort)
            .map(({value}) => value)
        return shuffledArray;
    }

    componentDidMount() {

        try {
            let ddragonVersion = this.state.ddragonVersion;
            let liveChampions = [];
            let doUseLiveValues = false;

            Axios.get("https://ddragon.leagueoflegends.com/api/versions.json")
            .then((response) => {
                ddragonVersion = response.data[0];
                this.setState({
                    ddragonVersion: response.data[0]
                })
            })
            .then(() => {
                Axios.get(`https://ddragon.leagueoflegends.com/cdn/${ddragonVersion}/data/en_US/champion.json`)
                .then(response => {
                    console.log("Received champion data from ddragon for version " + ddragonVersion);

                    for (const key in response.data.data) {
                        const championData = response.data.data[key];
                        liveChampions.push({
                            id: championData.id,
                            name: championData.name,
                        });
                    }
                    this.setState({champions: liveChampions})
                    //doUseLiveValues = true;
                })
            })

            const queryParams = new URLSearchParams(window.location.search);
            const board = queryParams.get('board');
            if (board) {
                // Load board from seed
                try {
                    const championIndicesString = decodeURIComponent(board);
                    const championIndices = championIndicesString.split("-");
                    const indices = championIndices.map(index => parseInt(parseInt(index, 36).toString(10), 10));
                    // This method of validation requires that both clients have the same value for this.state.champions_to_show
                    // This will not work if users gain the ability to change the number of champions to show
                    if(indices.length !== this.state.championsToShow) {
                        throw new Error("The link you were sent was invalid! Or maybe it was copied wrong? Generating a new board.")
                    }
                    const shuffledIndices = this.shuffleArray(indices);
                    this.setState({championIndicesToUse: shuffledIndices}, () => {
                        this.finishLoadingBoard()
                    })
                    return;
                } catch (error) {
                    this.generateNewBoard();
                }
            }
            else {
                const champions = doUseLiveValues ? liveChampions : this.state.champions;

                const allChampionIndices = (new Array(champions.length)).fill(undefined).map((_, i) => i);
                const shuffledChampionIndices = this.shuffleArray(allChampionIndices);
                const selectedChampionIndices = shuffledChampionIndices.slice(0, this.state.championsToShow);
                this.setState({championIndicesToUse: selectedChampionIndices}, () => {
                    this.finishLoadingBoard();
                });

                const encodedChampionIndices = selectedChampionIndices.map(index => {return index.toString(36)});
                const encodedChampionIndicesString = encodeURIComponent(encodedChampionIndices.join("-"));
                window.history.pushState({}, null, `?board=${encodedChampionIndicesString}`)
            }

        } catch (error) {
            alert(error);
            console.log(error);
        }
    }

    generateNewBoard() {
        window.location.href = "/";
    }

    shareThisBoard() {
        if (!navigator.clipboard) {
            alert("Clipboard API not supported, sorry! Manually copy the URL to share this board.");
        }
        navigator.clipboard.writeText(window.location.href).then(function() {
            alert('Link copied to clipboard!');
        }, function(err) {
            alert('Could not copy text, sorry! Manually copy the URL to share this board.');
            console.log(err);
        });
    }
    
    // original plan, saved for progeny
    /*
    Main page -> play game
    -> "generate game link" -> click button
            -> randomly select 36 champions + b64 encode them (this is the url parameter)
            -> going to this link loads the game page with that set of 36 champions 
            -> (but randomly arranges them, + selects one of them as the player's champion)
        gives you a link that you can send to a friend
    */

    toggleHelp = () => {
        this.setState({showHowToPlay: !this.state.showHowToPlay});
    }

    render() {
        const getNewChampionButton = <button onClick={this.getRandomChampion}>GET A NEW CHAMPION</button>
        const generateNewBoardButton = <button onClick={this.generateNewBoard}>GENERATE A NEW BOARD</button>
        const shareButton = <button onClick={this.shareThisBoard}>SHARE THIS BOARD</button>;
        return(
            <div className={"centered"}>
                <h2>Your Champion</h2>
                <h3>(click on any of the champion cards to flip it over)</h3>
                <br/>
                <div className={"my-tile"}>
                    <Tile 
                        championId={this.state.yourChampion.id} 
                        championName={this.state.yourChampion.name} 
                        imageSrc={this.state.yourChampion.portrait} 
                        backImageSrc={tile_backing}
                    />
                </div>
                <br/>
                <button onClick={this.toggleHelp}>{this.state.showHowToPlay ? "HIDE HELP" : "HOW TO PLAY"}</button>
                <br/>
                <span id="help">
                    { this.state.showHowToPlay === true &&
                    (
                    <div>
                        <br/>
                        The site has randomly selected 36 League of Legends champions and populated a game board with it.<br/><br/>
                        To play with somebody else, click {shareButton} (or, copy the URL in your search bar) and paste the copied link to the person you want to play with.<br/><br/>
                        Once you and who you want to play with are on the same URL, play <a href="https://www.youtube.com/watch?v=a76UPzU2VXM">a normal game of Guess Who</a>.<br/><br/>
                        If you want to play a new round with the same board, have all players click {getNewChampionButton}.<br/><br/>
                        If you want to play a round with a new board entirely, click {generateNewBoardButton} (make sure to share the new URL with every player via the SHARE button).<br/><br/>
                        Feel free to zoom out if you would like to see all the tiles without having to scroll up and down.<br/><br/>
                        Happy playing!<br/><br/>
                    </div>
                    )
                    }
                </span>
                <div className={"button-row-menu"}>
                    <span className={"button-row-child"}>{getNewChampionButton}</span>
                    <span className={"button-row-child"}>{shareButton}</span>
                    <span className={"button-row-child"}>{generateNewBoardButton}</span>
                </div>
                <div id="tiles" className={"my-tile tiles"}>
                    {
                        this.state.championIndicesBatches.map((championIndicesBatch, batchIndex) => {
                            return (
                                championIndicesBatch.map((championIndex, tileIndex) => {
                                    const champion = this.state.champions[championIndex];
                                    console.log(champion.id);
                                    return (
                                        <Tile 
                                            key={tileIndex} 
                                            championId={champion.id} 
                                            championName={champion.name} 
                                            imageSrc={this.getChampionPortrait(champion.id)} 
                                            backImageSrc={tile_backing}
                                        />
                                    )
                                })
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default withParams(Board);