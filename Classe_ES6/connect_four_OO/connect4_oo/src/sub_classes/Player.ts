"use strict";

// Define Player class with a color property
export default class Player {
  color: string;
  isAI: boolean;

  constructor(color: string, isAI: boolean) {
    this.color = color;
    this.isAI = isAI;
  }
  
}
