

  package com.ENotes.ENotes.Repo;
  
  import org.springframework.data.jpa.repository.JpaRepository;
  
  import com.ENotes.ENotes.entity.AddNotes;
  
  public interface AddNoteRepository extends JpaRepository<AddNotes, Integer>{
  
  }
 