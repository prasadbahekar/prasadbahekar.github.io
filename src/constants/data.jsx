import armor from "../assets/works/armor.png" 
import voxel from "../assets/works/voxel.png" 
import diep from "../assets/works/diep.png" 

export const cardsData = [
  {
    title: "Diep Io Remake",
    description: "A remake of the game Diep.Io using Phaser",
    image: diep,
    color: "hover:from-zinc-400/40 hover:via-zinc-700/50 from-zinc-400/40 via-zinc-700/50",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Voxel Engine",
    description: "A Minecraft like game made using Three JS",
    image: voxel,
    color: "from-blue-500/30 via-blue-400/30 hover:from-blue-500/30 hover:via-blue-400/30",
    tags: ["HTML", "CSS", "JS"]
  },
  {
    title: "Armor Frontend",
    description: "An only frontend website about headphones.",
    image: armor,
    color: "from-orange-600/30 via-orange-700/30 hover:from-orange-600/30 hover:via-orange-700/30",
    tags: ["HTML", "CSS"]
  }
]