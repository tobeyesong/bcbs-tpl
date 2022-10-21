/** @format */

import { html } from "lit-html";
import "./card.css";

export const Card = ({ nativeTitle, title, description, url }) => {
  return html`
    <div class="card-container">
      <div class="card-body">
        <div class="card-display">
          <div class="card-flex">
            <div class="card-image-container">
              <img class="card-image" src="${url}" alt="" />
            </div>
            <div class="card-info">
              <div class="card-info-details">
                <p class="mini-title">${nativeTitle}</p>
                <div class="card-title-container">
                  <p class="main-title">${title}</p>
                  <p class="description">${description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
};
