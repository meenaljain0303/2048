import React from 'react'

export const EndGame = ({board, onRestart}) => {
    var contents = '';
    if (board.hasWon()) {
        contents = 'Wowza!';
    } else if (board.hasLost()) {
        contents = 'Game Over!';
    }
    if (!contents) {
        return null;
    }
    return (
        <div className='overlay'>
            <p className='message'>{contents}</p>
            <button className="tryagain" onClick={onRestart} onTouchEnd={onRestart}>TRY AGAIN</button>
        </div>
    );
};