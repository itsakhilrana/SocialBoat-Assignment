import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { initValue, myVideos } from '../content/userData'
import * as Icon from 'react-bootstrap-icons'
import Yoga from '../assets/girlYoga.png'

const DragNdrop = () => {
  const [characters, updateCharacters] = useState(initValue)
  const [search, setsearch] = useState()

  function handleOnDragEnd(result) {
    if (!result.destination) return

    const items = Array.from(characters)
    const [reorderedItem] = items.splice(result.source.index, 1)
    items.splice(result.destination.index, 0, reorderedItem)

    updateCharacters(items)
  }

  const searchHandler = (search) => {
    var count = 0

    const v = myVideos.filter((video) => {
      const query = search

      const userName = video.name

      if (userName.includes(query) && count < 3) {
        count = count + 1
        return video
      }
    })

    updateCharacters(v)
  }
  return (
    <div>
      {/* dragNdrop*/}
      <div className="">
        <p className="text-3xl mb-5 font-bold md:text-2xl font-semibold md:mt-10 lg:mt-0 md:mb-2 text-gray-50">
          Drag & Drop your video easily!
        </p>
        <div className="customGlassStyle">
          <section className="px-4 sm:px-6 lg:px-4 xl:px-6 pt-4 pb-4 sm:pb-6 lg:pb-4 xl:pb-6 space-y-4">
            <form className="relative">
              <svg
                width="20"
                height="20"
                fill="currentColor"
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                />
              </svg>
              <input
                className="customSearch  focus:border-light-blue-500 focus:ring-1 focus:ring-light-blue-500 focus:outline-none w-full text-sm text-black placeholder-gray-500 border border-gray-200 rounded-md py-2 pl-10"
                type="text"
                aria-label="Filter projects"
                placeholder="Search more videos"
                value={search}
                onChange={(e) => {
                  setsearch(e.target.value)
                  searchHandler(e.target.value)
                }}
              />
            </form>
            <DragDropContext onDragEnd={handleOnDragEnd}>
              <Droppable droppableId="list">
                {(provided) => (
                  <ul
                    className="list"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {characters.length !== 0 ? (
                      characters.map((video, index) => {
                        return (
                          <Draggable
                            key={video.id}
                            draggableId={video.id}
                            index={index}
                          >
                            {(provided) => (
                              <li
                                ref={provided.innerRef}
                                {...provided.draggableProps}
                                {...provided.dragHandleProps}
                                className="customGlassAbout lg:w-auto mt-3 p-2 xs:flex  xs:space-x-5"
                              >
                                <video
                                  className="rounded-md mb-4 xs:mb-0 h-36 w-full lg:h-24 xs:h-28 xs:w-36 object-cover object-center"
                                  muted
                                  controls
                                  loop
                                >
                                  <source src={video.video} type="video/mp4" />
                                </video>
                                <div className="w-auto xs:w-52 ">
                                  <div className="flex mb-3 xs:mb-0 items-center space-x-2 xs:space-x-2">
                                    <img
                                      className="rounded-sm h-6 w-6 xs:h-3 xs:w-3"
                                      src={Yoga}
                                    ></img>
                                    <p className="text-1xl font-semibold">
                                      {video.name}
                                    </p>
                                  </div>
                                  <p className="text-xs font-semibold">
                                    {video.about}
                                  </p>
                                  <p className="text-xs font-light">
                                    {video.tags}
                                  </p>
                                  <div className=" flex w-full mt-3 xs:mt-1">
                                    <ul className="flex w-full justify-between">
                                      <li className=" flex text-red-500">
                                        <Icon.HeartFill />
                                        <span className="text-sm ml-1 font-semibold">
                                          {video.like}
                                        </span>
                                      </li>
                                      <li className=" flex text-gray-500">
                                        <Icon.EyeFill />
                                        <span className="text-sm ml-1 font-semibold">
                                          {video.views}
                                        </span>
                                      </li>
                                      <li className=" flex text-blue-500">
                                        <Icon.ShareFill />
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </li>
                            )}
                          </Draggable>
                        )
                      })
                    ) : (
                      <p>No Results found</p>
                    )}
                    {provided.placeholder}
                  </ul>
                )}
              </Droppable>
            </DragDropContext>
          </section>
        </div>
      </div>
    </div>
  )
}

export default DragNdrop
