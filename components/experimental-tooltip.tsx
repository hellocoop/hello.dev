import React, { useState } from 'react'

interface ExperimentalTooltipProps {
    placement?: 'top' | 'bottom' | 'left' | 'right'
}

export const ExperimentalTooltip: React.FC<ExperimentalTooltipProps> = ({
    placement = 'top'
}) => {
    const [isVisible, setIsVisible] = useState(false)

    const getTooltipPosition = () => {
        switch (placement) {
            case 'bottom':
                return 'top-full left-1/2 transform -translate-x-1/2 mt-1'
            case 'left':
                return 'right-full top-1/2 transform -translate-y-1/2 mr-1'
            case 'right':
                return 'left-full top-1/2 transform -translate-y-1/2 ml-1'
            default: // top
                return 'bottom-full left-1/2 transform -translate-x-1/2 mb-1'
        }
    }

    const getArrowPosition = () => {
        switch (placement) {
            case 'bottom':
                return 'bottom-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-gray-800'
            case 'left':
                return 'left-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-gray-800'
            case 'right':
                return 'right-full top-1/2 transform -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-gray-800'
            default: // top
                return 'top-full left-1/2 transform -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-gray-800'
        }
    }

    return (
        <span
            className="relative inline-block"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
            aria-label="tooltip"
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="-mt-3 inline h-3 w-3"
            >
                <path
                    fillRule="evenodd"
                    d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
                    clipRule="evenodd"
                />
            </svg>

            {isVisible && (
                <div
                    className={`absolute z-50 px-2 py-1 text-xs text-white bg-gray-800 rounded shadow-lg whitespace-nowrap ${getTooltipPosition()}`}
                >
                    Experimental
                    <div
                        className={`absolute w-0 h-0 border-4 ${getArrowPosition()}`}
                    />
                </div>
            )}
        </span>
    )
}
