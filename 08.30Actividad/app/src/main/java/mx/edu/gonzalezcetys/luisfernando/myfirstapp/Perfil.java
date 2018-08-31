package mx.edu.gonzalezcetys.luisfernando.myfirstapp;

import com.google.gson.annotations.SerializedName;

public class Perfil {
    private String id;
    @SerializedName("id")
    private String username;
    @SerializedName("Username")
    private String password;
    @SerializedName("Password")
    private String nombre;
    @SerializedName("Nombre")
    private String apellido;
    @SerializedName("Apellido")
    private String carrera;
    @SerializedName("Carrera")
    private String semestre;
    @SerializedName("Semestre")
    private String aprobadas;
    @SerializedName("Aprobadas")

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getApellido() {
        return apellido;
    }

    public void setApellido(String apellido) {
        this.apellido = apellido;
    }

    public String getCarrera() {
        return carrera;
    }

    public void setCarrera(String carrera) {
        this.carrera = carrera;
    }

    public String getSemestre() {
        return semestre;
    }

    public void setSemestre(String semestre) {
        this.semestre = semestre;
    }

    public String getAprobadas() {
        return aprobadas;
    }

    public void setAprobadas(String aprobadas) {
        this.aprobadas = aprobadas;
    }

    @Override
    public String toString() {
        final StringBuilder sb = new StringBuilder("Perfil{");
        sb.append("id='").append(id).append('\'');
        sb.append(", username='").append(username).append('\'');
        sb.append(", password='").append(password).append('\'');
        sb.append(", nombre='").append(nombre).append('\'');
        sb.append(", apellido='").append(apellido).append('\'');
        sb.append(", carrera='").append(carrera).append('\'');
        sb.append(", semestre='").append(semestre).append('\'');
        sb.append(", aprobadas='").append(aprobadas).append('\'');
        sb.append('}');
        return sb.toString();
    }
}


