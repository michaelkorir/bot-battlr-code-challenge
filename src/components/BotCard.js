import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { BsFillLightningFill, BsShieldShaded } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const botTypeClasses = {
  Assault: "icon military",
  Defender: "icon shield",
  Support: "icon plus circle",
  Medic: "icon ambulance",
  Witch: "icon magic",
  Captain: "icon star",
};

function BotCard({ bot, clickEvent, deleteBot }) {
  return (
    <div id="bots" className="col-3 p-1">
      <div className="ui card" key={bot.id} onClick={() => clickEvent(bot)}>
        <div className="image">
          <img alt="" src={bot.avatar_url} />
        </div>
        <div className="content">
          <div className="header">
            {bot.name}
            <i className={botTypeClasses[bot.bot_class]} />
          </div>
          <div className="meta text-wrap">
            <small>{bot.catchphrase}</small>
          </div>
        </div>
         <p id="icons"><span> <FaHeartbeat/> {bot.health} </span> <span> <BsFillLightningFill/> {bot.damage}</span> <span> <BsShieldShaded/> {bot.armor}</span></p>
            <center>
                <button type="button" class="btn btn-outline-danger" onClick={(event)=>{event.stopPropagation();
                    deleteBot(bot)}}><AiOutlineDelete/>
                </button>
            </center>
      </div>
    </div>
  );
}

export default BotCard;

