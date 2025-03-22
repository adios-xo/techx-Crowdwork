import React from 'react'
import IssuesList from '../components/IssuesList'

const Home = () => {
    return (
        <>
            <div className='w-full flex flex-col items-center py-5'>
                <div className='text-4xl font-bold'>
                    Check out the issues!
                </div>
                <div className='text-gray-600'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos distinctio nihil animi enim voluptates eligendi itaque numquam omnis est amet!
                </div>
            </div>

            <div>
                <IssuesList />
            </div>
        </>
    )
}

export default Home