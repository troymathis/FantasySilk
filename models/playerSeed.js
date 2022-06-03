const mongoose = require('mongoose');

const davis = [
    {
        Name: 'Davis Mills',
        fantasyPointsPerGame : 12.8,
        Position: 'QB2',
        PYPG: 204.9,
        PTDSPG: 1.2,
        INTPG: 0.769,
        IMG: 'https://images.fantasypros.com/images/players/nfl/22799/headshot/500x500.webp'
    },
{
    Name: 'Tom Brady',
    fantasyPointsPerGame: 22,
    Position: 'QB',
    PYPG: 312.7,
    PTDSPG: 2.53,
    INTPG: 0.706,
    FPG: 0.24,
    IMG:'https://static.www.nfl.com/image/private/t_headshot_desktop/league/n7fj5fjblf6pdgjdtphr',
}, {
    Name: 'Seahawks Defense',
    fantasyPointsPerGame: 4.6,
    Position: 'D/ST',
    IMG: 'https://a.espncdn.com/i/teamlogos/nfl/500/sea.png'
}, {
    Name: 'Justin Jefferson',
    fantasyPointsPerGame: 13.08,
    Position: 'WR',
    ReYPG: 95.05 ,
    ReTDSPG: 0.59 ,
    FPG: 0.06 ,
    IMG: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4262921.png&w=350&h=254',
}, {
    Name: 'Keenan Allen',
    fantasyPointsPerGame: 9.5,
    Position: 'WR2',
    ReYPG: 71.1,
    ReTDSPG: 0.38,
    FPG: 0.63,
    IMG: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/15818.png&w=350&h=254'
}, {
    Name: 'Alvin Kamara',
    fantasyPointsPerGame: 15.8,
    Position: 'RB',
    RYPG: 69.07,
    RTDSPG: 0.31,
    ReYPG:  33.77,
    ReTDSPG: 0.38,
    FPG: 0,
    IMG: 'https://static.www.nfl.com/image/private/t_headshot_desktop/league/jvutsfx86o0omypemcxl'
}, {
    Name: 'Javonte Williams',
    fantasyPointsPerGame: 9,
    position: 'RB2',
    RYPG: 50.16,
    RTDSPG: 0.22,
    ReYPG: 17.56,
    ReTDSPG: 0.17,
    FPG: 0.11,
    IMG: 'https://static.www.nfl.com/image/private/t_headshot_desktop/league/i00p0fbwvrap6lq1hojw'
}, {
    Name: 'Mark Andrews',
    fantasyPointsPerGame: 11.4,
    position: 'TE',
    ReYPG: 80.06,
    ReTDSPG: 0.59,
    FPG: 0.06,
    IMG: 'https://static.www.nfl.com/image/private/t_headshot_desktop/league/jl7a95vyxownvkevbcr8'
}, {
    Name: 'Darnell Mooney',
    fantasyPointsPerGame: 8.16,
    position: 'Flex',
    ReYPG: 62.06,
    ReTDSPG: 0.24,
    FPG: 0,
    IMG: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4040655.png'
}, {
    Name: 'Amari Cooper',
    fantasyPointsPerGame: 9,
    position: 'Flex2',
    ReYPGS: 57.67,
    ReTDSPG: 0.53,
    FPG: 0.07,
    IMG: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/2976499.png&w=350&h=254'
}
]

module.exports = davis;