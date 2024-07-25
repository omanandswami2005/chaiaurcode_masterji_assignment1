import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import OTPForm from './components/OTPForm';
import CourseList from './components/CourseList';
import DataTable from './components/DataTable';
const batchesData = [
  {
    id: '1',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/f803/c8c6/8d86c2eefb20bac95adf3b296cdabeb0?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pPGtF1Pff-45MQOmDuF2vSWD2dwD9d5PqM1cwz58wop8w1e1WspZIDKPipJSOnpXHY347SXU5bDYdsB2-rXJhaS8NE3L2v92EdF5vjGPFhxZXVzsGU1ms2sbVpofnWbJiMN8M53ByglvODsD6GnLh-f91him0kuzjtbD5IGcSgJJjJVBQ1~PlASI-XeF6Yn5V0Bb9o3U7Nwl3yEDtv1CpoBH4Ica3u25SJF7tzQPj1PM03zl1eTctMID2B-988IxmMkiue1kv8eQHwj8sLgFZJS33EjJK8GGFdpqYk533ysFyTjf6e92VONXTXU1sX50YuUVF7bZVvXQ6n94f0m0zQ__',
    title: 'SQL Basics To Advanced Mastery Course',
    price: 0,
    status: 'published',
    startDate: '20 Jul 2024',
    endDate: '20 Oct 2024',
    validity: 120
  },
  {
    id: '2',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/2fbf/c2aa/e560bb0c62c76bff4cad0e33b7241324?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Dx-NZV0FzjspDPo4luE95g3Ghk7b-nElqUluYOf5E~5EAapAGpZN7dWXqWrD13PypHA2V7zI09lcJ1cLy5XyWd4tbcqP8anQc9Z3l-oTWmlbaP3UwGbK2cCy-sXjzhnO3koE87UW-vbjZmjLe93CWgDCectsTszcbIgD58rTdlLZwdJ3Kclx2NCoP6Sh6o7ReoN3QArhmhxj-kIMHVLsDK47GgI-jlq3dRPVG7x9cz1EE2Q0Eevo4ShvcDe0iBfyuSSEoQeQPUfKpTmFEs06D3f58rmoo1qnIURU3O1F4kw5B5ieXPvvOINwT~gmCGlpzGdae5Auh~JsYXTlxUHKrA__',
    title: '30 Days Of Javascript Challenge',
    price: 0,
    status: 'unpublished',
    startDate: '13 Jul 2024',
    endDate: '12 Aug 2024',
    validity: 33
  },
  {
    id: '3',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/c7bd/c76b/a7aa105651adf84679c3df26d603e3f7?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m9VUtydTVO2Rx5j43goTevZkB7JZSsTy1-gykdiOfK0eKtkXKMwTN52ZEHVVdxxtML3gwgsEUheUyB3oagUXD-pAWY-szKOSZYgSiy1J9k5kAqBlNRSy0~S3OJHbyhg4m4b2WSf4R-SaejrwfZvMaixQ7-n3KHWSaihtRbq1IbeP4L0oNvRTdNHGvKGbVkqDGuh0dZac1M9Ry21iOJ~DUJFgSInFDUTkkZ2Xe8jZ52xbT4ahquzssckB5hUNR2snHPAbOCjwunLzQq1uhCXXhmKiIkszOezDNVNFIbatuvYMzMW005vcT7rORXvoetUN7jqpjY0qJUan0w6NQyN2Pw__',
    title: 'Advanced React & Redux',
    price: 1500,
    status: 'published',
    startDate: '01 Aug 2024',
    endDate: '31 Dec 2024',
    validity: 153
  },
  {
    id: '4',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/5d19/2b2a/7f9fb31b0a2a5e328b35f4c73db16e34?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=QPqF1K3clXZb3JKVFbvdzvT2L6mrzIH7mnQunugSeE-7sLb9FVggsdIJm9VqHZwzokP-dzWUVnOHpJ5fs2mWrFuA9HPLie-O09CSNz-bz5L1bsYtEP58LWeGgAT3BmXbWALyxw1PONX0K4CWu5OLphGrEKJghbVEmz45H-iDNrEvGhvl4Uq-VGv7u-VBh3vT8ZFD0C8KlFEgSgfRsEP8xEwx8-Nizf4Z5mZshBPp5K8jD4jzzgih1myHbMvh2Vkj8Fz19UghjU9~MWdLZt43npJ2R38oOEvrc62vAgCOzPBn2NiWsZh8Y1u~geNy8SiKqrYyJREX9R7m99Y2G1Z7Tg__',
    title: 'Python for Data Science',
    price: 2000,
    status: 'published',
    startDate: '15 Aug 2024',
    endDate: '15 Nov 2024',
    validity: 90
  },
  {
    id: '5',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/e5d1/5d3a/72c938c6b1c7b3d8b1c2e93c0c8f83f3?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=K6FmI8g32jsE5R8deWxU0l3bGmZRsAV~sTnVHUx5nMzidHzov8bHkEDo0R~Pv5bDGURmGLde8V~kTxWy3anD1RXEEEsJULH~pX7XGafTBOJH5BtwZcz2rRoxsmG2cZc2x5Q2dXKqBby9tGHd2le43QljC1opLDmGSqRj4qj~Huq6F6Y3gHtkIBG1Duq5Y4PMtUbRCg5~z4JjPOrZXA~KLi-3tE8WJdghLzYJQjtWWEfddcP2xXW10hMogA0doK74fbpL3cH3jTLW74S~Y06N3QGuFfpbBdKnXHQ4dQ72eU6sKoATkdfP6xJv91C~ct9tI1Odt8lEjlv1l6jBQA__',
    title: 'Machine Learning Crash Course',
    price: 2500,
    status: 'published',
    startDate: '01 Sep 2024',
    endDate: '01 Dec 2024',
    validity: 92
  },
  {
    id: '6',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/8f2d/2a4a/4f9e353a1c7a8f8a1e5d28d8c7f9d13e?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fFd0CZvIXK5zDoU1HslBbT1aFjjyT5ygRucG8uMFLFbGhNbc2PIVVAbB~fdDKpqMk2N3O6Gi5BYD3YkqG6mr3S0GV43GKNVuzFfNJ7N3B5Lf0gyWbltNEJ8dVGYgXcVdwMVoN26xDE7cUN7uFbk4jHEwGmcA3hL8F8pDyNGjms~DdB7ABNljAGeP9~5dRhB8JbzW7Q3mVFPuWv51DTgAdCH6x5pFi-5Tf4XLQoyf-HP46DfjH0RP1RsOnAw2F5vJ7Q5TXD8cFm0IMc0yUkIM~gPL8kDzECnMbSwjSRy3hpD9mtN8C0X9pFMV1rdHcW09TPsbKxGVXAsGH1aLwFGO2w__',
    title: 'Deep Learning with TensorFlow',
    price: 3000,
    status: 'unpublished',
    startDate: '10 Sep 2024',
    endDate: '10 Jan 2025',
    validity: 123
  },
  {
    id: '7',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/7b1d/3a2a/6f8e5b3a2b7c8f7b1e8d3e8c7d5e7b3a?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m0eQTY4PxyLfKqZGhWV2VdN9HzR3lK5NV0cUgM6xKbGVz1TIdTcZ6JjJWyOzJgAHz3X5DnbmV2TwhWLRTwl3xH8Hh3aI8LvNcKwFZrb9GeZh8kA5QrOpFfWUgSjmDN4b4U6jJfUGozWrzLXZdy4kRUlUE3fiGHu5Aq3lhfV6VJKD4aYxDhzQpOQG2X4ptvFExVD3wJdo4tPY0APmExOcdIT7I4d6RAyMAHcIoZd4bCh1f7y~FAT6Fm3UgD2lYjzqQnYFrCfqskPzYaZl3B1bmlLqu5pmIVvj4RQj7ugK6Kw1IEBHTjTrR03nFZzNNY5FfqWwUhd7MNghOMeHRBF4VQ__',
    title: 'Kubernetes for Developers',
    price: 1800,
    status: 'published',
    startDate: '05 Oct 2024',
    endDate: '05 Jan 2025',
    validity: 93
  },
  {
    id: '8',
    thumbnail: 'https://s3-alpha-sig.figma.com/img/1d3a/4a3a/5f8d3e8b2b7c8d8b2e8e3c7d5e8b2b7c?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j1d4Ty3eZ8KfK1gPqVh7VdN9HzB3lK6P09dUgP7xR7WGVd5XIdGcZ6LxWxOzFgBHz3F5DbmnX2VwhTLRTwl3yH8Q3xH9aI8LvNcwQkZrc9FeZk8nA6QrOpFfWUtSjmDN4k4U6iJcQUGoz3rzLXQdy3QRLfUE2fiGHu5Wq4jhlFVJKD7QyPzxAqOQG2W4ptdZJExVD6wJio4tBY0APmFyOcdWT7I4d6RAyMAHcIzZd4bCh1e7y~QFT7Fx2UgC2lYzqQnYGmCgqskPzYaMl3H1c2mlLqU5pnIVdj4FQj8ugK6Kw1IEBHTjPrR07mFZzINN6FgFwUdd7MNghPMR4BF4V__',
    title: 'Full-Stack Development Bootcamp',
    price: 5000,
    status: 'published',
    startDate: '01 Nov 2024',
    endDate: '01 Apr 2025',
    validity: 152
  }
];


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/otp-form" />} />
        <Route path="/otp-form" element={<OTPForm />} />
        <Route path="course-list" element={<CourseList />} />
        <Route path="batches" element={<DataTable data={batchesData} />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
