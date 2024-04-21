import React from "react";
import { CiLocationOn } from "react-icons/ci";

const LocationFilter = () => {
  return (
    <form class="py-2">
      <div class="flex border-2 rounded">
        <button
          id="states-button"
          data-dropdown-toggle="dropdown-states"
          className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500  "
          type="button"
        >
          <CiLocationOn color="#bf5517" size={25} />
        </button>
        <div
          id="dropdown-states"
          class="z-10 hidden bg-white  rounded-lg shadow w-44 dark:bg-gray-700 border-0 border-transparent	"
        >
          <ul
            class="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="states-button"
          >
            <li>
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div class="inline-flex items-center">
                  
                  United States
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div class="inline-flex items-center">
              
                  Germany
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div class="inline-flex items-center">
          
                  Italy
                </div>
              </button>
            </li>
            <li>
              <button
                type="button"
                class="inline-flex w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                <div class="inline-flex items-center">
                  
                  China
                </div>
              </button>
            </li>
          </ul>
        </div>
        <label for="states" class="sr-only">
        Surabaya, Indonesia
        </label>
        <select
          id="states"
          class=" text-gray-900 text-sm rounded-e-lg w-full border-0"
        >
          <option selected>Surabaya, Indonesia</option>
          <option value="CA">California</option>
          <option value="TX">Texas</option>
          <option value="WH">Washinghton</option>
          <option value="FL">Florida</option>
          <option value="VG">Virginia</option>
          <option value="GE">Georgia</option>
          <option value="MI">Michigan</option>
        </select>
      </div>
    </form>
  );
};

export default LocationFilter;
