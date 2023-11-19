import React from "react";
import BotCard from "./BotCard";

function BotCollection({ bots, enlistBot, deleteBot }) {
  const botItem = bots.map((bot) => {
    return (
      <BotCard
        key={bot.id}
        bot={bot}
        clickEvent={enlistBot}
        deleteBot={deleteBot}
      />
    );
  });
  return (
    <div className="ui four column grid">
      <div className="row">
        {botItem}
      </div>
    </div>
  );
}

export default BotCollection;