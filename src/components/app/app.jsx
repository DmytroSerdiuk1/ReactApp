import React, {Component} from 'react';

import AppHeader from '../app-header';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import "./app.css";

class App extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [
                {
                    text: "asddasd",
                    important: false,
                    like: false,
                    id: 1
                },
                {
                    text: "asdasd",
                    important: false,
                    like: false,
                    id: 2
                },
                {
                    text: "asdasd",
                    important: true,
                    like: true,
                    id: 3
                }
            ],
            term: '',
            filter: 'all'
        };

        this.maxId = 4
        this.onDeleted = this.onDeleted.bind(this);
        this.onPost = this.onPost.bind(this);
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
        this.searchItem = this.searchItem.bind(this);
        this.onSearch = this.onSearch.bind(this);
        this.filterPost = this.filterPost.bind(this);
        this.onFilter = this.onFilter.bind(this);
    }

    onDeleted(id){
        this.setState(({data})=>{
            const key = data.findIndex((el)=> el.id === id);

            const newArr = [...data.slice(0, key), ...data.slice(key + 1)]
            return {
                data: newArr
            }
        })
    }

    onPost(text){
        const newItem = {
            text: text,
            important: false,
            like: false,
            id: this.maxId++
        }
        this.setState(({data})=>{
            const newData = [...data, newItem];
            return {
                data: newData
            }
        })
    }

    onLike(id){
        this.setState(({data})=>{
            const key = data.findIndex((el)=> el.id === id);
            const old = data[key];
            const newItem = {...old, like: !old.like} 
            
            const newArr = [...data.slice(0, key), newItem, ...data.slice(key + 1)]

            return {
                data: newArr
            }
        })
    }

    onImportant(id){
        this.setState(({data})=>{
            const key = data.findIndex((el)=> el.id === id);
            const old = data[key];
            const newItem = {...old, important: !old.important} 
            
            const newArr = [...data.slice(0, key), newItem, ...data.slice(key + 1)]

            return {
                data: newArr
            }
        })
    }

    searchItem(items, term){
        if(term.length === 0){
            return items
        }

        return items.filter((item)=>{
            return item.text.indexOf(term) > -1
        })
    }

    filterPost(data, filterTag){
        if(filterTag === 'like'){
            return data.filter(item => item.like)
        } else {
            return data
        }
    }

    onSearch(term){
        this.setState({term})
    }

    onFilter(filter){
        this.setState({filter})
    }

    render(){
        const {data, term, filter}= this.state;
        const liked = data.filter(item => item.like).length;
        const allItem = data.length;

        const visiblePost = this.filterPost(this.searchItem(data, term), filter);
        return (
            <div className="app">
                <AppHeader liked={liked} allItem={allItem}/>
                <div className="search-panel d-flex">
                    <SearchPanel onSearch={this.onSearch}/>
                    <PostStatusFilter filter={filter} onFilterSelect={this.onFilter}/>
                </div>
                <PostList data={visiblePost} onDeleted={this.onDeleted} onImportant={this.onImportant} onLike={this.onLike}/>
                <PostAddForm onPost={this.onPost}/> 
            </div>
        );
    }
    
}

export default App;
