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
                'id': '1',
                'name': 'Bulbasaur'
              },
              {
                'id': '2',
                'name': 'Ivysaur'
              },
              {
                'id': '3',
                'name': 'Venusaur'
              },
              {
                'id': '4',
                'name': 'Charmander'
              },
              {
                'id': '5',
                'name': 'Charmeleon'
              },
              {
                'id': '6',
                'name': 'Charizard'
              },
              {
                'id': '7',
                'name': 'Squirtle'
              },
              {
                'id': '8',
                'name': 'Wartortle'
              },
              {
                'id': '9',
                'name': 'Blastoise'
              },
              {
                'id': '10',
                'name': 'Caterpie'
              },
              {
                'id': '11',
                'name': 'Metapod'
              },
              {
                'id': '12',
                'name': 'Butterfree'
              },
              {
                'id': '13',
                'name': 'Weedle'
              },
              {
                'id': '14',
                'name': 'Kakuna'
              },
              {
                'id': '15',
                'name': 'Beedrill'
              },
              {
                'id': '16',
                'name': 'Pidgey'
              },
              {
                'id': '17',
                'name': 'Pidgeotto'
              },
              {
                'id': '18',
                'name': 'Pidgeot'
              },
              {
                'id': '19',
                'name': 'Rattata'
              },
              {
                'id': '20',
                'name': 'Raticate'
              },
              {
                'id': '21',
                'name': 'Spearow'
              },
              {
                'id': '22',
                'name': 'Fearow'
              },
              {
                'id': '23',
                'name': 'Ekans'
              },
              {
                'id': '24',
                'name': 'Arbok'
              },
              {
                'id': '25',
                'name': 'Pikachu'
              },
              {
                'id': '26',
                'name': 'Raichu'
              },
              {
                'id': '27',
                'name': 'Sandshrew'
              },
              {
                'id': '28',
                'name': 'Sandslash'
              },
              {
                'id': '29',
                'name': 'Nidoran♀'
              },
              {
                'id': '30',
                'name': 'Nidorina'
              },
              {
                'id': '31',
                'name': 'Nidoqueen'
              },
              {
                'id': '32',
                'name': 'Nidoran♂'
              },
              {
                'id': '33',
                'name': 'Nidorino'
              },
              {
                'id': '34',
                'name': 'Nidoking'
              },
              {
                'id': '35',
                'name': 'Clefairy'
              },
              {
                'id': '36',
                'name': 'Clefable'
              },
              {
                'id': '37',
                'name': 'Vulpix'
              },
              {
                'id': '38',
                'name': 'Ninetales'
              },
              {
                'id': '39',
                'name': 'Jigglypuff'
              },
              {
                'id': '40',
                'name': 'Wigglytuff'
              },
              {
                'id': '41',
                'name': 'Zubat'
              },
              {
                'id': '42',
                'name': 'Golbat'
              },
              {
                'id': '43',
                'name': 'Oddish'
              },
              {
                'id': '44',
                'name': 'Gloom'
              },
              {
                'id': '45',
                'name': 'Vileplume'
              },
              {
                'id': '46',
                'name': 'Paras'
              },
              {
                'id': '47',
                'name': 'Parasect'
              },
              {
                'id': '48',
                'name': 'Venonat'
              },
              {
                'id': '49',
                'name': 'Venomoth'
              },
              {
                'id': '50',
                'name': 'Diglett'
              },
              {
                'id': '51',
                'name': 'Dugtrio'
              },
              {
                'id': '52',
                'name': 'Meowth'
              },
              {
                'id': '53',
                'name': 'Persian'
              },
              {
                'id': '54',
                'name': 'Psyduck'
              },
              {
                'id': '55',
                'name': 'Golduck'
              },
              {
                'id': '56',
                'name': 'Mankey'
              },
              {
                'id': '57',
                'name': 'Primeape'
              },
              {
                'id': '58',
                'name': 'Growlithe'
              },
              {
                'id': '59',
                'name': 'Arcanine'
              },
              {
                'id': '60',
                'name': 'Poliwag'
              },
              {
                'id': '61',
                'name': 'Poliwhirl'
              },
              {
                'id': '62',
                'name': 'Poliwrath'
              },
              {
                'id': '63',
                'name': 'Abra'
              },
              {
                'id': '64',
                'name': 'Kadabra'
              },
              {
                'id': '65',
                'name': 'Alakazam'
              },
              {
                'id': '66',
                'name': 'Machop'
              },
              {
                'id': '67',
                'name': 'Machoke'
              },
              {
                'id': '68',
                'name': 'Machamp'
              },
              {
                'id': '69',
                'name': 'Bellsprout'
              },
              {
                'id': '70',
                'name': 'Weepinbell'
              },
              {
                'id': '71',
                'name': 'Victreebel'
              },
              {
                'id': '72',
                'name': 'Tentacool'
              },
              {
                'id': '73',
                'name': 'Tentacruel'
              },
              {
                'id': '74',
                'name': 'Geodude'
              },
              {
                'id': '75',
                'name': 'Graveler'
              },
              {
                'id': '76',
                'name': 'Golem'
              },
              {
                'id': '77',
                'name': 'Ponyta'
              },
              {
                'id': '78',
                'name': 'Rapidash'
              },
              {
                'id': '79',
                'name': 'Slowpoke'
              },
              {
                'id': '80',
                'name': 'Slowbro'
              },
              {
                'id': '81',
                'name': 'Magnemite'
              },
              {
                'id': '82',
                'name': 'Magneton'
              },
              {
                'id': '83',
                'name': 'Farfetch\'d'
              },
              {
                'id': '84',
                'name': 'Doduo'
              },
              {
                'id': '85',
                'name': 'Dodrio'
              },
              {
                'id': '86',
                'name': 'Seel'
              },
              {
                'id': '87',
                'name': 'Dewgong'
              },
              {
                'id': '88',
                'name': 'Grimer'
              },
              {
                'id': '89',
                'name': 'Muk'
              },
              {
                'id': '90',
                'name': 'Shellder'
              },
              {
                'id': '91',
                'name': 'Cloyster'
              },
              {
                'id': '92',
                'name': 'Gastly'
              },
              {
                'id': '93',
                'name': 'Haunter'
              },
              {
                'id': '94',
                'name': 'Gengar'
              },
              {
                'id': '95',
                'name': 'Onix'
              },
              {
                'id': '96',
                'name': 'Drowzee'
              },
              {
                'id': '97',
                'name': 'Hypno'
              },
              {
                'id': '98',
                'name': 'Krabby'
              },
              {
                'id': '99',
                'name': 'Kingler'
              },
              {
                'id': '100',
                'name': 'Voltorb'
              },
              {
                'id': '101',
                'name': 'Electrode'
              },
              {
                'id': '102',
                'name': 'Exeggcute'
              },
              {
                'id': '103',
                'name': 'Exeggutor'
              },
              {
                'id': '104',
                'name': 'Cubone'
              },
              {
                'id': '105',
                'name': 'Marowak'
              },
              {
                'id': '106',
                'name': 'Hitmonlee'
              },
              {
                'id': '107',
                'name': 'Hitmonchan'
              },
              {
                'id': '108',
                'name': 'Lickitung'
              },
              {
                'id': '109',
                'name': 'Koffing'
              },
              {
                'id': '110',
                'name': 'Weezing'
              },
              {
                'id': '111',
                'name': 'Rhyhorn'
              },
              {
                'id': '112',
                'name': 'Rhydon'
              },
              {
                'id': '113',
                'name': 'Chansey'
              },
              {
                'id': '114',
                'name': 'Tangela'
              },
              {
                'id': '115',
                'name': 'Kangaskhan'
              },
              {
                'id': '116',
                'name': 'Horsea'
              },
              {
                'id': '117',
                'name': 'Seadra'
              },
              {
                'id': '118',
                'name': 'Goldeen'
              },
              {
                'id': '119',
                'name': 'Seaking'
              },
              {
                'id': '120',
                'name': 'Staryu'
              },
              {
                'id': '121',
                'name': 'Starmie'
              },
              {
                'id': '122',
                'name': 'Mr. Mime'
              },
              {
                'id': '123',
                'name': 'Scyther'
              },
              {
                'id': '124',
                'name': 'Jynx'
              },
              {
                'id': '125',
                'name': 'Electabuzz'
              },
              {
                'id': '126',
                'name': 'Magmar'
              },
              {
                'id': '127',
                'name': 'Pinsir'
              },
              {
                'id': '128',
                'name': 'Tauros'
              },
              {
                'id': '129',
                'name': 'Magikarp'
              },
              {
                'id': '130',
                'name': 'Gyarados'
              },
              {
                'id': '131',
                'name': 'Lapras'
              },
              {
                'id': '132',
                'name': 'Ditto'
              },
              {
                'id': '133',
                'name': 'Eevee'
              },
              {
                'id': '134',
                'name': 'Vaporeon'
              },
              {
                'id': '135',
                'name': 'Jolteon'
              },
              {
                'id': '136',
                'name': 'Flareon'
              },
              {
                'id': '137',
                'name': 'Porygon'
              },
              {
                'id': '138',
                'name': 'Omanyte'
              },
              {
                'id': '139',
                'name': 'Omastar'
              },
              {
                'id': '140',
                'name': 'Kabuto'
              },
              {
                'id': '141',
                'name': 'Kabutops'
              },
              {
                'id': '142',
                'name': 'Aerodactyl'
              },
              {
                'id': '143',
                'name': 'Snorlax'
              },
              {
                'id': '144',
                'name': 'Articuno'
              },
              {
                'id': '145',
                'name': 'Zapdos'
              },
              {
                'id': '146',
                'name': 'Moltres'
              },
              {
                'id': '147',
                'name': 'Dratini'
              },
              {
                'id': '148',
                'name': 'Dragonair'
              },
              {
                'id': '149',
                'name': 'Dragonite'
              },
              {
                'id': '150',
                'name': 'Mewtwo'
              },
              {
                'id': '151',
                'name': 'Mew'
              },
              {
                'id': '152',
                'name': 'Chikorita'
              },
              {
                'id': '153',
                'name': 'Bayleef'
              },
              {
                'id': '154',
                'name': 'Meganium'
              },
              {
                'id': '155',
                'name': 'Cyndaquil'
              },
              {
                'id': '156',
                'name': 'Quilava'
              },
              {
                'id': '157',
                'name': 'Typhlosion'
              },
              {
                'id': '158',
                'name': 'Totodile'
              },
              {
                'id': '159',
                'name': 'Croconaw'
              },
              {
                'id': '160',
                'name': 'Feraligatr'
              },
              {
                'id': '161',
                'name': 'Sentret'
              },
              {
                'id': '162',
                'name': 'Furret'
              },
              {
                'id': '163',
                'name': 'Hoothoot'
              },
              {
                'id': '164',
                'name': 'Noctowl'
              },
              {
                'id': '165',
                'name': 'Ledyba'
              },
              {
                'id': '166',
                'name': 'Ledian'
              },
              {
                'id': '167',
                'name': 'Spinarak'
              },
              {
                'id': '168',
                'name': 'Ariados'
              },
              {
                'id': '169',
                'name': 'Crobat'
              },
              {
                'id': '170',
                'name': 'Chinchou'
              },
              {
                'id': '171',
                'name': 'Lanturn'
              },
              {
                'id': '172',
                'name': 'Pichu'
              },
              {
                'id': '173',
                'name': 'Cleffa'
              },
              {
                'id': '174',
                'name': 'Igglybuff'
              },
              {
                'id': '175',
                'name': 'Togepi'
              },
              {
                'id': '176',
                'name': 'Togetic'
              },
              {
                'id': '177',
                'name': 'Natu'
              },
              {
                'id': '178',
                'name': 'Xatu'
              },
              {
                'id': '179',
                'name': 'Mareep'
              },
              {
                'id': '180',
                'name': 'Flaaffy'
              },
              {
                'id': '181',
                'name': 'Ampharos'
              },
              {
                'id': '182',
                'name': 'Bellossom'
              },
              {
                'id': '183',
                'name': 'Marill'
              },
              {
                'id': '184',
                'name': 'Azumarill'
              },
              {
                'id': '185',
                'name': 'Sudowoodo'
              },
              {
                'id': '186',
                'name': 'Politoed'
              },
              {
                'id': '187',
                'name': 'Hoppip'
              },
              {
                'id': '188',
                'name': 'Skiploom'
              },
              {
                'id': '189',
                'name': 'Jumpluff'
              },
              {
                'id': '190',
                'name': 'Aipom'
              },
              {
                'id': '191',
                'name': 'Sunkern'
              },
              {
                'id': '192',
                'name': 'Sunflora'
              },
              {
                'id': '193',
                'name': 'Yanma'
              },
              {
                'id': '194',
                'name': 'Wooper'
              },
              {
                'id': '195',
                'name': 'Quagsire'
              },
              {
                'id': '196',
                'name': 'Espeon'
              },
              {
                'id': '197',
                'name': 'Umbreon'
              },
              {
                'id': '198',
                'name': 'Murkrow'
              },
              {
                'id': '199',
                'name': 'Slowking'
              },
              {
                'id': '200',
                'name': 'Misdreavus'
              },
              {
                'id': '201',
                'name': 'Unown'
              },
              {
                'id': '202',
                'name': 'Wobbuffet'
              },
              {
                'id': '203',
                'name': 'Girafarig'
              },
              {
                'id': '204',
                'name': 'Pineco'
              },
              {
                'id': '205',
                'name': 'Forretress'
              },
              {
                'id': '206',
                'name': 'Dunsparce'
              },
              {
                'id': '207',
                'name': 'Gligar'
              },
              {
                'id': '208',
                'name': 'Steelix'
              },
              {
                'id': '209',
                'name': 'Snubbull'
              },
              {
                'id': '210',
                'name': 'Granbull'
              },
              {
                'id': '211',
                'name': 'Qwilfish'
              },
              {
                'id': '212',
                'name': 'Scizor'
              },
              {
                'id': '213',
                'name': 'Shuckle'
              },
              {
                'id': '214',
                'name': 'Heracross'
              },
              {
                'id': '215',
                'name': 'Sneasel'
              },
              {
                'id': '216',
                'name': 'Teddiursa'
              },
              {
                'id': '217',
                'name': 'Ursaring'
              },
              {
                'id': '218',
                'name': 'Slugma'
              },
              {
                'id': '219',
                'name': 'Magcargo'
              },
              {
                'id': '220',
                'name': 'Swinub'
              },
              {
                'id': '221',
                'name': 'Piloswine'
              },
              {
                'id': '222',
                'name': 'Corsola'
              },
              {
                'id': '223',
                'name': 'Remoraid'
              },
              {
                'id': '224',
                'name': 'Octillery'
              },
              {
                'id': '225',
                'name': 'Delibird'
              },
              {
                'id': '226',
                'name': 'Mantine'
              },
              {
                'id': '227',
                'name': 'Skarmory'
              },
              {
                'id': '228',
                'name': 'Houndour'
              },
              {
                'id': '229',
                'name': 'Houndoom'
              },
              {
                'id': '230',
                'name': 'Kingdra'
              },
              {
                'id': '231',
                'name': 'Phanpy'
              },
              {
                'id': '232',
                'name': 'Donphan'
              },
              {
                'id': '233',
                'name': 'Porygon2'
              },
              {
                'id': '234',
                'name': 'Stantler'
              },
              {
                'id': '235',
                'name': 'Smeargle'
              },
              {
                'id': '236',
                'name': 'Tyrogue'
              },
              {
                'id': '237',
                'name': 'Hitmontop'
              },
              {
                'id': '238',
                'name': 'Smoochum'
              },
              {
                'id': '239',
                'name': 'Elekid'
              },
              {
                'id': '240',
                'name': 'Magby'
              },
              {
                'id': '241',
                'name': 'Miltank'
              },
              {
                'id': '242',
                'name': 'Blissey'
              },
              {
                'id': '243',
                'name': 'Raikou'
              },
              {
                'id': '244',
                'name': 'Entei'
              },
              {
                'id': '245',
                'name': 'Suicune'
              },
              {
                'id': '246',
                'name': 'Larvitar'
              },
              {
                'id': '247',
                'name': 'Pupitar'
              },
              {
                'id': '248',
                'name': 'Tyranitar'
              },
              {
                'id': '249',
                'name': 'Lugia'
              },
              {
                'id': '250',
                'name': 'Ho-oh'
              },
              {
                'id': '251',
                'name': 'Celebi'
              },
              {
                'id': '252',
                'name': 'Treecko'
              },
              {
                'id': '253',
                'name': 'Grovyle'
              },
              {
                'id': '254',
                'name': 'Sceptile'
              },
              {
                'id': '255',
                'name': 'Torchic'
              },
              {
                'id': '256',
                'name': 'Combusken'
              },
              {
                'id': '257',
                'name': 'Blaziken'
              },
              {
                'id': '258',
                'name': 'Mudkip'
              },
              {
                'id': '259',
                'name': 'Marshtomp'
              },
              {
                'id': '260',
                'name': 'Swampert'
              },
              {
                'id': '261',
                'name': 'Poochyena'
              },
              {
                'id': '262',
                'name': 'Mightyena'
              },
              {
                'id': '263',
                'name': 'Zigzagoon'
              },
              {
                'id': '264',
                'name': 'Linoone'
              },
              {
                'id': '265',
                'name': 'Wurmple'
              },
              {
                'id': '266',
                'name': 'Silcoon'
              },
              {
                'id': '267',
                'name': 'Beautifly'
              },
              {
                'id': '268',
                'name': 'Cascoon'
              },
              {
                'id': '269',
                'name': 'Dustox'
              },
              {
                'id': '270',
                'name': 'Lotad'
              },
              {
                'id': '271',
                'name': 'Lombre'
              },
              {
                'id': '272',
                'name': 'Ludicolo'
              },
              {
                'id': '273',
                'name': 'Seedot'
              },
              {
                'id': '274',
                'name': 'Nuzleaf'
              },
              {
                'id': '275',
                'name': 'Shiftry'
              },
              {
                'id': '276',
                'name': 'Taillow'
              },
              {
                'id': '277',
                'name': 'Swellow'
              },
              {
                'id': '278',
                'name': 'Wingull'
              },
              {
                'id': '279',
                'name': 'Pelipper'
              },
              {
                'id': '280',
                'name': 'Ralts'
              },
              {
                'id': '281',
                'name': 'Kirlia'
              },
              {
                'id': '282',
                'name': 'Gardevoir'
              },
              {
                'id': '283',
                'name': 'Surskit'
              },
              {
                'id': '284',
                'name': 'Masquerain'
              },
              {
                'id': '285',
                'name': 'Shroomish'
              },
              {
                'id': '286',
                'name': 'Breloom'
              },
              {
                'id': '287',
                'name': 'Slakoth'
              },
              {
                'id': '288',
                'name': 'Vigoroth'
              },
              {
                'id': '289',
                'name': 'Slaking'
              },
              {
                'id': '290',
                'name': 'Nincada'
              },
              {
                'id': '291',
                'name': 'Ninjask'
              },
              {
                'id': '292',
                'name': 'Shedinja'
              },
              {
                'id': '293',
                'name': 'Whismur'
              },
              {
                'id': '294',
                'name': 'Loudred'
              },
              {
                'id': '295',
                'name': 'Exploud'
              },
              {
                'id': '296',
                'name': 'Makuhita'
              },
              {
                'id': '297',
                'name': 'Hariyama'
              },
              {
                'id': '298',
                'name': 'Azurill'
              },
              {
                'id': '299',
                'name': 'Nosepass'
              },
              {
                'id': '300',
                'name': 'Skitty'
              },
              {
                'id': '301',
                'name': 'Delcatty'
              },
              {
                'id': '302',
                'name': 'Sableye'
              },
              {
                'id': '303',
                'name': 'Mawile'
              },
              {
                'id': '304',
                'name': 'Aron'
              },
              {
                'id': '305',
                'name': 'Lairon'
              },
              {
                'id': '306',
                'name': 'Aggron'
              },
              {
                'id': '307',
                'name': 'Meditite'
              },
              {
                'id': '308',
                'name': 'Medicham'
              },
              {
                'id': '309',
                'name': 'Electrike'
              },
              {
                'id': '310',
                'name': 'Manectric'
              },
              {
                'id': '311',
                'name': 'Plusle'
              },
              {
                'id': '312',
                'name': 'Minun'
              },
              {
                'id': '313',
                'name': 'Volbeat'
              },
              {
                'id': '314',
                'name': 'Illumise'
              },
              {
                'id': '315',
                'name': 'Roselia'
              },
              {
                'id': '316',
                'name': 'Gulpin'
              },
              {
                'id': '317',
                'name': 'Swalot'
              },
              {
                'id': '318',
                'name': 'Carvanha'
              },
              {
                'id': '319',
                'name': 'Sharpedo'
              },
              {
                'id': '320',
                'name': 'Wailmer'
              },
              {
                'id': '321',
                'name': 'Wailord'
              },
              {
                'id': '322',
                'name': 'Numel'
              },
              {
                'id': '323',
                'name': 'Camerupt'
              },
              {
                'id': '324',
                'name': 'Torkoal'
              },
              {
                'id': '325',
                'name': 'Spoink'
              },
              {
                'id': '326',
                'name': 'Grumpig'
              },
              {
                'id': '327',
                'name': 'Spinda'
              },
              {
                'id': '328',
                'name': 'Trapinch'
              },
              {
                'id': '329',
                'name': 'Vibrava'
              },
              {
                'id': '330',
                'name': 'Flygon'
              },
              {
                'id': '331',
                'name': 'Cacnea'
              },
              {
                'id': '332',
                'name': 'Cacturne'
              },
              {
                'id': '333',
                'name': 'Swablu'
              },
              {
                'id': '334',
                'name': 'Altaria'
              },
              {
                'id': '335',
                'name': 'Zangoose'
              },
              {
                'id': '336',
                'name': 'Seviper'
              },
              {
                'id': '337',
                'name': 'Lunatone'
              },
              {
                'id': '338',
                'name': 'Solrock'
              },
              {
                'id': '339',
                'name': 'Barboach'
              },
              {
                'id': '340',
                'name': 'Whiscash'
              },
              {
                'id': '341',
                'name': 'Corphish'
              },
              {
                'id': '342',
                'name': 'Crawdaunt'
              },
              {
                'id': '343',
                'name': 'Baltoy'
              },
              {
                'id': '344',
                'name': 'Claydol'
              },
              {
                'id': '345',
                'name': 'Lileep'
              },
              {
                'id': '346',
                'name': 'Cradily'
              },
              {
                'id': '347',
                'name': 'Anorith'
              },
              {
                'id': '348',
                'name': 'Armaldo'
              },
              {
                'id': '349',
                'name': 'Feebas'
              },
              {
                'id': '350',
                'name': 'Milotic'
              },
              {
                'id': '351',
                'name': 'Castform'
              },
              {
                'id': '352',
                'name': 'Kecleon'
              },
              {
                'id': '353',
                'name': 'Shuppet'
              },
              {
                'id': '354',
                'name': 'Banette'
              },
              {
                'id': '355',
                'name': 'Duskull'
              },
              {
                'id': '356',
                'name': 'Dusclops'
              },
              {
                'id': '357',
                'name': 'Tropius'
              },
              {
                'id': '358',
                'name': 'Chimecho'
              },
              {
                'id': '359',
                'name': 'Absol'
              },
              {
                'id': '360',
                'name': 'Wynaut'
              },
              {
                'id': '361',
                'name': 'Snorunt'
              },
              {
                'id': '362',
                'name': 'Glalie'
              },
              {
                'id': '363',
                'name': 'Spheal'
              },
              {
                'id': '364',
                'name': 'Sealeo'
              },
              {
                'id': '365',
                'name': 'Walrein'
              },
              {
                'id': '366',
                'name': 'Clamperl'
              },
              {
                'id': '367',
                'name': 'Huntail'
              },
              {
                'id': '368',
                'name': 'Gorebyss'
              },
              {
                'id': '369',
                'name': 'Relicanth'
              },
              {
                'id': '370',
                'name': 'Luvdisc'
              },
              {
                'id': '371',
                'name': 'Bagon'
              },
              {
                'id': '372',
                'name': 'Shelgon'
              },
              {
                'id': '373',
                'name': 'Salamence'
              },
              {
                'id': '374',
                'name': 'Beldum'
              },
              {
                'id': '375',
                'name': 'Metang'
              },
              {
                'id': '376',
                'name': 'Metagross'
              },
              {
                'id': '377',
                'name': 'Regirock'
              },
              {
                'id': '378',
                'name': 'Regice'
              },
              {
                'id': '379',
                'name': 'Registeel'
              },
              {
                'id': '380',
                'name': 'Latias'
              },
              {
                'id': '381',
                'name': 'Latios'
              },
              {
                'id': '382',
                'name': 'Kyogre'
              },
              {
                'id': '383',
                'name': 'Groudon'
              },
              {
                'id': '384',
                'name': 'Rayquaza'
              },
              {
                'id': '385',
                'name': 'Jirachi'
              },
              {
                'id': '386',
                'name': 'Deoxys'
              },
              {
                'id': '387',
                'name': 'Turtwig'
              },
              {
                'id': '388',
                'name': 'Grotle'
              },
              {
                'id': '389',
                'name': 'Torterra'
              },
              {
                'id': '390',
                'name': 'Chimchar'
              },
              {
                'id': '391',
                'name': 'Monferno'
              },
              {
                'id': '392',
                'name': 'Infernape'
              },
              {
                'id': '393',
                'name': 'Piplup'
              },
              {
                'id': '394',
                'name': 'Prinplup'
              },
              {
                'id': '395',
                'name': 'Empoleon'
              },
              {
                'id': '396',
                'name': 'Starly'
              },
              {
                'id': '397',
                'name': 'Staravia'
              },
              {
                'id': '398',
                'name': 'Staraptor'
              },
              {
                'id': '399',
                'name': 'Bidoof'
              },
              {
                'id': '400',
                'name': 'Bibarel'
              },
              {
                'id': '401',
                'name': 'Kricketot'
              },
              {
                'id': '402',
                'name': 'Kricketune'
              },
              {
                'id': '403',
                'name': 'Shinx'
              },
              {
                'id': '404',
                'name': 'Luxio'
              },
              {
                'id': '405',
                'name': 'Luxray'
              },
              {
                'id': '406',
                'name': 'Budew'
              },
              {
                'id': '407',
                'name': 'Roserade'
              },
              {
                'id': '408',
                'name': 'Cranidos'
              },
              {
                'id': '409',
                'name': 'Rampardos'
              },
              {
                'id': '410',
                'name': 'Shieldon'
              },
              {
                'id': '411',
                'name': 'Bastiodon'
              },
              {
                'id': '412',
                'name': 'Burmy'
              },
              {
                'id': '413',
                'name': 'Wormadam'
              },
              {
                'id': '414',
                'name': 'Mothim'
              },
              {
                'id': '415',
                'name': 'Combee'
              },
              {
                'id': '416',
                'name': 'Vespiquen'
              },
              {
                'id': '417',
                'name': 'Pachirisu'
              },
              {
                'id': '418',
                'name': 'Buizel'
              },
              {
                'id': '419',
                'name': 'Floatzel'
              },
              {
                'id': '420',
                'name': 'Cherubi'
              },
              {
                'id': '421',
                'name': 'Cherrim'
              },
              {
                'id': '422',
                'name': 'Shellos'
              },
              {
                'id': '423',
                'name': 'Gastrodon'
              },
              {
                'id': '424',
                'name': 'Ambipom'
              },
              {
                'id': '425',
                'name': 'Drifloon'
              },
              {
                'id': '426',
                'name': 'Drifblim'
              },
              {
                'id': '427',
                'name': 'Buneary'
              },
              {
                'id': '428',
                'name': 'Lopunny'
              },
              {
                'id': '429',
                'name': 'Mismagius'
              },
              {
                'id': '430',
                'name': 'Honchkrow'
              },
              {
                'id': '431',
                'name': 'Glameow'
              },
              {
                'id': '432',
                'name': 'Purugly'
              },
              {
                'id': '433',
                'name': 'Chingling'
              },
              {
                'id': '434',
                'name': 'Stunky'
              },
              {
                'id': '435',
                'name': 'Skuntank'
              },
              {
                'id': '436',
                'name': 'Bronzor'
              },
              {
                'id': '437',
                'name': 'Bronzong'
              },
              {
                'id': '438',
                'name': 'Bonsly'
              },
              {
                'id': '439',
                'name': 'Mime Jr.'
              },
              {
                'id': '440',
                'name': 'Happiny'
              },
              {
                'id': '441',
                'name': 'Chatot'
              },
              {
                'id': '442',
                'name': 'Spiritomb'
              },
              {
                'id': '443',
                'name': 'Gible'
              },
              {
                'id': '444',
                'name': 'Gabite'
              },
              {
                'id': '445',
                'name': 'Garchomp'
              },
              {
                'id': '446',
                'name': 'Munchlax'
              },
              {
                'id': '447',
                'name': 'Riolu'
              },
              {
                'id': '448',
                'name': 'Lucario'
              },
              {
                'id': '449',
                'name': 'Hippopotas'
              },
              {
                'id': '450',
                'name': 'Hippowdon'
              },
              {
                'id': '451',
                'name': 'Skorupi'
              },
              {
                'id': '452',
                'name': 'Drapion'
              },
              {
                'id': '453',
                'name': 'Croagunk'
              },
              {
                'id': '454',
                'name': 'Toxicroak'
              },
              {
                'id': '455',
                'name': 'Carnivine'
              },
              {
                'id': '456',
                'name': 'Finneon'
              },
              {
                'id': '457',
                'name': 'Lumineon'
              },
              {
                'id': '458',
                'name': 'Mantyke'
              },
              {
                'id': '459',
                'name': 'Snover'
              },
              {
                'id': '460',
                'name': 'Abomasnow'
              },
              {
                'id': '461',
                'name': 'Weavile'
              },
              {
                'id': '462',
                'name': 'Magnezone'
              },
              {
                'id': '463',
                'name': 'Lickilicky'
              },
              {
                'id': '464',
                'name': 'Rhyperior'
              },
              {
                'id': '465',
                'name': 'Tangrowth'
              },
              {
                'id': '466',
                'name': 'Electivire'
              },
              {
                'id': '467',
                'name': 'Magmortar'
              },
              {
                'id': '468',
                'name': 'Togekiss'
              },
              {
                'id': '469',
                'name': 'Yanmega'
              },
              {
                'id': '470',
                'name': 'Leafeon'
              },
              {
                'id': '471',
                'name': 'Glaceon'
              },
              {
                'id': '472',
                'name': 'Gliscor'
              },
              {
                'id': '473',
                'name': 'Mamoswine'
              },
              {
                'id': '474',
                'name': 'Porygon-Z'
              },
              {
                'id': '475',
                'name': 'Gallade'
              },
              {
                'id': '476',
                'name': 'Probopass'
              },
              {
                'id': '477',
                'name': 'Dusknoir'
              },
              {
                'id': '478',
                'name': 'Froslass'
              },
              {
                'id': '479',
                'name': 'Rotom'
              },
              {
                'id': '480',
                'name': 'Uxie'
              },
              {
                'id': '481',
                'name': 'Mesprit'
              },
              {
                'id': '482',
                'name': 'Azelf'
              },
              {
                'id': '483',
                'name': 'Dialga'
              },
              {
                'id': '484',
                'name': 'Palkia'
              },
              {
                'id': '485',
                'name': 'Heatran'
              },
              {
                'id': '486',
                'name': 'Regigigas'
              },
              {
                'id': '487',
                'name': 'Giratina'
              },
              {
                'id': '488',
                'name': 'Cresselia'
              },
              {
                'id': '489',
                'name': 'Phione'
              },
              {
                'id': '490',
                'name': 'Manaphy'
              },
              {
                'id': '491',
                'name': 'Darkrai'
              },
              {
                'id': '492',
                'name': 'Shaymin'
              },
              {
                'id': '493',
                'name': 'Arceus'
              },
              {
                'id': '494',
                'name': 'Victini'
              },
              {
                'id': '495',
                'name': 'Snivy'
              },
              {
                'id': '496',
                'name': 'Servine'
              },
              {
                'id': '497',
                'name': 'Serperior'
              },
              {
                'id': '498',
                'name': 'Tepig'
              },
              {
                'id': '499',
                'name': 'Pignite'
              },
              {
                'id': '500',
                'name': 'Emboar'
              },
              {
                'id': '501',
                'name': 'Oshawott'
              },
              {
                'id': '502',
                'name': 'Dewott'
              },
              {
                'id': '503',
                'name': 'Samurott'
              },
              {
                'id': '504',
                'name': 'Patrat'
              },
              {
                'id': '505',
                'name': 'Watchog'
              },
              {
                'id': '506',
                'name': 'Lillipup'
              },
              {
                'id': '507',
                'name': 'Herdier'
              },
              {
                'id': '508',
                'name': 'Stoutland'
              },
              {
                'id': '509',
                'name': 'Purrloin'
              },
              {
                'id': '510',
                'name': 'Liepard'
              },
              {
                'id': '511',
                'name': 'Pansage'
              },
              {
                'id': '512',
                'name': 'Simisage'
              },
              {
                'id': '513',
                'name': 'Pansear'
              },
              {
                'id': '514',
                'name': 'Simisear'
              },
              {
                'id': '515',
                'name': 'Panpour'
              },
              {
                'id': '516',
                'name': 'Simipour'
              },
              {
                'id': '517',
                'name': 'Munna'
              },
              {
                'id': '518',
                'name': 'Musharna'
              },
              {
                'id': '519',
                'name': 'Pidove'
              },
              {
                'id': '520',
                'name': 'Tranquill'
              },
              {
                'id': '521',
                'name': 'Unfezant'
              },
              {
                'id': '522',
                'name': 'Blitzle'
              },
              {
                'id': '523',
                'name': 'Zebstrika'
              },
              {
                'id': '524',
                'name': 'Roggenrola'
              },
              {
                'id': '525',
                'name': 'Boldore'
              },
              {
                'id': '526',
                'name': 'Gigalith'
              },
              {
                'id': '527',
                'name': 'Woobat'
              },
              {
                'id': '528',
                'name': 'Swoobat'
              },
              {
                'id': '529',
                'name': 'Drilbur'
              },
              {
                'id': '530',
                'name': 'Excadrill'
              },
              {
                'id': '531',
                'name': 'Audino'
              },
              {
                'id': '532',
                'name': 'Timburr'
              },
              {
                'id': '533',
                'name': 'Gurdurr'
              },
              {
                'id': '534',
                'name': 'Conkeldurr'
              },
              {
                'id': '535',
                'name': 'Tympole'
              },
              {
                'id': '536',
                'name': 'Palpitoad'
              },
              {
                'id': '537',
                'name': 'Seismitoad'
              },
              {
                'id': '538',
                'name': 'Throh'
              },
              {
                'id': '539',
                'name': 'Sawk'
              },
              {
                'id': '540',
                'name': 'Sewaddle'
              },
              {
                'id': '541',
                'name': 'Swadloon'
              },
              {
                'id': '542',
                'name': 'Leavanny'
              },
              {
                'id': '543',
                'name': 'Venipede'
              },
              {
                'id': '544',
                'name': 'Whirlipede'
              },
              {
                'id': '545',
                'name': 'Scolipede'
              },
              {
                'id': '546',
                'name': 'Cottonee'
              },
              {
                'id': '547',
                'name': 'Whimsicott'
              },
              {
                'id': '548',
                'name': 'Petilil'
              },
              {
                'id': '549',
                'name': 'Lilligant'
              },
              {
                'id': '550',
                'name': 'Basculin'
              },
              {
                'id': '551',
                'name': 'Sandile'
              },
              {
                'id': '552',
                'name': 'Krokorok'
              },
              {
                'id': '553',
                'name': 'Krookodile'
              },
              {
                'id': '554',
                'name': 'Darumaka'
              },
              {
                'id': '555',
                'name': 'Darmanitan'
              },
              {
                'id': '556',
                'name': 'Maractus'
              },
              {
                'id': '557',
                'name': 'Dwebble'
              },
              {
                'id': '558',
                'name': 'Crustle'
              },
              {
                'id': '559',
                'name': 'Scraggy'
              },
              {
                'id': '560',
                'name': 'Scrafty'
              },
              {
                'id': '561',
                'name': 'Sigilyph'
              },
              {
                'id': '562',
                'name': 'Yamask'
              },
              {
                'id': '563',
                'name': 'Cofagrigus'
              },
              {
                'id': '564',
                'name': 'Tirtouga'
              },
              {
                'id': '565',
                'name': 'Carracosta'
              },
              {
                'id': '566',
                'name': 'Archen'
              },
              {
                'id': '567',
                'name': 'Archeops'
              },
              {
                'id': '568',
                'name': 'Trubbish'
              },
              {
                'id': '569',
                'name': 'Garbodor'
              },
              {
                'id': '570',
                'name': 'Zorua'
              },
              {
                'id': '571',
                'name': 'Zoroark'
              },
              {
                'id': '572',
                'name': 'Minccino'
              },
              {
                'id': '573',
                'name': 'Cinccino'
              },
              {
                'id': '574',
                'name': 'Gothita'
              },
              {
                'id': '575',
                'name': 'Gothorita'
              },
              {
                'id': '576',
                'name': 'Gothitelle'
              },
              {
                'id': '577',
                'name': 'Solosis'
              },
              {
                'id': '578',
                'name': 'Duosion'
              },
              {
                'id': '579',
                'name': 'Reuniclus'
              },
              {
                'id': '580',
                'name': 'Ducklett'
              },
              {
                'id': '581',
                'name': 'Swanna'
              },
              {
                'id': '582',
                'name': 'Vanillite'
              },
              {
                'id': '583',
                'name': 'Vanillish'
              },
              {
                'id': '584',
                'name': 'Vanilluxe'
              },
              {
                'id': '585',
                'name': 'Deerling'
              },
              {
                'id': '586',
                'name': 'Sawsbuck'
              },
              {
                'id': '587',
                'name': 'Emolga'
              },
              {
                'id': '588',
                'name': 'Karrablast'
              },
              {
                'id': '589',
                'name': 'Escavalier'
              },
              {
                'id': '590',
                'name': 'Foongus'
              },
              {
                'id': '591',
                'name': 'Amoonguss'
              },
              {
                'id': '592',
                'name': 'Frillish'
              },
              {
                'id': '593',
                'name': 'Jellicent'
              },
              {
                'id': '594',
                'name': 'Alomomola'
              },
              {
                'id': '595',
                'name': 'Joltik'
              },
              {
                'id': '596',
                'name': 'Galvantula'
              },
              {
                'id': '597',
                'name': 'Ferroseed'
              },
              {
                'id': '598',
                'name': 'Ferrothorn'
              },
              {
                'id': '599',
                'name': 'Klink'
              },
              {
                'id': '600',
                'name': 'Klang'
              },
              {
                'id': '601',
                'name': 'Klinklang'
              },
              {
                'id': '602',
                'name': 'Tynamo'
              },
              {
                'id': '603',
                'name': 'Eelektrik'
              },
              {
                'id': '604',
                'name': 'Eelektross'
              },
              {
                'id': '605',
                'name': 'Elgyem'
              },
              {
                'id': '606',
                'name': 'Beheeyem'
              },
              {
                'id': '607',
                'name': 'Litwick'
              },
              {
                'id': '608',
                'name': 'Lampent'
              },
              {
                'id': '609',
                'name': 'Chandelure'
              },
              {
                'id': '610',
                'name': 'Axew'
              },
              {
                'id': '611',
                'name': 'Fraxure'
              },
              {
                'id': '612',
                'name': 'Haxorus'
              },
              {
                'id': '613',
                'name': 'Cubchoo'
              },
              {
                'id': '614',
                'name': 'Beartic'
              },
              {
                'id': '615',
                'name': 'Cryogonal'
              },
              {
                'id': '616',
                'name': 'Shelmet'
              },
              {
                'id': '617',
                'name': 'Accelgor'
              },
              {
                'id': '618',
                'name': 'Stunfisk'
              },
              {
                'id': '619',
                'name': 'Mienfoo'
              },
              {
                'id': '620',
                'name': 'Mienshao'
              },
              {
                'id': '621',
                'name': 'Druddigon'
              },
              {
                'id': '622',
                'name': 'Golett'
              },
              {
                'id': '623',
                'name': 'Golurk'
              },
              {
                'id': '624',
                'name': 'Pawniard'
              },
              {
                'id': '625',
                'name': 'Bisharp'
              },
              {
                'id': '626',
                'name': 'Bouffalant'
              },
              {
                'id': '627',
                'name': 'Rufflet'
              },
              {
                'id': '628',
                'name': 'Braviary'
              },
              {
                'id': '629',
                'name': 'Vullaby'
              },
              {
                'id': '630',
                'name': 'Mandibuzz'
              },
              {
                'id': '631',
                'name': 'Heatmor'
              },
              {
                'id': '632',
                'name': 'Durant'
              },
              {
                'id': '633',
                'name': 'Deino'
              },
              {
                'id': '634',
                'name': 'Zweilous'
              },
              {
                'id': '635',
                'name': 'Hydreigon'
              },
              {
                'id': '636',
                'name': 'Larvesta'
              },
              {
                'id': '637',
                'name': 'Volcarona'
              },
              {
                'id': '638',
                'name': 'Cobalion'
              },
              {
                'id': '639',
                'name': 'Terrakion'
              },
              {
                'id': '640',
                'name': 'Virizion'
              },
              {
                'id': '641',
                'name': 'Tornadus'
              },
              {
                'id': '642',
                'name': 'Thundurus'
              },
              {
                'id': '643',
                'name': 'Reshiram'
              },
              {
                'id': '644',
                'name': 'Zekrom'
              },
              {
                'id': '645',
                'name': 'Landorus'
              },
              {
                'id': '646',
                'name': 'Kyurem'
              },
              {
                'id': '647',
                'name': 'Keldeo'
              },
              {
                'id': '648',
                'name': 'Meloetta'
              },
              {
                'id': '649',
                'name': 'Genesect'
              },
              {
                'id': '650',
                'name': 'Chespin'
              },
              {
                'id': '651',
                'name': 'Quilladin'
              },
              {
                'id': '652',
                'name': 'Chesnaught'
              },
              {
                'id': '653',
                'name': 'Fennekin'
              },
              {
                'id': '654',
                'name': 'Braixen'
              },
              {
                'id': '655',
                'name': 'Delphox'
              },
              {
                'id': '656',
                'name': 'Froakie'
              },
              {
                'id': '657',
                'name': 'Frogadier'
              },
              {
                'id': '658',
                'name': 'Greninja'
              },
              {
                'id': '659',
                'name': 'Bunnelby'
              },
              {
                'id': '660',
                'name': 'Diggersby'
              },
              {
                'id': '661',
                'name': 'Fletchling'
              },
              {
                'id': '662',
                'name': 'Fletchinder'
              },
              {
                'id': '663',
                'name': 'Talonflame'
              },
              {
                'id': '664',
                'name': 'Scatterbug'
              },
              {
                'id': '665',
                'name': 'Spewpa'
              },
              {
                'id': '666',
                'name': 'Vivillon'
              },
              {
                'id': '667',
                'name': 'Litleo'
              },
              {
                'id': '668',
                'name': 'Pyroar'
              },
              {
                'id': '669',
                'name': 'Flabébé'
              },
              {
                'id': '670',
                'name': 'Floette'
              },
              {
                'id': '671',
                'name': 'Florges'
              },
              {
                'id': '672',
                'name': 'Skiddo'
              },
              {
                'id': '673',
                'name': 'Gogoat'
              },
              {
                'id': '674',
                'name': 'Pancham'
              },
              {
                'id': '675',
                'name': 'Pangoro'
              },
              {
                'id': '676',
                'name': 'Furfrou'
              },
              {
                'id': '677',
                'name': 'Espurr'
              },
              {
                'id': '678',
                'name': 'Meowstic'
              },
              {
                'id': '679',
                'name': 'Honedge'
              },
              {
                'id': '680',
                'name': 'Doublade'
              },
              {
                'id': '681',
                'name': 'Aegislash'
              },
              {
                'id': '682',
                'name': 'Spritzee'
              },
              {
                'id': '683',
                'name': 'Aromatisse'
              },
              {
                'id': '684',
                'name': 'Swirlix'
              },
              {
                'id': '685',
                'name': 'Slurpuff'
              },
              {
                'id': '686',
                'name': 'Inkay'
              },
              {
                'id': '687',
                'name': 'Malamar'
              },
              {
                'id': '688',
                'name': 'Binacle'
              },
              {
                'id': '689',
                'name': 'Barbaracle'
              },
              {
                'id': '690',
                'name': 'Skrelp'
              },
              {
                'id': '691',
                'name': 'Dragalge'
              },
              {
                'id': '692',
                'name': 'Clauncher'
              },
              {
                'id': '693',
                'name': 'Clawitzer'
              },
              {
                'id': '694',
                'name': 'Helioptile'
              },
              {
                'id': '695',
                'name': 'Heliolisk'
              },
              {
                'id': '696',
                'name': 'Tyrunt'
              },
              {
                'id': '697',
                'name': 'Tyrantrum'
              },
              {
                'id': '698',
                'name': 'Amaura'
              },
              {
                'id': '699',
                'name': 'Aurorus'
              },
              {
                'id': '700',
                'name': 'Sylveon'
              },
              {
                'id': '701',
                'name': 'Hawlucha'
              },
              {
                'id': '702',
                'name': 'Dedenne'
              },
              {
                'id': '703',
                'name': 'Carbink'
              },
              {
                'id': '704',
                'name': 'Goomy'
              },
              {
                'id': '705',
                'name': 'Sliggoo'
              },
              {
                'id': '706',
                'name': 'Goodra'
              },
              {
                'id': '707',
                'name': 'Klefki'
              },
              {
                'id': '708',
                'name': 'Phantump'
              },
              {
                'id': '709',
                'name': 'Trevenant'
              },
              {
                'id': '710',
                'name': 'Pumpkaboo'
              },
              {
                'id': '711',
                'name': 'Gourgeist'
              },
              {
                'id': '712',
                'name': 'Bergmite'
              },
              {
                'id': '713',
                'name': 'Avalugg'
              },
              {
                'id': '714',
                'name': 'Noibat'
              },
              {
                'id': '715',
                'name': 'Noivern'
              },
              {
                'id': '716',
                'name': 'Xerneas'
              },
              {
                'id': '717',
                'name': 'Yveltal'
              },
              {
                'id': '718',
                'name': 'Zygarde'
              },
              {
                'id': '719',
                'name': 'Diancie'
              },
              {
                'id': '720',
                'name': 'Hoopa'
              },
              {
                'id': '721',
                'name': 'Volcanion'
              },
              {
                'id': '722',
                'name': 'Rowlet'
              },
              {
                'id': '723',
                'name': 'Dartrix'
              },
              {
                'id': '724',
                'name': 'Decidueye'
              },
              {
                'id': '725',
                'name': 'Litten'
              },
              {
                'id': '726',
                'name': 'Torracat'
              },
              {
                'id': '727',
                'name': 'Incineroar'
              },
              {
                'id': '728',
                'name': 'Popplio'
              },
              {
                'id': '729',
                'name': 'Brionne'
              },
              {
                'id': '730',
                'name': 'Primarina'
              },
              {
                'id': '731',
                'name': 'Pikipek'
              },
              {
                'id': '732',
                'name': 'Trumbeak'
              },
              {
                'id': '733',
                'name': 'Toucannon'
              },
              {
                'id': '734',
                'name': 'Yungoos'
              },
              {
                'id': '735',
                'name': 'Gumshoos'
              },
              {
                'id': '736',
                'name': 'Grubbin'
              },
              {
                'id': '737',
                'name': 'Charjabug'
              },
              {
                'id': '738',
                'name': 'Vikavolt'
              },
              {
                'id': '739',
                'name': 'Crabrawler'
              },
              {
                'id': '740',
                'name': 'Crabominable'
              },
              {
                'id': '741',
                'name': 'Oricorio'
              },
              {
                'id': '742',
                'name': 'Cutiefly'
              },
              {
                'id': '743',
                'name': 'Ribombee'
              },
              {
                'id': '744',
                'name': 'Rockruff'
              },
              {
                'id': '745',
                'name': 'Lycanroc'
              },
              {
                'id': '746',
                'name': 'Wishiwashi'
              },
              {
                'id': '747',
                'name': 'Mareanie'
              },
              {
                'id': '748',
                'name': 'Toxapex'
              },
              {
                'id': '749',
                'name': 'Mudbray'
              },
              {
                'id': '750',
                'name': 'Mudsdale'
              },
              {
                'id': '751',
                'name': 'Dewpider'
              },
              {
                'id': '752',
                'name': 'Araquanid'
              },
              {
                'id': '753',
                'name': 'Fomantis'
              },
              {
                'id': '754',
                'name': 'Lurantis'
              },
              {
                'id': '755',
                'name': 'Morelull'
              },
              {
                'id': '756',
                'name': 'Shiinotic'
              },
              {
                'id': '757',
                'name': 'Salandit'
              },
              {
                'id': '758',
                'name': 'Salazzle'
              },
              {
                'id': '759',
                'name': 'Stufful'
              },
              {
                'id': '760',
                'name': 'Bewear'
              },
              {
                'id': '761',
                'name': 'Bounsweet'
              },
              {
                'id': '762',
                'name': 'Steenee'
              },
              {
                'id': '763',
                'name': 'Tsareena'
              },
              {
                'id': '764',
                'name': 'Comfey'
              },
              {
                'id': '765',
                'name': 'Oranguru'
              },
              {
                'id': '766',
                'name': 'Passimian'
              },
              {
                'id': '767',
                'name': 'Wimpod'
              },
              {
                'id': '768',
                'name': 'Golisopod'
              },
              {
                'id': '769',
                'name': 'Sandygast'
              },
              {
                'id': '770',
                'name': 'Palossand'
              },
              {
                'id': '771',
                'name': 'Pyukumuku'
              },
              {
                'id': '772',
                'name': 'Type: Null'
              },
              {
                'id': '773',
                'name': 'Silvally'
              },
              {
                'id': '774',
                'name': 'Minior'
              },
              {
                'id': '775',
                'name': 'Komala'
              },
              {
                'id': '776',
                'name': 'Turtonator'
              },
              {
                'id': '777',
                'name': 'Togedemaru'
              },
              {
                'id': '778',
                'name': 'Mimikyu'
              },
              {
                'id': '779',
                'name': 'Bruxish'
              },
              {
                'id': '780',
                'name': 'Drampa'
              },
              {
                'id': '781',
                'name': 'Dhelmise'
              },
              {
                'id': '782',
                'name': 'Jangmo-o'
              },
              {
                'id': '783',
                'name': 'Hakamo-o'
              },
              {
                'id': '784',
                'name': 'Kommo-o'
              },
              {
                'id': '785',
                'name': 'Tapu Koko'
              },
              {
                'id': '786',
                'name': 'Tapu Lele'
              },
              {
                'id': '787',
                'name': 'Tapu Bulu'
              },
              {
                'id': '788',
                'name': 'Tapu Fini'
              },
              {
                'id': '789',
                'name': 'Cosmog'
              },
              {
                'id': '790',
                'name': 'Cosmoem'
              },
              {
                'id': '791',
                'name': 'Solgaleo'
              },
              {
                'id': '792',
                'name': 'Lunala'
              },
              {
                'id': '793',
                'name': 'Nihilego'
              },
              {
                'id': '794',
                'name': 'Buzzwole'
              },
              {
                'id': '795',
                'name': 'Pheromosa'
              },
              {
                'id': '796',
                'name': 'Xurkitree'
              },
              {
                'id': '797',
                'name': 'Celesteela'
              },
              {
                'id': '798',
                'name': 'Kartana'
              },
              {
                'id': '799',
                'name': 'Guzzlord'
              },
              {
                'id': '800',
                'name': 'Necrozma'
              },
              {
                'id': '801',
                'name': 'Magearna'
              },
              {
                'id': '802',
                'name': 'Marshadow'
              },
              {
                'id': '803',
                'name': 'Poipole'
              },
              {
                'id': '804',
                'name': 'Naganadel'
              },
              {
                'id': '805',
                'name': 'Stakataka'
              },
              {
                'id': '806',
                'name': 'Blacephalon'
              },
              {
                'id': '807',
                'name': 'Zeraora'
              },
              {
                'id': '808',
                'name': 'Meltan'
              },
              {
                'id': '809',
                'name': 'Melmetal'
              },
              {
                'id': '810',
                'name': 'Grookey'
              },
              {
                'id': '811',
                'name': 'Thwackey'
              },
              {
                'id': '812',
                'name': 'Rillaboom'
              },
              {
                'id': '813',
                'name': 'Scorbunny'
              },
              {
                'id': '814',
                'name': 'Raboot'
              },
              {
                'id': '815',
                'name': 'Cinderace'
              },
              {
                'id': '816',
                'name': 'Sobble'
              },
              {
                'id': '817',
                'name': 'Drizzile'
              },
              {
                'id': '818',
                'name': 'Inteleon'
              },
              {
                'id': '819',
                'name': 'Skwovet'
              },
              {
                'id': '820',
                'name': 'Greedent'
              },
              {
                'id': '821',
                'name': 'Rookidee'
              },
              {
                'id': '822',
                'name': 'Corvisquire'
              },
              {
                'id': '823',
                'name': 'Corviknight'
              },
              {
                'id': '824',
                'name': 'Blipbug'
              },
              {
                'id': '825',
                'name': 'Dottler'
              },
              {
                'id': '826',
                'name': 'Orbeetle'
              },
              {
                'id': '827',
                'name': 'Nickit'
              },
              {
                'id': '828',
                'name': 'Thievul'
              },
              {
                'id': '829',
                'name': 'Gossifleur'
              },
              {
                'id': '830',
                'name': 'Eldegoss'
              },
              {
                'id': '831',
                'name': 'Wooloo'
              },
              {
                'id': '832',
                'name': 'Dubwool'
              },
              {
                'id': '833',
                'name': 'Chewtle'
              },
              {
                'id': '834',
                'name': 'Drednaw'
              },
              {
                'id': '835',
                'name': 'Yamper'
              },
              {
                'id': '836',
                'name': 'Boltund'
              },
              {
                'id': '837',
                'name': 'Rolycoly'
              },
              {
                'id': '838',
                'name': 'Carkol'
              },
              {
                'id': '839',
                'name': 'Coalossal'
              },
              {
                'id': '840',
                'name': 'Applin'
              },
              {
                'id': '841',
                'name': 'Flapple'
              },
              {
                'id': '842',
                'name': 'Appletun'
              },
              {
                'id': '843',
                'name': 'Silicobra'
              },
              {
                'id': '844',
                'name': 'Sandaconda'
              },
              {
                'id': '845',
                'name': 'Cramorant'
              },
              {
                'id': '846',
                'name': 'Arrokuda'
              },
              {
                'id': '847',
                'name': 'Barraskewda'
              },
              {
                'id': '848',
                'name': 'Toxel'
              },
              {
                'id': '849',
                'name': 'Toxtricity'
              },
              {
                'id': '850',
                'name': 'Sizzlipede'
              },
              {
                'id': '851',
                'name': 'Centiskorch'
              },
              {
                'id': '852',
                'name': 'Clobbopus'
              },
              {
                'id': '853',
                'name': 'Grapploct'
              },
              {
                'id': '854',
                'name': 'Sinistea'
              },
              {
                'id': '855',
                'name': 'Polteageist'
              },
              {
                'id': '856',
                'name': 'Hatenna'
              },
              {
                'id': '857',
                'name': 'Hattrem'
              },
              {
                'id': '858',
                'name': 'Hatterene'
              },
              {
                'id': '859',
                'name': 'Impidimp'
              },
              {
                'id': '860',
                'name': 'Morgrem'
              },
              {
                'id': '861',
                'name': 'Grimmsnarl'
              },
              {
                'id': '862',
                'name': 'Obstagoon'
              },
              {
                'id': '863',
                'name': 'Perrserker'
              },
              {
                'id': '864',
                'name': 'Cursola'
              },
              {
                'id': '865',
                'name': 'Sirfetch\'d'
              },
              {
                'id': '866',
                'name': 'Mr. Rime'
              },
              {
                'id': '867',
                'name': 'Runerigus'
              },
              {
                'id': '868',
                'name': 'Milcery'
              },
              {
                'id': '869',
                'name': 'Alcremie'
              },
              {
                'id': '870',
                'name': 'Falinks'
              },
              {
                'id': '871',
                'name': 'Pincurchin'
              },
              {
                'id': '872',
                'name': 'Snom'
              },
              {
                'id': '873',
                'name': 'Frosmoth'
              },
              {
                'id': '874',
                'name': 'Stonjourner'
              },
              {
                'id': '875',
                'name': 'Eiscue'
              },
              {
                'id': '876',
                'name': 'Indeedee'
              },
              {
                'id': '877',
                'name': 'Morpeko'
              },
              {
                'id': '878',
                'name': 'Cufant'
              },
              {
                'id': '879',
                'name': 'Copperajah'
              },
              {
                'id': '880',
                'name': 'Dracozolt'
              },
              {
                'id': '881',
                'name': 'Arctozolt'
              },
              {
                'id': '882',
                'name': 'Dracovish'
              },
              {
                'id': '883',
                'name': 'Arctovish'
              },
              {
                'id': '884',
                'name': 'Duraludon'
              },
              {
                'id': '885',
                'name': 'Dreepy'
              },
              {
                'id': '886',
                'name': 'Drakloak'
              },
              {
                'id': '887',
                'name': 'Dragapult'
              },
              {
                'id': '888',
                'name': 'Zacian'
              },
              {
                'id': '889',
                'name': 'Zamazenta'
              },
              {
                'id': '890',
                'name': 'Eternatus'
              },
              {
                'id': '891',
                'name': 'Kubfu'
              },
              {
                'id': '892',
                'name': 'Urshifu'
              },
              {
                'id': '893',
                'name': 'Zarude'
              },
              {
                'id': '894',
                'name': 'Regieleki'
              },
              {
                'id': '895',
                'name': 'Regidrago'
              },
              {
                'id': '896',
                'name': 'Glastrier'
              },
              {
                'id': '897',
                'name': 'Spectrier'
              },
              {
                'id': '898',
                'name': 'Calyrex'
              },
              {
                'id': '899',
                'name': 'Wyrdeer'
              },
              {
                'id': '900',
                'name': 'Kleavor'
              },
              {
                'id': '901',
                'name': 'Ursaluna'
              },
              {
                'id': '902',
                'name': 'Basculegion'
              },
              {
                'id': '903',
                'name': 'Sneasler'
              },
              {
                'id': '904',
                'name': 'Overqwil'
              },
              {
                'id': '905',
                'name': 'Enamorus'
              },
              {
                'id': '906',
                'name': 'Sprigatito'
              },
              {
                'id': '907',
                'name': 'Floragato'
              },
              {
                'id': '908',
                'name': 'Meowscarada'
              },
              {
                'id': '909',
                'name': 'Fuecoco'
              },
              {
                'id': '910',
                'name': 'Crocalor'
              },
              {
                'id': '911',
                'name': 'Skeledirge'
              },
              {
                'id': '912',
                'name': 'Quaxly'
              },
              {
                'id': '913',
                'name': 'Quaxwell'
              },
              {
                'id': '914',
                'name': 'Quaquaval'
              },
              {
                'id': '915',
                'name': 'Lechonk'
              },
              {
                'id': '916',
                'name': 'Oinkologne'
              },
              {
                'id': '917',
                'name': 'Tarountula'
              },
              {
                'id': '918',
                'name': 'Spidops'
              },
              {
                'id': '919',
                'name': 'Nymble'
              },
              {
                'id': '920',
                'name': 'Lokix'
              },
              {
                'id': '921',
                'name': 'Pawmi'
              },
              {
                'id': '922',
                'name': 'Pawmo'
              },
              {
                'id': '923',
                'name': 'Pawmot'
              },
              {
                'id': '924',
                'name': 'Tandemaus'
              },
              {
                'id': '925',
                'name': 'Maushold'
              },
              {
                'id': '926',
                'name': 'Fidough'
              },
              {
                'id': '927',
                'name': 'Dachsbun'
              },
              {
                'id': '928',
                'name': 'Smoliv'
              },
              {
                'id': '929',
                'name': 'Dolliv'
              },
              {
                'id': '930',
                'name': 'Arboliva'
              },
              {
                'id': '931',
                'name': 'Squawkabilly'
              },
              {
                'id': '932',
                'name': 'Nacli'
              },
              {
                'id': '933',
                'name': 'Naclstack'
              },
              {
                'id': '934',
                'name': 'Garganacl'
              },
              {
                'id': '935',
                'name': 'Charcadet'
              },
              {
                'id': '936',
                'name': 'Armarouge'
              },
              {
                'id': '937',
                'name': 'Ceruledge'
              },
              {
                'id': '938',
                'name': 'Tadbulb'
              },
              {
                'id': '939',
                'name': 'Bellibolt'
              },
              {
                'id': '940',
                'name': 'Wattrel'
              },
              {
                'id': '941',
                'name': 'Kilowattrel'
              },
              {
                'id': '942',
                'name': 'Maschiff'
              },
              {
                'id': '943',
                'name': 'Mabosstiff'
              },
              {
                'id': '944',
                'name': 'Shroodle'
              },
              {
                'id': '945',
                'name': 'Grafaiai'
              },
              {
                'id': '946',
                'name': 'Bramblin'
              },
              {
                'id': '947',
                'name': 'Brambleghast'
              },
              {
                'id': '948',
                'name': 'Toedscool'
              },
              {
                'id': '949',
                'name': 'Toedscruel'
              },
              {
                'id': '950',
                'name': 'Klawf'
              },
              {
                'id': '951',
                'name': 'Capsakid'
              },
              {
                'id': '952',
                'name': 'Scovillain'
              },
              {
                'id': '953',
                'name': 'Rellor'
              },
              {
                'id': '954',
                'name': 'Rabsca'
              },
              {
                'id': '955',
                'name': 'Flittle'
              },
              {
                'id': '956',
                'name': 'Espathra'
              },
              {
                'id': '957',
                'name': 'Tinkatink'
              },
              {
                'id': '958',
                'name': 'Tinkatuff'
              },
              {
                'id': '959',
                'name': 'Tinkaton'
              },
              {
                'id': '960',
                'name': 'Wiglett'
              },
              {
                'id': '961',
                'name': 'Wugtrio'
              },
              {
                'id': '962',
                'name': 'Bombirdier'
              },
              {
                'id': '963',
                'name': 'Finizen'
              },
              {
                'id': '964',
                'name': 'Palafin'
              },
              {
                'id': '965',
                'name': 'Varoom'
              },
              {
                'id': '966',
                'name': 'Revavroom'
              },
              {
                'id': '967',
                'name': 'Cyclizar'
              },
              {
                'id': '968',
                'name': 'Orthworm'
              },
              {
                'id': '969',
                'name': 'Glimmet'
              },
              {
                'id': '970',
                'name': 'Glimmora'
              },
              {
                'id': '971',
                'name': 'Greavard'
              },
              {
                'id': '972',
                'name': 'Houndstone'
              },
              {
                'id': '973',
                'name': 'Flamigo'
              },
              {
                'id': '974',
                'name': 'Cetoddle'
              },
              {
                'id': '975',
                'name': 'Cetitan'
              },
              {
                'id': '976',
                'name': 'Veluza'
              },
              {
                'id': '977',
                'name': 'Dondozo'
              },
              {
                'id': '978',
                'name': 'Tatsugiri'
              },
              {
                'id': '979',
                'name': 'Annihilape'
              },
              {
                'id': '980',
                'name': 'Clodsire'
              },
              {
                'id': '981',
                'name': 'Farigiraf'
              },
              {
                'id': '982',
                'name': 'Dudunsparce'
              },
              {
                'id': '983',
                'name': 'Kingambit'
              },
              {
                'id': '984',
                'name': 'Great Tusk'
              },
              {
                'id': '985',
                'name': 'Scream Tail'
              },
              {
                'id': '986',
                'name': 'Brute Bonnet'
              },
              {
                'id': '987',
                'name': 'Flutter Mane'
              },
              {
                'id': '988',
                'name': 'Slither Wing'
              },
              {
                'id': '989',
                'name': 'Sandy Shocks'
              },
              {
                'id': '990',
                'name': 'Iron Treads'
              },
              {
                'id': '991',
                'name': 'Iron Bundle'
              },
              {
                'id': '992',
                'name': 'Iron Hands'
              },
              {
                'id': '993',
                'name': 'Iron Jugulis'
              },
              {
                'id': '994',
                'name': 'Iron Moth'
              },
              {
                'id': '995',
                'name': 'Iron Thorns'
              },
              {
                'id': '996',
                'name': 'Frigibax'
              },
              {
                'id': '997',
                'name': 'Arctibax'
              },
              {
                'id': '998',
                'name': 'Baxcalibur'
              },
              {
                'id': '999',
                'name': 'Gimmighoul'
              },
              {
                'id': '1000',
                'name': 'Gholdengo'
              },
              {
                'id': '1001',
                'name': 'Wo-Chien'
              },
              {
                'id': '1002',
                'name': 'Chien-Pao'
              },
              {
                'id': '1003',
                'name': 'Ting-Lu'
              },
              {
                'id': '1004',
                'name': 'Chi-Yu'
              },
              {
                'id': '1005',
                'name': 'Roaring Moon'
              },
              {
                'id': '1006',
                'name': 'Iron Valiant'
              },
              {
                'id': '1007',
                'name': 'Koraidon'
              },
              {
                'id': '1008',
                'name': 'Miraidon'
              },
              {
                'id': '1009',
                'name': 'Walking Wake'
              },
              {
                'id': '1010',
                'name': 'Iron Leaves'
              },
              {
                'id': '1011',
                'name': 'Dipplin'
              },
              {
                'id': '1012',
                'name': 'Poltchageist'
              },
              {
                'id': '1013',
                'name': 'Sinistcha'
              },
              {
                'id': '1014',
                'name': 'Okidogi'
              },
              {
                'id': '1015',
                'name': 'Munkidori'
              },
              {
                'id': '1016',
                'name': 'Fezandipiti'
              },
              {
                'id': '1017',
                'name': 'Ogerpon'
              },
              {
                'id': '1018',
                'name': 'Archaludon'
              },
              {
                'id': '1019',
                'name': 'Hydrapple'
              },
              {
                'id': '1020',
                'name': 'Gouging Fire'
              },
              {
                'id': '1021',
                'name': 'Raging Bolt'
              },
              {
                'id': '1022',
                'name': 'Iron Boulder'
              },
              {
                'id': '1023',
                'name': 'Iron Crown'
              },
              {
                'id': '1024',
                'name': 'Terapagos'
              },
              {
                'id': '1025',
                'name': 'Pecharunt'
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
                  //  this.setState({champions: liveChampions})
                    doUseLiveValues = false;
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