import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { TransitionGroup } from 'react-transition-group';

class Week10_1 extends Component {
    constructor(){
        super();
        this.state = { todos : [] }
    }

    addTodo = (e) => {
        e.preventDefault();
        let jam = this.refs.jam.value;
        let tanggal = this.refs.tanggal.value;
        let mk = this.refs.mk.value;
        let dosen = this.refs.dosen.value;
        let tugas = this.refs.tugas.value;
        this.state.todos.push({jam, tanggal, mk, dosen, tugas});
        this.setState({ todos: this.state.todos});
        this.refs.formulir.reset();
        this.refs.jam.focus();
    }

    removeTodo = (i) => {
        this.state.todos.splice(i,1);
        this.setState({ todos: this.state.todos });
        this.refs.formulir.reset();
        this.refs.jam.focus();
    }

    render() {
        return(
            <div>
                <h3>Pencatatan Tugas Kuliah</h3>
                <form ref="formulir" className="form-inline">
                     <label></label>
                         <select name="mk" className="form-control" ref="mk">
                             <option>Mata Kuliah</option>
                             <option value="Ebisnis">Ebisnis</option>
                             <option value="Interoperabilitas">Interoperabilitas</option>
                             <option value="Prak Web 3">Prak Web 3</option>
                             <option value="Prak SAIT">Prak SAIT</option>
                             <option value="Prak Aplikasi Bergerak 2">Prak Aplikasi Bergerak 2</option>
                             <option value="Proyek Aplikasi Dasar 2">Proyek Aplikasi Dasar 2</option>
                             <option value="SAIT">SAIT</option>
                             <option value="Kewarganegaraan">Kewarganegaraan</option>
                             <option value="Pancasila">Pancasila</option>
                             <option value="Arsitektur Perangkat Lunak">Arsitektur Perangkat Lunak</option>
                             <option value="Tata Kelola IT">Tata Kelola IT</option>
                         </select>
                         &emsp;
                          <label></label>
                         <select name="dosen" className="form-control" ref="dosen" >
                             <option>Dosen</option>
                             <option value="Pak Sigit">Pak Sigit</option>
                             <option value="Pak Pitri">Pak Pitri</option>
                             <option value="Pak Dinar">Pak Dinar</option>
                             <option value="Bu Anni">Bu Anni</option>
                             <option value="Pak Irkham">Pak Irkham</option>
                             <option value="Pak Edi">Pak Edi</option>
                             <option value="Bu Rona">Bu Rona</option>
                             <option value="Pak Farid">Pak Farid</option>
                             <option value="Pak Rosyid">Pak Rosyid</option>
                         </select>
                         &emsp;
                    <input type="text" className="form-control" size="17" ref="tugas" placeholder="tugas" /> &emsp;     
                    <label></label>
                        <input type="date" className="form-control"  ref="tanggal" />
                        &emsp;
                    <input type="text" className="form-control" size="17" ref="jam" placeholder="Waktu Pengumpulan" /> &emsp;
                    <button onClick={this.addTodo} className="btn btn-info">simpan</button>
                </form>
                <hr/>
                <div>
                     <ul>
                     {this.state.todos.map((data, i) =>
                     <TransitionGroup
                            transitionName="animasi"
                            transitionEnter={true}
                            transitionEnterTimeout={500}
                            transitionLeave={true}
                            transitionLeaveTimeout={500}>
                                 <li key={i}>
                                      <div className="todo-wrapper">
                                        <button onClick={()=>this.removeTodo(i)} className="btn btn-outline-danger">hapus</button>
                                        Tugas {data.mk}  ({data.dosen}) : {data.tugas} <br/>
                                        &emsp; &emsp; &emsp; &nbsp; Deadline {data.tanggal}  Jam {data.jam}
                                </div>
                             </li>
                             </TransitionGroup>
                            )}
                    </ul>
                </div>
            </div>
        );
    }
}
export default Week10_1;

