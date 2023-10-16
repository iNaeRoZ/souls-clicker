import React, { useEffect, useState } from "react";

const enemyList = [
  {
    Nom: "Great Grey Wolf Sif",
    imgSrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/432780e4-f104-4387-987f-8611d44dc1c4/d7vvhqh-4e2a1787-eccd-41a4-8901-74fed194c309.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzMjc4MGU0LWYxMDQtNDM4Ny05ODdmLTg2MTFkNDRkYzFjNFwvZDd2dmhxaC00ZTJhMTc4Ny1lY2NkLTQxYTQtODkwMS03NGZlZDE5NGMzMDkuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.kAQV85pmLBElRfmTjBEsAd_u8ti8AZ05StJi45st9ew",
    points: 75,
  },
  {
    Nom: "Nito",
    imgSrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/432780e4-f104-4387-987f-8611d44dc1c4/d96sgi8-b22d19e2-7ed5-4b9a-936a-c113735524bf.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzMjc4MGU0LWYxMDQtNDM4Ny05ODdmLTg2MTFkNDRkYzFjNFwvZDk2c2dpOC1iMjJkMTllMi03ZWQ1LTRiOWEtOTM2YS1jMTEzNzM1NTI0YmYuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.D59ho8BLiG9iyRoK3fYsFLzrEE026A3FEdx1uB8N2rQ",
    points: 85,
  },
  {
    Nom: "Artorias of the Abyss",
    imgSrc:
      "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/432780e4-f104-4387-987f-8611d44dc1c4/d8bsfln-451d9d25-e8e1-4bf5-badf-06f5154dfb3f.gif?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzQzMjc4MGU0LWYxMDQtNDM4Ny05ODdmLTg2MTFkNDRkYzFjNFwvZDhic2Zsbi00NTFkOWQyNS1lOGUxLTRiZjUtYmFkZi0wNmY1MTU0ZGZiM2YuZ2lmIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.lmMZBUyHiozshYUveGt0-H0sHLez4SDP8vqFsZDvZYc",
    points: 105,
  },
];

function Enemy() {
  const [index, setIndex] = useState(0);
  const [points, setPoints] = useState(enemyList[index].points);
  const [damagePerClick, setDamagePerClick] = useState(1);
  const [damageAuto, setDamageAuto] = useState(1);

  const decreasePoint = (damage = damageAuto) => {
    if (points > 1) {
      setPoints(points - damage);
    } else {
      setIndex(index + 1);
      setPoints(enemyList[index + 1].points);
    }
  };

  useEffect(()=>{
    const autoInterval = setInterval(decreasePoint, 1000);

    return () => {
        clearInterval(autoInterval);
    };
  }, [decreasePoint]);

  return (
    <div>
      <h1>{enemyList[index].Nom}</h1>
      <h2>
        HP: {points} / {enemyList[index].points}
      </h2>
      <img
        src={enemyList[index].imgSrc}
        onClick={() => decreasePoint(damagePerClick)}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

export default Enemy;
